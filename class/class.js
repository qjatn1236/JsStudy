var getFetchData = {
    isOs: "",
    isDataType: "",
    _this : this,
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

    realFetch : function(){

    },
    getFetch: function () {
        
      //this.init();
      if ( this.isDataType == 'fetch'){
        this.realFetch(param , _this);

        _this.isBrowser
      }else{

      }
    }
  }

//   var json = getFetchData.getFetch();