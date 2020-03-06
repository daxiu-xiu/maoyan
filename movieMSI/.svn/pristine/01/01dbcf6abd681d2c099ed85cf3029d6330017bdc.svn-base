const mongoose = require("mongoose");

const paipianzuoweiShuJu = new mongoose.Schema({
    //座位的Id
    seatsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "seatModel"
    },
    //排片的Id
    // chipId: String,
    chipId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "chipModel"
    },
    //状态值
    state: Boolean
})


mongoose.model("paipianzuoweiModel", paipianzuoweiShuJu, "paipianzuowei");