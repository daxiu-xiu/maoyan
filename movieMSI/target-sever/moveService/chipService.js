const {
    addchip,
    delchip,
    getChipByPage,
    getall,
    getOneChip,
    updateChip,
    getOneChipByfilm,
    getChipTime,
    getFilmBycinemaId,
    getChipByCF,
    comepp,
    getChipGiveWangZhan,
    getYingyuanSomall,
    getSomall,
    getdypai,
    getChipIdquanbu
} = require("../dao/chipDao")

// const {
//     addselect
// } = require("../dao/selectDao.js")

//排片选座
const {addselect} = require("../dao/selectDao") 
// "../dao/selectDao.js"

//根据分页获取渲染页面
module.exports.getChipByPage = async function (chip) {
    // console.log(student);    
    const data = await getChipByPage(chip);
    return data;
}

//增加排片
module.exports.addchip = async function (chip) {
    const data = await addchip(chip);
    // console.log(data);
    
    if (data._id) {
        //排片选座截取
        addselect(data)
        return data;
    } else {
        return false;
    }
}



//通过id删除排片
module.exports.delchip = async function (_id) {
    // console.log(student);    
    const data = await delchip(_id);
    // console.log(data);
    if (data.deletedCount == 1) {
        return true;
    } else {
        return false;
    }
}
//获取数据库所有
module.exports.getall = async function () {
    // console.log(student);    
    const data = await getall();
    return data;
}

//通过id去获取一个场次
module.exports.getOneChip = async function (_id) {
    const data = await getOneChip(_id);
    // console.log(data);
    if (data.length == 1) {
        addselect(data)
        return data
    } else {
        return false;
    }
}

//通过id获取所有数据
module.exports.getChipIdquanbu = async function (_id) {
    const data = await getChipIdquanbu(_id);
    return data;
    // console.log(data);
    // if (data.length == 1) {
    //     return data
    // } else {
    //     return false;
    // }
}

//通过id去修改一个场次信息
module.exports.updateChip = async function (chipById) {
    const data = await updateChip(chipById);
    if (data.ok == 1) {
        return data
    } else {
        return false;
    }
}


//查询事件。通过电影的Id俩查询已经排了此电影的影院
module.exports.getOneChipByfilm = async function (_id) {
    // console.log(student);   
    // console.log(_id);
     
    const data = await getOneChipByfilm(_id);
    // console.log(data);
    
    return data;
}


//通过影院和电影的id来出时间
module.exports.getChipTime = async function (id) {
    // console.log(student);    
    const data = await getChipTime(id);
    return data;
}

//通过电影的id再寻 找排了此电影的影院,且只返回最小的
module.exports.getSomall = async function (_id) {
    // console.log(student);    
    const data = await getSomall(_id);
    return data;
}

//通过影院的id拿影院的明细和此影院排了的所有电影
module.exports.getFilmBycinemaId = async function (_id) {
    // console.log(student);    
    const data = await getFilmBycinemaId(_id);
    return data;
}

//通过电影院的id和电影的id获取所排片的场次
module.exports.getChipByCF = async function (_id) {
    const data = await getChipByCF(_id);
    return data;
}

//
//通过排片的id获取所有的信息（供猫眼网站使用网站）
module.exports.getChipGiveWangZhan = async function (_id) {
    // console.log(student);    
    const data = await getChipGiveWangZhan(_id);
    return data;
}
   //一进来就渲染所有所有影院。并且把影院的最低价显示出来
module.exports.getYingyuanSomall = async function (_id) {
    // console.log(student);    
    const data = await getYingyuanSomall(_id);
    return data;
}




//通过影院和电影的id来找相关场次和所有数据
module.exports.getdypai = async function (shuju) {
    // console.log(shuju);    
    const data = await getdypai(shuju)
    return data;
}



module.exports.comepp = async function (shuju) {
    // console.log(shuju);    
    const data = await comepp(shuju)
    return data;
}

