import { BrowserRouter as Router } from "react-router-dom";
import { RouterContext } from "./context/RouterContext";
import { NavbarContext } from "./context/NavbarContext";

interface Props {
  routes: React.FunctionComponent;
  navbar: React.FunctionComponent;
}

function UIMain({navbar,routes}:Props){
  const CustomNavbar = navbar;
  const CustomRoutes = routes;
  return(
    <>
     
      <RouterContext.Provider value={routes}>
        <NavbarContext.Provider value={navbar}>
          <Router>
              <div className="main-layout">
                  <CustomNavbar/>
                  <CustomRoutes/>
              </div>
          </Router>
        </NavbarContext.Provider>
      </RouterContext.Provider>
    </>

  )
}
export {UIMain}

