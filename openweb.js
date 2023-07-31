(() => {
  var lang =
    navigator.language ||
    navigator.userLanguage ||
    navigator.browserLanguage ||
    navigator.systemLanguage;

  // convert to lower if not undefined
  if (lang?.toLowerCase) {
    lang = lang.toLowerCase();
  }

  const home_url =
    "https://github.com/Young-Lord/fight-for-the-open-web/tree/main/README.md";

  const translations = {
    "zh-cn": {
      message:
        "检测到 WEI，被 Google 操控的对抗开放互联网的协议。请使用 Firefox 浏览器访问本网站。",
    },
    "en-us": {
      message: `We're sorry, but the browser you are currently using seems to support the <a href="https://github.com/RupertBenWiser/Web-Environment-Integrity">Web Environment Integrity API</a>. This user-hostile addition to Google-backed browsers <a href="https://yewtu.be/watch?v=0i0Ho-x7s_U">works to undermine the free and open internet</a>, and is consequently not supported. Please switch to the latest version of <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a> or any other browser that still gives some value to the notion of user control and freedom to use our service. Thank you for your understanding. For more information, visit <a href="${home_url}">${home_url.replace(
        "https://",
        ""
      )}</a>`,
    },
    "uk-ua": {
      message:
        "Виявлено використання Web Environment Integrity API - протоколу, що руйнує весь Інтернет. Використовуйте Firefox, щоб отримати доступ до цього веб-сайту та допомогти зберегти Інтернет відкритим.",
    },
    "fr-fr": {
      message:
        "Détection de l'API Web Environment Integrity, un protocole détruisant l'ensemble d'Internet. Utilisez Firefox pour accéder à ce site web et aidez à maintenir l'Internet ouvert.",
    },
    tr: {
      message:
        "Web Environment Integrity API'sı tespit edildi, bu API İnternet'in tamamını yok eder. Bu siteye erişmek için Firefox kullanın ve İnternet'in açık kalmasına yardımcı olun.",
    },
    "de": {
      message: `Entschuldigung, aber der Browser, den Sie momentan verwenden, unterstützt die <a href="https://github.com/RupertBenWiser/Web-Environment-Integrity">"Web Environment Integrity API"</a>. Dieser Endnutzerfeindliche Code in Google-unterstützten Webbrowsern <a href="https://yewtu.be/watch?v=0i0Ho-x7s_U">bedroht das freie und offene Internet</a> und wird daher nicht unterstützt. Bitte verwenden Sie die neueste Version von <a href="https://www.mozilla.org/de/firefox/browsers/">Firefox</a> oder einem anderen Browser, der noch Wert auf die Rechte und Freiheiten des Endnutzers legt, um diese Website zu verwenden. Vielen Dank für Ihr Verständnis.`,
    },
  };

  // detect Web Environment Integrity API
  if (navigator.getEnvironmentIntegrity !== undefined) {
    // fuck it
    const text = (translations[lang] ?? translations["en-us"])["message"];

    // Just in case the website has overwritten some of these styles, we're going to set everything as !important and overwrite things like `display` and `position` that could end up screwing up the text.
    // We're also setting the z-index value in case something gets added to the body after this script runs.

    document.body.innerHTML = `
        <style>
            a {
                text-decoration: none !important;
                color: #013C88 !important;
            }

            a:hover {
                color: #142E51 !important;
            }
        </style>

        <div style="
            background: #f54b39 !important;
            color: white !important;
            font-weight: bold !important;
            width: 100% !important;
            height: 100% !important;
            text-align: center !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            font-size: 3em !important;
            font-family: sans-serif !important;
            display: unset !important;
            z-index: 696969696969696969 !important;
        ">
            <p style="
                margin: 0 !important; 
                padding: 0 !important; 
                margin-top: 2.5% !important; 
                display: unset !important; 
                position: unset !important;
            ">
                ${text}
            </p>
        </div>
    `;
  }
})();
