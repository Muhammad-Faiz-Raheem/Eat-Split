import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainProvider } from "./context/MainContext";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import Welcome from "./pages/Welcome";
import PageNotFound from "./ui/PageNotFound";
import ProtectedRoute from "./ui/ProtectedRoute";
import ProtectedLoginRoute from "./ui/ProtectedLoginRoute";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MainProvider>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <Welcome />
                </ProtectedRoute>
              }
            >
              <Route index element={<Welcome />} />
            </Route>
            <Route
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            >
              <Route path="/home" element={<Home />} />
            </Route>
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              element={
                <ProtectedLoginRoute>
                  <Authentication />
                </ProtectedLoginRoute>
              }
            >
              <Route path="/login" element={<Authentication />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </MainProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "grey",
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
