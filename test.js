// function loopyLighthouse(range, multiples, words) {
//   for (let i = range[0]; i <= range[1]; i++) {
//     if (i % multiples[0] === 0 && i % multiples[1] === 0) {
//       console.log(`${words[0] + words[1]}`);
//     }
//     if (i % multiples[0] === 0) {
//       console.log(`${words[0]}`);
//     }
//     if (i % multiples[1] === 0) {
//       console.log(`${words[1]}`);
//     } else {
//       console.log(`${i}`);
//     }
//   }
//   return;
// }

// function loopyLighthouse(range, multiples, words) {
//   for (var i = range[0]; i < range[1] + 1; i++) {
//     if (i % multiples[0] === 0 && i % multiples[1] === 0) {
//       console.log(words[0] + words[1]);
//     } else if (i % multiples[0] === 0) {
//       console.log(words[0]);
//     } else if (i % multiples[1] === 0) {
//       console.log(words[1]);
//     } else {
//       console.log(i);
//     }
//   }
// }

// console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));

function calculateRectangleArea(length, width) {
  let areaR = length * width;
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    return areaR;
  }
}
function calculateTriangleArea(base, height) {
  let areaT = (base * height) / 2;
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    return areaT;
  }
}
function calculateCirleArea(radius) {
  let areaC = Math.PI * radius * radius;
  if (areaC < 0 || radius < 0) {
    return undefined;
  } else {
    return areaC;
  }
}

console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCirleArea(10)); // should print 314.159…
console.log(calculateCirleArea(3.5)); // should print 38.484…
console.log(calculateCirleArea(-1)); // should print undefined
