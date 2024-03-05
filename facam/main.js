// function createCounter() {
//   let count = 0;

//   return function () {
//     count += 1;
//     return count;
//   };
// }

// const myCounter = createCounter();
// console.log(myCounter());

function createLogger(type) {
  //   return function (message) {
  //     console.log(`[${type}] ${message} ]`);
  //   };
  return function () {
    console.log(type);
  };
}

// const errorLogger = createLogger("ERROR");
// const infoLogger = createLogger("INFO");
// const warningLogger = createLogger("WARNING");

createLogger("ERROR");
// infoLogger("이것은 정보");
// warningLogger("이것은 경고");

const checkbox = document.querySelector("#loginInput");

checkbox.addEventListener("input", function (e) {
  console.log("Checkbox state changed:", e.target.checked);
});
