import Header from "./Header/index"
import {Outlet} from "react-router"
import Footer from "./Footer/index"
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout