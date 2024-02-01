function getFindText () {
  // 검색할 값을 담아주기
  const resultSearchValue = document.querySelector(".findDiv input").value;
  console.log(resultSearchValue);

  // 검색할 내용을 담아주기
  const getContentsValue = document.querySelector(".findDiv textarea").textContent;
  console.log(getContentsValue);

  // 검색된 내용 공백으로 잘라주기
  const getSplitValue = getContentsValue.split(" ");
  console.log(getSplitValue);

  // 총 변경된 개수를 저장할 변수
  let changeNum = 0;

  // 저장된 배열을 순차적으로 돌면서 찾는 텍스트와 같은 단어일 경우 p 태그를 포함한 값으로 저장하고, 아닐 경우 넘어감
  for (let i = 0; i < getSplitValue.length; i++) {

    if (resultSearchValue === getSplitValue[i]) {
      let replaceText = `<p class="findedText_${i} textEmphasize">${resultSearchValue}</p>`;
      getSplitValue[i] = replaceText;
      changeNum = changeNum + 1;
      console.log(changeNum);
    }
    
  }

  // 원래의 문단으로 돌리기 위해 사용할 변수 초기화
  let fullText = "";

  // 위에 만들어둔 단어 배열을 돌면서 문장으로 합침
  for (let i = 0; i < getSplitValue.length; i++) {
    fullText += getSplitValue[i];

    if (i != getSplitValue - 1) {
      fullText += " ";
    }
  }

  // 합친 단어를 결과 영역에 뿌려줌
  document.querySelector(".showDiv div .returnArea").innerHTML = fullText;

  // 결과를 셀렉트 태그에 넣기 위해 초기화
  document.querySelector(".selectList").innerHTML = `<option selected="selected">결과</option>`;

  // 바꾼 값의 수만큼 돌면서 옵션에 내용 추가
  for (let i = 0; i < changeNum; i++) {
    let optionElement = document.createElement("option");
    optionElement.value = i;
    optionElement.textContent = document.querySelector(".findDiv input").value;
    document.querySelector(".selectList").appendChild(optionElement);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".goFindText").addEventListener("click", () => {
    getFindText()
  });

  // 셀렉트에서 선택한 값이 변경되었을 경우 발생하는 이벤트
  document.querySelector(".selectList").addEventListener("change", (e) => {
    // 선택한 셀렉트의 value 조회
    let selectNum = e.target.value;
    // 변경된 텍스트가 있는 클래스로 조회
    const findedList = document.querySelectorAll(".textEmphasize");

    // 조회한 셀렉트 옵션을 돌면서 찾은 셀렉트의 value와 같을 경우 색상을 변경
    for (let i = 0; i < findedList.length; i++) {
      i == selectNum ? (findedList[i].style.color = "blue") : (findedList[i].style.color = "red");
    }
  });
});

// 클래스 선언
var clsWord = {};
