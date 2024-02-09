'use client';

import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import GoogleSignInButton from '../GoogleSignInButton';
import NavigationLink from '../NavigationLink';

const FormSchema = z.object({
	email: z.string().min(1, 'Email is required').email('Invalid email'),
	password: z
		.string()
		.min(1, 'Password is required')
		.min(8, 'Password must have at least 8 characters')
});

const SignInForm = () => {
	const router = useRouter();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
		const signInData = await signIn('credentials', {
			email: values.email,
			password: values.password,
			redirect: false
		});

		if (signInData?.error) {
			form.setError('email', {
				type: 'manual',
				message: 'No user found or invalid password',
			});
		} else {
			router.refresh();
			router.push('/account');
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
				<div className='space-y-2'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder='mail@example.com' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										type='password'
										placeholder='Enter your password'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button className='w-full mt-6' type='submit'>
					Sign in
				</Button>
			</form>
			<div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
				or
			</div>
			<GoogleSignInButton>Sign in with Google</GoogleSignInButton>
			<p className='text-center text-sm text-gray-600 mt-2'>
				If you don&apos;t have an account, please&nbsp;
				<NavigationLink href="/sign-up" className='text-blue-500 hover:underline'>Sign up</NavigationLink>
			</p>
		</Form>
	);
};

export default SignInForm;
