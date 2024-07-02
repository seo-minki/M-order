# M-ORDER

## 주문부터 결제까지 💵

- 상품을 담고 테스트 결제까지 연동한 개인 프로젝트입니다.
- Next.js + Typescript 를 이용한 첫 프로젝트 입니다. 부족한 내용은 공부하여 리팩토링 예정입니다.
- 결제는 toss-payment 테스트 결제를 연동하였습니다.
- 간단한 api를 설계를 통한 데이터를 응답 받아 상품 목록을 노출 시키고 있습니다.
- 장바구니에 담은 상품, 수량은 Recoil을 이용하여 전역으로 상태를 관리하고 있습니다.

## 개발기간 :technologist:

- 2024-04 ~ 2024-07

## 기술 스택 :hammer_and_pick:

- language: Typescript
- framework: Next.js(v14)
- 상태관리: Recoil
- css: tailwind CSS, css
- animation: framer-emotion
- node ver: 20.12.1

## 프로젝트 구조 :card_index_dividers:

```
📦src
┣ 📂app
┃ ┣ 📂(routes)
┃ ┃ ┣ 📂cart
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┣ 📂menu
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┗ 📂order
┃ ┃ ┃ ┣ 📂fail
┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┃ ┗ 📂success
┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┣ 📂api
┃ ┃ ┗ 📂menu
┃ ┃ ┃ ┣ 📜dummy.json
┃ ┃ ┃ ┗ 📜route.ts
┃ ┣ 📜RecoilContext.tsx
┃ ┣ 📜layout.tsx
┃ ┗ 📜page.tsx
┣ 📂components
┃ ┣ 📂cart
┃ ┃ ┗ 📜OrderList.tsx
┃ ┣ 📂menu
┃ ┃ ┣ 📜CategoryNavigation.tsx
┃ ┃ ┣ 📜Product.tsx
┃ ┃ ┗ 📜ProductList.tsx
┃ ┣ 📂payment
┃ ┃ ┗ 📜PaymentWidget.tsx
┃ ┣ 📂product
┃ ┃ ┗ 📜ProductDetail.tsx
┃ ┣ 📜ButtonComponent.tsx
┃ ┣ 📜Header.tsx
┃ ┗ 📜LottieAnimation.tsx
┣ 📂hooks
┃ ┗ 📜paymentRequest.ts
┣ 📂store
┃ ┗ 📜orderListAtom.ts
┣ 📂styles
┃ ┣ 📜animation.css
┃ ┗ 📜globals.css
┣ 📂types
┃ ┗ 📜menu.ts
┗ 📂utils
┃ ┣ 📜animation.ts
┃ ┣ 📜api.ts
┃ ┣ 📜helper.ts
┃ ┗ 📜router.ts
```
