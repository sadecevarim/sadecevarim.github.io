/**
 * Türkçe karakterleri koruyarak metni büyük harfe çevirir
 * CSS text-transform: uppercase Türkçe karakterlerde sorun çıkardığı için bu fonksiyon kullanılıyor
 */
export function toUpperCaseTR(text: string): string {
  return text.toLocaleUpperCase('tr-TR');
}

/**
 * Türkçe karakterleri koruyarak metni küçük harfe çevirir
 */
export function toLowerCaseTR(text: string): string {
  return text.toLocaleLowerCase('tr-TR');
}

/**
 * İlk harfi büyük yapar (Türkçe karakter desteği ile)
 */
export function capitalizeFirstTR(text: string): string {
  if (!text) return '';
  return text.charAt(0).toLocaleUpperCase('tr-TR') + text.slice(1);
}
