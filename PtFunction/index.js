fetch("./study.json")
  .then((res) => res.json())
  .then((data) => {
    // const moneyItem = Object.keys(data.moneyInformation);
    // moneyItem.forEach((e, i) => {
    //   const maxNumber = data.moneyInformation[e].max_number;
    //   document.querySelector(".moneyDivBox").innerHTML += `
    //       <div class="moneyDiv">
    //         <p class="amount amount${i + 1}"></p>
    //         <span>원</span>
    //         <button type="button" class="setAmount${i + 1}Plus" onclick="setAmount(this, ${data.max_money}, ${data.min_money})">+</button>
    //         <button type="button" class="setAmount${i + 1}Minus" onclick="setAmount(this, ${data.max_money}, ${data.min_money})">-</button>
    //         <button type="button" class="setAmount${i + 1}MaxNumber setMaxNum" onclick="setMaxAmount(${maxNumber}, ${data.max_money}, ${data.min_money}, ${moneyItem[i]})">${maxNumber}</button>
    //       </div>
    //     `;
    //   // items에 arrAmount 배열에있는 금액을 담아줄 Element선택
    //   const items = document.querySelector(`.amount${i + 1}`);

    //   // 금액에 콤마 추가
    //   const itemsDot = Number(e).toLocaleString();

    //   // 콤마 추가된 금액 담아주기
    //   items.textContent = itemsDot;
    // });
  });

// // 금액 추가
// function setAmount(event, max, min) {
//   // 초기에 셋팅된 금액 담아줄 그릇
//   const price = event.parentElement.firstElementChild.textContent;
//   // 그릇에서 콤마 제거
//   let priceDot = parseFloat(price.replace(/,/g, ""));

//   // 현재 토탈금액 담아줄 그릇
//   const nowTotalPrice = document.querySelector(".amountResult").textContent;

//   // 클릭한 요소가 +인지 -인지 체크
//   const getClickPlusElement = event.classList[0].includes("Plus");
//   const getClickMinusElement = event.classList[0].includes("Minus");

//   // 콤마 제거
//   let nowTotalAmountNumber = parseFloat(nowTotalPrice.replace(/,/g, ""));

//   if (getClickPlusElement) {
//     nowTotalAmountNumber += priceDot;
//   } else if (getClickMinusElement) {
//     nowTotalAmountNumber -= priceDot;
//   }

//   if (nowTotalAmountNumber > max || nowTotalAmountNumber < -min) {
//     alert("부적절한 조건입니다.");
//     return;
//   }

//   // 다시 콤마 추가
//   let result = nowTotalAmountNumber.toLocaleString();
//   document.querySelector(".amountResult").textContent = result;
// }

// 구매수량 적용뒤 금액 추가
// function setMaxAmount(priceCount, max, min, moneyItem) {
//   let nowTotalPrice = document.querySelector(".amountResult").textContent;

//   let nowTotalAmountNumber = parseFloat(nowTotalPrice.replace(/,/g, ""));
//   nowTotalAmountNumber += priceCount * moneyItem;

//   console.log(nowTotalAmountNumber);
//   if (nowTotalAmountNumber > max || nowTotalAmountNumber < -min) {
//     alert("부적절한 조건입니다.");
//     return;
//   }

//   let result = nowTotalAmountNumber.toLocaleString();
//   document.querySelector(".amountResult").textContent = result;
// }
