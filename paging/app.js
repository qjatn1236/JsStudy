const apiUrl = "https://dummyjson.com/products?limit=5&&skip=0&select=title,price";
const nowUrl = new URL(apiUrl);

const pageNumBox = document.querySelector(".page_num_box");
try {
  fetch(apiUrl)
    .then(function (res) {
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    })

    .then((data) => {
      // pageNumBox.innerHTML += ``;
      const currentPage = 1; // 현재 페이지
      const pageCount = data.limit; // 한페이지에 보여줄 게시물

      let pageGroup = Math.ceil(currentPage / pageCount); // 현재페이지의 그룹 ex) 1~5 = 1 , 6~10 = 2, 11~15 = 3
      console.log(pageGroup);

      let lastNumber = pageGroup * pageCount; // 현재페이지의 그룹에서 마지막 페이지
      console.log(lastNumber);

      let firstNumber = lastNumber - (pageCount - 1); // 현재페이지의 그룹에서 첫번째 페이지
      console.log(firstNumber);

      const totalPage = data.total / data.limit; // 총 페이지의 갯수
      console.log(totalPage);

      // let prev = ;
      // console.log(prev);

      let next = lastNumber + 1;
      console.log(next);

      for (let i = 1; i <= pageCount; i++) {
        // pageNumBox.innerHTML += `<a href="javascript:void(0)" class="page_num active" data-page="1">${i}</a>`;
        pageNumBox.innerHTML += `<a href="javascript:void(0)" class="page_num" data-page=${i}>${i}</a>`;
      }

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

function getTotalPageCount(data) {
  return Math.ceil(data.total / data.limit);
}
