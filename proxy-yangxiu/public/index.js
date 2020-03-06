import Login from './modules/login.js';
import Register from './modules/register.js';
import System from './modules/system/system.js'
import Bangdan from './modules/system/bangdan.js'
import Dianying from './modules/system/dianying.js'
import Zixun from './modules/system/zixun.js';
import Xiangqing from './modules/system/xiangqing.js';
import Yingyuan from './modules/system/yingyuan.js';
import YingyuanAll from './modules/system/yingyuanAll.js';
import YingchengOne from './modules/system/yingchengOne.js';
import Xuanzuo from './modules/system/xuanzuo.js';
import Dingdan from './modules/system/dingdan.js'


location.hash = location.hash || '#/system'
const routes = {
    '/login': () => {
        new Login;
    },
    '/register': () => {
        new Register;
    },
    '/system': {
        on: () => {
            new System;
        },
        '/bangdan': () => {
            new Bangdan
        },
        '/dianying': () => {
            new Dianying
        },
        '/zixun': () => {
            new Zixun
        },
        '/xiangqing/:_id': (_id) => {
            new Xiangqing(_id)
        },
        '/yingyuan/:_id': (_id) => {
            new Yingyuan(_id)
        },
        '/yingyuanAll': () => {
            new YingyuanAll
        },
        '/yingchengOne/:_id/:_id2': (_id, _id2) => {
            new YingchengOne(_id, _id2)
        },
        '/xuanzuo/:_id': (_id) => {
            new Xuanzuo(_id)
        },
        '/dingdan': () => {
            new Dingdan
        }
    }


}
Router(routes).configure({
    recurse: 'forward'
}).init();