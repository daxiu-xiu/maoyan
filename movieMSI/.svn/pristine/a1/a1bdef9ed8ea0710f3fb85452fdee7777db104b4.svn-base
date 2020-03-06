export default class HotSeat {
    constructor() {
        this.getzuowei();
    }
    //拿到排片所有数据
    getchip() {
        $.ajax({
            url: "/api/chip/getAllChip",
            type: "get",
            success: (msg) => {
                console.log(msg);
            }
        })
    }
}