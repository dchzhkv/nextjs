import { useTranslations } from 'next-intl';

export default function Privacy() {
	const t = useTranslations('Privacy');

	return (
		<div>
			{t('title')}
		</div>
	);
}
