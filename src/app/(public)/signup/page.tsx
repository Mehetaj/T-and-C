'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PageBanner from '@/components/public/page-banner';

interface SignUpForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignUpForm>();
  const password = watch('password');

  const onSubmit = async (data: SignUpForm) => {
    try {
      if (data.password !== data.confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      if (response.ok) {
        router.push('/signin');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Something went wrong');
      }
    } catch {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <main>
      <PageBanner
        title="SIGN UP"
        subtitle="Create an account"
        backgroundImage="/g2.jpg?height=1000&width=2000"
        height="medium"
      />

      <div className="max-w-lg mx-auto my-10 bg-white border border-gray-200 rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="example@mail.com"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (value) => value === password || 'Passwords do not match',
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Re-type your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-600 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {error && <p className="text-red-600 text-center">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-white bg-primary hover:bg-primary-dark rounded-lg shadow transition duration-300"
          >
            Sign Up
          </button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link href="/signin" className="text-primary hover:underline">
              Sign in here
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
