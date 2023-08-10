import {createI18n } from "vue-i18n"
import pluralRule from './rule/pluralization'
import eng from './locales/eng.json'
import lao from './locales/lao.json'


const translation = {
eng,
lao
}


export default createI18n({
    locale: 'lao',
    fallbackFormat: 'eng',
    legacy: false,
    globalInjection: true,
    messages:{eng:eng,lao:lao},
    pluralizationRules: pluralRule
})