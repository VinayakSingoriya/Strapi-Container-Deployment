import logo from "./extensions/logo.png"
import favicon from "./extensions/favicon.ico";

const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  auth : {
    logo : logo
  },
  head : {
    favicon : favicon,
  },
  menu : {
    logo : logo
  },
  translations : {
    en : {
      'Auth.form.welcome.title' : "Welcome Back, Pranjal",
      'Auth.form.welcome.subtitle' : "Please Login In to your dashboard",
      'app.components.LeftMenu.navbrand.title' : "Pranjal's Dashboard",
      'HomePage.helmet.title' : "Dashboard",
      'Auth.helmet.title' : "Homepage"
    },
  },
  notifications: { release: false },
};

const bootstrap = app => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
