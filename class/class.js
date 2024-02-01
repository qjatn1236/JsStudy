var getFetchData = {
  isOs: "",
  isDataType: "",
  _this: this,

  init: function () {
    this.isOs = this.isBrowser();

    if (this.isDataType === "fetch") {
      console.log("fetch");
    }

    console.log("브라우저는 " + this.isOs);
    console.log("사용해야할 데이터 통신은 " + this.isDataType);
  },

  isBrowser: function () {
    var agent = window.navigator.userAgent.toLowerCase();
    var ieName = navigator.appName;

    if (agent.indexOf("chrome") > -1) {
      this.isDataType = "fetch";
      return "chrome";
    }

    if (navigator.appName == "Netscape" && navigator.userAgent.search("Trident") != -1) {
      this.isDataType = "ajax";
      return "edge";
    }

    if (ieName === "Microsoft Internet Explorer") {
      console.log(ieName);
      return "ie";
    }
  },

  runFetch: function () {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => console.log(data));
  },

  runAjax: function () {
    console.log("아작스");
  },

  getFetch: function () {
    if (this.isDataType == "fetch") {
      this.runFetch();
      // this.runFetch(param , _this);
      // _this.isBrowser
    } else {
      this.runAjax();
    }
  },
};

//   var json = getFetchData.getFetch();
