const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join("-");
  // " " +
  // [hour, minute, second].map(formatNumber).join(":")
};
//时间戳转标准时间 年月日
const formatDateYMD = time => {
  var date = new Date(time * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  return Y + M + D;
};
//时间戳转标准时间 年月日时分
const formatDateYMDHM = time => {
  var date = new Date(time * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  var h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  var m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds();
  return Y + M + D + h + m;
};
/* 格式化倒计时 */
const date_format = micro_second => {
  // 秒数
  var second = Math.floor(micro_second / 1000);
  // 小时位
  var hr = Math.floor(second / 3600);
  // 分钟位
  var min = fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
  // 秒位
  var sec = fill_zero_prefix(second % 60); // equal to => var sec = second % 60;
  return hr + ":" + min + ":" + sec + " ";
};
/* 分秒位数补0 */
const fill_zero_prefix = num => {
  return num < 10 ? "0" + num : num;
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};
//验证空格
const trim = str => {
  return str.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "");
};
//验证名字
const isName = name => {
  return /^[\u4e00-\u9fa5]{2,16}$|^[a-zA-Z\s\.]{2,64}$/.test(name);
};
//验证身份证ID
const isUserID = id => {
  // return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(id);
  return /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(
    id
  );
};
// 验证手机
const isPhone = phone => {
  return /^1[3456789]\d{9}$/.test(phone);
};
const isCode = code => {
  return /^[0-9]*$/.test(code);
};

module.exports = {
  formatTime: formatTime,
  formatDateYMD,
  formatDateYMDHM,
  date_format,
  isPhone,
  trim,
  isCode,
  isName,
  isUserID
};
