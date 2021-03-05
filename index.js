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

const boxes = [0, 1, 2, 3, 4, 5]

function logFirstTwiBoxes(boxes) {
    console.log(boxes[0]);
    console.log(boxes[1]);
}

logFirstTwiBoxes(boxes)