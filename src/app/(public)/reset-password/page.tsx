'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import PageBanner from '@/components/public/page-banner';

interface ResetPasswordForm {
  email: string;
}

export default function ResetPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordForm>();

  const onSubmit = async (data: ResetPasswordForm) => {
    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Something went wrong');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <main>
        <PageBanner
          title="RESET PASSWORD"
          subtitle="Check your email"
          backgroundImage="/g3.jpg?height=1000&width=2000"
          height="medium"
        />
        
        <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Check your email</h2>
          <p className="text-gray-600 mb-6">
            If an account exists with the email you provided, we've sent password reset instructions to your email address.
          </p>
          <Link
            href="/signin"
            className="text-primary hover:underline"
          >
            Return to sign in
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <PageBanner
        title="RESET PASSWORD"
        subtitle="Recover your account"
        backgroundImage="/g3.jpg?height=1000&width=2000"
        height="medium"
      />
      
      <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {error && (
            <div className="text-sm text-red-600">{error}</div>
          )}

          <div className="text-sm">
            Remember your password?{' '}
            <Link href="/signin" className="text-primary hover:underline">
              Sign in here
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </main>
  );
}