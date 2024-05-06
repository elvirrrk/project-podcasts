import { RouterProvider } from "react-router-dom";
import { router } from "src/shared/routers/router.tsx";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
