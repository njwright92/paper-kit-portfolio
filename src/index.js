import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
const Index = React.lazy(() => import("views/Index.js"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Index />
  </Suspense>
);
