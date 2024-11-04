import AppErrorBoundary from "@/common/errorComponents/AppErrorBoundary";
import WelcomeLoader from "@/common/loaders/WelcomeLoader";
import Layout from "@/layout/Layout";
import DevIconsPage from "@/pages/DevIconsPage";
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
const Gallery = lazy(() => import("@/pages/gallery/Gallery"));
const ProfilePage = lazy(() => import("@/pages/user/ProfilePage"));
const ProjectPage = lazy(() => import("@/pages/project/ProjectPage"));
const ContractorsPage = lazy(() => import("@/pages/project/Contractors"));
const SupplierPaymentPage = lazy(
  () => import("@/pages/project/SupplierPayment")
);
const StoreKeeperPage = lazy(() => import("@/pages/project/StoreKeeper"));
const ReportPage = lazy(() => import("@/pages/project/Report"));
const EmployeePage = lazy(() => import("@/pages/project/Employee"));


const protectedRoutes: ExtendedRouteObject[] = [
  {
    path: "/",
    hasErrorBoundary: true,
    element: <Layout />,
    errorElement: <AppErrorBoundary />,
    protected: true,
    children: [
      {
        path: routes.parentRoutes.HOME,
        element: <ProfilePage />,
        index: true,
      },
      {
        path: routes.parentRoutes.GALLERY,
        element: <Gallery />,
      },
      {
        path: routes.parentRoutes.PROJECT,
        element: <ProjectPage />,
      },
      {
        path: routes.parentRoutes.Employee,
        element: <EmployeePage />,
      },
      {
        path: routes.parentRoutes.CONTRACTOR,
        element: <ContractorsPage />,
      },
      {
        path: routes.parentRoutes.SUPPLIER_PAYMENT,
        element: <SupplierPaymentPage />,
      },
      {
        path: routes.parentRoutes.STORE_KEEPER,
        element: <StoreKeeperPage />,
      },
      {
        path: routes.parentRoutes.REPORT,
        element: <ReportPage />,
      },
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
  {
    path: "/dev-x-icons",
    element: <DevIconsPage />,
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
