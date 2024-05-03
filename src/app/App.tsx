// import { useState } from "react";
// import { Header } from "src/shared/ui/header/header.tsx";
// import { Footer } from "src/shared/ui/footer/footer.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "src/shared/routers/router.tsx";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Header></Header>
      <Footer /> */}
    </>
  );
}

export default App;
