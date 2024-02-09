import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { localesList } from '@/common/i18n/config';

export default function LocaleSwitcher() {
	const t = useTranslations('LocaleSwitcher');
	const locale = useLocale();

	return (
		<LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
			{localesList.map((cur) => (
				<option key={cur} value={cur}>
					{t('locale', { locale: cur })}
				</option>
			))}
		</LocaleSwitcherSelect>
	);
}