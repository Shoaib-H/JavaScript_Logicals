// Calculate the Sum of Array Elements
let numbers = [1, 5, 7, 9, 8, 5, 2, 4, 6, 2]
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = numbers[i] + sum
}
console.log(sum);



// Find the Largest Element in an Array
let num = [1, 5, 3, 2, 5, 4, 6, 8, 9, 5, 7, 4, 14]
let max = 0;
for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
        max = num[i];
    }
}
console.log(max);



// Reverse an Array
let revnum = [5, 8, 6, 7, 9, 4, 2, 5, 8, 9]
for (let i = revnum.length - 1; i >= 0; i--) {
    console.log(revnum[i])
}



// Remove Duplicate Elements from an Array
let dupnum = [5, 6, 8, 2, 5, 2, 4, 7, 8]
let result = [];
for (let i = 0; i < dupnum.length; i++) {
    let duplicate = false;

    for (let j = 0; j < result.length; j++) {
        if (dupnum[i] == result[j]) {
            duplicate = true;
            break;
        }
    }
    if (!duplicate) {
        result[result.length] = dupnum[i]
    }
}
console.log(result)



// Check if All Elements in an Array are Even
let evennum = [2, 5, 8, 9, 6, 4, 5, 7, 8, 9, 3, 2]

for (let i = 0; i < evennum.length; i++) {
    if (evennum[i] % 2 == 0)
        console.log(evennum[i])
}



// Filter Out Odd Numbers from an Array
let oddnum = [2, 5, 8, 9, 6, 4, 5, 7, 8, 9, 3, 2]

for (let i = 0; i < oddnum.length; i++) {
    if (oddnum[i] % 2 != 0)
        console.log(oddnum[i])
}



// Sort an Array in Ascending Order
let sortnum = [2, 5, 8, 9, 6, 4, 5, 7, 8, 9, 3, 2]

let temp = 0;

for (let i = 0; i < sortnum.length; i++) {
    for (let j = 0; j < sortnum.length; j++) {
        if (sortnum[j] < sortnum[i]) {
            temp = sortnum[i]
            sortnum[i] = sortnum[j]
            sortnum[j] = temp
        }
    }
}
for (let i = 0; i < sortnum.length; i++) {
    console.log(sortnum[i])
}



// Find the Index of a Specific Element
let indexnum = [2, 5, 8, 9, 6, 4, 7, 8, 9, 3, 2]
let element = 5;
let index = -1;

for (let i = 0; i < indexnum.length; i++) {
    if (indexnum[i] == element) {
        {
            index = i;
        }
    }
}
console.log(index)



// Count Occurrences of an Element in an Array

let occnum = [2, 5, 8, 9, 6, 4, 7, 8, 9, 3, 2]
let target = 3;
let count = 0;

for (let i = 0; i < occnum.length; i++) {
    if (occnum[i] == target) {
        count++;
    }
}
console.log(count)


// Merge Two Arrays Without Duplicates
let arr1 = [5, 6, 9, 8, 5, 2, 6, 4, 7]
let arr2 = [7, 5, 6, 4, 5, 7, 4, 2, 5]
let result1 = []
for (let i = 0; i < arr1.length; i++) {
    result1[result1.length] = arr1[i]
}
for (let i = 0; i < arr2.length; i++) {
    let duplicate1 = false;

    for (let j = 0; j < result1.length; j++) {
        if (arr2[i] === result1[j]) {
            duplicate1 = true;
            break;
        }
    }


    if (!duplicate1) {
        result1[result1.length] = arr2[i];
    }
}

console.log(result1)



// Check if an Array is Empty
let emptyarr = []
let empty = true;

for (let i = 0; i < emptyarr.length; i++) {
    let empty = flase
}

if (empty) {
    console.log("Array is Empty")
}
else {
    console.log("Array is not Empty")
}

