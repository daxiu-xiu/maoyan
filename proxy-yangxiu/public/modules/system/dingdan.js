export default class Dingdan {
    constructor() {
        this.render();
        this.dingdanRender();
        this.handel();
    }
    render() {
        const html = `
        <div id="movie_dingdan">
        <div class="dingdan_zhuti">
        <div class="dingdan_left">
            <h3>个人订单</h3>
            <p style="background-color: red;color: white;">我的订单</p>
            <p>基本信息</p>
        </div>
        <div class="dingdan_right">
            <div class="wode">我的订单</div>
            <div class="dingdanmingxi" id="dingdanmingxi">
                </div>
            </div>
        </div>
    </div>     
        </div>`;
        $("#movie_centre").html(html);
    }
    //一进入页面则。出现所有订单信息
    dingdanRender() {
        const usersName = localStorage.usersName;
        // console.log(usersName)
        $.ajax({
            url: `/api/orderRoom/orderFind`,
            type: `POST`,
            data:{
                usersName
            },
            success(msg) {
                // console.log(msg)
                const dingdanHtml = msg.map(item => {
                    return `
              <div class="mingxi_tou">
                    <div>
                        <span>${item.orderTime}</span>
                        <span>猫眼订单号：${item._id}</span>
                    </div>
                    <div class="rev" id="rev" data-id="${item._id}">删除</div>
                </div>
                <div class="mingxi_centent">
                    <div class="left">
                        <img src="${item.movieImage}" alt="" style=" height: 88px">

                        <div class="mingzi">
                            <h5>${item.movieName}</h5>
                            <span>${item.cinemaName}</span>
                            <div>
                                <span>${item.projectionName}</span>
                                <span>${item.sateNumber}</span>
                            </div>
                            <div class="date">${item.movieTime}</div>
                        </div>
                    </div>
                    <div class="right">
                        <span style="margin-right: 70px;">${item.totalMoney}</span>
                        <span style="margin-right: 70px;">已完成</span>
                        <span>查看详情</span>
                    </div>              
              `
                })
                $("#dingdanmingxi").html(dingdanHtml)
            }

        })
    }
    //事件
    handel() {
        const dingdanRender = () => {
            this.dingdanRender();
        }
        //通过订单的id删除该订单
        $("#spoe").on("click", "#rev", function () {
            const _id = $(this).data("id")
            $.ajax({
                url: `/api/orderRoom/updateOrder`,
                type: `POST`,
                data: {
                    _id
                },
                success(msg) {
                    dingdanRender();
                }
            })
        })
    }
}