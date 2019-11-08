import Home from '../components/home';
import Login from '../components/login';
import Move from '../components/move';
import Being from '../components/home/being';
import Soon from '../components/home/soon';
import My from '../components/my';
import Index from '../components';
const router=[
    // {
    //     path:"/",
    //     redirect:"/index/home"
    // },
    {
        path:"/index",
        component:Index,
        children:[
            {
                path:"/index/home",
                component:Home,
                children:[
                    {
                        path:"/index/home/being",
                        component:Being
                    },
                    {
                        path:"/index/home/soon",
                        component:Soon
                    },
                    {
                        path:"/index/home",
                        redirect:"/index/home/being"
                    }
                ]
            },
            {
                path:"/index/move",
                component:Move
            },
            {
                path:"/index/my",
                component:My
            }
        ]
    },
    {
        path:"/login",
        component:Login
    }
]
export default router