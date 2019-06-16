# Destructuring

디스트럭처링(Destructuring)은 구조화된 배열 또는 객체를 **Destructuring(비구조화, 파괴)**하여 **개별적인 변수에 할당**하는 것이다. **배열 또는 객체 리터럴에서 필요한 값만을 추출하여 변수에 할당하거나 반환할 때 유용**하다.



### 배열 디스트럭처링

```javascript
// ES5
var arr = [1,2,3];

var one = arr[0];
var two = arr[1];
var three = arr[2];

console.log(one, two, three); // 1 2 3 
```



```javascript
// ES6

const arr = [1,2,3];

// 배열의 인덱스를 기준으로 배열로부터 요소를 추출하여 변수에 할당
// 변수 one, two, three가 선언되고 arr(initializer(초기화자))가 Destructuring(비구조화, 파괴)되어 할당된다.

const [one, two, three] = arr;

console.log(one, two, three); // 1 2 3
```



배열 디스트럭처링을 위해서는 할당 연산자 왼쪽에 배열 형태의 **변수 리스트**가 필요하다.



왼쪽의 변수 리스트와 오른쪽의 배열은 배열의 인덱스를 기준으로 할당된다.

```javascript
[x,y] = [1];
console.log(x,y); // 1 undefined

[x,y] = [1,2,3];
console.log(x,y); // 1 2

[x, , z] = [1, 2, 3];
console.log(x, z); // 1 3

// 기본값
[x, y = 10, z = 3] = [1, 2];
console.log(x, y, z); // 1 2 3

// spread 연산자
[x, ...y] = [1, 2, 3];
console.log(x, y); // 1 [ 2, 3 ]
```



### 객체 디스트럭처링

```javascript
// ES5
var obj = { firstName: 'Ungmo', lastName: 'Lee'};

var firstName = obj.firstName;
var lastName = obj.lastName;

console.log(firstName, lastName); // Ungmo Lee
```

 

ES6의 객체 디스트럭처링은 객체의 각 **프로퍼티를 객체로부터 추출하여 변수 리스트에 할당**한다. 이 때 **할당 기준은 프로퍼티 이름(키)** 이다.



```javascript
// ES6 Destructuring
const obj = { firstName: 'Ungmo', lastName: 'Lee'};

// 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
// 변수 lastName, firstName가 선언되고 obj(initializer(초기화자))가 Destructuring(비구조화, 파괴)되어 할당된다.

// 변수명이자 객체의 프로퍼티 이름(키)
const { lastName, firstName } = obj;

console.log(firstName, lastName); // Ungmo Lee
```

 객체 디스트럭처링을 위해서는 **할당 연산자 왼쪽에 객체 형태의 변수 리스트**가 필요하다.

````javascript
// default value
const { prop1, prop2, prop3 = 'c' } = { prop1: 'a', prop2: 'b' };
console.log({ prop1, prop2, prop3 }); // { prop1: 'a', prop2: 'b', prop3: 'c' }
````



객체 디스트럭처링은 객체에서 프로퍼티 이름(키)으로 필요한 프로퍼티 값만을 추출할 수 있다.