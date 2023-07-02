import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'redux/auth/operations';


const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  console.log(isRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}/>
      <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
      <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactPage />} />}/>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Route>
  </Routes>
  );
};