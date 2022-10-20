import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Catagories from "../../Pages/Catagories/Catagories/Catagories";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
          {
            path: '/', element: <Home></Home>
          },
          {
            path: '/catagorys/:id',
            element: <Catagories></Catagories>
          },
          {
            path: '/news/:id',
            element: <News></News>
          }  
        ]
    }
])