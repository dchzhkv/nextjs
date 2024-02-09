import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/common/i18n/i18n.ts');

const nextjsConfig = withNextIntl({});

export default nextjsConfig;