import AppErrorBoundary from "@/common/errorComponents/AppErrorBoundary";
import WelcomeLoader from "@/common/loaders/WelcomeLoader";
import Layout from "@/layout/Layout";
import { lazy } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import routes from "./routes";

type ExtendedRouteObject = RouteObject & {
  protected?: boolean;
  anonymousOnly?: boolean;
};

const Login = lazy(() => import("@/pages/auth/LoginPage"));

const protectedRoutes: ExtendedRouteObject[] = [
  {
    path: "/",
    hasErrorBoundary: true,
    element: <Layout />,
    errorElement: <AppErrorBoundary />,
    protected: true,
    children: [
      // {
      //   path: routes.securityRoutes.DASHBOARD,
      //   element: <SecurityDashboard />,
      //   index: true,
      // },
    ],
  },
];

const unAuthenticatedOnlyRoute: ExtendedRouteObject[] = [
  {
    path: routes.parentRoutes.LOGIN,
    element: <Login />,
    anonymousOnly: true,
    // errorElement: <ErrorBoundary />,
  },
];

const unProtectedRoute: ExtendedRouteObject[] = [
  {
    path: "/",
    hasErrorBoundary: true,
    element: <Layout />,
    errorElement: <AppErrorBoundary />,
    children: [],
  },
];

const allRoutes: ExtendedRouteObject[] = [
  ...unProtectedRoute,
  ...unAuthenticatedOnlyRoute,
  ...protectedRoutes,
];

const appRoutes = allRoutes.map((route) => {
  // if (route?.protected && route?.element) {
  //   route.element = <Protected component={route.element} />;
  // }
  // if (route?.anonymousOnly && route?.element) {
  //   route.element = <UnAuthenticatedOnly component={route.element} />;
  // }
  return route;
});

const router = createBrowserRouter(appRoutes);
export default function AppRouter() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<WelcomeLoader />} />
    </>
  );
}
