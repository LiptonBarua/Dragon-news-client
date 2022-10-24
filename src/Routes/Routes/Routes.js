import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Catagories from "../../Pages/Catagories/Catagories/Catagories";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import TremsAndCodition from "../../Pages/Others/TremsAndCodition";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
          {
            path: '/', element: <Home></Home>,
            loader: ()=>
            fetch('http://localhost:5000/news')
          },
          {
            path: '/catagorys/:id',
            element: <Catagories></Catagories>,
            loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
          },
          {
            path: '/news/:id',
            element: <PrivateRouter><News></News></PrivateRouter>,
            loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
          },
          {
            path: '/login', element: <Login></Login>
          },
          {
            path: '/register', element: <Register></Register>
          },
          {
            path: '/terms', element: <TremsAndCodition></TremsAndCodition>
          } 
        ]
    }
])