import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLoggedIn);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    if (isLogged) {
      form.reset();
    }
    console.log('isLogged:' + isLogged);
  };

  return (
    <form className={css.submitForm} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button className={css.submitBtn} type="submit">
        Log In
      </button>
    </form>
  );
};
