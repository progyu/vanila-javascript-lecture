# 7. 제어문

- 제어문(Control flow statement)은 주어진 조건에 따라 코드 블록을 실행(조건문)하거나 반복 실행(반복문)할 때 사용한다.
- 일반적으로 코드는 위에서 아래 방향으로 순차적으로 실행된다. **제어문은 코드의 실행 순서를 인위적으로 제어**할 수 있다.



## 1. 블록문

블록문(Block statement/Compound statement)는 **0개 이상**의 문을 중괄호롤 묶은 것으로 코드 블록 또는 블록이라고 부르기도 한다. 자바스크립트는 **블록문을 하나의 실행 단위로 취급한다.** 



## 2. 조건문

조건문(conditional statement)은 주어진 **조건식(conditional expression)의 평가 결과**에 따라 코드 블럭(블록문)의 실행을 결정한다. 



조건식은 불리언 값으로 평가될 수 있는 표현식이다.



자바스크립트는 2가지의 조건문 if…else 문과 switch 문을 제공한다.



### 2.1. if...else 문

만약 조건식의 평가 결과가 불리언 값이 아니면 **불리언 값으로 강제 변환**되어 논리적 참, 거짓을 구별한다.



대부분의 if...else 문은 삼항 조건 연산자로 바꿔 쓸 수 있다.

```javascript
var num = 2;

// 0은 false로 취급된다.

var kind = num ? (num > 0 ? '양수' : '음수'): '영';

console.log(kind);
```

`num > 0 ? '양수' : '음수'`는 표현식이므로 다른 표현식의 일부가 될 수 있다.

삼항 조건 연산자 표현식은 값처럼 사용할 수 있으나 if...else 문은 값처럼 사용할 수 없다는 차이가 있다.





### 2.2. switch 문

switch문은 주어진 **표현식을 평가**하여 그 값과 **일치하는 표현식을 갖는 case문으로 실행 순서를 이동시킨다.**

**switch 문의 표현식은 불리언 값보다는 문자열, 숫자 값인 경우가 많다.**

 switch 문은 논리적 참, 거짓보다는 **다양한 상황(case)**에 따라 실행할 코드 블록을 결정할 때 사용한다.

 break 문을 사용하지 않아 switch 문을 탈출하지 않고 연이어 case문과 default문을 실행하는 것을 폴스루(fall through)라 한다.

break 키워드로 구성된 break 문은 코드 블록에서 탈출하는 역할을 한다. 

break 문을 생략한 폴스루(fall through)가 유용한 경우도 있다.

- 윤년인 판별해서 2월의 일수를 계산하는 예제





## 3. 반복문

반복문(Loop statement)은 주어진 조건식의 평가 결과가 참인 경우 코드 블럭을 실행한다. 그 후 **조건식을 다시 검사**하여 여전히 참인 경우 코드 블록을 다시 실행한다. 이는 **조건식이 거짓일 때까지 반복**된다.



### 3.1. for문

for문은 조건식이 **거짓으로 판별될 때까지** 코드 블록을 반복 실행한다. 

```javascript
for(변수 선언문 또는 할당문; 조건식; 증감식) {
  조건식이 참인 경우 반복 실행될 문;
}
```



for문의 실행

- 변수 선언문은 단, 한번만 실행된다.
- 조건식의 평가 결과가 true이면 코드 블록을 실행하고, false이면 for문의 실행이 종료된다.





### 3.2. while문

while 문은 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행한다. **조건문의 평가 결과가 거짓이 되면 실행을 종료**한다. 만약 조건식의 평가 결과가 **불리언 값이 아니면 불리언 값으로 강제 변환**되어 논리적 참, 거짓을 구별한다

조건식의 평가 결과가 **언제나 참이면 무한루프**가 된다.





## 3.3. do...while문

do…while 문은 **코드 블록을 먼저 실행하고 조건식을 평가**한다. 따라서 코드 블록은 **무조건 한번 이상 실행**된다.





## 4. break문

레이블 문, 반복문(for, for…in, for…of, while, do…while) 또는 switch 문의 코드 블록을 탈출한다

중첩된 for문의 내부 for문에서 break 문을 실행하면 내부 for문을 탈출하여 외부 for문으로 진입한다. 내부 for문이 아닌 외부 for문을 탈출하려면 레이블문을 사용한다.



※ 레이블 문

