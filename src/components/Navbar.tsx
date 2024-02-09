import { getUserSession } from '@/lib/auth';
import UserAccountNav from './UserAccountNav';
import { buttonVariants } from './ui/button';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

const Navbar = async () => {
	const { isAuthenticated } = await getUserSession();

	const composeSignInOutLink = () => {
		return isAuthenticated ? (<UserAccountNav />) : (
			<NavigationLink className={buttonVariants()} href='/sign-in'>Sign in</NavigationLink>
		);
	};

	return (
		<div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
			<div className='container flex items-center justify-between'>
				<div>
					<div className='inline-flex mr-10'>
						<NavigationLink href="/">Logo</NavigationLink>
					</div>
					<NavigationLink href="/terms">Terms</NavigationLink>
					<NavigationLink href="/privacy">Privacy</NavigationLink>
				</div>
				<div className='flex items-center'>
					<div className='mr-5'>
						<LocaleSwitcher />
					</div>
					{composeSignInOutLink()}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
