# FAngular Directive



## 디렉티브(directive)란?

디렉티브(Directive **지시자**)는 "**DOM의 모든 것(모양이나 동작 등)을 관리하기 위한 지시(명령)**"이다. **HTML 요소 또는 어트리뷰트의 형태**로 사용하여 **디렉티브가 사용된 요소에게 무언가를 하라는 지시**(directive)를 전달한다.

디렉티브는 **애플리케이션 전역**에서 사용할 수 있는 **공통 관심사**를 **컴포넌트에서 분리하여 구현한 것**으로 컴포넌트의 복잡도를 낮추고 가독성을 향상시킨다. 컴포넌트도 뷰를 생성하고 이벤트를 처리하는 등 DOM을 관리하기 때문에 큰 의미에서 디렉티브로 볼 수 있다.

 **컴포넌트**는 **뷰 단위**의 관심사를 가지고 있다면 **디렉티브**는 **DOM 요소**의 공통 기능에 관심을 갖는다. 



### 큰 의미에서 디렉티브인 컴포넌트 VS 디렉티브

**큰 의미에서 디렉티브인 컴포넌트**는 **뷰**를 가지며 **다른 컴포넌트를 자식으로 가질 수 있다.** 하지만 **디렉티브는 뷰를 가지고 있지 않기 때문에 자식을 가질 수 없다.** 다시 말해 컴포넌트는 자식 컴포넌트, 디렉티브, 파이프, 서비스 등을 조합하여 뷰를 만들지만, **디렉티브는 부모가 될 수 없고 컴포넌트에 의해 사용될 뿐이다.**



## 디렉티브의 종류

Angular는 **3가지** 유형의 디렉티브를 제공한다.

> **컴포넌트 디렉티브(Component Directives)**
>
> 컴포넌트의 **템플릿을 표시**하기 위한 디렉티브이다.
>
> **어트리뷰트 디렉티브(Attribute Directives)**
>
> 어트리뷰트 디렉티브는 DOM요소의 어트리뷰트로 사용하여 **해당 요소의 모양이나 동작을 제어**한다. ngClass, ngStyle와 같은 빌트인 디렉티브가 있다.
>
> **구조 디렉티브(Structural Directives)**
>
> 구조 디렉티브는 DOM 요소를 반복 생성(ngFor) , 조건에 의한 추가 또는 제거(ngIf, ngSwitch)를 통해 **DOM 레이아웃(layout)을 변경**한다.



## 사용자 정의 어트리뷰트 디렉티브

```typescript
// text-blue.directive.ts
import { Directive, ElementRef } from '@angular/core';

// ① 디렉티브의 식별자를 @Directive 메타데이터 객체의 selector 프로퍼티에 지정한다.
@Directive({
  selector: '[textBlue]'
  // selector: '.textBlue' 클래스가 선언된 요소에 디렉티브가 적용
})
export class TextBlueDirective {
  // ② 생성자 함수에 주입된 ElementRef는 컴포넌트의 호스트 요소를 반환한다.
  constructor(el: ElementRef) {
    // 호스트 요소의 컬러를 변경한다.
    el.nativeElement.style.color = 'blue';
  }
}
```

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // 디렉티브 selector 프로퍼티에 지정한 디렉티브의 식별자를 p요소에 어트리뷰트에 적용
  // 이때 textBlue 디렉티브가 선언된 p 요소는 어트리뷰트 호스트(attribute host) 요소가 된다.
  template: '<p textBlue>textBlue directive</p> 
    // <p class="textBlue">textBlue directive</p>'
})
export class AppComponent { }
```

**디렉티브**는 @Directive 데코레이터로 장식된 **순수한 자바스크립트 클래스**이다. 

selector 프로퍼티에는 **CSS의 셀렉터 문법과 동일하게 디렉티브가 적용되는 조건을 설정**한다.

| selector 프로퍼티  | 설명                                                |
| ------------------ | --------------------------------------------------- |
| selector: '.foo'   | .foo 클래스가 선언된 요소에 디렉티브가 적용된다.    |
| selector: [foo]    | foo 어트리뷰트가 선언된 요소에 디렉티브가 적용된다. |
| selector: not(foo) | foo 요소가 아닌 모든 요소에 디렉티브가 적용된다.    |

생성자에 **ElementRef** 타입의 **인스턴스가 주입**(Dependency Inject, **의존성 주입**)되었다. ElementRef 클래스는 템플릿 내부의 DOM 요소를 감싼 **래퍼 객체**를 생성하며 네이티브 DOM 요소를 가리키는 **nativeElement 프로퍼티**를 소유한다



### ElementRef의 단점과 Renderer2 클래스

ElementRef를 사용하여 DOM에 직접 접근하는 경우, XSS 공격에 노출될 수 있는 단점이 있다. **Renderer2 클래스**는 DOM에 직접 접근하지 않으며 서버, 웹워커, 모바일과 같이 DOM 액서스 권한이 없는 환경에서도 네이티브 요소를 조작 가능하기 때문에 **권장되는 방법**이다.

**의존성 주입을 통해 Renderer2의 인스턴스를 주입**받고, Renderer2의 **setStyle 메소드를 사용**하여 호스트 요소의 스타일을 변경하도록 한다.

```typescript
// text-blue.directive.ts
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[textBlue]'
})
export class TextBlueDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    // el.nativeElement.style.color = 'blue';
    renderer.setStyle(el.nativeElement, 'color', 'blue');
  }
}
```



### 이벤트 처리

```typescript
// text-blue.directive.ts
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({ selector: '[textBlue]' })
export class TextBlueDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // 호스트 요소에서 발생한 mouseenter 이벤트의 핸들러를 정의
  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor('blue');
  }

  // 호스트 요소에서 발생한 mouseleave 이벤트의 핸들러를 정의
  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
