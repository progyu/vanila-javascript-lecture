# Morning rubber-duck(processing)

### 동기식 처리와 비동기식 처리

- 동기식 처리 모델(Synchronous processing model) === blocking processing  model
  - 직렬적으로 태스크(task)를 수행
  - 순차적으로 실행되며 어떤 작업이 수행 중이면 다음 작업은 대기(순서가 보장된다)

- 비동기식 처리 모델(Asynchronous processing model) === Non-Blocking processing model
  - 병렬적으로 태스크를 수행
  - 서버에 데이터를 요청한 이후 서버로부터 데이터가 응답될 때까지 대기하지 않고(Non-Blocking) 즉시 다음 태스크를 수행한다.
  - 순차적으로 실행되지 않으며 따라서 순서가 보장되지 않는다.

## Event Driven Single Thread

- 브라우저는 단일 [쓰레드](https://ko.wikipedia.org/wiki/%EC%8A%A4%EB%A0%88%EB%93%9C)(single-thread)에서 이벤트 드리븐(event-driven) 방식으로 동작
- 자바스크립트의 동시성(Concurrency)을 지원하는 것이 바로 **이벤트 루프(Event Loop)**
- 이벤트(사건) + driven(어떤 일정한 방향으로 이끌어 가는)

- Call Stack
  - 함수가 호출되면 요청된 작업은 순차적으로 Call Stack에 쌓이게 되고 순차적으로 실행된다.(LIFO)  자바스크립트는 단 하나의 Call Stack을 사용하기 때문에 해당 task가 종료하기 전까지는 다른 어떤 task도 수행될 수 없다.
- Event Queue**(Task Queue)**
  - 비동기 처리 함수의 콜백 함수, 비동기식 이벤트 핸들러, Timer 함수(setTimeout(), setInterval())의 콜백 함수가 보관되는 영역으로 **이벤트 루프(Event Loop)에 의해 특정 시점(Call Stack이 비어졌을 때)에 순차적으로 Call Stack으로 이동되어 실행**된다.
- Event Loop
  - Call Stack 내에서 현재 실행중인 task가 있는지 그리고 Event Queue에 task가 있는지 반복하여 확인한다. 만약 Call Stack이 비어있다면 Event Queue 내의 task가 Call Stack으로 이동하고 실행된다.



### Event Propagation이벤트 전파(흐름)

- 어떤 요소에 이벤트가 발생했을 때, 이벤트는 상위 요소에서 시작하여 이벤트 발생 요소까지 전파되었다가 다시 상위 요소로 연쇄적으로 올라간다. 이벤트 전파 방향에 따라서 캡처링(Capturing)과 버블링(Bubbling)으로 구분한다.

#### Capturing

자식 요소에서 발생한 이벤트가 부모 요소부터 시작하여 이벤트를 발생시킨 자식 요소까지 도달하는 것

#### Bubbling

자식 요소에서 발생한 이벤트가 부모 요소로 전파되는 것

- 이벤트 흐름(event flow) 상에서 어느 단계(event phase)에 있는지를 반환한다.
  - 0 : 이벤트 없음
  - 1 : 캡처링 단계
  - 2 : 타깃
  - 3 : 버블링 단계

​                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

### Event Delegation 이벤트 위임

다수의 자식 요소에 각각 이벤트 핸들러를 바인딩하는 대신 하나의 부모 요소에 이벤트 핸들러를 바인딩하는 방법

이벤트가 [이벤트 흐름](https://poiemaweb.com/js-event#7-event-flow-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EC%9D%98-%ED%9D%90%EB%A6%84)에 의해 이벤트를 발생시킨 요소의 부모 요소에도 영향**(버블링)**을 미치기 때문에 가능한 것



### Ajax 동작 원리 / JSON이란 무엇인가?

#### Ajax (Asynchronous JavaScript and XML)

- **사용자에 의한 요청 이벤트**가 발생하면 이벤트 핸들러에 의해 자바스크립트가 호출되고 자바스크립트는 **XMLHttpRequest 객체**를 사용하여 서버로 **필요한 데이터**만 **Ajax 요청**(비동기식)을 보낸다. 서버는 처리한 결과를 XML 또는 **JSON  형태의 데이터로 클라이언트에 전달**한다. 서버로부터 전달받은 데이터를 가지고 웹 페이지의 일부분만을 갱신하는 자바스크립트를 호출한다.



#### JSON (JavaScript Object Notation)

- 클라이언트와 서버 간 데이터 교환을 위한 규칙. 즉, 데이터 포맷
- **순수한 텍스트**로 구성된 규칙이 있는 데이터 구조
- XML 포맷보다 가볍고 사용하기 간편하며 가독성도 좋다
- 자바스크립트의 객체 리터럴과 매우 흡사
- 키는 반드시 큰 따옴표로 둘러싸야 한다.



### HTTP Method 5가지 설명하기

- GET
  - 모든 / 특정 리소스를 조회
  - payload가 필요 없다.
- POST
  - 리소스를 생성
  - payload가 필요하다.
- PUT
  - 리소스의 전체를 갱신
  - payload가 필요하다.
- PATCH
  - 리소스의 일부를 갱신
  - payload가 필요하다.
- DELETE
  - 리소스를 삭제
  - payload가 필요 없다.

