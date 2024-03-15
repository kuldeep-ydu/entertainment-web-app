export default function Input({
  label,
  type = 'text',
  disabled,
  register,
  required,
  error,
  placeholder,
}) {
  return (
    <div>
      <label htmlFor={label} className="sr-only">
        {label}
      </label>

      <input
        className={`border-b-[1px] caret-accent ${error ? 'border-accent' : 'border-white'} block w-full border-opacity-50 bg-inherit px-4 py-3 placeholder-shown:text-opacity-50 focus-visible:border-opacity-100 focus-visible:text-opacity-100 focus-visible:outline-0`}
        type={type}
        id={label}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        autoComplete="off"
        {...register(label, {
          required,
        })}
      />
      {error && (
        <span role="alert" className="mt-1 block text-[13px] text-accent">
          {error.message}
        </span>
      )}
    </div>
  );
}
