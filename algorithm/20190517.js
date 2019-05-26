
// 4. 문자열 내 p와 y의 개수
// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 인수로 전달받는다. s에 존재하는 'p'의 개수와 'y'의 갯수를 비교해 같으면 true,
// 다르면 false를 리턴하도록 함수를 완성하라. 대소문자를 구별하지 않으며 'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴한다.

// 예를 들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다.


function numPY(s) {
  const str = s ? s.toUpperCase() : '';
  const arr = Array.from(str);
  const filterP = arr.filter(item => item === 'P');
  const filterY = arr.filter(item => item === 'Y');
  return filterP.length === filterY.length;
}

// function numPY(s) {
//   const str = s ? s.toUpperCase() : '';
//   let cntP = 0;
//   let cntY = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'P') cntP += 1;
//     if (str[i] === 'Y') cntY += 1;
//   }

//   return cntP === cntY;
// }

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
console.log(numPY('ab')); // true
console.log(numPY('')); // true
console.log(numPY()); // true


// 5. 이상한 문자만들기
// toWeirdCase함수는 문자열을 인수로 전달받는다. 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라.

// 예를 들어 s가 'hello world'라면 첫번째 단어는 'HeLlO', 두번째 단어는 'WoRlD'로 바꿔 'HeLlO WoRlD'를 리턴한다.

// 주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.
function toWeirdCase(s) {
  // 'hello world' => ['hello', 'world'];
  const wordArr = s.split(' ');

  function toUpperLower(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
      // 0 이면 짝수 , 아니면 홀수
      res += i % 2 ? str[i].toLowerCase() : str[i].toUpperCase();
    }
    return res;
  }
  // console.log(wordArr);
  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = toUpperLower(wordArr[i]);
    // console.log(toUpperLower(wordArr[i]));
  }
  // console.log(wordArr);
  return wordArr.join(' ');
}

console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'


// 6. 핸드폰번호 가리기
// 핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 *으로 바꿔야 한다.
// 전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라
// 예를들어 s가 ‘01033334444’면 *******4444를 리턴하고, ‘027778888’인 경우는 *****8888을 리턴한다.

function hideNumbers(str) {
  const cut = str.slice(-4);
  const star = '*'.repeat(str.length - 4);
  return star.concat(cut);
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888')); // *****8888


// 7. 문자열을 숫자로 바꾸기
// strToInt 메소드는 문자열을 인수로 전달받는다. 전달받은 문자열 인수를 숫자로 변환한 결과를 반환하도록 strToInt를 작성하라.

// 예를 들어 str이 ‘1234’이면 1234를 반환하고, ‘-1234’이면 -1234를 반환한다. str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없다.

function strToInt(str) {
  return +str;
  // return str * 1;
  // return Number(str);
  // return parseInt(str);
}

console.log(strToInt('1234')); // 1234
console.log(strToInt('-1234')); // -1234


// 8. 수박수박수박수박수박수 ?
// waterMelon 함수는 정수를 인수로 전달받는다.길이가 n이고, 수박수박수…와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라.

// 예를 들어 n이 4이면 ‘수박수박’을 리턴하고 3이라면 ‘수박수’를 리턴한다.

function waterMelon(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    if (i % 2) str += '박';
    else str += '수';
  }
  return str;
}

console.log(`n이 3인 경우: ${waterMelon(3)}`);
console.log(`n이 4인 경우: ${waterMelon(4)}`);


// 9. 정수제곱근 판별하기
// nextSqaure함수는 정수를 인수로 전달받는다. n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 ‘no’를 리턴하는 함수를 작성하라.

// 예를 들어 n이 121이라면 이는 정수 11의 제곱이므로 (11+1)의 제곱인 144를 리턴하고, 3이라면 ‘no’을 리턴한다.

function nextSqaure(n) {
  const squareRoot = Math.sqrt(n);
  return Number.isInteger(squareRoot) ? (squareRoot + 1) ** 2 : 'no';
}

console.log(nextSqaure()); // no
console.log(nextSqaure(0)); // 1
console.log(nextSqaure(1)); // 4
console.log(nextSqaure(2)); // no
console.log(nextSqaure(3)); // no
console.log(nextSqaure(121)); // 144
console.log(nextSqaure(165)); // no
console.log(nextSqaure(400)); // 441


// 10. 배열의 최대 / 최소값 구하기
// 배열의 요소 중 최대값 / 최소값을 반환하는 함수를 완성하라.

function getMaxValueFromArray(array) {
  // return Math.max.apply(null, array);
  return Math.max(...array); // ES6
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
  return Math.min.apply(null, array);
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5
