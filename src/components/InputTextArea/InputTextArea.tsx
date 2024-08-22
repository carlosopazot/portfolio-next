interface InputTextAreaProps {
  label: string
  name: string
  id: string
  rows: number
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  required?: boolean
}

const InputTextArea = ({
  label,
  name,
  id,
  rows,
  value,
  required,
  onChange
}: InputTextAreaProps) => {
  return (
    <div className='relative'>
      <textarea
        name={name}
        id={id}
        rows={rows}
        className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder-transparent focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition ease-in-out peer bg-transparent`}
        placeholder=' ' // Empty placeholder to trigger the floating label behavior
        value={value}
        onChange={onChange}
        required={required}
      />
      <label
        htmlFor={id}
        className={`absolute left-3.5 top-2.5 text-sm text-gray-500 transform origin-[0] transition-all duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3.5 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:left-3.5 dark:text-white rounded-md peer-focus:bg-white dark:peer-focus:bg-slate-800 peer-focus:px-2 ${
          value
            ? '-translate-y-6 scale-75 left-3.5 text-indigo-600 bg-white dark:bg-slate-800 px-2'
            : ''
        }`}
      >
        {label}
      </label>
    </div>
  )
}

export default InputTextArea
