// 초기에 금액 셋팅
(function () {
  const arrAmount = [5000, 10000, 50000];

  arrAmount.forEach((e, i) => {
    const items = document.querySelector(`.amount${i + 1}`);
    items.textContent = e;
  });
})();

// 금액 추가
function setAmount(price) {
  const nowTotalPrice = document.querySelector(".amountResult").textContent;
  // 콤마 제거
  let nowTotalAmountNumber = parseFloat(nowTotalPrice.replace(/,/g, ""));
  nowTotalAmountNumber += price;

  if (amountLimit(nowTotalAmountNumber)) return;

  // 다시 콤마 추가
  let result = nowTotalAmountNumber.toLocaleString();
  document.querySelector(".amountResult").textContent = result;
}

// 금액 빼기
function subtractAmount(price) {
  const nowTotalPrice = document.querySelector(".amountResult").textContent;

  // 콤마 제거
  let nowTotalAmountNumber = parseFloat(nowTotalPrice.replace(/,/g, ""));
  nowTotalAmountNumber -= price;

  if (nowTotalAmountNumber < -1) {
    alert("금액이 마이너스 입니다.");
  }

  // 다시 콤마 추가
  let result = nowTotalAmountNumber.toLocaleString();
  document.querySelector(".amountResult").textContent = result;
}

// 구매수량 변경
document.querySelector(".setMaxNumberButton").addEventListener("click", () => {
  let nMaxNumber = document.querySelector(".inputMaxNumber").value;
  let setItemsElement = document.querySelectorAll(".setMaxNum");

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

function amountLimit(amount) {
  if (amount > 100000) {
    alert("금액이 100,000을 초과했어요.");
    return true;
  }
}
