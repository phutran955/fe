// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GuestPage from "./pages/guest";
import OwnerPage from "./pages/co-owner";
import RegisterPage from "./pages/guest/auth/register";
import LoginPage from "./pages/guest/auth/login";

// 🆕 import thêm layout & dashboard
import DashboardLayout from "./components/layouts";
import DashboardOwner from "./pages/co-owner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/owner/dashboard",
    element: (
      <DashboardLayout>
        <DashboardOwner />
      </DashboardLayout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
