import React, { InputHTMLAttributes } from 'react';

export function FormField({
  type,
  children,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="mb-1">
      <label>
        <span className="text-sm ms-1">{children}</span>
        <input
          className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="username"
          type={type}
          {...rest}
        />
      </label>
    </div>
  );
}
