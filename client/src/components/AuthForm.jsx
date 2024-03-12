import { Form, useSubmit } from 'react-router-dom';

export default function AuthForm({
  title,
  body,
  footer,
  buttonLabel,
  handleSubmit,
  submitting,
}) {
  const submit = useSubmit();

  const parseData = (data) => {
    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      if (!data[key]) return;

      if (value instanceof FileList) {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    }

    return formData;
  };

  return (
    <Form
      onSubmit={handleSubmit((data) =>
        submit(parseData(data), {
          method: 'POST',
          encType: 'multipart/form-data',
        }),
      )}
      className={`rounded-xl shadow-md bg-secondary-dark p-7 w-full sm:w-[400px] flex flex-col ${title === 'Login' ? 'gap-9' : 'gap-5'} mx-6 *:min-w-0`}
    >
      <h1 className="text-[32px]">{title}</h1>

      <div className="flex flex-col gap-4">{body}</div>

      <button
        disabled={submitting}
        className="py-3 w-full grid place-content-center bg-accent hover:bg-white focus-visible:bg-white hover:text-secondary-dark focus-visible:text-secondary-dark transition rounded-md"
        type="submit"
      >
        {buttonLabel}
      </button>

      <p className="text-center">{footer}</p>
    </Form>
  );
}