- 반복문에 레이블을 붙이고, break나 continue 구문을 사용해 반복문의 어느 위치에서 작업을 멈추고 어느 위치에서 다시 수행할지를 알려줄 수 있다.
- 레이블문은 프로그램의 **실행 순서를 제어**하기 위해 사용한다. 
- **switch문의 case문과 default 문도 레이블 문이다.**
-  break는 모든 레이블 구문에서 사용될 수 있으며, continue는 반복 레이블 구문에서만 사용할 수 있다.
- 중첩된 for문을 외부로 탈출할 때 유용하지만 그 외의 경우 레이블 문은 일반적으로 권장하지 않는다.(가독성이 나빠지고 오류 발생 가능성이 높아진다.)

```javascript
var i, j;

loop1:
for (i = 0; i < 3; i++) {      //첫번째 for문은 "loop1" 레이블
   loop2:
   for (j = 0; j < 3; j++) {   //두번째 for문은 "loop2" 레이블
      if (i === 1 && j === 1) {
         continue loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}
```



## 5. contionue문

continue 문은 반복문의 코드 블록 실행을 현 지점에서 중단하고 **반복문의 증감식으로 이동**한다.

```javascript
// continue 문을 사용하면 if 문 밖에 코드를 작성할 수 있다.
for (var i= 0; i < string.length; i++) {
    
    if (string[i] !== search) continue;
    
    count++;
}
```





# 8. 타입 변환과 단축 평가



## 1. 타입 변환이란?

자바스크립트의 모든 값은 타입이 있다. 개발자가 의도적으로 값의 타입을 변환하는 것을 **명시적 타입 변환(Explicit coercion)** 또는 **타입 캐스팅(Type casting)**이라 한다.

동적 타입 언어인 자바스크립트는 개발자의 의도와는 상관없이 자바 스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 한다. 이를 **암묵적 타입 변환(Implicit coercion)** 또는 **타입 강제 변환(Type coercion)**이라고 한다.



**암묵적 타입 변환**은 변수의 값을 재할당해서 변경하는 것이 아니라 자바스크립트 엔진이 표현식을 에러없이 평가하기 위해 피수산자의 값을 바탕으로 새로운 타입의 값을 만들어 **단 한번 사용하고 버린다.**



## 2. 암묵적 타입 변환

자바스크립트는 가급적 에러를 발생시키지 않도록 암묵적 타입 변환을 통해 표현식을 평가한다.



### 2.1. 문자열 타입으로 변환

```javascript
1 + '2' // "12"
```

위 예제의 + 연산자는 피연산자 중 하나 이상이 문자열이므로 **문자열 연결 연산자**로 동작한다. 

```javascript
// 숫자 타입
0 + ''              // "0"
-0 + ''             // "0"
1 + ''              // "1"
-1 + ''             // "-1"

// 불리언 타입
true + ''           // "true"
false + ''          // "false"

// null 타입
null + ''           // "null"

// undefined 타입
undefined + ''      // "undefined"
```



### 2.2. 숫자 타입으로 변환

자바스크립트 엔진은 산술 연산자 표현식을 평가하기 위해 산술 연산자의 피연산자 중에서 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다. 

피연산자를 숫자 타입으로 변환해야 할 문맥은 산술 연산자 뿐만이 아니다. 

```javascript
'1' > 0   // true
```

자바스크립트 엔진은 비교 연산자 표현식을 평가하기 위해 비교 연산자의 피연산자 중에서 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.

```javascript
// 문자열 타입
+''             // 0
+'0'            // 0
+'1'            // 1
+'string'       // NaN

// 불리언 타입
+true           // 1
+false          // 0

// null 타입
+null           // 0

// undefined 타입
+undefined      // NaN
```

빈 문자열(‘’), 빈 배열([]), null, false는 0으로, true는 1로 변환된다. 객체와 빈 배열이 아닌 배열, undefined는 변환되지 않아 NaN이 된다는 것에 주의하자



### 2.3. 불리언 타입으로 변환

자바스크립트 엔진은 조건식의 평가 결과를 불리언 타입으로 암묵적 타입 변환한다.

아래 값들은 제어문의 조건식과 같이 불리언 값으로 평가되어야 할 문맥에서 false로 평가되는 Falsy 값이다.

- false
- undefined
- null
- 0, -0
- NaN
- ’’ (빈문자열)



## 3. 명시적 타입 변환



#### 명시적 타입변환의 다양한 방법

1. 래퍼 객체 생성자 함수(String, Number, Boolean)를 new 연산자 없이 호출하는 방법

