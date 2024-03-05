const apiUrl = "https://dummyjson.com/products?limit=5&&skip=0&select=title,price";
const nowUrl = new URL(apiUrl);
const pageViewLimit = 5;

fetch("https://dummyjson.com/products?limit=5&&skip=0&select=title,price")
  .then((res) => res.json())
  .then((data) => {
    const itemBox = document.querySelector(".listBox");

    data.products.forEach((elements) => {
      const addDivBox = document.createElement("div");

      addDivBox.textContent = elements.title;
      itemBox.appendChild(addDivBox);
    });
  });

const pageNumbers = document.querySelectorAll(".page_num");
pageNumbers.forEach((pageNumber) => {
  pageNumber.addEventListener("click", () => {
    const clickedPage = pageNumber.getAttribute("data-page");
    const urlParams = nowUrl.searchParams.get("skip");

    const queryParams = { skip: urlParams };

    console.log(queryParams);

    const wantPage = Number(urlParams * clickedPage);
    // const wantPage = Number(clickedPage * pageViewLimit + urlParams);
    // console.log(wantPage);

    const itemBox = document.querySelector(".listBox");
    itemBox.innerHTML = "";

    fetch(`https://dummyjson.com/products?limit=5&&skip=${queryParams.skip}&select=title,price`)
      // fetch(`https://dummyjson.com/products?limit=5&&skip=5&select=title,price`)
      .then((res) => res.json())
      .then((data) => {
        data.products.forEach((elements) => {
          const addDivBox = document.createElement("div");

          addDivBox.textContent = elements.title;
          itemBox.appendChild(addDivBox);
        });
      });

    // const urlParams = nowUrl.searchParams.get("skip");
    // console.log(parseInt(clickedPage));
    // console.log(parseInt(urlParams));

    // console.log(clickedPage + " ex " + urlParams);
    // console.log(clickedPage  urlParams);
  });
});
