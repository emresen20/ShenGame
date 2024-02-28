import { Linking } from 'react-native';

export const handlePrivacyPolicyPress = async () => {
  const url = 'https://doc-hosting.flycricket.io/denizlim-oyunu-privacy-policy/f2e5fc94-d326-4626-a71c-f4ba5b3f1a95/privacy';
  // Link'i aç
  Linking.openURL(url).catch((err) => console.error('Bağlantıyı açarken bir hata oluştu', err));
};