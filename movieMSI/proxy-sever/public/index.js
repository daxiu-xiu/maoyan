import System from "./module/system/system.js";
import CinemaList from "./module/system/cinemaModel/cinemaList.js";
import Chiplist from './module/system/chipModel/chiplist.js';
import Scrm_addhall from "./module/system/scrmModel/xinzengting.js";
import Film_list from "./module/system/filmModel/film_list.js";
import Film_add from "./module/system/filmModel/film_add.js";
import Film_update from "./module/system/filmModel/film_update.js";
import BackUsers from "./module/system/misMoel/backUsers.js";
import FrontUsers from "./module/system/misMoel/frontUsers.js";
import Backregister from "./module/system/backRegister.js";
// import Addchip from './module/system/chipModel/addchip.js'
import Addchip from './module/system/chipModel/addchip.js'
import Updatechip from './module/system/chipModel/updatechip.js'
import BackLogin from "./module/system/backLogin.js";
import Updata_back from "./module/system/misMoel/updataBackUsers.js";
location.hash = location.hash || '/system'
const routes = {
    '/backRegister': () => {
        new Backregister
    },
    '/backLogin': () => {
        new BackLogin
    },
    '/system': {
        on: () => {
            new System
        },
        '/chiplist': () => {
            new Chiplist
        },
        '/addhall': () => {
            new Scrm_addhall
        },
        '/cinemaList': () => {
            new CinemaList
        },
        // '/addchip': () => {
        //     new Addchip
        // }
        '/cinemaList': () => {
            new CinemaList
        },
        '/addchip': () => {
            new Addchip
        },
        '/film_list': () => {
            new Film_list
        },
        '/film_add': () => {
            new Film_add
        },
        '/film_update/:_id': (_id) => {
            new Film_update(_id)
        },
        '/backUsers': () => {
            new BackUsers
        },
        '/updataBackU/:_id':(_id)=>{
            new Updata_back(_id)
        },
        '/frontUsers': () => {
            new FrontUsers
        },

        '/updatechip/:_id': (_id) => {
            new Updatechip(_id)
        },
        

    },

}


Router(routes).configure({
    recurse: 'forward'
}).init();