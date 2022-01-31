import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/subcomps/loading";
const Industry = React.lazy(() => import("./components/mainpage/industry"));
const Product = React.lazy(() => import("./components/mainpage/product"));
const Aboutus = React.lazy(() => import("./components/mainpage/aboutus"));
const Contactus = React.lazy(() => import("./components/mainpage/contactus"));
const Home = React.lazy(() => import("./components/mainpage/home"));
const Inquiry = React.lazy(() => import("./components/mainpage/inquiry"));
const Quality = React.lazy(() => import("./components/mainpage/quality"));
const Nav = React.lazy(() => import("./components/subcomps/nav/nav"));

function App() {
  return (
    <div className="text-white">
      <Nav />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contactus />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="inquiry" element={<Inquiry />} />
          <Route path="quality" element={<Quality />} />
          <Route path="product" element={<Product />} />
          <Route path="industry" element={<Industry />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
