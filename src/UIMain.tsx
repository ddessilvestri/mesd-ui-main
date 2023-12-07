import { RouterContext } from "./context/RouterContext";
import { Navigation } from "./routes/Navigation"

interface Props {
  routes?:any;
}


function UIMain({routes}:Props){
  return(
    <RouterContext.Provider value={routes}>
      <Navigation/>
    </RouterContext.Provider>


  )
}
export {UIMain}
