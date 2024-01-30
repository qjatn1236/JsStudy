var getFetchData = {
    isOs: "",
    isDataType: "",

    init: function () {
      this.isOs = this.isBrowser();
      
      if(this.isDataType === "fetch"){
        console.log('fetch');
      }

      console.log("브라우저는 " + this.isOs);
      console.log("사용해야할 데이터 통신은 " + this.isDataType);
    },

    isBrowser: function () {
      var agent = window.navigator.userAgent.toLowerCase();
      var ieName = navigator.appName;

      if (agent.indexOf("chrome") > -1) {
        this.isDataType = "fetch"
        return "chrome";
      }

      if (navigator.appName == "Netscape" && navigator.userAgent.search("Trident") != -1) {
        this.isDataType = "ajax"
        return "edge"
      }

      if (ieName === "Microsoft Internet Explorer") {
        console.log(ieName);
        return "ie"
      }
    },

    getFetch: function () {
      this.init();
    }
  }

//   var json = getFetchData.getFetch();