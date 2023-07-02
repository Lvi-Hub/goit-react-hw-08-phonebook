import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import  AppNav from '../AppNav';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <AppNav />
      <div className={css.container}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
