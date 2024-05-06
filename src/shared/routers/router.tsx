import { createBrowserRouter } from "react-router-dom";
import { LogIn } from "src/features/logIn/logIn.tsx";
import { SignUp } from "src/features/signUp/signUp.tsx";
import { MainPage } from "src/pages/mainPage/mainPage.tsx";
import { CommonLayout } from "src/shared/ui/layout/commonLayout.tsx";
import { ErrorPage } from "src/pages/errorPage/errorPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
]);
