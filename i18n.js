// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Import or define your translations here
const resources = {
  en: {
    translation: {
      "welcome": "Welcome",
      "signin": "signin",
      // Add other translations here
    }
  },
  es: {
    translation: {
      "welcome": "Bienvenido",
      "Sign In": "Iniciar sesión",
      // Add other translations here
    }
  },
  ur: {
    translation: {
        "welcome": "خوش آمدید",
        "login": "لاگ ان کریں",
        "Sign In": "سائن ان کریں",
        "Or Sign In with": "سائن ان کریں ساتھ",
        "Do not have an account?": "کیا آپ کے پاس اکاؤنٹ نہیں ہے؟",
        "sign_up": "سائن اپ کریں",
        "Forgot password?": "پاس ورڈ بھول گئے؟",
        "home": "ہوم",
        "STARTER": "شروع کرنے والا",
        "Email": "ای میل",
        "Password": "پاس ورڈ",
        "Remember me": "مجھے یاد رکھیں",
        "starter": "اسٹارٹر",
        "dishes": "کھانے",
        "details": "تفصیلات",
        "deliver": "پہنچائیں",
        "starter_screen_title": "اسٹارٹر اسکرین",
        "food_items": "کھانے کی اشیاء",
        "no_food_items": "کوئی کھانے کی اشیاء دستیاب نہیں ہیں",
        "fetching_food_items": "کھانے کی اشیاء حاصل کی جا رہی ہیں...",
        "SOMEWHAT LOCAL": "کچھ حد تک مقامی",
        "SOMEWHAT SOOPER": "کچھ حد تک سوپر",
        "CHEEZY TREATS": "چیسی ٹریٹس"
      }
      
      }
  // Add more languages as needed
};

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
