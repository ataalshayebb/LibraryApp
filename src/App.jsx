import Library from "./mainpage";
import Header from"./header"
import Footer from "./footer"
import Aboutus from './aboutus'
import Contactus from "./contactus";
import {createBrowserRouter,RouterProvider} from 'react-router-dom' ;
import Signup from "./signup";
import Cataloh from "./catalog";
import Update from "./update";

function App(){
  const router = createBrowserRouter([
  {path:'/',element:<Library />,errorElement : <div>404 Not Found</div>}
 ,{path:'aboutus',element:<Aboutus/> ,errorElement : <div>404 Not Found</div>}
 ,{path:'contactus',element:<Contactus/> ,errorElement : <div>404 Not Found</div>}
 ,{path:'signup',element:<Signup/> ,errorElement : <div>404 Not Found</div>}
 ,{path:'catalog',element:<Cataloh/> ,errorElement : <div>404 Not Found</div>}
 ,{path:'update',element:<Update/> ,errorElement : <div>404 Not Found</div>}

]);

return(
<>

<RouterProvider router={router}/>

</>

  )
}
export default App ;