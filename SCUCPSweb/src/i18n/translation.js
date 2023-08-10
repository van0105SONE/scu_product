import  i18n  from "./index";
const Trans = {
    get supportedLocales(){
        return  [
          {flag:'&#127473', val: 'lao'},
          {flag:'us', val: 'eng'}
        ] 
    },

    set currentLocale(newLocale){
      i18n.global.locale.value = newLocale;
    },

    async switchLanguage(newLocale){
       Trans.currentLocale = newLocale
       document.querySelector("html").setAttribute("lang", newLocale)
    }
}

export default Trans