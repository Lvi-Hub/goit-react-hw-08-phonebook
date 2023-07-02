import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css'

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.submitForm} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input className={css.formInput} type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input className={css.formInput} type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input className={css.formInput} type="password" name="password" />
      </label>
      <button className={css.submitBtn} type="submit">Register</button>
    </form>
  );
};
