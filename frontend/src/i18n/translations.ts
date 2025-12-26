import en from './en.json';
import zh from './zh.json';

export type Language = 'en' | 'zh';
export type TranslationKeys = typeof en;

const translations: Record<Language, TranslationKeys> = { en, zh };

/**
 * Get all UI strings for a specific language
 */
export function getUIStrings(lang: Language = 'en'): TranslationKeys {
  return translations[lang] || translations.en;
}

/**
 * Get a specific translation by dot-notation key
 * Example: t('zh', 'nav.home') returns '首页'
 */
export function t(lang: Language, key: string): string {
  const keys = key.split('.');
  let result: unknown = translations[lang];

  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      // Fallback to English
      result = translations.en;
      for (const fk of keys) {
        if (result && typeof result === 'object' && fk in result) {
          result = (result as Record<string, unknown>)[fk];
        } else {
          return key; // Return key if not found
        }
      }
      break;
    }
  }

  return typeof result === 'string' ? result : key;
}

/**
 * Detect language from URL pathname
 */
export function getLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith('/zh/') || pathname === '/zh') {
    return 'zh';
  }
  return 'en';
}

/**
 * Get the alternate language path for language switching
 */
export function getAlternatePath(pathname: string, targetLang: Language): string {
  const currentLang = getLanguageFromPath(pathname);

  if (currentLang === 'zh') {
    // Remove /zh prefix
    const path = pathname.replace(/^\/zh\/?/, '/');
    if (targetLang === 'en') {
      return path || '/';
    }
    return `/zh${path === '/' ? '' : path}`;
  }

  // Currently English
  if (targetLang === 'zh') {
    return `/zh${pathname === '/' ? '' : pathname}`;
  }
  return pathname;
}

/**
 * Get the English equivalent path (for hreflang x-default)
 */
export function getEnglishPath(pathname: string): string {
  return getAlternatePath(pathname, 'en');
}

/**
 * Get the Chinese equivalent path
 */
export function getChinesePath(pathname: string): string {
  return getAlternatePath(pathname, 'zh');
}

/**
 * Get HTML lang attribute value
 */
export function getHtmlLang(lang: Language): string {
  return lang === 'zh' ? 'zh-CN' : 'en';
}

/**
 * Get Open Graph locale value
 */
export function getOgLocale(lang: Language): string {
  return lang === 'zh' ? 'zh_CN' : 'en_US';
}
