# Angular Component - Built-in directive



## 1. 빌트인 디렉티브(Built-in directive)란?

**디렉티브**(Directive / **지시자**)는 "**DOM의 모든 것(모양이나 동작 등)을 관리하기 위한 지시(명령)이다.**" HTML 요소 또는 어트리뷰트의 형태로 사용하여 디렉티브가 사용된 요소에게 무언가를 하라는 지시(directive)를 전달한다.

디렉티브는 애플리케이션 전역에서 사용할 수 있는 **공통 관심사**를 **컴포넌트에서 분리하여 구현한 것**으로 컴포넌트의 복잡도를 낮추고 가독성을 향상시킨다. 컴포넌트도 뷰를 생성하고 이벤트를 처리하는 등 DOM을 관리하기 때문에 큰 의미에서 디렉티브로 볼 수 있다.

**3가지 유형의 Angular 디렉티브**

>**컴포넌트 디렉티브(Component Directives)**
>
>컴포넌트의 템플릿을 표시하기 위한 디렉티브이다. @Component 데코레이터의 메타데이터 객체의 selector 프로퍼티에 임의의 디렉티브의 이름을 정의한다.
>
>**어트리뷰트 디렉티브(Attribute Directives)**
>
>어트리뷰트 디렉티브는 HTML 요소의 어트리뷰트와 같이 사용하여 호스트 요소의 모양이나 동작을 제어한다. ngClass, ngStyle와 같은 빌트인 어트리뷰트 디렉티브가 있다.
>
>**구조 디렉티브(Structural Directives)**
>
>구조 디렉티브는 DOM 요소를 반복 생성(ngFor), 조건에 의한 추가 또는 제거(ngIf, ngSwitch)를 통해 DOM 레이아웃(layout)을 변경한다. 



## 2. 빌트인 어트리뷰트 디렉티브(Built-in attribute directive)

### 1. ngClass

**여러 개의 CSS 클래스를 추가 또는 제거한다.** 한 개의 클래스를 추가 또는 제거할 때는 클래스 바인딩을 사용하는 것이 좋다.

```typescript
<element [ngClass]="문자열 | 배열 | 객체>...</element>
```

ngClass 디렉티브는 바인딩된 **문자열이나 배열 또는 객체**를 HTML 요소의 class 어트리뷰트에 반영한다. 

#### **ngClass 디렉티브에 바인딩 할 수 있는 3가지 값**

- CSS 클래스 이름이 공백 문자로 구분된 **문자열**

```typescript
<div [ngClass]="'text-bold color-blue'">...</div>
```

- CSS 클래스 이름의 요소로 구성된 **배열**

```typescript
<div [ngClass]="['text-bold', 'color-blue']"...</div>
```

- CSS 클래스 이름을 프로퍼티 이름으로, **boolean** 타입을 프로퍼티 값으로 갖는 객체

  프로퍼티 값이 **true**인 프로퍼티 만이 **class 어트리뷰트에 반영된다.**

```typescript
<div [ngClass]="{ 'text-bold': true, 'color-blue': false }">...</div>
```

class 어트리뷰트에 의해 이미 클래스가 지정되어 있을 때 ngClass 디렉티브는 class 어트리뷰트를 **병합(merge)**하여 새로운 HTML class 어트리뷰트를 작성한다. **클래스 바인딩**([class])의 경우, 기존의 class 어트리뷰트를 삭제하고 바인딩된 클래스의 리스트를 기준으로 새로운 class 어트리뷰트를 작성하는 것과 **다르게 동작한다.**



### 2. ngStyle

**여러 개의 인라인 스타일을 추가 또는 제거한다.** 한 개의 인라인 스타일을 추가 또는 제거할 때는 스타일 바인딩을 사용하는 것이 좋다.

```typescript
<element [ngStyle]="객체">...</element>
```

**ngStyle 디렉티브는 바인딩된 객체를 HTML 요소의 style 어트리뷰트에 반영한다.**

