(() => {
  var lang =
    navigator.language ||
    navigator.userLanguage ||
    navigator.browserLanguage ||
    navigator.systemLanguage;

  // convert to lower if not undefined
  if (lang?.toLowerCase) {
    lang = lang.toLowerCase();
  } else {
    lang = "";
  }

  const home_url =
    "https://github.com/Young-Lord/fight-for-the-open-web/tree/main/README.md";

  const translations = {
    "zh-cn": {
      message: `您的浏览器很不幸地使用了 <a href="https://github.com/RupertBenWiser/Web-Environment-Integrity">Web Environment Integrity API</a>，一个与用户作对，将用户封锁在 Google 生态体系内，<a href="https://yewtu.be/watch?v=0i0Ho-x7s_U">削弱互联网</a>的开放性的 API。我们不会支持这种行径。请使用 <a href="https://www.mozilla.org/zh-cn/firefox/new/">Firefox</a> 或者其他为用户隐私着想的浏览器以继续使用我们的服务。感谢您的理解。更多信息请参阅 <a href="${home_url}">${home_url.replace(
        "https://",
        ""
      )}</a>`,
    },
    "en-us": {
      message: `We're sorry, but the browser you are currently using seems to support the <a href="https://github.com/RupertBenWiser/Web-Environment-Integrity">Web Environment Integrity API</a>. This user-hostile addition to Google-backed browsers <a href="https://yewtu.be/watch?v=0i0Ho-x7s_U">works to undermine the free and open internet</a>, and is consequently not supported. Please switch to the latest version of <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a> or any other browser that still gives some value to the notion of user control and freedom to use our service. Thank you for your understanding. For more information, visit <a href="${home_url}">${home_url.replace(
        "https://",
        ""
      )}</a>`,
    },
    "uk-ua": {
      message: `Вибачте, але ваш браузер, здається, підтримує <a href="https://github.com/RupertBenWiser/Web-Environment-Integrity">Web Environment Integrity API</a>. Цей ворожий для користувачів додаток до підтримуваних Google браузерів <a href="https://yewtu.be/watch?v=0i0Ho-x7s_U">створено щоб підірвати вільний та відкритий Інтернет</a>, тому не підтримується. Будь ласка, перейдіть на останню версію <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a> або будь-якого іншого браузера, який все ще цінує контроль користувачів і волю використання нашого сервісу. Дякуємо за розуміння. Для отримання додаткової інформації відвідайте <a href="${home_url}">${home_url.replace(
        "https://",
        ""
      )}</a>`,
    },
    "fr-fr": {
      message: `Veuillez nous excuser, mais le navigateur que vous utilisez actuellement semble prendre en charge l'<a href="https://github.com/RupertBenWiser/Web-Environment-Integrity">API Web Environment Integrity</a>. Cette addition hostile aux utilisateurs aux navigateurs soutenus par Google <a href="https://yewtu.be/watch?v=0i0Ho-x7s_U">travaille à saper Internet libre et ouvert</a>, et n'est par conséquent pas pris en charge. Veuillez basculer sur la version la plus récente de <a href="https://www.mozilla.org/fr/firefox/new/">Firefox</a> ou sur tout autre navigateur qui attache encore de la valeur aux notions de contrôle de l'utilisateur et de liberté pour utiliser notre service. Nous vous remercions de votre compréhension. Pour plus d'informations, visitez <a href="${home_url}">${home_url.replace(
        "https://",
        ""
      )}</a>`,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             },
    tr: {
      message: `Özür dileriz ama şu an kullandığınız tarayıcı, <a href="https://github.com/RupertBenWiser/Web-Environment-Integrity">Web Environment Integrity API</a>'sını destekliyor gibi görünüyor. Google destekli tarayıcılara bu kullanıcı düşmanı ilave <a href="https://yewtu.be/watch?v=0i0Ho-x7s_U">açık ve özgür İnternet'i baltalamak için çalışmaktadır</a> ve sonuç olarak desteklenmemektedir. Lütfen <a href="https://www.mozilla.org/tr/firefox/new/">Firefox</a>'ın veya kullanıcı kontrolü ve özgürlüğüne hâlâ değer veren herhangi başka bir tarayıcının en yeni sürümüne geçiş yapın. Anlayışınız için teşekkür ederiz. Daha fazla bilgi için şu siteyi ziyaret edin: <a href="${home_url}">${home_url.replace(
        "https://",
        ""
      )}</a>`,
    },
    de: {
      message: `Entschuldigung, aber der Browser, den Sie momentan verwenden, unterstützt die <a href="https://github.com/RupertBenWiser/Web-Environment-Integrity">"Web Environment Integrity API"</a>. Dieser Endnutzerfeindliche Code in Google-unterstützten Webbrowsern <a href="https://yewtu.be/watch?v=0i0Ho-x7s_U">bedroht das freie und offene Internet</a> und wird daher nicht unterstützt. Bitte verwenden Sie die neueste Version von <a href="https://www.mozilla.org/de/firefox/browsers/">Firefox</a> oder einem anderen Browser, der noch Wert auf die Rechte und Freiheiten des Endnutzers legt, um diese Website zu verwenden. Vielen Dank für Ihr Verständnis.`,
    },
    nl: {
      message: `Het spijt ons, maar de browser die u momenteel gebruikt lijkt de <a href="https://github.com/RupertBenWiser/Web-Environment-Integrity">Web Environment Integrity API</a> te ondersteunen. Deze gebruikersonvriendelijke toevoeging aan de door Google bestuurde browsers <a href="https://yewtu.be/watch?v=0i0Ho-x7s_U">ondermijnt het vrije en open internet</a> en wordt daarom niet ondersteund. Schakel aub over op de nieuwste versie van <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a> of een andere browser die nog enige waarde hecht aan het zelfbeschikkingsrecht van gebruikers om onze service te gebruiken. Bedankt voor uw begrip. Ga voor meer informatie naar <a href="${home_url}">${home_url.replace(
        "https://",
        ""
      )}</a>`,
    },
  };

  // detect Web Environment Integrity API
  if (navigator.getEnvironmentIntegrity !== undefined) {
    // fuck it
    const text = (translations[lang] ??
      translations[lang.split("-")[0]] ??
      translations["en-us"])["message"];

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
              overflow: auto !important;
              background: #ffffff !important;
              color: black !important;
              font-weight: bold !important;
              width: 100% !important;
              height: 100% !important;
              text-align: center !important;
              position: fixed !important;
              top: 0 !important;
              left: 0 !important;
              font-size: 2em !important;
              font-family: sans-serif !important;
              display: flex !important;
              z-index: 696969696969696969 !important;
              align-items: center !important;
          ">
              <div style="
                  padding-left: 5% !important;
                  padding-right: 5% !important;
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
          </div>
      `;
  }
})();
