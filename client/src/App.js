import { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./pages/Loading";
import "./assets/styles/custom/_customAntd.less";

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Rooms = lazy(() => import("./pages/Rooms"));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path='/login' caseSensitive element={<Login />} />
          <Route exact path='/register' caseSensitive element={<Register />} />
          <Route
            path='/'
            element={
              <Suspense fallback={<Loading />}>
                <MainLayout />
              </Suspense>
            }>
            <Route index element={<Rooms />} />
            {/* <Route index element={<Rooms />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
