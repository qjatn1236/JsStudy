const apiUrl = "https://dummyjson.com/products?limit=5&&skip=0&select=title,price";
const nowUrl = new URL(apiUrl);
const VIEW_ITEM_COUNT = 5;

try {
  fetch(apiUrl)
    .then(function (res) {
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    })

    .then((data) => {
      const itemBox = document.querySelector(".listBox");

      data.products.forEach((elements) => {
        const addDivBox = document.createElement("div");

        addDivBox.textContent = elements.title;
        itemBox.appendChild(addDivBox);
      });
    });
} catch (error) {
  console.log(["에러 발생"] + error);
}

// const pageNumbers = document.querySelectorAll(".page_num");
// pageNumbers.forEach((pageNumber) => {
//   pageNumber.addEventListener("click", () => {
//     const clickedPage = pageNumber.getAttribute("data-page");
//     const wantPageNum = (clickedPage - 1) * VIEW_ITEM_COUNT;

//     nowUrl.searchParams.set("skip", wantPageNum);

//     const itemBox = document.querySelector(".listBox");
//     itemBox.innerHTML = "";

//     fetch(nowUrl)
//       .then((res) => res.json())
//       .then((data) => {
//         data.products.forEach((elements) => {
//           const addDivBox = document.createElement("div");

//           addDivBox.textContent = elements.title;
//           itemBox.appendChild(addDivBox);
//         });
//       });
//   });
// });
