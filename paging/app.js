const apiUrl = "https://dummyjson.com/products?limit=5&&skip=0&select=title,price";
const nowUrl = new URL(apiUrl);

try {
  fetch(apiUrl)
    .then(function (res) {
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    })

    .then((data) => {
      console.log(data);
      console.log(data.total / 5);
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
//     const wantPageNum = (clickedPage - 1) * 5;

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
