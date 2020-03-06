const mongoose = require("mongoose");


const ProjectionShuJu = new mongoose.Schema({
    scrm_name: String,
    //先默认给个影院的东西
    scrm_cc:String,
    //影院的ID
    cinemaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cinemasModel",
    }
})


mongoose.model("ProjectionModel", ProjectionShuJu, "Projections");