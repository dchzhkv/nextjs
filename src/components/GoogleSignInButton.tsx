import { FC, ReactNode, useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button } from './ui/button';
import { LoaderIcon } from './icons';

interface GoogleSignInButtonProps {
	children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const loginWithGoogle = async () => {
		try {
			setIsLoading(true);
			await signIn('google', { callbackUrl: '/account' });
		} catch (err) {
			setIsLoading(false);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Button disabled={isLoading} onClick={loginWithGoogle} className='w-full'>
			{isLoading && (<LoaderIcon />
			)}
			{children}
		</Button>
	);
};

export default GoogleSignInButton;
