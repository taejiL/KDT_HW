// 상품 데이터
const data = [
    { name: '아메리카노', price: 4000 },
    { name: '떡볶이', price: 3500 },
    { name: '과자', price: 3000 },
    { name: '볼펜', price: 2500 },
    { name: '초콜렛', price: 2000 },
    { name: '컵라면', price: 1600 },
    { name: '노트', price: 1500 },
    { name: '탄산수', price: 1200 },
    { name: '아이스크림', price: 1000 },
    { name: '껌', price: 500 }
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = +line;

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);


const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.

function getItemByAmount(data, amount){
    let max = { name: "", price: 0 }; // 내가 살 수 있는 가장 비싼 아이템 이름과 가격
    if (amount >= 4000){              //4000원 이상을 가지고 있는 경우 가장 비싼 아메리카노를 먹을 수 있음
        return data[0];
    } else if (amount >= 3500){
        return data[1];
    } else if (amount >= 3000){
        return data[2];
    } else if (amount >= 2500){
        return data[3];
    } else if (amount >= 2000){
        return data[4];
    } else if (amount >= 1600){
        return data[5];
    } else if (amount >= 1500){
        return data[6];
    } else if (amount >= 1200){
        return data[7];
    } else if (amount >= 1000){
        return data[8];
    } else if (amount >= 500){
        return data[9];
    } else {
        return data[null];    // 최소금액인 500원보다 부족할 경우 살 수 있는 것이 없음.
    }
}