2. 자바스크립트에서 제공하는 빌트인 메소드를 사용하는 방법

3. 암묵적 타입 변환을 이용하는 방법

   

### 3.1. 문자열 타입으로 변환

```javascript
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
console.log(String(1));        // "1"

// 불리언 타입 => 문자열 타입
console.log(String(true));     // "true"
console.log(String(false));    // "false"


// 2. Object.prototype.toString 메소드를 사용하는 방법
// 숫자 타입 => 문자열 타입
console.log((1).toString());        // "1"

// 불리언 타입 => 문자열 타입
console.log((true).toString());     // "true"
console.log((false).toString());    // "false"


// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
console.log(1 + '');        // "1"

// 불리언 타입 => 문자열 타입
console.log(true + '');     // "true"
console.log(false + '');    // "false"
```



### 3.2. 숫자 타입으로 변환

```javascript
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
console.log(Number('0'));     // 0
console.log(Number('-1'));    // -1
console.log(Number('10.53')); // 10.53
// 불리언 타입 => 숫자 타입
console.log(Number(true));    // 1
console.log(Number(false));   // 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 문자열 타입 => 숫자 타입
console.log(parseInt('0'));       // 0
console.log(parseInt('-1'));      // -1
console.log(parseFloat('10.53')); // 10.53

// 3. + 단항 연결 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log(+'0');     // 0
console.log(+'-1');    // -1
console.log(+'10.53'); // 10.53
// 불리언 타입 => 숫자 타입
console.log(+true);    // 1
console.log(+false);   // 0

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log('0' * 1);     // 0
console.log('-1' * 1);    // -1
console.log('10.53' * 1); // 10.53
// 불리언 타입 => 숫자 타입
console.log(true * 1);    // 1
console.log(false * 1);   // 0
```





### 3.3. 불리언 타입으로 변환

```javascript
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
console.log(Boolean('x'));       // true
console.log(Boolean(''));        // false
console.log(Boolean('false'));   // true
// 숫자 타입 => 불리언 타입
console.log(Boolean(0));         // false
console.log(Boolean(1));         // true
console.log(Boolean(NaN));       // false
console.log(Boolean(Infinity));  // true
// null 타입 => 불리언 타입
console.log(Boolean(null));      // false
// undefined 타입 => 불리언 타 입
console.log(Boolean(undefined)); // false
// 객체 타입 => 불리언 타입
console.log(Boolean({}));        // true
console.log(Boolean([]));        // true

// 2. ! 부정 논리 연산자를 두번 사용하는 방법
// 문자열 타입 => 불리언 타입
console.log(!!'x');       // true
console.log(!!'');        // false
console.log(!!'false');   // true
// 숫자 타입 => 불리언 타입
console.log(!!0);         // false
console.log(!!1);         // true
console.log(!!NaN);       // false
console.log(!!Infinity);  // true
// null 타입 => 불리언 타입
console.log(!!null);      // false
// undefined 타입 => 불리언 타입
console.log(!!undefined); // false
// 객체 타입 => 불리언 타입
console.log(!!{});        // true
console.log(!![]);        // true
```



## 4. 단축 평가



논리합(`||`) 연산자와 논리곱(`&&`) 연산자의 연산 결과는 불리언 값이 아닐 수도 있다. 이 두 연산자는 **논리 평가를 결정한 피연산자**를 그대로 반환한다. 이를 단축 평가(Short-Circuit evaluation)라 부른다. 단축 평가는 아래의 규칙을 따른다.

| 단축 평가 표현식    | 평가 결과 |
| ------------------- | --------- |
| true \|\| anything  | true      |
| false \|\| anything | anything  |
| true && anything    | anything  |
| false && anything   | false     |





질문

1. do...while 문이 유용하게 사용될 수 있는 경우가 있나요?

2. 프로그래밍 언어에서 형변환을 제공하는 이유가 프로그래밍의 편의성을 위해서 인가요?
3. 암묵적 타입 변환은 새로운 타입의 값을 만들어 단 한번 사용하고 버린다고 말씀 해주셨는데 정확히 어떤 의미인지 알고 싶습니다. 또 아래와 같이 명시적으로 타입 변환을 하여도 typeof 메서드로 변수 a의 타입을 알아보면  "number" 라고 나오는 이유가 궁금합니다.

```javascript
var a = 10;
console.log(a); 		// 10
String(a);     
console.log(a);			// "10"
console.log(typeof(a)); // "number"
```

