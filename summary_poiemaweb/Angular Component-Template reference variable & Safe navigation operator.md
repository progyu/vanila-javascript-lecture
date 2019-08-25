# Angular Component - **Template reference variable & Safe navigation operator**

## 1. 템플릿 참조 변수

**템플릿 참조 변수는 DOM 요소에 대한 참조를 담고 있는 변수이다.** 템플릿의 요소 내에서 해시 기호(#)를 변수명 앞에 추가하여 템플릿 참조 변수를 선언하면 템플릿 참조 변수에 **해당 요소에 대한 참조가 할당**되고 **템플릿 내의 자바스크립트 코드에서는 해시 기호 없이 참조한다.** 템플릿 참조 변수는 **템플릿 내에서만 유효**하며 컴포넌트 클래스에 어떠한 부수 효과(side effect)도 주지 않는다. 하지만 템플릿 참조 변수의 값을 **이벤트 바인딩을 통해 컴포넌트 클래스로 전달할 수는 있다.**



## 2. 세이프 내비게이션 연산자(Safe navigation operator)

**세이프 내비게이션 연산자** `?`는 **컴포넌트 클래스의 프로퍼티 값이 null 또는 undefined일 때 발생하는 에러를 회피하기 위해 사용한다**

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- obj가 null 또는 undefined일 때 아무것도 표시하지 않는다. -->
    {{ obj }}
    <!-- ERROR TypeError: Cannot read property 'id' of undefined -->
    {{ obj.id }}
    <!-- 세이프 내비게이션 연산자는 null 또는 undefined의 프로퍼티를 만나면 처리를 종료하고 에러를 발생시키지 않는다. -->
    {{ obj?.id }}
  `
})
export class AppComponent { }
```

