import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyle from "@styles/global";
import theme from "@styles/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import pageRoutes from "@/routes/pageRoutes";


const App = () => {
  const router = createBrowserRouter([...pageRoutes]);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
