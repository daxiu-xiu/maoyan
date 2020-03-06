const mongoose = require("mongoose");
module.exports.daoAddCinema = async addCinemaData => {
    return await mongoose.model("cinemasModel").create(addCinemaData);
}
// 获取
module.exports.getCinemasDao = async ({
    searchTerm,
    currentPage,
    pageSize
}) => {
    let totalCount;
    let totalPages;
    let cinemas;
    if (searchTerm) {
        // 拆分成数组，[0]保存为查询条件[1]为查询信息
        const searcherm = searchTerm.split("&");
        cinemas = await mongoose.model("cinemasModel").find({
            // 模糊查询
            [searcherm[0]]: {
                $regex: `${searcherm[1]}`
            }
        }).limit(pageSize - 0) // 查询条数
            .skip((currentPage - 1) * pageSize); // 跳过条数   ;
        totalCount = cinemas.length;
        totalPages = Math.ceil(totalCount / pageSize);
    } else {
        // 获取总条数
        totalCount = await mongoose.model("cinemasModel").countDocuments();
        // 总页数
        totalPages = Math.ceil(totalCount / pageSize);
        // 获取影院数据
        cinemas = await mongoose.model("cinemasModel")
            .find()
            .limit(pageSize - 0) // 查询条数
            .skip((currentPage - 1) * pageSize); // 跳过条数   
    }
    return {
        currentPage,
        pageSize,
        totalCount,
        totalPages,
        cinemas
    }
}
module.exports.getALL_cinemasDao = async (_id) => {
    let data;
    if (_id) {
        data = await mongoose.model("cinemasModel").find(_id);
    } else {
        data = await mongoose.model("cinemasModel").find();
    }
    return data;
}

module.exports.delete_cinemaDao = async (_id) => {
    const data = await mongoose.model("cinemasModel").deleteOne(_id);
    return data;
}
// 修改
module.exports.update_cinemaDao = async (updata_data) => {
    const data = await mongoose.model("cinemasModel").update({
        _id: updata_data._id
    }, {
        cinemaName: updata_data.cinemaName,
        cinemaAddress: updata_data.cinemaAddress,
        cinemaTel: updata_data.cinemaTel
    });
    return data;
}

