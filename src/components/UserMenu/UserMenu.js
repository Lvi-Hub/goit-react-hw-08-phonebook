import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.container}>
      <p className={css.title}>Welcome, {user.name}</p>
      <button className={css.logoutBtn} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
