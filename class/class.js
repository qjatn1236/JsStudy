// const getFetchData = {
//   isOs: "",
//   isDataType: "",

//   init: function () {
//     this.isOs = this.isBrowser();

//     if (this.isDataType === "fetch") {
//       console.log("fetch");
//     }

//     console.log("브라우저는 " + this.isOs);
//     console.log("사용할 데이터 통신은 " + this.isDataType);
//   },

//   isBrowser: function () {
//     let agent = window.navigator.userAgent.toLowerCase();
//     console.log(agent);
//     let ieName = navigator.appName;

//     if (agent.indexOf("edge") > -1) {
//       // MS 엣지
//       this.isDataType = "fetch";
//       return "edge";
//     }

//     if (agent.indexOf("edg/") > -1) {
//       // 크롬기반 엣지
//       this.isDataType = "fetch";
//       console.log("크롬기반 엣지");
//       return "edge";
//     }

//     if (agent.indexOf("chrome") > -1) {
//       this.isDataType = "fetch";
//       return "chrome";
//     }

//     if (agent.indexOf("safari") > -1) {
//       this.isDataType = "fetch";
//       return "safari";
//     }

//     if (agent.indexOf("firefox") > -1) {
//       this.isDataType = "fetch";
//       return "firefox";
//     }

//     if (ieName === "Microsoft Internet Explorer") {
//       alert("IE는 지원하지 않습니다.");
//       return "ie";
//     }
//   },

//   runFetch: async function (url) {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   },

//   runAjax: async function (url) {
//     try {
//       const response = await $.ajax({
//         url: url,
//         method: "GET",
//         dataType: "json",
//       });
//       console.log(response);
//       return response;
//     } catch (error) {
//       console.error("There was a problem with the fetch operation:", error);
//     }
//   },

//   getData: function (url) {
//     this.isDataType == "fetch" ? this.runFetch(url) : this.runAjax(url);
//   },
// };

class BrowserHandler {
  constructor() {
    this.isOs = "";
    this.isDataType = "";
  }

  getBrowser() {
    this.isOs = this.browserChecking();
    
    console.log(this.isOs);
    console.log(this.isDataType);
  }

  browserChecking() {
    let agent = window.navigator.userAgent.toLowerCase();
    console.log(agent);

    let ieName = navigator.appName;

    if (agent.indexOf("edge") > -1) {
      // MS 엣지
      this.isDataType = "fetch";
      return "edge";
    }

    if (agent.indexOf("edg/") > -1) {
      // 크롬기반 엣지
      this.isDataType = "fetch";
      console.log("크롬기반 엣지");
      return "edge";
    }

    if (agent.indexOf("chrome") > -1) {
      this.isDataType = "fetch";
      return "chrome";
    }

    if (agent.indexOf("safari") > -1) {
      this.isDataType = "fetch";
      return "safari";
    }

    if (agent.indexOf("firefox") > -1) {
      this.isDataType = "fetch";
      return "firefox";
    }

    if (ieName === "Microsoft Internet Explorer") {
      alert("IE는 지원하지 않습니다.");
      return "ie";
    }
  }
}
