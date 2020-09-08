"use strict";

class bankAccount {
  accountNumber;
  owner;
  transactions;

  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }

  balance() {
    let currentBalance = 0;

    for (let index = 0; index < this.transactions.length; index++) {
      let currentTrans = this.transactions[index];
      currentBalance += currentTrans.amount;
    }

    return currentBalance;
  }

  deposit(amt) {
    //cannot depsoit a negative amount
    if (amt > 0) {
      let newTrans = new transaction(amt, "deposit");
      this.transactions.push(newTrans);
    }
  }

  charge(amt, payee) {
    //cannot charge any amount that would dip below zero
    if (this.balance() <                                amt) {
      return;
    }
    let charge = new transaction(-amt, payee);

    this.transactions.push(charge);
  }
}

class transaction {
  date;
  amount;
  payee;

  constructor(amount, payee) {
    //date should be set to the current date automatically
    this.date = new Date();
    this.amount = amount;
    this.payee = payee;
  }
}

let account1 = new bankAccount(1234, "jon jacobs");
account1.deposit(15);
account1.deposit(15);
account1.charge(5, "target");
account1.balance();
console.log("this is account1 balance: ", account1.balance());

console.log(account1);
