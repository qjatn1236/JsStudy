const todoBtn = document.querySelector(".todo_btn");

function addTodoItem() {
  const todoItems = JSON.parse(localStorage.getItem("ToDo")) || [];
  // 투두리스트에 입력하는 값
  let getTodoValue = document.querySelector(".todo_value");

  // 빈 값이면 알림띄우기
  if (getTodoValue.value === "") {
    alert("값을 입력해 주세요");
    getTodoValue.focus();
    return;
  }

  todoItems.push({ value: getTodoValue.value, isDone: false });
  localStorage.setItem("ToDo", JSON.stringify(todoItems));
  appendTag(getTodoValue.value);

  getTodoValue.value = "";
}

// 엔터 버튼으로 추가
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    addTodoItem();
    event.preventDefault();
  }
});

function getToDosFromLocal() {
  // 로컬 스토리지에서 값을 가져와서 HTML 태그 생성
  let getToDoStorageItem = JSON.parse(localStorage.getItem("ToDo"));

  getToDoStorageItem.filter((cookie) => {
    if (cookie.isDone === true) {
      completeAppendTag(cookie.value);
    } else if (!cookie.isDone === true) {
      appendTag(cookie.value);
    }
  });
}

// 태그 생성
function appendTag(TodoText) {
  const getTodoBox = document.querySelector(".todo_box");

  // li 태그 생성
  const pTag = document.createElement("p");
  pTag.textContent = TodoText;

  // 완료 버튼 생성
  const comBtn = document.createElement("button");
  comBtn.textContent = "완료";
  comBtn.classList.add("todoCom");
  comBtn.addEventListener("click", todoComplete);

  divTag = document.createElement("div");
  divTag.append(pTag, comBtn);

  // ul에 만들어진 li태그 넣어주기
  getTodoBox.appendChild(divTag);
}

function completeAppendTag(TodoText) {
  const getTodoBox = document.querySelector(".todo_complete_box");

  // li 태그 생성
  const pTag = document.createElement("p");
  pTag.textContent = TodoText;

  // 완료 버튼 생성
  const comBtn = document.createElement("button");
  comBtn.textContent = "완료";
  comBtn.classList.add("todoCom");
  comBtn.addEventListener("click", todoComplete);

  divTag = document.createElement("div");
  divTag.append(pTag, comBtn);

  // ul에 만들어진 li태그 넣어주기
  getTodoBox.appendChild(divTag);
}

// // 투두리스트에 아이템 추가
todoBtn.addEventListener("click", addTodoItem);

window.addEventListener("DOMContentLoaded", function () {
  getToDosFromLocal();
});

// 완료 버튼 눌렀을 때
const todoComplete = function (e) {
  const todoTextElement = e.target.previousSibling.textContent;
  const getToDoStorageItem = JSON.parse(localStorage.getItem("ToDo"));

  getToDoStorageItem.map((cookie) => {
    if (todoTextElement === cookie.value) {
      cookie.isDone = true;
      localStorage.setItem("ToDo", JSON.stringify(getToDoStorageItem));

      getToDosFromLocal();
    }
  });
};
