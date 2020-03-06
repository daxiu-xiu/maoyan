export default class YingyuanAll {
    constructor() {
        this.render();
        this.yingyuanRender();
    }
    render() {
        const html = `
        <div id="movie_yingyuanAll">
        <!-- 热映类型区域年代 -->
        <div class="leixing">
            <div class="leixing1">
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
            <!-- 区域 -->
            <div class="leixing1 quyu">
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
         <div class="yingyuan">
          
            
          
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
        
        
        </div>`
        $("#movie_centre").html(html);
    }
    yingyuanRender() {
        //一进来就渲染所有所有影院。并且把影院的最低价显示出来
        $.ajax({
            url: `/api/chip/getYingyuanSomall`,
            type: 'GET',
            success(msg) {
                console.log(msg)
                let yingyuanHtml = `  <h3>影院列表</h3>`
                const html = msg.map(item => {
                    return `
                    
                    <div class="yingyuanliebiao">
                    <div class="left">
                        <h4>${item.cinemaId.cinemaName}</h4>
                        <div class="dizhi">地址：${item.cinemaId.cinemaAddress}</div>
                    </div>
                    <div class="right">
                        <span>${item.fares}起</span>
                        <a href="#/system/yingchengOne/${item.filmId}/${item.cinemaId._id}" class="goupiaoa">立即购票</a>
                    </div>            
                </div>

    `
                })

                $(".yingyuan").html(yingyuanHtml+html)
            }
        })
    }
}