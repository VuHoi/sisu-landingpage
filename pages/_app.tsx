import "@styles/main.css";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";

import { store } from "@config/reduxStore";
import { AuthProvider } from "@contexts/AuthProvider";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

export interface MyAppProps extends AppProps {
  err?: Error;
}

function MyApp({ Component, pageProps, err }: MyAppProps) {
  return (
    <Provider store={store}>
        <AuthProvider>
          <ToastContainer />
          <Component {...pageProps} err={err} />
        </AuthProvider>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
