import { createBrowserRouter } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
// import AdminLayout from '../layouts/AdminLayout';
import ErrorPage from '../pages/error/Error';
import HomePage from '../pages/home/Home';
import LoginPage from '../pages/login/Login';
import RegisterPage from '../pages/register/Register';
import EnterEmailPage from '../pages/enter-email/EnterEmail';
import SendPasswordPage from '../pages/send-password/SendPassword';

import SavePost from '../pages/save-post/SavePost';
import PostDetail from '../pages/post-detail/PostDetail';
import HistoryMoney from '../pages/history-money/HistoryMoney';
import Recharge from '../pages/history-money/recharge';
import AddUser from '../pages/user-detail/AddUser';
import ChangePassWord from '../pages/user-detail/ChangePassword';
import UserInfo from '../pages/user-detail/UserInfo';

import PricingPage from '../pages/pricing/Pricing';
import PostsPage from '../pages/posts/Posts';
import DetailPost from '../pages/posts/DetailPost';


const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage />}],
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/enter-email',
    element: <EnterEmailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/send-password',
    element: <SendPasswordPage />,
    errorElement: <ErrorPage />,
  },
  {

    path: '/home',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/save-post',
    element: <SavePost />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/post-detail',
    element: <PostDetail />,
    errorElement: <ErrorPage />,
  },

  {
    path: '/history-money',
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HistoryMoney /> }],
  },
  {
    path: '/history-money/history',
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Recharge /> }],
  },
  {
    path: 'admin/user/add-user',
    element: <AddUser />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'admin/user/changepassword',
    element: <ChangePassWord />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'admin/userInfo',
    element: <UserInfo />,

  },
  { path:'/pricing',
    element: <PricingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/posts',
    element: <PostsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/posts/detail',
    element: <DetailPost />,
    errorElement: <ErrorPage />,
  },
  // Admin routes will be updated soon
]);

export default router;
