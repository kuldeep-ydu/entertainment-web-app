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
        className="border-b-[1px] border-white placeholder-shown:text-opacity-50 border-opacity-50 focus-visible:border-opacity-100 focus-visible:text-opacity-100 focus-visible:outline-0 px-4 py-3 bg-inherit block w-full"
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        {...register(label, { required })}
      />
      {error && <span role="alert">{error.message}</span>}
    </div>
  );
}
