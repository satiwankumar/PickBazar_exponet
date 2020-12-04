import React, { useContext, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  LOGIN,
  FORGOT,
  PRODUCTS,
  CATEGORY,
  DASHBOARD,
  ORDERS,
  SETTINGS,
  CUSTOMERS,
  COUPONS,
  STAFF_MEMBERS,
  PROFILE,
  SITE_SETTINGS,
  RESET_CODE,
} from './settings/constants';
import AuthProvider, { AuthContext } from './context/auth';
import { InLineLoader } from './components/InlineLoader/InlineLoader';
const Products = lazy(() => import('./containers/Products/Products'));
const AdminLayout = lazy(() => import('./containers/Layout/Layout'));
const Dashboard = lazy(() => import('./containers/Dashboard/Dashboard'));
const Category = lazy(() => import('./containers/Category/Category'));
const Orders = lazy(() => import('./containers/Orders/Orders'));
const Settings = lazy(() => import('./containers/Settings/Settings'));
const SiteSettingForm = lazy(() =>
  import('./containers/SiteSettingForm/SiteSettingForm')
);
const StaffMembers = lazy(() =>
  import('./containers/StaffMembers/StaffMembers')
);
const Profile = lazy(() =>
  import('./containers/Profile/Profile1')
);
const Customers = lazy(() => import('./containers/Customers/Customers'));
const Coupons = lazy(() => import('./containers/Coupons/Coupons'));
const Login = lazy(() => import('./containers/Login/Login'));
const Forgot = lazy(() => import('./containers/Login/Forgot'))
const Reset_Code = lazy(() => import('./containers/Login/ResetCode'))
const NotFound = lazy(() => import('./containers/NotFound/NotFound'));

/**
 *
 *  A wrapper for <Route> that redirects to the login
 * screen if you're not yet authenticated.
 *
 */

function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

const Routes = () => {
  return (
    <AuthProvider>
      <Suspense fallback={<InLineLoader />}>
        <Switch>
          <PrivateRoute exact={true} path={DASHBOARD}>
            <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <Dashboard />
              </Suspense>
            </AdminLayout>
          </PrivateRoute>
          <PrivateRoute path={PRODUCTS}>
            <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <Products />
              </Suspense>
            </AdminLayout>
          </PrivateRoute>
          <PrivateRoute path={CATEGORY}>
            <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <Category />
              </Suspense>
            </AdminLayout>
          </PrivateRoute>
          <PrivateRoute path={ORDERS}>
            <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <Orders />
              </Suspense>
            </AdminLayout>
          </PrivateRoute>
          <PrivateRoute path={CUSTOMERS}>
            <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <Customers />
              </Suspense>
            </AdminLayout>
          </PrivateRoute>
          <PrivateRoute path={COUPONS}>
            <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <Coupons />
              </Suspense>
            </AdminLayout>
          </PrivateRoute>
          <PrivateRoute path={SETTINGS}>
            <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <Settings />
              </Suspense>
            </AdminLayout>
          </PrivateRoute>
          <PrivateRoute path={STAFF_MEMBERS}>
            <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <StaffMembers />
              </Suspense>
            </AdminLayout>
          </PrivateRoute>
          <PrivateRoute path={SITE_SETTINGS}>
            <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <SiteSettingForm />
              </Suspense>
            </AdminLayout>
          </PrivateRoute>
          <PrivateRoute path={PROFILE}>
            <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <Profile/>
              </Suspense>
            </AdminLayout>
          </PrivateRoute>
          <Route path={LOGIN}>
            <Login />
          </Route>
          <Route path={FORGOT}>
            <Forgot/>
          </Route>
          <Route path={RESET_CODE}>
            <Reset_Code/>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </AuthProvider>
  );
};

export default Routes;