```typescript
<div [ngStyle]="{ color: 'red', 'width.px': 100}"</div>
```



## 3. 빌트인 구조 디렉티브(Built-in structual directive)

빌트인 구조 디렉티는 DOM요소를 **반복 생성(ngFor)**, **조건에 의한 추가 또는 제거를 수행(ngIf**, ngSwitch)을 통해 **뷰의 구조를 변경**한다.

하나의 호스트 요소(디렉티브가 선언된 요소)에는 하나의 구조 디렉티브만을 사용할 수 있다.

### 1. ngIf

ngIf 디렉티브는 우변 표현식의 연산 결과가 **참이면 호스트 요소를 DOM에 추가**하고 **거짓이면 호스트 요소를 DOM에서 제거**한다. **우변의 표현식은 반드시 true 또는 false로 평가될 수 있어야 한다.**

```typescript
<element *ngIf="expression">...</element>
```

>ng-template 디렉티브는 컴포넌트 템플릿의 일부로서 정의되지만 **단순히 정의된 상태에서는 주석 처리되어 뷰에 렌더링되지 않고 있다가 ngIf에 바인딩된 값이 참으로 평가되면 비로소 뷰에 렌더링 된다.** 일반적으로 ng-template 디렉티브는 템플릿화된 뷰 스니펫을 호스트 뷰에 추가해야 할 경우 사용한다. 

```type
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- ngIf에 의한 show/hide -->
    <p *ngIf="isShow">Lorem ipsum dolor sit amet</p>

    <!-- 스타일 바인딩에 의한 show/hide -->
    <p [style.display]="isShow ? 'block' : 'none'">Lorem ipsum dolor sit amet</p>

    <button (click)="isShow=!isShow">{{ isShow ? 'Hide' : 'Show' }}</button>
  `,
  styles: [`
    p { background-color: #CDDC39; }
  `]
})
export class AppComponent {
  isShow = true;
}
```

ngIf 디렉티브를 사용하지 않고 스타일 바인딩 또는 클래스 바인딩을 사용하여 요소의 표시/비표시를 구현할 수도 있다. 하지만 **스타일 바인딩 또는 클래스 바인딩에 의해 비표시된 요소는 브라우저에 렌더링되지 않지만 DOM에 남아있다.** **ngIf 디렉티브에 의해 제거된  요소는 DOM에 남아있지 않고 완전히 제거되어 불필요한 자원의 낭비를 방지**한다.



### 2. ngFor

ngFor 디렉티브는 컴포넌트 클래스의 컬렉션(**배열과 같은 이터러블 객체**)를 반복하여 **호스트 요소(ngFor 디렉티브가 선언된 요소) 및 하위 요소를 DOM에 추가한다.** 

```typescript
<element *ngFor="let item of items; let i=index; let odd=odd; trackBy: trackById ">...</element>
```

item(템플릿 입력 변수, template input variable)은 호스트 요소 및 하위 요소에만 유효한 **로컬 변수**이다.

인덱스를 취득할 필요가 있는 경우, **인덱스를 의미하는 템플릿 입력 변수 index를 사용**하여 변수에 인덱스를 할당받을 수 있다. index 이외에도 first, last, even, odd와 같은 템플릿 입력 변수가 제공된다.

**ngFor 디렉티브는 컬렉션 데이터(users 배열)가 변경되면 컬렉션과 연결된 모든 DOM 요소를 제거하고 다시 생성한다.** 이는 컬렉션의 변경 사항을 추적(tracking)할 수 없기 때문이다. 따라서 크기가 매우 큰 컬렉션을 다루는 경우, 퍼포먼스상의 문제를 발생시킬 수 있다. **ngFor 디렉티브는 퍼포먼스를 향상시키기 위한 기능으로 `trackBy`를 제공한다.**

일반적인 경우 ngFor는 충분히 빠르기 때문에 trackBy에 의한 퍼포먼스 최적화는 기본적으로 필요하지 않다. trackBy는 퍼포먼스에 문제가 있는 경우에만 사용한다.