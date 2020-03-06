const {
    film_add,
    get,
    getAny,
    getAny_ID,
    getAny_ten,
    getall,
    getall8,
    del,
    getdata,
    film_update1,
    getFileByState
} = require('../dao/filmDao');
// 新增电影
module.exports.film_add = async function (film) {
    const data = await film_add(film);
    return data;
}
// 分页获取电影数据
module.exports.get = async function (film) {
    if (film.search_val) {
        const data = await getAny(film);
        return data
    } else if (film._id) {
        const data = await getAny_ID(film)

        
        return data
    } else {
        const data = await get(film);
        return data;
    }

}
//获取十个
module.exports.getAny_ten = async function () {
    const data = await getAny_ten();
    return data;
}

//根据状态获取电影
module.exports.getFileByState = async function (state) {
    const data = await getFileByState(state);
    return data;
}


// 获取所有电影数据
module.exports.getall = async function () {
    const data = await getall();
    return data;
}

//获取8个电影
module.exports.getall8 = async function () {
    const data = await getall8();
    return data;
}


// // 删除电影
module.exports.del = async function (deletefilm) {
    const data = await del(deletefilm);
    // console.log(data);
    if (data.deletedCount == 1) {
        return true;
    } else {
        return false;
    }
}
// 获取数据渲染到修改页面
module.exports.getdata = async function (_id) {
    const data = await getdata(_id);
    // console.log(data);
    if (data.length == 1) {
        return data
    } else {
        return false;
    }
}
// 确认修改
module.exports.film_update1 = async function (film) {
    // console.log(film);
    const data = await film_update1(film);
    return data;
}