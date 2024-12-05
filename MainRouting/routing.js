import { createBrowserRouter } from "react-router-dom";
import VirtualDOM from "../components/VirtualDOM";
import MyImagesComp from "../components/MyImagesComp";

import MyHocComp from "../components/MyHocComp";
// import MypureComp from "../components/MypureComp";
// import PageNotFoundComp from "../Layout/PageNotFoundComp";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseStateHooksComp from "../Hooks/UseStateHooksComp";
import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";
import MainDashBoardComp from "../Layout/MainDashBoardComp";
import MyFavColorComp from "../components/MyFavColorComp";
import FormValidationComp from "../components/FormValidationComp";

const routing = createBrowserRouter(
    [

        {path:"MainDashboard", element:<MainDashBoardComp />,children:[

        {path:"MyFavColor", element:<MyFavColorComp newColor="Green"/>},
        {path:"usestate",element:<UseStateHooksComp />},
        {path:"useEffect" , element:<UseEffectHooksComp />},
        {path:"FormValidation" , element:<FormValidationComp />},

        //1.default routing
        {path:"", element:<MyHocComp />},
        //2.naming routing
        {path:"VirtualDOM",element:<VirtualDOM />},
        //3.parameterize routing
        {path:"images/:id",element:<MyImagesComp />},
        //4.child-routing
        {path:"Hooks", element:<ReactHooksComp />,children:[
            {path:"usestate",element:<UseStateHooksComp />},
            {path:"useEffect" , element:<UseEffectHooksComp />},
        ]},
        // 5.wild -card - routing
        // {path:"*",element:<MypureComp />}
        
        

    ]}
        
]
)

export default routing;