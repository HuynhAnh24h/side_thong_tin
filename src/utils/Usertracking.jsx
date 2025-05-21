export const getDeviceInfo = () =>{
  const ua = navigator.userAgent;
  let browser = "Unknown";
  let os = "Unknown";

  if (/Chrome/.test(ua)) browser = "Chrome";
  else if (/Firefox/.test(ua)) browser = "Firefox";
  else if (/Safari/.test(ua)) browser = "Safari";
  else if (/MSIE|Trident/.test(ua)) browser = "Internet Explorer";
  else if (/Edg/.test(ua)) browser = "Edge";

  if (/Windows/.test(ua)) os = "Windows";
  else if (/Mac/.test(ua)) os = "MacOS";
  else if (/Linux/.test(ua)) os = "Linux";
  else if (/Android/.test(ua)) os = "Android";
  else if (/iPhone|iPad/.test(ua)) os = "iOS";
    return {
    userAgent: ua,
    browser,
    os,
    language: navigator.language,
    platform: navigator.platform,
  };
}

export const createUserUseId = () =>{
    return Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000
}
