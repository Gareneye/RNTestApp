import { common as commonLocale } from './locals/common.json';

type Keys = keyof typeof commonLocale;
type StringDict = { [index: string]: string };
type BindingFunc = (values?: StringDict) => string;

type L10nDictionary = {
  [index in Keys]: BindingFunc;
};

const currentLanguage = commonLocale;

export const L10n = (new Proxy(currentLanguage, {
  get: (lang, prop: keyof typeof commonLocale) => {
    if (!(prop in lang)) {
      return () => prop;
    }

    return (values?: StringDict) => {
      let text = lang[prop];

      if (values !== undefined) {
        Object.keys(values).forEach(name => {
          text = text.replace(new RegExp(`{${name}}`, 'gm'), values[name]);
        });
      }

      return text;
    };
  },
}) as unknown) as L10nDictionary;
