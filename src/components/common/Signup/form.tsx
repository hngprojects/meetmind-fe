import { Signupschema, type SignUpType } from '@/schemas/signUpSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import Buttons from '@/components/props/buttons';
import axios from 'axios';
import api from '@/lib/api';
import { useSignupStore } from '@/store/signupStore';
import { useNavigate } from 'react-router-dom';

const Signform = () => {
  const navigate = useNavigate();
  // show password
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // import zustand store
  const {
    isLoading,
    serverError,
    focusedFields,
    setIsLoading,
    setServerError,
    handleFocus,
    handleBlur,
    setIsSuccess,
  } = useSignupStore();

  // import zustand store
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<SignUpType>({
    resolver: zodResolver(Signupschema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const getInputStyle = (field: keyof SignUpType) => {
    if (errors[field])
      return 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]';
    if (focusedFields[field] && !dirtyFields[field])
      return 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]';
    if (dirtyFields[field])
      return 'border-green-500 focus:border-green-500 focus:ring-green-500';
    return 'border-[#B5B7BD]';
  };

  const SubmitData = async (data: SignUpType) => {
    try {
      setIsLoading(true);
      setServerError(null);
      setIsSuccess(false);

      const response = await api.post(
        'https://api.staging.meetmind.hng14.com/api/v1/auth/signup',
        data
      );
      console.log('Success:', response.data);
      setIsSuccess(true);
      navigate('/signup');

      // handle success — e.g. save token, redirect
      // localStorage.setItem('token', response.data.token);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const responseData = error.response?.data;
        const message =
          responseData?.error?.details?.[0]?.msg ||
          responseData?.message ||
          'Something went wrong. Try again.';
        setServerError(message);
      } else {
        setServerError('Unexpected error. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-[#FEFEFF] flex flex-col gap-2 p-6 rounded-2xl w-full">
      <h1 className="text-center text-[#0F172A] font-bold text-2xl">Sign up</h1>
      <form
        onSubmit={handleSubmit(SubmitData)}
        className="flex flex-col gap-3.5"
      >
        {/* server error */}
        {serverError && (
          <p className="text-red-500 text-sm text-center bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {serverError}
          </p>
        )}

        {/* name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-base text-[#0F0D0B]">
            Name
          </label>
          <input
            className={`border h-8 rounded-lg px-3.5 py-4 focus:outline-none focus:ring-0 ${getInputStyle('name')}`}
            type="text"
            id="name"
            {...register('name')}
            onFocus={() => handleFocus('name')}
            onBlur={() => handleBlur('name')}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-base text-[#0F0D0B]">
            Email
          </label>
          <input
            className={`border h-8 rounded-lg px-3.5 py-4 focus:outline-none focus:ring-0 ${getInputStyle('email')} `}
            type="email"
            id="email"
            {...register('email')}
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email')}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-base text-[#0F0D0B]">
            Password
          </label>
          <div className="w-full relative">
            <input
              className={`border h-8 rounded-lg px-3.5 py-4 w-full focus:outline-none focus:ring-0 ${getInputStyle('password')}`}
              type={showPassword ? 'text' : 'password'}
              id="password"
              {...register('password')}
              onFocus={() => handleFocus('password')}
              onBlur={() => handleBlur('password')}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute text-gray-400 right-2 top-2 hover:cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <Buttons
          text={isLoading ? 'Signing up...' : 'Sign up'}
          type="submit"
          style="bg-[#02505E] hover:bg-[#02505e]/80"
          disabled={isLoading}
        />
      </form>
    </section>
  );
};

export default Signform;
