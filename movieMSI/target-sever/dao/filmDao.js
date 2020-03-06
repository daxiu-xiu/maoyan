const mongoose = require('mongoose');
// 新增电影
module.exports.film_add = async function (film) {
    return await mongoose.model("filmModel").create(film);
}
//获取所有数据渲染页面
module.exports.get = async function (film) {
    let {
        currentPage,
        pageSize,
    } = film;
    //获取总条数
    const totalCount = await mongoose.model("filmModel").countDocuments();
    //获取总页数(为总条数除以每个页数的个数)向上取整
    //假如有3.5个页面则总共为4个页面
    const totalPage = Math.ceil(totalCount / pageSize)
    const films = await mongoose.model("filmModel")
        .find() //查找所有电影
        .limit(pageSize - 0) //查找的条数（渲染的个数）
        .skip((currentPage - 1) * pageSize) //需要跳过的个数就是前一页乘以每一页的个数
    return {
        totalCount,
        totalPage,
        films,
        pageSize,
        currentPage,
    }
}

// 根据id查
module.exports.getAny_ID = async function (_id){
    // console.log(film);
    const films=await mongoose.model("filmModel").find(_id)
   return films
    

}



// 榜单需求，只要十个数据
module.exports.getAny_ten = async function (){
    // console.log(film); 
    const films=await mongoose.model("filmModel").find().limit(10)
   return films
}

//获取查询数据渲染页面
module.exports.getAny = async function (film) {
    let {
        currentPage,
        pageSize,
        search_val,
        search_typ
    } = film;
    const films=await mongoose.model("filmModel").find({
        [search_typ]: {
            $regex: search_val
        } //模糊查询，满足一个值就能找到
    }).limit(pageSize - 0) //查找的条数（渲染的个数）
    .skip((currentPage - 1) * pageSize) //需要跳过的个数就是前一页乘以每一页的个数
 
    const totalCount =films.length;
    const totalPage = Math.ceil(totalCount / pageSize)
    return {
        totalCount,
        totalPage,
        films,
        pageSize,
        currentPage,
    }
}

//获取所有电影
module.exports.getall  = async function () {
    return await mongoose.model("filmModel").find();
}

//获取8个电影
module.exports.getall8  = async function () {
    return await mongoose.model("filmModel")
    .find({state: "正在热映"})
    .limit(8 - 0);
}

//通过_id 删除电影数据
module.exports.del = async function (deletefilm) {
    const data = await mongoose.model("filmModel").deleteOne(deletefilm);
    return data;
}
// 获取数据并渲染到修改页面
module.exports.getdata = async function (_id) {
    const data = await mongoose.model("filmModel").find(_id);
    return data
}
// 确认修改
module.exports.film_update1 = async function ({
    _id,
    cName,
    eName,
    type1,
    country,
    filmLength,
    showtime,
    director,
    actor,
    synopsis,
    state,
    images  
}) {
    return await mongoose.model("filmModel").update({_id},{
        cName,
        eName,
        type1,
        country,
        filmLength,
        showtime,
        director,
        actor,
        synopsis,
        state,
        images    
    });
}


//根据状态获取电影
module.exports.getFileByState = async function (state){
    const films=await mongoose.model("filmModel").find(state).limit(8);
   return films
}