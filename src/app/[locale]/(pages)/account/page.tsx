import { getUserSession } from '@/lib/auth';

const page = async () => {
	const { session, isAuthenticated } = await getUserSession();

	if (isAuthenticated && session.user) {
		return (
			<h2 className='test-2xl'>
				Account page - welcome back {session?.user.username || session?.user.name}
			</h2>
		);
	}

	return (
		<h2 className='test-2xl'>
			Please login to see this page
		</h2>
	);
}

export default page;