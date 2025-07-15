import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  vi: {
    translation: {
      'main_title': 'Heo Vàng BBQ',
      'main_slogan': 'Nhà hàng BBQ Hàn Quốc số 1 tại Việt Nam',
      'booking': 'Đặt bàn',
      'view_location': 'Xem vị trí',
      'open_time': '16:00 - 23:30',
      // Thêm các key khác tuỳ ý
    },
  },
  ko: {
    translation: {
      'main_title': '황금돼지 바비큐',
      'main_slogan': '베트남 최고의 한국식 바비큐 레스토랑',
      'booking': '예약하기',
      'view_location': '위치 보기',
      'open_time': '16:00 - 23:30',
      // Thêm các key khác tuỳ ý
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko', // Ngôn ngữ mặc định
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 