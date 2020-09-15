'use strict'

/**
 * Binary search assumes that the list of elements you are looking through is ordered
 * @param {*} list an ordered array of elements
 * @param {*} element an element we are looking for in the ordered array passed in
 */

const binarySearch = (list, element) => {

//1 we split the array in half andd looked at the middle
// element then we compared our needle to this middle element,
// depending if the needle was greater or less thn the middle element,
// we discarded the half that did not include the element

    let min = 0;
    let max = list.length - 1;
    let mid;

    while(max >= min){
        mid = (min + max)/2;
        mid = Math.floor(mid)

        let middleElement = list[mid]

        if(middleElement == element){
            return mid;
        }else if (element > middleElement){
            min = mid + 1;
        }else if (element < middleElement){
            max = mid - 1;
        }
    }

    //if we get to this point, that means we split the halves as far as we can go, and still did not find the element
    return -1;

}

let foundAt = binarySearch(
    ["apple", "banana", "carrot", "eggs", "grapes", "jalepenos", "kiwi", "radishes", "squash", "watermelon", "zuchini"],
    "zuchini"
    )

console.log(foundAt)