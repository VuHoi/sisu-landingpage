import { I18nActiveNamespaces } from '../../types/i18n';

export type OverviewConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<'common'>>;
};

export const overviewConfig: OverviewConfig = {
  i18nNamespaces: ['common'],
} as const;
