// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라.------------------------------------

const x = 15;

if (x > 10 && x < 20) {
  console.log(x);
}


// 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.---------------------------------

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// 2-1. 암묵적 타입 변환 응용

// for (let i = 0; i < 10; i++) {
//   if (!(i % 2)) {
//     console.log(i);
//   }
// }


// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.-------------------------

let evenNum = '';
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    // const strEven = i.toString();
    const strEven = `${i}`;
    evenNum += strEven;
  }
}
console.log(typeof evenNum);
console.log(evenNum);


// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.------------------------------------

for (let i = 9; i > 0; i--) {
  if (i % 2 === 1) {
    console.log(i);
  }
}


// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.-----------------------------

let even = 0;

while (even < 10) {
  if (even % 2 === 0) { console.log(even); }
  even += 1;
}

// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.--------------------------------

let oddNum = 9;

while (oddNum > 0) {
  if (oddNum % 2 === 1) { console.log(oddNum); }
  oddNum -= 1;
}


// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.----------------------------------------------------
let sumToNine = 0;

for (let i = 0; i < 10; i++) {
  sumToNine += i;
}

console.log(sumToNine);

// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.-------------------------------------

let notMultiple = 0;

for (let i = 1; i < 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    notMultiple += i;
  }
}

console.log(notMultiple);


// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.------------------------------------------

let multiple = 0;

for (let i = 1; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    multiple += i;
  }
}

console.log(multiple);


// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.----------------------------------

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j === 6) {
      console.log(i, j);
    }
  }
}


// 11.삼각형 출력하기 - pattern 1 ------------------------------------------------------------------------------

// 한 줄씩 따로 별 찍기
for (let i = 0; i < 5; i++) {
  let stars = '';
  for (let j = 0; j < i + 1; j++) {
    stars += '*';
  }
  console.log(stars);
}

// 한번에 모아서 삼각형 만들기
// let stars = '';
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < i + 1; j++) {
//     stars += '*';
//   }
//   stars += '\n';
// }
// console.log(stars);


// 12.삼각형 출력하기 - pattern 2 ----------------------------------------------------------------------------------

// 한 줄씩 따로 별 찍기
for (let i = 0; i < 5; i++) {
  let stars = '';
  for (let j = 5; j > 0; j--) {
    if (i + j > 5) { stars += ' '; } else stars += '*';
  }
  console.log(stars);
}

// 한번에 모아서 삼각형 만들기
// let stars = '';
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < i; j++) {
//     stars += ' ';
//     // hexadecimal escape  \x20
//     // unicode literal     \u00A0info
//   }

//   for (let k = 5; k > i; k--) {
//     stars += '*';
//   }
//   stars += '\n';
// }
// console.log(stars);


// 13.삼각형 출력하기 - pattern 3 -------------------------------------------------------------------------------

// 한 줄씩 따로 별 찍기
for (let i = 0; i < 5; i++) {
  let stars = '';
  for (let j = 5; j > i; j--) {
    stars += '*';
  }
  console.log(stars);
}

// 한번에 모아서 삼각형 만들기
// let stars = '';
// for (let i = 0; i < 5; i++) {
//   for (let j = 5; j > i; j--) {
//     stars += '*';
//   }
//   stars += '\n';
// }
// console.log(stars);


// 14.삼각형 출력하기 - pattern 4 ----------------------------------------------------------------------------------

// 한 줄씩 따로 별 찍기
for (let i = 0; i < 5; i++) {
  let stars = '';
  for (let j = 5; j > 0; j--) {
    if (j - i > 1) { stars += ' '; } else stars += '*';
  }
  console.log(stars);
}

// 한번에 모아서 삼각형 만들기
// let stars = '';
// for (let i = 0; i < 5; i++) {
//   for (let j = 4; j > i; j--) {
//     stars += ' ';
//   }

//   for (let k = 0; k < i + 1; k++) {
//     stars += '*';
//   }
//   stars += '\n';
// }
// console.log(stars);


// 15. 정삼각형 출력하기 -------------------------------------------------------------------------------------------

let equalTriangle = '';
for (let i = 0; i < 10; i += 2) {
  for (let j = 8; j > i; j -= 2) {
    equalTriangle += ' ';
  }

  for (let k = 0; k < i + 1; k++) {
    equalTriangle += '*';
  }
  equalTriangle += '\n';
}


console.log(equalTriangle);


// 16. 역정삼각형 출력하기 -------------------------------------------------------------------------------------------

let invertedTriangle = '';
for (let i = 10; i > 0; i -= 2) {
  for (let j = 10; j > i; j -= 2) {
    invertedTriangle += ' ';
  }

  for (let k = 1; k < i; k++) {
    invertedTriangle += '*';
  }
  invertedTriangle += '\n';
}

console.log(invertedTriangle);
