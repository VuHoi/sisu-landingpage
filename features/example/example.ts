import { I18nActiveNamespaces } from '../../types/i18n';

export type OverviewConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<'common' | 'overview'>>;
};

export const overviewConfig: OverviewConfig = {
  i18nNamespaces: ['common', 'overview'],
} as const;
