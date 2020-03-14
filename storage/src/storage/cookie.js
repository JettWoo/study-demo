// 设置cookie, 键：username, 值：Jett, 不添加过期时间，默认情况下，cookie 在浏览器关闭时删除
document.cookie = 'username=Jett'
// 添加一个过期时间
document.cookie="password=123456; expires=Thu, 18 Dec 2043 12:00:00 GMT";

// 读取cookie 将以字符串的方式返回所有的 cookie，类型格式： cookie1=value; cookie2=value;
let cookies = document.cookie

console.log("cookies:", cookies) // cookies: username=Jett; password=123456

// 修改cookie, 同样的键重复设置会覆盖旧的值
document.cookie="username=John Smith; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";

// 删除cookie, 只需要设置exxpires参数为以前的时间即可
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

/* 设置cookie的值 */
function setCookie(cname,cvalue,exdays)
{
  let d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  let expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

/* 获取cookie的值 */
function getCookie(cname)
{
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i=0; i<ca.length; i++) 
  {
    let c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

export {
  setCookie,
  getCookie
}