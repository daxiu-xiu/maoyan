const mongoose = require("mongoose");


const seatShuJu = new mongoose.Schema({
    scrm_row: String,
    scrm_col: String,
    ProjectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProjectionModel"
    }
})


mongoose.model("seatModel", seatShuJu, "seats");