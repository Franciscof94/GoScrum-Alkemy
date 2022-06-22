import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Tasks from "./pages/Tasks/Tasks";
import Registered from "./pages/Registered/Registered";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";

const Error404 = lazy(() => import("./pages/Error404/Error404"));

const RequireAuth = ({ children }) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

const App = () => {
  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              className="page"
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <RequireAuth>
                <Tasks />
              </RequireAuth>
            </motion.div>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <motion.div
              className="page"
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <Login />
            </motion.div>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <motion.div
              className="page"
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <Register />
            </motion.div>
          }
        ></Route>
        <Route path="/registered" element={<Registered />}></Route>
        <Route
          to="*"
          element={
            <motion.div
              className="page"
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
            >
              <Suspense fallback={<>...</>}>
                <Error404 />
              </Suspense>
            </motion.div>
          }
        ></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
