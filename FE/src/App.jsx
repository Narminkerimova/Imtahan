import Home from "./pages/Home/index";
import Admin from "./pages/Admin/index";
import AdminAdd from "./pages/Admin Add/index";
import Basket from "./pages/Basket/index";
import WishList from "./pages/Wish List/index";
import DetailPage from "./pages/Detail Page/index";
import NoPage from "./pages/No Page/index";
import { BrowserRouter, Route, Routes } from "react-router";

import "./App.css";
import Layout from "./components/Layout";
import MainProvider from "./context/MainProvider";

function App() {
  return (
    <>
      <MainProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/adminadd" element={<AdminAdd />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MainProvider>
    </>
  );
}

export default App;
