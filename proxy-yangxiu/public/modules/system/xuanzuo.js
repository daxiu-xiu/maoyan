export default class Xuanzuo {
    constructor(_id) {
        //排片的id
        this._id = _id;
        this.sate = [];
        this.render();
        this.chipRender();
        this.chipXuanzuo();
        this.handel();

    }
    render() {
        // console.log(this._id)
        const html = `
        <div id="movie_xuanzuo">
       <div  class="xian1"> <div class="jindu">
       <div class="jindu1">
           <span class="shuzi">1</span>
           <span class="xian" style="vertical-align: super;">___________________________</span>
           <span class="shuzi">2</span>
           <span class="xian" style="vertical-align: super;">___________________________</span>
           <span class="shuzi">3</span>
           <span class="xian" style="vertical-align: super;">___________________________</span>
           <span class="shuzi">4</span>
       </div>
       <div class="wenzi">
           <span>选择影片场次</span>
           <span style="margin-left: 146px;">选择座位</span>
           <span style="margin-left: 163px;">14分钟内付款</span>
           <span style="margin-left: 134px;">影院取票观影</span>
       </div>
   </div></div>
    <div class="zhuti">
        <div class="zuowei">
            <!-- 三个座位图片 -->
            <div class="zuowei_tupian">
                <div>
                    <span>可选座位</span>
                    <img src="../images/kexuan.jpg" alt="">
                </div>
                <div>
                    <span>已售座位</span>
                    <img src="../images/yishou.jpg" alt="">
                </div>
                <div>
                    <span>已选座位</span>
                    <img src="../images/yixuan.jpg" alt="">
                </div>
            </div>
            <!-- 灰色背景 -->
            <div class="beijing"></div>
            <div class="zhongyangzi"> 荧屏中央</div>
            <!-- 座位明细 -->
            <div class="mingxi">
                <div class="mingxi_left">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>
                <div class="mingxi_right"></div>
            </div>
        </div>
        <div class="dianying" id="chip_dianying">
            
        </div>
    </div>       
        </div>
        `
        $("#movie_centre").html(html);
    }
    //根据传过来的排片的id查询排片的所有明细
    chipRender() {
        $.ajax({
            url: `/api/chip/getChipGiveWangZhan`,
            type: `GET`,
            data: {
                _id: this._id
            },
            success([msg]) {
                // console.log(msg)
                const dianyingHtml = `
                <div class="tupian">
                <img src="http://localhost:3000//upload/images/${msg.filmId.images}" style="width:120px" alt="" id="film_tupian">
                <div class="jieshao">
                    <h4 id="filmName" data-id="${msg.filmId._id}">${msg.filmId.cName}</h4>
                    <div>
                        <span class="leiixng">类型：</span>
                        <span>${msg.filmId.type1}</span>
                    </div>
                    <div>
                        <span class="leiixng">时长：</span>
                        <span>${msg.filmId.filmLength}</span>
                    </div>
                </div>
            </div>
            <div>
                <span>影院：</span>
                <span id="cinemaName">${msg.cinemaId.cinemaName}</span>
            </div>
            <div>
                <span>影厅：</span>
                <span id="movie_name" data-fy='${msg.ProjectionsId._id}' data-id="${msg._id}">${msg.ProjectionsId.scrm_name}</span>
            </div>
            <div>
                <span>版本：</span>
                <span>英语3D</span>
            </div>
            <div>
                <span>场次：</span>
                <span id="time">${msg.time}</span>
            </div>
            <div class="piaojia">
                <span>票价：</span>
                <span>￥${msg.fares}</span>
            </div>
            <div class="zuiduo">座位：一次最多选4个座位</div>
            <div class="dianji">请
                <span id="xuanzezuowei">点击左侧</span>座位图选择座位</div>
            <div>总价:
                <span  id ="jiage" data-fares="${msg.fares}">￥0</span>
            </div>
            <div style="margin-left: 25px; margin-bottom: 22px;">
                <span>手机号：</span>16727276376117471</div>
            <a class="queren" id="queren">确认选座</a>`
                $("#chip_dianying").html(dianyingHtml);
                const chipId = $("#movie_name").data("id");

                $.ajax({
                    url: `/api/paipianzuowei/getzuowei`,
                    type: `GET`,
                    data: {
                        chipId
                    },
                    success(msg) {
                        // console.log(msg)
                        let liHtml = `<li class="scrm_paibiao">`;
                        for (let i = 0; i <= msg.length - 1; i++) {

                            if (msg[i].state) {
                                liHtml += `                       
                                <img src="./images/yishou.jpg" alt="" style="width: 45px;" >                              
                            `
                            } else {
                                liHtml += `
                                <img src="./images/kexuan.jpg" alt="" style="width: 45px;" data-id="${msg[i].seatsId}" class="zuoweitu" data-judge="false">
                                `
                            }
                            if ((i + 1) % 10 == 0) {
                                liHtml += `</li><li class="scrm_paibiao">`
                            }
                        }
                        liHtml += `</li>`
                        $(".mingxi_right").html(liHtml)
                    }
                })
            }

        })
    }
    //点击座位的选座事件和旁边票价的改变事件
    chipXuanzuo() {
        // const sate = [];
        // console.log(78687);
        const _this = this;
        //图片点击谁就获取他的data-id为座位的id
        $("#spoe").on("click", '.zuoweitu', function () {
            //由于座位的id和放映厅的座位id是一样、
            const _id = $(this).data("id")
            // console.log(_id)
            const ProjectionId = $("#movie_name").data("fy");
            // console.log(ProjectionId)
            $.ajax({
                url: `/api/seats/seatId`,
                type: 'post',
                data: {
                    _id,
                    ProjectionId
                },
                success: ([msg]) => {
                    // console.log(msg)
                    $(".dianji").html("");
                    // console.log(sate)
                    if ($(this).data("judge") == false && _this.sate.length < 4) {
                        $(this).attr({
                            "src": "../images/yixuan.jpg",
                        }).data("judge", true)
                        //将选中的座位保存在数组中
                        _this.sate.push({
                            row: msg.scrm_col,
                            col: msg.scrm_row,
                            _id: _id
                        })

                    } else {
                        // 取消选择，变白
                        $(this).attr({
                            "src": "../images/kexuan.jpg",
                        }).data("judge", false)
                        // 数组删除:遍历数组，如果数组中的row和col与取消选择的这个一样，就删除
                        //这样点击相同的则不会进入数组
                        for (let i = 0; i < _this.sate.length; i++) {
                            if (msg.scrm_col == _this.sate[i].row && msg.scrm_row == _this.sate[i].col) {
                                _this.sate.splice(i, 1) //删除，第一个参数为删除的下标，第二个参数为删除的个数
                            }
                        }
                    }
                    // console.log(sate)
                    //渲染右边的选座明细
                    if (_this.sate.length > 0) {
                        $("#queren").css("background", "red")
                    } else {
                        $("#queren").css("background", '#dedede')
                    }
                    const dianjiHtml = _this.sate.map(item => {
                        return `
                        <span class="sate">${item.row}排${item.col}列 </span>                       
                        `
                    }).join("")
                    $(".dianji").html(dianjiHtml);
                    const zongjia = $("#jiage").data("fares") * _this.sate.length
                    $("#jiage").html(`￥${zongjia}`)
                }
            })
            console.log(_this.sate)
        })
    }
    //事件
    handel() {
        const id = this._id;
        //点击确认购票的时候生成订单。并且改变已选座位的状态
        $("#spoe").on("click", '#queren', () => {
            const sate = this.sate;
            // console.log(sate)
            if (sate.length > 0) {
                //生成订单数据
                //订单日期
                let date = new Date();
                const orderTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
                //电影院的名字
                const cinemaName = $("#cinemaName").html();
                //放映厅的名字
                const projectionName = $("#movie_name").html();
                //播放时间
                const movieTime = $("#time").html();
                //电影名字
                const movieName = $("#filmName").html();
                //票数
                const ticketNum = sate.length;
                //总票价
                const totalMoney = $("#jiage").html();
                //电影的海报图
                const movieImage = $("#film_tupian").attr("src");
                //座位号
                const sateNumber = $(".dianji").text();
                //电影的id
                const movieId = $("#filmName").data("id")
                //用户名
                const usersName = localStorage.usersName;
                //生成订单的ajax
                $.ajax({
                    url: `/api/orderRoom/order`,
                    type: `POST`,
                    data: {
                        orderTime,
                        movieId,
                        movieImage,
                        sateNumber,
                        totalMoney,
                        ticketNum,
                        movieName,
                        movieTime,
                        projectionName,
                        cinemaName,
                        usersName
                    },
                    success(msg) {
                        // console.log(msg)
                        if (msg) {
                            location.hash = '#/system/dingdan';
                        }
                    }
                })
                //修改后台已选座位的状态(通过排片的id和座位的id)
                // //座位id(是个数组形式)
                let seatsId = [];
                for (let a = 0; a < sate.length; a++) {
                    seatsId.push(sate[a]._id)
                }
                // console.log(seatsId)
                //排片id
                const chipId = id;
                // console.log(chipId)
                $.ajax({
                    url: `/api/paipianzuowei/updateSate`,
                    type: 'POST',
                    dataType: "json",
                    traditional: true,
                    cache: false,
                    data: {
                        seatsId,
                        chipId
                    },
                    success(msg) {
                        if (msg) {
                            alert("购票成功，请留意观影场次")
                        }
                    }
                })

            }
        })
    }
}