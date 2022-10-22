export const BASE_PATH = process.env.BASE_PATH;
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;
export const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || '';
export const HOME_PAGE = process.env.NEXT_PUBLIC_HOME_PAGE;
export const FRONTEND_HOME_PAGE = process.env.NEXT_PUBLIC_FRONTEND_HOME_PAGE;
export const GOOGLE_MAP_KEY = process.env.GOOGLE_MAP_KEY;

export const SEO = {
  title: '',
  description: '',
  url: '',
  image: '/',
  favicon: BASE_PATH + '/favicon/favicon.png',
};
