// const apiUrl = `https://dummyjson.com/products?limit=5&&skip=${(getPageNum - 1) * 5}&select=title,price`;
const apiUrl = `https://dummyjson.com/products?limit=5&&skip=0&select=title,price`;

function goToPage(getPageNum){

  const setUrl = new URL(apiUrl);
  const searchParams = new URLSearchParams(setUrl.search);

  searchParams.set('skip', getPageNum);
  setUrl.search = searchParams.toString();
  console.log(setUrl.toString());
}

function getPageNumber(event) {
  let getPageNum = event.target.dataset.page
  goToPage(getPageNum)
}

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
      const currentPage = 1; // 현재 페이지
      console.log(currentPage + " 현재 페이지");

      const pageCount = data.limit; // 한페이지에 보여줄 게시물

      let pageGroup = Math.ceil(currentPage / pageCount); // 현재페이지의 그룹 ex) 1~5 = 1 , 6~10 = 2, 11~15 = 3
      console.log(pageGroup + " 페이지 그룹");

      let lastNumber = pageGroup * pageCount; // 현재페이지의 그룹에서 마지막 페이지
      console.log(lastNumber + " 마지막 페이지");

      let firstNumber = lastNumber - (pageCount - 1); // 현재페이지의 그룹에서 첫번째 페이지
      console.log(firstNumber + " 첫번째 페이지");

      const totalPage = Math.ceil(data.total / data.limit); // 총 페이지의 갯수
      console.log(totalPage + " 총 페이지 갯수");

      let prev = currentPage - 1;
      console.log(prev);

      const pagingBox = document.querySelector("#prevButton");

      // 현재 페이지가 1보다 
      if (prev >= 1) {
        pagingBox.innerHTML += `<span>
                                  <img src="./images/pagenation_prev.svg" alt="페이지 넘기는 버튼" />
                                </span>`;
      }

      let next = lastNumber + 1;
      console.log(next);

      if(next < totalPage){
        console.log(next < totalPage);
      }

      for (let i = 1; i <= pageCount; i++) {
        pageNumBox.innerHTML += `<a href="javascript:void(0)" onclick="getPageNumber(event)" class="page_num" data-page=${i}>${i}</a>`;
      }

      const itemBox = document.querySelector(".listBox");

      for (let i = 0; i < data.limit; i++) {
        const addDivBox = document.createElement("div");
        
        addDivBox.textContent = data.products[i].title;
        itemBox.appendChild(addDivBox);
      }

    });
} catch (error) {
  console.log(error);
}