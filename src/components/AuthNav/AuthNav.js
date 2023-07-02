import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export default function AuthNav(){
  return (
    <div>
      <NavLink className={css.navlink} to="/register">
        Register
      </NavLink>
      <NavLink to="/login">
        Log In
      </NavLink>
    </div>
  );
};
