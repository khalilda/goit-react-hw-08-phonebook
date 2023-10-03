import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Header } from './Header/Header';
// import { BrowserRouter as Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));

export const App = () => {
  // const dispatch = useDispatch();
  // const token = useSelector(getToken);

  // useEffect(() => {
  //   if (token) {
  //     dispatch(fetchCurrentUser());
  //   }
  //   return;
  // }, [dispatch, token]);

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/registration" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
