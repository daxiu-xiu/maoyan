export default class Yingyuan {
    constructor(_id) {
        //这个是传过来的电影的id
        this._id = _id;
        //影院的id
        this.cinema_id = '';
        this.render();
        this.yingyuanRender();
        // this.handel();
    }
    render() {
        console.log(this._id)
        const html = `
        <div id="movie_yingyuan">     
        <!-- 大图 -->
        <div class="datu">
            <div class="datu-zj">
                <!-- 白色底框 -->
                <div class="baise"></div>
                <!-- 内容 -->
                <div class="neirong">
                    <a href="">
                        <img src="" alt="" id="film_img1" style="width:240px">
                    </a>
                    <div class="mingzi">
                        <a href="" id="film_cname1">湄公河行动</a>
                        <a href="" id="film_ename1">Operation Mekong</a>
                        <span id="film_type11">动作，犯罪，剧情</span>
                        <span id="fiml_country1">中国大陆，中国香港/124分钟</span>
                        <span id="film_showtime1">2016-09-30大陆上映</span>
                        <div class="xiangkan">
                            <span>
                                <i></i>想看</span>
                            <span>
                                <i></i>评分</span>
                        </div>
                    </div>
                    <!-- 评分 -->
                    <div class="pingfen">
                        <ul>
                            <li>
                                <span>用户评分</span>
                                <p>9.3</p>
                                <a href="">(56.6万人评分)</a>
                            </li>
                            <li>
                                <span>专业评分</span>
                                <p>9.3</p>
                                <a href="">(56.6万人评分)</a>
                            </li>
                            <li>
                                <span>累计票房</span>
                                <p>10.33亿</p>
                            </li>
                        </ul>
                        <div class="goupiao">
                            <a href="#/system/xiangqing/${this._id}">查看更多电影详情</a>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    
        <!-- 热映类型区域年代 -->
        <div class="leixing">
            <div class="leixing1">
                <span>日期：</span>
                <span>
                    <a href="">今天12月27日</a>
                    <a href="">明天12月28日</a>
                    <a href="">后天12月29日</a>
                    <a href="">周四12月30</a>
                    <a href="">周五12月31</a>
                    <a href="">周六1月01</a>
                    <a href="">周天1月02</a>
                    <a href="">周一1月03</a>
                </span>
            </div>
            <!-- 区域 -->
            <div class="leixing1 quyu">
                <span>品牌：</span>
                <span>
                    <a href="">全部</a>
                    <a href="">万达影城 </a>
                    <a href="">太平洋影城</a>
                    <a href="">星美国际</a>
                    <a href="">CGV影城</a>
                    <a href="">横店电影城</a>
                    <a href="">金逸影城</a>
                    <a href="">大地影院</a>
                    <a href="">保利国际影城</a>
                    <a href="">峨眉影城</a>
                    <a href="">新时代影城</a>
                    <a href="">百老汇影城</a>
                    <a href="">恒大影城</a>
                    <a href="">和平电影城</a>
                    <a href="">中影国际影城</a>
                    <a href="">卢米埃影城</a>
                    <a href="">其他</a>
                </span>
            </div>
            <!-- 年代 -->
            <div class="leixing1 niandai">
                <span>行政区：</span>
                <span>
                    <a href="">全部</a>
                    <a href="">地铁附近</a>
                    <a href="">武侯区</a>
                    <a href="">郫县</a>
                    <a href="">双流区</a>
                    <a href="">青羊区</a>
                    <a href="">成华区</a>
                    <a href="">新都区</a>
                    <a href="">龙泉驿区</a>
                    <a href="">高新区</a>
                    <a href="">金堂县</a>
                    <a href="">温江区</a>
                    <a href="">清江白区</a>
                    <a href="">彭州市</a>
                    <a href="">新津县</a>
                    <a href="">大邑县</a>
                </span>
            </div>
            <!-- 年代 -->
            <div class="leixing1 niandai">
                <span>特殊厅：</span>
                <span>
                    <a href="">IMAX厅</a>
                    <a href="">CGX中国巨幕厅</a>
                    <a href="">杜比全景声厅</a>
                    <a href="">RealID</a>
                    <a href="">4DX厅</a>
                    <a href="">4K厅</a>
                    <a href="">4D厅</a>
                    <a href="">幕厅局</a>
                    <a href="">儿童厅</a>
                    <a href="">LUXT厅</a>
                </span>
            </div>
        </div>
        <!-- 影院列表 -->
        <h3>影院列表</h3>
        <div class="yingyuan" id="yingyuan">       
        </div>
        <!-- 分页符 -->
        <div class="fenye">
                <a href="">1</a>
                <a href="">2</a>
                <a href="">3</a>
                <a href="">4</a>
                <a href="">235</a>
                <a href="">...</a>
                <a href="">下一页</a>
            </div>      
        </div>
        
        `
        $("#movie_centre").html(html);
    }
    yingyuanRender() {
        //根据传过来的电影的Id来寻找电影的明细。渲染
        $.ajax({
            url: `/api/film/${this._id}`,
            type: 'get',
            success([msg]) {
                // console.log(msg)
                $("#film_img1").attr("src", `http://localhost:3000//upload/images/${msg.images}`);
                $("#film_cname1").html(msg.cName);
                $("#film_ename1").html(msg.eName);
                $("#film_type11").html(msg.type1);
                $("#fiml_country1").html(msg.country);
                $("#film_showtime1").html(`${msg.showtime}上映时间`);
            }
        })
        // console.log(this._id)
        //通过电影的id再寻 找排了此电影的影院,且只返回最小的
        $.ajax({
            url: `/api/chip/getSomall`,
            type: `GET`,
            data: {
                _id: this._id
            },
            success(msg) {
                // console.log(msg)
                const yingyuanList = msg.map(item => {
                    return `
                       
            <div class="yingyuanliebiao">
            <div class="left">
                <h4>${item.cinemaId.cinemaName}</h4>
                <div class="dizhi">地址：${item.cinemaId.cinemaAddress}</div>
            </div>
            <div class="right">
     
                <span>￥${item.fares}起</span>
                <a href="#/system/yingchengOne/${item.filmId}/${item.cinemaId._id}" class="goupiaoa">立即购票</a>
              
            </div>
        </div>                 
                    `

                })
                $("#yingyuan").html(yingyuanList)
            }
        })

    }
    //点击选座购票跳转
    // handel() {
    //     $("#spoe").on("click", "#yyBut", (e) => {
    //         const _id = e.target.dataset.id
    //         console.log(_id)
    //         // location.hash=`#/system/yingchengOne`
    //         location.hash = `#/system/yingchengOne/${_id}`
    //     })
    // }

}