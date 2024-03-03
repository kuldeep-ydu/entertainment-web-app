export default function AuthForm({
  title,
  body,
  footer,
  buttonLabel,
  onSubmit,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl shadow-md bg-secondary-dark p-7 w-full sm:w-[400px] flex flex-col gap-10 mx-6 *:min-w-0"
    >
      <h1 className="text-[32px]">{title}</h1>

      <div className="flex flex-col gap-4">{body}</div>

      <button type="submit">{buttonLabel}</button>

      <p className="text-center">{footer}</p>
    </form>
  );
}
