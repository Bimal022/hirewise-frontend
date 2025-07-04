import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Simple form validation
  const validate = () => {
    const errors = {};
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.password) errors.password = 'Password is required';
    return errors;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    // TODO: Handle login logic (API call, context update, etc.)
    alert('Login successful! (Demo)');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Sign in to Hirewise</h2>
        <div onSubmit={handleSubmit}>
          {/* Email */}
          <label className="block mb-2 font-semibold" htmlFor="email">
            Email
          </label>
          <div className="relative mb-4">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <label className="block mb-2 font-semibold" htmlFor="password">
            Password
          </label>
          <div className="relative mb-6">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500 hover:text-blue-600"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
          >
            Sign In
          </button>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <span className="text-blue-600 hover:underline font-semibold cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;