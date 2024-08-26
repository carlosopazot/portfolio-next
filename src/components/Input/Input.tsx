import React from 'react'

interface InputProps {
  type: string
  name: string
  id: string
  label: string
  autoComplete?: string
  value: string
  required?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  type,
  name,
  id,
  label,
  autoComplete,
  value,
  required,
  onChange
}: InputProps) => {
  return (
    <div className='relative'>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        autoComplete={autoComplete}
        onChange={onChange}
        required={required}
        className={`block w-full rounded-md px-3.5 py-3 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder-transparent focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition ease-in-out peer bg-transparent`}
        placeholder=''
      />
      <label
        htmlFor={id}
        className={`absolute left-3.5 top-2.5 text-sm text-gray-500 transform origin-[0] transition-all duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3.5 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:left-3.5 dark:text-white rounded-md peer-focus:bg-white dark:peer-focus:bg-slate-800 peer-focus:px-2 ${
          value
            ? '-translate-y-5 scale-75 left-3.5 bg-white dark:bg-slate-800 px-2'
            : ''
        }`}
      >
        {label}
      </label>
    </div>
  )
}

export default Input
