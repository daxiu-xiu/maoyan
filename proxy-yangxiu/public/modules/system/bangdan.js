export default class System {
    constructor() {
        this.render();
    }
    render() {
        const html = `
            <div id="movie_bangdan"> <!-- 热门导航 -->
            <nav>
                <div class="daohang">
                    <a href="">热映口碑榜</a>
                    <a href="">最受期待榜</a>
                    <a href="">国内票房榜</a>
                    <a href="">北美票房榜</a>
                    <a href="">TOP100榜</a>
                </div>
            </nav>
            <!-- 更新时间 -->
            <div class="shijian">
                <p>2016-12-21
                    <span>已更新</span>
                </p>
                <p>榜单规则，按照昨日国内热映的影片，按照平分从高到低排列前10名，每天上午10点更新，相关数据来源于“猫眼专业版”，及“猫眼电影库”</p>
            </div>
            <!-- 榜单明细 -->
            <div class="bangdan">
                <div class="biaoji">
                    <img src="../images/icon_04.png" alt="">
                </div>
                <div class="jieshao">
                    <a href="../html/maoyanxiangqing.html" target="blank">
                        <img src="../images/bangdan1.jpg" alt="">
                    </a>
        
                    <div class="wenzi">
                        <p>
                            <a href="">湄公河行动</a>
                        </p>
        
                        <p>主演：
                            <a href="">张歆艺，</a>
                            <a href="">彭于晏，</a>
                            <a href="">冯文娟</a>
                        </p>
                        <span>上映时间：2016-09-30</span>
                    </div>
                    <!-- 评分 -->
                    <div class="pingfen">
                        <span>
                            <i>9.</i>
                            <i>3</i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="bangdan">
                <div class="biaoji">
                    <img src="../images/bangdan_04_03.png" alt="">
                </div>
                <div class="jieshao jieshao2">
                    <a href="">
                        <img src="../images/bangdan2.jpg" alt="">
                    </a>
        
                    <div class="wenzi">
                        <p>
                            <a href="">逗鸟飞转，萌宝满天飞</a>
                        </p>
        
                        <p>主演：
                            <a href="">安乐.萨姆伯格，</a>
                            <a href="">凯迪克朗，</a>
                            <a href="">凯尔西.莫兰格</a>
                        </p>
                        <span>上映时间：2016-09-30</span>
                    </div>
                    <!-- 评分 -->
                    <div class="pingfen">
                        <span>
                            <i>8.</i>
                            <i>5</i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="bangdan">
                <div class="biaoji">
                    <img src="../images/bangdan-33.png" alt="">
                </div>
                <div class="jieshao">
                    <a href="">
                        <img src="../images/bangdan3.jpg" alt="">
                    </a>
        
                    <div class="wenzi">
                        <p>
                            <a href="">爱神箭</a>
                        </p>
        
                        <p>主演：
                            <a href="">应昊茗，</a>
                            <a href="">赵媛媛，</a>
                            <a href="">姜潮</a>
                        </p>
                        <span>上映时间：2016-09-30</span>
                    </div>
                    <!-- 评分 -->
                    <div class="pingfen">
                        <span>
                            <i>8.</i>
                            <i>5</i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="bangdan">
                <div class="biaoji biaoji2">
                    <i>4</i>
                </div>
                <div class="jieshao">
                    <a href="">
                        <img src="../images/bangdan4.jpg" alt="">
                    </a>
        
                    <div class="wenzi">
                        <p>
                            <a href="">机械师2.复活</a>
                        </p>
        
                        <p>主演：
                            <a href="">杰森.斯坦森，</a>
                            <a href="">杰西卡.阿尔巴，</a>
                            <a href="">李.琼斯</a>
                        </p>
                        <span>上映时间：2016-10-27</span>
                    </div>
                    <!-- 评分 -->
                    <div class="pingfen">
                        <span>
                            <i>8.</i>
                            <i>4</i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="bangdan">
                <div class="biaoji biaoji2">
                    <i>5</i>
                </div>
                <div class="jieshao">
                    <a href="">
                        <img src="../images/bangdan5.jpg" alt="">
                    </a>
        
                    <div class="wenzi">
                        <p>
                            <a href="">勇士</a>
                        </p>
        
                        <p>主演：
                            <a href="">李东学，</a>
                            <a href="">聂远，</a>
                            <a href="">于小伟</a>
                        </p>
                        <span>上映时间：2016-10-14</span>
                    </div>
                    <!-- 评分 -->
                    <div class="pingfen">
                        <span>
                            <i>9.</i>
                            <i>0</i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="bangdan">
                <div class="biaoji biaoji2">
                    <i>6</i>
                </div>
                <div class="jieshao">
                    <a href="">
                        <img src="../images/bangdan6.jpg" alt="">
                    </a>
        
                    <div class="wenzi">
                        <p>
                            <a href="">从你的全世界路过</a>
                        </p>
        
                        <p>主演：
                            <a href="">邓超，</a>
                            <a href="">白百何，</a>
                            <a href="">杨洋</a>
                        </p>
                        <span>上映时间：2016-09-19</span>
                    </div>
                    <!-- 评分 -->
                    <div class="pingfen">
                        <span>
                            <i>8.</i>
                            <i>8</i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="bangdan">
                <div class="biaoji biaoji2">
                    <i>7</i>
                </div>
                <div class="jieshao">
                    <a href="">
                        <img src="../images/bangdan7.jpg" alt="">
                    </a>
        
                    <div class="wenzi">
                        <p>
                            <a href="">鲁滨逊漂流记</a>
                        </p>
        
                        <p>主演：
                            <a href="">伊尔卡.贝欣，</a>
                            <a href="">马特亚斯.思维和夫，</a>
                            <a href="">迪埃特尔.哈勒沃登</a>
                        </p>
                        <span>上映时间：2016-10-04</span>
                    </div>
                    <!-- 评分 -->
                    <div class="pingfen">
                        <span>
                            <i>8.</i>
                            <i>7</i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="bangdan">
                <div class="biaoji biaoji2">
                    <i>8</i>
                </div>
                <div class="jieshao">
                    <a href="">
                        <img src="../images/bangdan8.jpg" alt="">
                    </a>
        
                    <div class="wenzi">
                        <p>
                            <a href="">地球四季</a>
                        </p>
        
                        <p>主演：
                            <a href="">黄晓明，</a>
                            <a href="">蒋雯丽，</a>
                        </p>
                        <span>上映时间：2016-09-30</span>
                    </div>
                    <!-- 评分 -->
                    <div class="pingfen">
                        <span>
                            <i>8.</i>
                            <i>6</i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="bangdan">
                <div class="biaoji biaoji2">
                    <i>9</i>
                </div>
                <div class="jieshao">
                    <a href="">
                        <img src="../images/bangdan9.jpg" alt="">
                    </a>
        
                    <div class="wenzi">
                        <p>
                            <a href="">七月与安生</a>
                        </p>
        
                        <p>主演：
                            <a href="">周冬雨，</a>
                            <a href="">马思纯，</a>
                            <a href="">李程彬</a>
                        </p>
                        <span>上映时间：2016-09-14</span>
                    </div>
                    <!-- 评分 -->
                    <div class="pingfen">
                        <span>
                            <i>8.</i>
                            <i>6</i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="bangdan bangdan10">
                <div class="biaoji biaoji2">
                    <i>10</i>
                </div>
                <div class="jieshao">
                    <a href="">
                        <img src="../images/bangdan10.jpg" alt="">
                    </a>
        
                    <div class="wenzi">
                        <p>
                            <a href="">圆梦巨人</a>
                        </p>
        
                        <p>主演：
                            <a href="" 马克.里路朗斯，</a>
                                <a href="">赵媛媛，</a>
                                <a href="">黄磊</a>
                        </p>
                        <span>上映时间：2016-10-14</span>
                    </div>
                    <!-- 评分 -->
                    <div class="pingfen">
                        <span>
                            <i>8.</i>
                            <i>4</i>
                        </span>
                    </div>
                </div>
            </div></div>
        
        `
        $("#movie_centre").html(html);
    }
}