import { MenuItem } from '../afw/services/menu.sevice';
export let initialMenuItems:Array<MenuItem> =[
    {
        text:'Home',
        icon:'glyphicon-home',
        route:'/Home',
        submenu:null
    },
    {
        text:'Services',
        icon:'glyphicon-wrench',
        route:'/services',
        submenu:null
    },
    {
        text:'About',
        icon:'glyphicon-info-sign',
        route:'/about',
        submenu:null
    }
    // ,{
    //     text:'Countries',
    //     icon:'glyphicon-flag',
    //     route:'/countries',
    //     submenu:null
    // },
    // {
    //     text:'Settings',
    //     icon:'glyphicon-wrench',
    //     route:'/settings',
    //     submenu:null
    // }

];