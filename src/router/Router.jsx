import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "../Home";
// import { Page1 } from "../Page1";
// import { Page2 } from "../Page2";
// import { Page1DetailA } from "../Page1DetailA";
// import { Page1DetailB } from "../Page1DetailB";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Outlet />}>
        {Page1Routes.map((route) => {
          if (route.path) {
            return (
              <Route key={route.path} path={route.path} element={route.child} />
            );
          } else {
            return <Route key={route.path} index element={route.child} />;
          }
        })}
        {/* before Page1Routes file division */}
        {/* <Route index element={<Page1 />} />
        <Route path="detailA" element={<Page1DetailA />} />
        <Route path="detailB" element={<Page1DetailB />} /> */}
      </Route>
      {/* Not so good: children in same level (/page1, /page1/detailX) */}
      {/* <Route exact path="/page1" element={<Page1 />} />
    <Route path="/page1/detailA" element={<Page1DetailA />} />
    <Route path="/page1/detailB" element={<Page1DetailB />} /> */}

      <Route path="/page2" element={<Outlet />}>
        {Page2Routes.map((route) => {
          if (route.path) {
            return (
              <Route key={route.path} path={route.path} element={route.child} />
            );
          } else {
            return <Route key={route.path} index element={route.child} />;
          }
        })}
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
