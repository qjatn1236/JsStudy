// 초기에 금액 셋팅
let Practice = {
  init: function () {
    // 초기화
  },

  setPriceItems: function (...arg) {
    arg.forEach((e, i) => {
      document.querySelector(".moneyDivBox").innerHTML += `
        <div class="moneyDiv">
          <p class="amount amount${i + 1}"></p>
          <span>원</span>
          <button type="button" class="setAmount${i + 1}Plus" onclick="setAmount(this)">+</button>
          <button type="button" class="setAmount${i + 1}Minus" onclick="setAmount(this)">-</button>
          <button type="button" class="setAmount${i + 1}MaxNumber setMaxNum" onclick="setMaxAmount(${e})"></button>
        </div>
      `;

      // items에 arrAmount 배열에있는 금액을 담아줄 Element선택
      const items = document.querySelector(`.amount${i + 1}`);
      // 금액에 콤마 추가
      const itemsDot = e.toLocaleString();
      console.log(itemsDot);

      // 콤마 추가된 금액 담아주기
      items.textContent = itemsDot;
    });
  },
};

// 금액 추가
function setAmount(event) {
  // 초기에 셋팅된 금액 담아줄 그릇
  const price = event.parentElement.firstElementChild.textContent;
  // 그릇에서 콤마 제거
  let priceDot = parseFloat(price.replace(/,/g, ""));

  // 현재 토탈금액 담아줄 그릇
  const nowTotalPrice = document.querySelector(".amountResult").textContent;

  // 클릭한 요소가 +인지 -인지 체크
  const getClickPlusElement = event.classList[0].includes("Plus");
  const getClickMinusElement = event.classList[0].includes("Minus");

  // 콤마 제거
  let nowTotalAmountNumber = parseFloat(nowTotalPrice.replace(/,/g, ""));

  if (getClickPlusElement) {
    nowTotalAmountNumber += priceDot;
  } else if (getClickMinusElement) {
    nowTotalAmountNumber -= priceDot;
  }

  //  금액이 10만원 넘는지 체크
  if (amountLimit(nowTotalAmountNumber)) return;

  // 금액 마이너스인지 체크
  if (nowTotalAmountNumber < -1) {
    alert("금액이 마이너스 입니다.");
    return false;
  }

  // 다시 콤마 추가
  let result = nowTotalAmountNumber.toLocaleString();
  document.querySelector(".amountResult").textContent = result;
}

// 구매수량 변경
document.querySelector(".setMaxNumberButton").addEventListener("click", () => {
  const nMaxNumber = document.querySelector(".inputMaxNumber").value;
  const setItemsElement = document.querySelectorAll(".setMaxNum");

  setItemsElement.forEach(function (i) {
    i.textContent = "+" + nMaxNumber;
    i.style.display = "block";
  });
});

// 구매수량 적용뒤 금액 추가
function setMaxAmount(price) {
  let nowTotalPrice = document.querySelector(".amountResult").textContent;
  let maxNumber = document.querySelector(".inputMaxNumber").value;

  let nowTotalAmountNumber = parseFloat(nowTotalPrice.replace(/,/g, ""));
  nowTotalAmountNumber += price * maxNumber;

  if (amountLimit(nowTotalAmountNumber)) return;

  let result = nowTotalAmountNumber.toLocaleString();
  document.querySelector(".amountResult").textContent = result;
}

// 인풋 숫자만 입력가능
function onlyNumbers(event) {
  event.target.value = event.target.value.replace(/[^0-9]/g, "");
}

// 금액 초과 체크
function amountLimit(amount) {
  if (amount > 100000) {
    alert("금액이 100,000을 초과했어요.");
    return true;
  }
}
