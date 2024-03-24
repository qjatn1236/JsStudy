class BrowserHandler {
  constructor() {
    this.isOs = "";
    this.isDataType = "";
  }

  // 초기화
  getBrowser(apiUrl) {
    this.isOs = this.browserChecking();

    console.log(this.isOs);
    console.log(this.isDataType);
    
    this.isDataType === "fetch" ? console.log("패치") : console.log("엑시오스")
    this.isDataType === "fetch" ? this.getFetch(apiUrl) : this.getAxios(apiUrl)
  }

  browserChecking() {
    let agent = window.navigator.userAgent.toLowerCase();

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

  async getFetch(apiUrl) {
    try {
      const res = await fetch(apiUrl);
      // fetch API는 네트워크 오류가 발생했을때만 프로미스를 거부하는 특징이있다.
      if (!res.ok) {
        console.log(`HTTP Error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  async getAxios(apiUrl){
    try {
      const res = await axios.get(apiUrl)
      if (res.status !== 200) {
        console.log(`HTTP Error! status: ${res.status}`);
      }
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }
}
