(() => {
  var lang =
    navigator.language ||
    navigator.userLanguage ||
    navigator.browserLanguage ||
    navigator.systemLanguage;
  // convert to lower if not undefined
  if (lang !== 'undefined') {
    lang = lang.toLowerCase();
  } else {
    lang = 'en-us';
  }
  const home_url =
    'https://github.com/Young-Lord/fight-for-the-open-web/tree/main/README.md';
  const translations = {
    'zh-cn': {
      alert: '检测到 WEI，被 Google 操控的对抗开放互联网的协议。请使用 Firefox 浏览器访问本网站。',
    },
    'en-us': {
      alert:
        'Detected Web Environment Integrity API, a . Use Firefox to access this website and help keep the Internet open.',
    },
  };
  // detect Web Environment Integrity API
  if (navigator.getEnvironmentIntegrity !== undefined) {
    // fuck it
    alert(translations[lang]['alert']);
    window.location.href = home_url;
  }
})();
