import { useTranslations } from 'next-intl';

export default function Terms() {
	const t = useTranslations('Terms');

	return (
		<div>
			{t('title')}
		</div>
	);
}