```

먼저 주입받은 생성자 파라미터 el(ElementRef 클래스의 인스턴스)에 **접근 제한자 private를 추가하여 생성자 내부에서만 유효**하던 ElementRef 클래스의 인스턴스 el을 **클래스 내부에서 참조 가능한 클래스 프로퍼티로 변경한다.**



### @Input 데이터 바인딩

 요소의 어트리뷰트는 정적 값을 갖는다. 그에 비해 프로퍼티 바인딩은 동적인 값을 바인딩 받는다. 





## 사용자 정의 구조 디렉티브

### ng-template 디렉티브

ngIf, ngFor, ngSwitch와 같은 빌트인 구조 디렉티브는 디렉티브 이름 앞에 붙은 *(asterisk)에 의해 ng-template으로 변환된다.

```typescript
<element *ngIf="expression">...</element>

// 위 코드는 아래의 코드로 변환된다.
<ng-template [ngIf]="expression">
  <element>...</element>
</ng-template>
```

Angular는 *ngIf를 만나면 **호스트 요소를 ng-template 디렉티브로 래핑**하고 **ngIf를 프로퍼티 바인딩으로 변환**한다**.ng-template 디렉티브는** 컴포넌트 템플릿의 일부로서 정의되지만 단순히 정의된 상태에서는 **주석 처리되어 뷰에 렌더링되지 않고 있다가 ngIf에 바인딩된 값이 참으로 평가되면 비로소 뷰에 렌더링된다.** 이때 ngIf 디렉티브는 의존성 주입을 통해 주입받은 **TemplateRef**와 **ViewContainerRef**의 **인스턴스를 사용하여 ng-template 디렉티브로 래핑된 요소를 렌더링하거나 DOM에서 제거한다.**

### TemplateRef와 ViewContainerRef

**TemplateRef**는 ng-template 디렉티브로 래핑된 **요소를 가리키는 객체를 생성**한다. 즉, 호스트 요소의 ng-template 디렉티브의 참조를 갖는 객체이다.

**ViewContainerRef**는 하나 이상의 뷰를 포함시킬 수 있는 컨테이너이다. 다시 말해 ViewContainerRef는 새로운 요소(컴포넌트나 ng-template 디렉티브로 래핑된 요소)를 **DOM에 삽입하기 위해 필요한 컨테이너(DOM 요소)로써** createComponent, createEmbeddedView 메소드를 통해 **새로운 요소를 DOM에 삽입한다.**

*ngIf에 상태 값이 `false`이면 ViewContainerRef의 clear 메소드를 호출하여 ng-template 디렉티브로 래핑된 요소를 호스트 뷰에서 제거한다. 제거된 ng-template 디렉티브는 `display: none`으로 감추어진 것이 아니라 **주석 처리되어 DOM에 남아있지 않고 완전히 제거되기 때문에 불필요한 자원의 낭비를 방지한다.**



### ng-container 디렉티브

ng-container 디렉티브도 ng-template와 마찬가지로 **템플릿화된 뷰 스니펫을 호스트 뷰에 추가해야 할 경우 사용**한다.

#### ng-container 디렉티브와 ng-template의 차이점

```typescript
<p>
  안녕하세요!
  <ng-container *ngIf="user">
    {{ user.name }} 님
  </ng-container>
  방갑습니다.
</p>
```

위 코드와 같이 **단순히 디렉티브를 선언하기 위한 태그가 필요할 때**가 있다. 이런 경우 단순히 디렉티브를 선언하기 위해 span이나 div를 사용할 필요가 없이 ng-container를 사용한다. **ng-container와 ng-template의 차이는 ng-container는 \* 문법을 사용할 수 있고 ng-template는 \* 문법을 사용할 수 없다는 것이다.**

Angular는 같은 요소에 하나 이상의 구조 디렉티브 사용을 금지한다. **일반적으로 ng-container는 동일한 요소에 하나 이상의 \*ngIf 또는 \*ngFor와 같은 구조 디렉티브를 사용하기 위한 헬퍼 요소로서 사용한다.**

```typescript
@Component({
  selector: 'app-root',
  template: `
    <ng-container *ngIf="isShow">
      <ng-container *ngFor="let item of items">
        <span>{{ item }}</span>
      </ng-container>
    </ng-container>
    <button (click)="isShow=!isShow">
      {{ isShow ? 'hide' : 'show' }}
    </button>
  `
})
export class AppComponent {
  isShow = true;
  items = [1, 2, 3];
}
```

