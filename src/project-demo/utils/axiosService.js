import axios from "axios";

axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  response => {
    if (response.data) {
      if (response.data.idsIntercepted === true) {
        setTimeout(function() {
          if (
            window.location.host.indexOf("dev") >= 0 ||
            window.location.host.indexOf("sit") >= 0
          ) {
            window.location = "//sfsit.cnsuning.com/nsfuaa-admin/home.htm";
          } else if (window.location.host.indexOf("pre") >= 0) {
            window.location = "//sfpre.cnsuning.com/nsfuaa-admin/home.htm";
          } else {
            window.location = "//sf.cnsuning.com/nsfuaa-admin/home.htm";
          }
        }, 3000);
      } else {
        return response.data;
      }
    } else {
      throw new Error("网络异常，请稍后重试");
    }
  },
  error => {
    console.log(error.response);
    throw new Error("网络异常，请稍后重试");
  }
);

export default axios;
