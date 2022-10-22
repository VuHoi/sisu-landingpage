import { STRAPI_API_URL } from 'config/env';

const getMedia = (media: { url?: string; thumbnail?: string } | any) => {
  const imageUrl = media?.url?.startsWith('/') ? `${STRAPI_API_URL}${media?.url}` : media?.url;
  return imageUrl || '';
};

const getImageType = (picture: any, type: string) => {
  switch (type) {
    case 'default':
      return picture;
    default:
      return (
        picture?.data.attributes.formats?.data.attributes[type] ||
        picture?.data.attributes.formats?.data.attributes.thumbnail ||
        null
      );
  }
};

export { getImageType, getMedia };
