const Func = {
  //Date类型转换成String > yyyy-MM-dd hh:mi:ss
  dateTimeToString: function(dateVal) {
    if (!dateVal) {
      return "";
    }
    //备注： 入参一定要Date格式的，如果不是，请装换成Date格式
    dateVal = new Date(dateVal);
    var year = dateVal.getFullYear(),
      mm = parseInt(dateVal.getMonth() + 1, 10),
      month = mm < 10 ? "0" + mm : mm,
      dd = dateVal.getDate(),
      day = dd < 10 ? "0" + dd : dd,
      hr = dateVal.getHours(),
      hour = hr < 10 ? "0" + hr : hr,
      mt = dateVal.getMinutes(),
      minute = mt < 10 ? "0" + mt : mt,
      sc = dateVal.getSeconds(),
      second = sc < 10 ? "0" + sc : sc;
    return (
      year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
    );
  },
  //Date类型转换成String > yyyy-MM-dd
  dateToString: function(dateVal) {
    if (!dateVal) {
      return "";
    }
    //备注： 入参一定要Date格式的，如果不是，请装换成Date格式
    dateVal = new Date(dateVal);
    var year = dateVal.getFullYear(),
      mm = parseInt(dateVal.getMonth() + 1, 10),
      month = mm < 10 ? "0" + mm : mm,
      dd = dateVal.getDate(),
      day = dd < 10 ? "0" + dd : dd;

    return year + "-" + month + "-" + day;
  },
  //获取url参数方法
  getUrlArgs: function() {
    const query = location.search.substring(1);
    const pairs = query.split("&");
    let args = {};
    let pos;
    let idx;
    let argname;
    let val;

    for (var i = 0; i < pairs.length; i++) {
      pos = pairs[i];
      idx = pos.indexOf("=");
      if (idx == -1) continue;
      argname = pos.substring(0, idx);
      val = decodeURIComponent(pos.substring(idx + 1));
      args[argname] = val;
    }
    return args;
  },
  /***滑动限制***/
  stop() {
    var mo = function(e) {
      e.preventDefault();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("touchmove", mo, false); //禁止页面滑动
  },
  /***取消滑动限制***/
  move() {
    var mo = function(e) {
      e.preventDefault();
    };
    document.body.style.overflow = ""; //出现滚动条
    document.removeEventListener("touchmove", mo, false);
  },
  //克隆对象的方法
  clone(origin) {
    let originProto = Obejct.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
  }
};
export default Func;
