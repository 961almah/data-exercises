// const nemo = ['nemo'];

// const everyone = ['dory', 'bruce', 'marlin', `nemo`, `gill`, `bloat`, `nigel`, `squirt`, `darla`, `hank`]

// const large = new Array(10000).fill(`nemo`)

// function findNemo(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 'nemo') {
//             console.log('found nemo');
//         }
//     }
// }

// findNemo(large); // O(n) --> linear Time

// ============================================== //

// const boxes = [0, 1, 2, 3, 4, 5]

// function logFirstTwiBoxes(boxes) {
//     console.log(boxes[0]); // O(1)
//     console.log(boxes[1]); // O(1)
// }

// logFirstTwiBoxes(boxes) // O(2) 

// constant time 

// ============================================== //

// What is the Big O of the below function? (Hint, you may want to go line by line)

// function funChallenge(input) {
//     let a = 10; //O(1)
//     a = 50 + 3; // O(1)

//     for (let i = 0; i < input.length; i++) { // O(n)/O(input)
//         anotherFunction(); // O(n)
//         let stranger = true; // O(n)
//         a++; // O(n)
//     }

//     return a; // O(1)
// }

// //3 + 4n

// // BIG O(3 + 4n);

// // BIG O(n)


// funChallenge();

// ============================================== //

// // What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//     let a = 5; // O(1)
//     let b = 10; // O(1)
//     let c = 50; // O(1)
//     for (let i = 0; i < input; i++) {
//         let x = i + 1; // O(n)
//         let y = i + 2; // O(n)
//         let z = i + 3; // O(n)

//     }
//     for (let j = 0; j < input; j++) {
//         let p = j * 2; // O(n)
//         let q = j * 2; // O(n)
//     }
//     let whoAmI = "I don't know"; // O(1)
// }

// // BIG O(4 + 5n)

// // BIG O(n)

// ============================================== //

// function printFirstItemThenFirstHalfThenSayHi100Times {
//     console.log(items[0]);

//     let middleIndex = Math.floor(items.length / 2)
//     let index = 0;

//     while (index < middleIndex) {
//         console.log(items[index]);
//         index++;
//     }

//     for (var i = 0; i < 100; i++) {
//         console.log(`hi`);
//     }
// }

// // O( 1 + n/2 + 100), 
// // O(n/2 + 101), # doesn't matter, becomes
// // O(n/2 + 1), worst case scenario, 1 doesn't matter
// // O(n)

// ============================================== //

// function compressBoxesTwice(boxes) {
//     boxes.forEach(function (boxes) {
//         console.log(boxes);
//     })

//     boxes.forEach(function (boxes) {
//         console.log(boxes);
//     })
// }

// // O(a+b)