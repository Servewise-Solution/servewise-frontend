import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/toast-overides.css";
import { UserRoutes } from "./routes/UserRoutes";
import { ProviderRoutes } from "./routes/ProviderRoutes";
import { AdminRoutes } from "./routes/AdminRoutes";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { PageNotFound } from "./components/common/PageNotFound";
import { LandingPage } from "./pages/LandingPage";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            closeButton={false}
            theme="light"
          />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/user/*" element={<UserRoutes />} />
            <Route path="/provider/*" element={<ProviderRoutes />} />
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
