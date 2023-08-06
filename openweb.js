(async () => {
  "use strict";

  let lang =
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

  // fetch translation using ajax
  const translations_request = await fetch("https://cdn.jsdelivr.net/gh/Young-Lord/fight-for-the-open-web@main/openweb_translation.json")
  const translations = await translations_request.json();

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
