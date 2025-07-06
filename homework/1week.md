# 1. 변수, 상수 작성 과제

각 항목에 대해 변수나 상수를 선언하고, 알맞은 값을 할당하세요.


  1.1. 사용자 이름을 저장할 변수를 선언하고 "자신의 이름"을 할당하세요.

     let userName = "홍민영";


  1.2. "절대 영도(온도의 최저 한계)인 -273.15°C"를 담을 상수를 선언하세요.


      const ABSOLUTE_ZERO = -273.15;


  1.3. "로그인 여부"를 확인하는 불리언 타입 변수을 선언하고 적절한값을 할당하세요.

      let loggedIn = true;
      

  1.4. "사용자 나이" 변수를 선언하고 숫자 값을 할당하세요.

      let userAge = 20; 


  1.5. "상품 가격(예: 39,900원)"을 담는 변수를 작성하세요.

      let price = 39900;
    
  1.6. 웹 페이지의 "배경색"을 담는 상수를 작성하고 적절한 값을 할당하세요.

      const BACKGROUND_COLOR =' #ffffff';

  1.7. 사용자가 작성한 "댓글 수(예: 12)"를 담는 변수를 선언하고 값을 할당하세요.

      let replyCount = 15;

  1.8. "현재 페이지 번호(예: 3)"를 담는 변수를 작성하고 적절한 값을 할당하세요.

      let presentPage = 5;

  1.9. "회원 등급('VIP', '골드', '실버' 중 하나)"을 담는 변수를 작성해보세요.

       let membership = 'VIP'

  1.10. "버튼이 클릭되었는지 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.

      let buttonOn = false;

***
   
# 2. 함수 작성 과제

## 2.1. 인사말 메시지

사용자로부터 이름을 입력받아 인사말을 출력하는 함수를 작성합니다.

| 함수이름 | greetUser |
| --- | --- |
| 매개변수 | username |
| 기능 | 인사말 메시지 "안녕하세요! {이름}님. 좋은 하루되세요!"를 문자열로 반환 |
| 반환값 타입 | String |
| 비고 | 함수 선언으로 작성 |

    
```
  function greetUser(userName) {  
    return '"안녕하세요! ${userName}님.좋은 하루되세요!"'  
    }
```



## 2.2. 원가 계산

판매가를 입력 받아 원가를 계산하는 함수를 작성합니다.

> 판매가(세후 금액)에서 원가(세전 금액)를 계산하려면 판매가를 "100% + 세금 비율"로 나눠야 합니다.
해당 품목의 세금 비율은 3.3%입니다.
> 

| 함수이름 | calculateOriginalPrice |
| --- | --- |
| 매개변수 | priceWithTax |
| 기능 | 판매 가격에서 세금을 제외한 원가 반환 |
| 반환값 타입 | Number |
| 비고 | 함수 표현식으로 작성 |

```
  const TAX = 0.033;

  function calculateOriginalPrice(priceWithTax) {
    return priceWithTax / (1 + TAX)
  }

  console.log (calculateOriginalPrice (100))
```

## 2.3. 주류 판매 가능 여부

신분증의 나이를 확인해 주류 구매 가능 여부를 반환하는 함수를 작성합니다.

> 19세 이상 주류 구매가 가능합니다.
> 

| 함수이름 | canSellAlcohol |
| --- | --- |
| 매개변수 | registrationCard |
| 기능 | 신분증의 나이를 확인해 주류 판매 가능 여부를 불리언 타입으로 반환 |
| 반환값 타입 | Boolean |
| 비고 | 화살표 함수 표현식으로 작성 |

| 객체 이름 | registrationCard |
| --- | --- |
| 속성 | 이름(name) |
| 속성 | 나이(age) |
| 속성 | 성별(gender) |

```
  const canSellAlcohol = (registrationCard) => {
    return registrationCard.age >=19;
  }
```
## 2.4. 할인가 계산

판매가와 할인 비율(%)을 입력 받아, 할인가를 반환하는 함수를 작성합니다.

> [예] 판매가가 18,700원이고, 할인율이 20%인 경우
       계산된 할인가는 14,960원입니다.
> 

| 함수이름 | getDiscountedPrice |
| --- | --- |
| 매개변수 | originalPrice, discountPercent |
| 기능 | 판매가에서 할인율을 적용한 할인가를 반환 |
| 반환값 타입 | Number |

```
  function getDiscountedPrice(originalPrice,discountPercent) {
    return originalPrice * (1-discountPercent/100)
  }
```

## 2.5. 등급 판단

점수를 전달받아 점수, 등급과 설명을 포함한 객체를 반환하는 함수를 작성합니다.

| 점수 범위 | 등급 (Grade) | 설명 |
| --- | --- | --- |
| 90 ~ 100점 | A | 매우 우수 |
| 80 ~ 89점 | B | 우수 |
| 70 ~ 79점 | C | 보통 |
| 60 ~ 69점 | D | 미달, 통과 기준 근접 |
| 0 ~ 59점 | F | 낙제 |

함수가 반환해야 할 결과 값은 아래 포멧(format)입니다.

```jsx
{ score: 87, grade: 'B', description: '우수' }
```

```
  function gradeInfo(score) {
    let grade = '';
    let description = '';

    if (score>=90) {
      grade ='A';
      description ='매우 우수';
    }
    else if (score>=80) {
      grade ='B';
      description ='우수';
    }
    else if (score>=70) {햣 
      grade ='C';
      description ='보통';
    }
    else if (score>=60) {
      grade ='D';
      description ='미달, 통과 기준 근접';
    }
    else {
      grade ='F';
      description ='낙제';
    }

    return {
      score: score,
      grade: grade,
      description: description
    };

  }
```
