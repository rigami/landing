import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default (namespaces) => async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, namespaces) } });
