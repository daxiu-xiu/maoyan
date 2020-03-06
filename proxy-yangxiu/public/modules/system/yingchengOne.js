export default class YingchengOne {
    constructor(_id, _id2) {
        //电影的id  
        this.filmId = _id;
        //影院的id
        this.cinemaId = _id2;
        //排片的id
        // this.chipId='';
        this.render();
        this.yingyuanRender();
        this.paipianRender();
        this.handel();
    }
    render() {
        const html = `
        <div id="movie_yingchengOne">
        <!-- 大图 -->
        <div class="datu">
            <div class="zhuti">
                <img src="../images/1_0822151022.jpg" alt="">
                <div class="neirong">
                    <span class="title jiejie" id="cinemaName">太平洋影城</span>
                    <span class="jiejie" id="cinemaDizhi" >地址</span>
                    <span class="jiejie" id="cinemaDianhua">电话</span>
                    <span class="jiejie">影院服务------------------------------------------</span>
                    <div class="jiejie a">
                        <span class="fuwu">3D眼镜</span>
                        <span>免押金</span>
                    </div>
                    <div class="jiejie a">
                        <span class="fuwu">儿童优惠</span>
                        <span>1.3米以下的儿童免票</span>
                    </div>
                    <div class="jiejie a">
                        <span class="fuwu">可停车</span>
                        <span>目前免费，详情现场咨询影城</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="tupian" id="tupian">
        </div>
        <!-- 电影介绍 -->
        <div class="mingxi" id="mingxi">
           
        </div>
        <!-- 当前电影的排片明细 -->
        <div class="bofangleixing">
            <span>放映时间</span>
            <span>语言版本</span>
            <span>放映厅</span>
            <span>售价（元）</span>
            <span>选座购票</span>
        </div>
        <div class="mingxizong" id="mingxizong">
           
    
        </div>       
        </div>
             
        `
        $("#movie_centre").html(html);
    }
    //根据穿过来的影院的id找已经排了的所有的电影
    yingyuanRender() {
        $.ajax({
            url: `/api/chip/getFilmBycinemaId`,
            type: 'GET',
            data: {
                cinemaId: this.cinemaId
            },
            success: (msg) => {
                // console.log(msg)  
                const cinema = msg[0].cinemaId
                $("#cinemaName").html(cinema.cinemaName)
                $("#cinemaDizhi").html(cinema.cinemaAddress);
                $("#cinemaDianhua").html(cinema.cinemaTel);
                const img = msg.map(item => {
                    return `
      <img src="http://localhost:3000//upload/images/${item.filmId.images}" alt="" data-id='${item.filmId._id}'  style="margin-right: 30px"class="img" id="imgHaibao">           
                    `
                })
                $("#tupian").html(img);
                $(".img").each((index, item) => {
                    if ($(item).data("id") == this.filmId) {
                        $(item).prependTo("#tupian");
                        $(item).addClass("current");
                    }
                })
            }
        })
    }
    //根据电影的id和影院的id渲染排片列表
    paipianRender() {

        $.ajax({
            url: `/api/chip/getChipByCF`,
            type: `GET`,
            data: {
                cinemaId: this.cinemaId,
                filmId: this.filmId
            },
            success: (msg) => {
                // console.log(msg)
                const html = ` <h3>${msg[0].filmId.cName}
                <span>8.6分</span>
            </h3>
            <div class="mingxi1">
                <span>时长：${msg[0].filmId.filmLength}</span>
                <span> 类型 :${msg[0].filmId.type1}</span>
                <span>主演 : ${msg[0].filmId.actor} </span>
            </div>
            <div class="shijian">
                <span>观影时间：</span>
                <span>今天12月27日</span>
                <span>明天12月28日</span>
            </div>`
                $("#mingxi").html(html);

                const paipianHtml = msg.map(item => {
                    return `
                    <div class="paipainmingxi">
                    <span>${item.time}</span>
                    <span>中文</span>
                    <span>${item.ProjectionsId.scrm_name}</span>
                    <span>￥${item.fares}</span>
                    <a href="#/system/xuanzuo/${item._id}" class="goupiao">选座购票</a>
                  </div>                    
                    `
                })
                $("#mingxizong").html(paipianHtml);              
            }
        })
    }
    //事件
    handel() {
        const _this = this;
        $("#spoe").on("click", ".img", function () {
            _this.filmId = $(this).data("id");
            $(this).addClass("current").siblings().removeClass("current");
            _this.paipianRender();

        })
    }
}