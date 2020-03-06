export default class System {
    constructor() {
        this.render();
        this.file = [];
        this.reyingRender();
        this.navColor();
    }
    render() {
        const html = `  
    <div id="content">
    <header>
    <div class="left">
        <div class="logo">
            <a>
                <img src="../images/logo_s.png" alt="">
            </a>
            <span>成都</span>
            <i></i>
        </div>
        <div class="daohang">
            <a href="#/system" class="selected"  target="blank">首页</a>
            <a href="#/system/dianying" target="blank">电影</a>
            <a href="#/system/bangdan" target="blank">榜单</a>
            <a href="#/system/yingyuanAll">影院</a>
        </div>
    </div>
    <div class="right">
        <input type="text" placeholder="找影视剧/影人/影院" class="input-yingyuan">
        <i></i>
        <span style="margin-right: 16px;" id="yonghu">欢迎您:12312312141111</span>
        <div class='qiehuan'>
            <img src="../images/avatar.png" alt="">
        <div class="xuanzhe">
        <span id="dingdan">我的订单</span>
        <span id="tuichu">切换账号</span>
        </div>
        </div>
        <i></i>
    </div>
    
      </header>
     <div id="movie_centre">
     <div id='movie_shouye'>
     <!-- 郭敬明大图 -->
     <div class="datu">
         <!-- 大图下面的小图 -->
         <div class="xiaotu">
             <div class="jiantou">
                 <img src="../images/shouye4.png" alt="">
             </div>
             <div class="xiaotufenlei">
                 <a href="#/system/zixun">
                     <img src="../images/banner_01.png" alt="">
                 </a>
 
                 <a href="">
                     <img src="../images/banner_02.png" alt="">
                 </a>
                 <a href="">
                     <img src="../images/banner_03.png" alt="">
                 </a>
                 <a href="">
                     <img src="../images/banner_04.png" alt="">
                 </a>
                 <a href="">
                     <img src="../images/banner_05.png" alt="">
                 </a>
                 <a href="">
                     <img src="../images/banner_06.png" alt="">
                 </a>
             </div>
             <div class="jiantou">
                 <img src="../images/shouye5.png" alt="">
             </div>
         </div>
     </div>
     <!-- 正在热映 -->
     <div class="reying">
         <div class="reying-left">
             <div class="reyingDH">
                 <span>正在热映（55部）</span>
                 <a href="">全部&gt;</a>
             </div>
            <div id="movie_reyingmingxi">
            <!-- 热映明细 -->
            <div class="reyingMX" >
                <div class="reyingMXx">
                
                        <img src="" alt="">
              
                    <p>
                        <a href="">购&nbsp;票</a>
                    </p>
                </div>
                <div class="reyingMXx">
             
                        <img src="" alt="">
                 

                    <p>
                        <a href="">购&nbsp;票</a>
                    </p>
                </div>
                <div class="reyingMXx">
             
                        <img src="" alt="">
              

                    <p>
                        <a href="">购&nbsp;票</a>
                    </p>
                </div>
                <div class="reyingMXx">
                 
                        <img src="" alt="">
            

                    <p>
                        <a href="">购&nbsp;票</a>
                    </p>
                </div>
            </div>
            <div class="reyingMX">
                <div class="reyingMXx">
               
                        <img src="" alt="">
                   

                    <p>
                        <a href="">购&nbsp;票</a>
                    </p>
                </div>
                <div class="reyingMXx">
            
                        <img src="" alt="">
                  

                    <p>
                        <a href="">购&nbsp;票</a>
                    </p>
                </div>
                <div class="reyingMXx">
              
                        <img src="" alt="">
                

                    <p>
                        <a href="">购&nbsp;票</a>
                    </p>
                </div>
                <div class="reyingMXx">
              
                        <img src="" alt="">
                
                    <p>
                        <a href="">购&nbsp;票</a>
                    </p>
                </div>
            </div>

            </div>         </div>
         <div class="reying-right">
             <!-- 今日票房 -->
             <p>今日票房</p>
             <div class="piaofang1">
                 <a href="">
                     <img src="../images/jinri.jpg" alt="">
                 </a>
                 <div class="wenzi">
                     <p>
                         <a href="">机械师2：复活</a>
                     </p>
                     <span>5203.28万</span>
                 </div>
             </div>
             <!-- 票房排名 -->
             <div class="paiming">
                 <i>2</i>
                 <a href="">惊天破</a>
                 <span>2365.7万</span>
             </div>
             <div class="paiming">
                 <i>3</i>
                 <a href="">湄公河行动</a>
                 <span>2035.7万</span>
             </div>
             <div class="paiming pianming4">
                 <i>4</i>
                 <a href="">侠探杰克.永不回头</a>
                 <span>2365.7万</span>
             </div>
             <div class="paiming pianming4">
                 <i>5</i>
                 <a href="">龙珠Z:怒火的菲里萨</a>
                 <span>2035.7万</span>
             </div>
             <div class="paiming pianming4">
                 <i>6</i>
                 <a href="">从你的全世界路过</a>
                 <span>2365.7万</span>
             </div>
             <div class="paiming pianming4">
                 <i>7</i>
                 <a href="">圆梦巨人</a>
                 <span>2035.7万</span>
             </div>
             <div class="paiming pianming4">
                 <i>8</i>
                 <a href="">凶手还未睡</a>
                 <span>2365.7万</span>
             </div>
             <div class="paiming pianming4">
                 <i>9</i>
                 <a href="">勇士</a>
                 <span>2035.7万</span>
             </div>
             <div class="paiming pianming4">
                 <i>10</i>
                 <a href="">遵义会议</a>
                 <span>2035.7万</span>
             </div>
             <!-- 今日大盘 -->
             <div class="dapan">
                 <div class="dapanleft">
                     <a href="">今</a>
                     <a href="">日</a>
                     <a href="">大</a>
                     <a href="">盘</a>
                 </div>
                 <div class="dapanright">
                     <p>
                         <span>1.03
                             <span>亿</span>
                         </span>
                         <a href="">更多&gt;</a>
                     </p>
                     <span>北京时间22:46:26&nbsp;&nbsp;猫眼专业版实时票房数据</span>
                 </div>
             </div>
         </div>
     </div>
     <!-- 即将上映 -->
     <div class="reying shangying">
        <div id="daiying">
        <div class="reying-left shangying-left">
        <div class="reyingDH shangyingDH">
            <span>即将上映（276部）</span>
            <a href="">全部&gt;</a>
        </div>
        <!-- 即将上映明细 -->
        <div class="reyingMX shangyingMX">
            <div class="reyingMXx shangyingMXx">
                <div class="shangyingMXxs">
                    <img src="" alt="">
                    <span>134人想看</span>
                    <p>
                        <a href="">预告片</a>
                        <a href="">预售</a>
                    </p>
                </div>
                <a href="">10月26日上映</a>
            </div>
            <div class="reyingMXx shangyingMXx">
                <div class="shangyingMXxs">
                    <img src="" alt="">
                    <span>134人想看</span>
                    <p>
                        <a href="">预告片</a>
                        <a href="">预售</a>
                    </p>
                </div>
                <a href="">10月26日上映</a>
            </div>
            <div class="reyingMXx shangyingMXx">
                <div class="shangyingMXxs">
                    <img src="" alt="">
                    <span>134人想看</span>
                    <p>
                        <a href="">预告片</a>
                        <a href="">预售</a>
                    </p>
                </div>
                <a href="">10月26日上映</a>
            </div>
            <div class="reyingMXx shangyingMXx">
                <div class="shangyingMXxs">
                    <img src="" alt="">
                    <span>134人想看</span>
                    <p>
                        <a href="">预告片</a>
                        <a href="">预售</a>
                    </p>
                </div>
                <a href="">10月26日上映</a>
            </div>
        </div>
        <div class="reyingMX shangyingMX">
            <div class="reyingMXx shangyingMXx">
                <div class="shangyingMXxs">
                    <img src="" alt="">
                    <span>134人想看</span>
                    <p>
                        <a href="">预告片</a>
                        <a href="">预售</a>
                    </p>
                </div>
                <a href="">10月26日上映</a>
            </div>
            <div class="reyingMXx shangyingMXx">
                <div class="shangyingMXxs">
                    <img src="" alt="">
                    <span>134人想看</span>
                    <p>
                        <a href="">预告片</a>
                        <a href="">预售</a>
                    </p>
                </div>
                <a href="">10月26日上映</a>
            </div>
            <div class="reyingMXx shangyingMXx">
                <div class="shangyingMXxs">
                    <img src="" alt="">
                    <span>134人想看</span>
                    <p>
                        <a href="">预告片</a>
                        <a href="">预售</a>
                    </p>
                </div>
                <a href="">10月26日上映</a>
            </div>
            <div class="reyingMXx shangyingMXx">
                <div class="shangyingMXxs">
                    <img src="" alt="">
                    <span>134人想看</span>
                    <p>
                        <a href="">预告片</a>
                        <a href="">预售</a>
                    </p>
                </div>
                <a href="">10月26日上映</a>
            </div>
        </div>
    </div>
        
        </div>
         <!-- 即将上映右边 -->
         <div class="reying-right shangying-right">
             <!-- 最受期待 -->
             <div class="qidai">
                 <span>最受期待</span>
                 <a href="">查看完整榜单></a>
             </div>
 
             <div class="taohua">
                 <a href="">
                     <img src="../images/qidai1.jpg" alt="">
                 </a>
 
                 <div class="jieshao">
                     <p>
                         <a href="">三生三世十里桃花</a>
                     </p>
                     <p>上映时间：2016</p>
                     <span>2016542人想看</span>
                 </div>
             </div>
             <!-- 奇异博士 -->
             <div class="bosi-lu">
                 <div class="bosi">
                     <a href="">
                         <img src="../images/qidai2.jpg" alt="">
                     </a>
                     <div class="js">
                         <a href="">奇异博士</a>
                         <p>152788人想看</p>
                     </div>
                 </div>
                 <div class="bosi">
                     <a href="">
                         <img src="../images/qidai3.jpg" alt="">
                     </a>
                     <div class="js">
                         <a href="">敢问路在何方</a>
                         <p>252568人想看</p>
                     </div>
                 </div>
             </div>
             <div class="paiming pianming4">
                 <i>4</i>
                 <a href="">你的名字</a>
                 <span>2365.7万</span>
             </div>
             <div class="paiming pianming4">
                 <i>5</i>
                 <a href="">我不是潘金莲</a>
                 <span>2035.7万</span>
             </div>
             <div class="paiming pianming4">
                 <i>6</i>
                 <a href="">长城</a>
                 <span>2365.7万</span>
             </div>
             <div class="paiming pianming4">
                 <i>7</i>
                 <a href="">大脑天竺</a>
                 <span>2035.7万</span>
             </div>
             <div class="paiming pianming4">
                 <i>8</i>
                 <a href="">最萌身高差</a>
                 <span>2365.7万</span>
             </div>
             <div class="paiming pianming4">
                 <i>9</i>
                 <a href="">但丁密谋</a>
                 <span>2035.7万</span>
             </div>
             <div class="paiming pianming4">
                 <i>10</i>
                 <a href="">28岁未成年</a>
                 <span>2035.7万</span>
             </div>
         </div>
     </div>
     <!-- 热播电影 -->
     <div class="reying rebo">
         <div class="reying-left rebo-left">
             <div class="reyingDH">
                 <span>正在热映（55部）
                     <a href="">爱情</a>
                     <a href="">喜剧</a>
                     <a href="">动画</a>
                     <a href="">动作</a>
                     <a href="">恐怖</a>
                 </span>
                 <a href="">全部&gt;</a>
             </div>
             <!-- 热播电影明细 -->
             <div class="rebomingxi">
                 <a href="">
                     <img src="../images/rebo1.jpg" alt="">
                 </a>
                 <a href="">
                     <img src="../images/rebo2.jpg" alt="">
                 </a>
                 <a href="">
                     <img src="../images/rebo3.jpg" alt="">
                 </a>
             </div>
             <div class="rebomingxi">
                 <a href="">
                     <img src="../images/rebo4.jpg" alt="">
                 </a>
                 <a href="">
                     <img src="../images/rebo5.jpg" alt="">
                 </a>
                 <a href="">
                     <img src="../images/rebo6.jpg" alt="">
                 </a>
                 <a href="">
                     <img src="../images/rebo7.jpg" alt="">
                 </a>
             </div>
         </div>
         <div class="reying-right rebo-right">
             <!-- top100 -->
             <p>TOP100</p>
             <div class="piaofang1">
                 <a href="">
                     <img src="../images/top.jpg" alt="">
                 </a>
                 <div class="wenzi wenzi1">
                     <p>
                         <a href="">霸王别姬</a>
                     </p>
                     <span>9.5分</span>
                 </div>
             </div>
             <!-- 票房排名 -->
             <div class="paiming reboPM">
                 <i>2</i>
                 <a href="">肖申克的救赎</a>
                 <span>9.5分</span>
             </div>
             <div class="paiming reboPM">
                 <i>3</i>
                 <a href="">这个杀手不太冷</a>
                 <span>9.4分</span>
             </div>
             <div class="paiming pianming4 reboPM4 ">
                 <i>4</i>
                 <a href="">罗马假日</a>
                 <span>9.3分</span>
             </div>
             <div class="paiming pianming4 reboPM4">
                 <i>5</i>
                 <a href="">阿甘正传</a>
                 <span>9.0分</span>
             </div>
             <div class="paiming pianming4 reboPM4">
                 <i>6</i>
                 <a href="">泰坦尼克号</a>
                 <span>9.0分</span>
             </div>
             <div class="paiming pianming4 reboPM4">
                 <i>7</i>
                 <a href="">龙猫</a>
                 <span>9.0分</span>
             </div>
             <div class="paiming pianming4 reboPM4">
                 <i>8</i>
                 <a href="">教父</a>
                 <span>8.9分</span>
             </div>
             <div class="paiming pianming4 reboPM4">
                 <i>9</i>
                 <a href="">唐伯虎点秋香</a>
                 <span>8.8分</span>
             </div>
             <div class="paiming pianming4 reboPM4">
                 <i>10</i>
                 <a href="">千与千寻</a>
                 <span>8.6分</span>
             </div>
         </div>
     </div>
     
     
     </div>
     
     </div>
     <footer>
        <a href="">Lorem ipsum, dolor sit amee nonae, quidem error id recusandae suscipit consequuntur</a>
        <p>f63yanxgixu有限公司</p>
    </footer>    
    </div>               
        `
        $("#spoe").html(html);

    }
    reyingRender() {
        const usersName = localStorage.usersName
        $("#yonghu").html('欢迎您' + usersName)
        $("#spoe").on("click", "#dingdan", function () {
            // console.log(111)
            location.hash = '#/system/dingdan'
        })
        $("#spoe").on("click", "#tuichu", function () {
            localStorage.removeItem("usersName")
            location.hash = '#/login'
        })
        //热映节点
        const imgReying = document.querySelectorAll('#movie_reyingmingxi img')

        //待映节点
        const imgDaiying = document.querySelectorAll("#daiying img")
        //获取上映日期节点
        const daiyingDate = document.querySelectorAll(".shangyingMXx>a")
        //热映
        $.ajax({
            url: `/api/film/getFileByState`,
            type: `post`,
            data: {
                state: `正在热映`
            },
            success(msg) {
                for (let i = 0; i < imgReying.length; i++) {
                    imgReying[i].src = `http://localhost:3000//upload/images/${msg[i].images}`
                    imgReying[i].setAttribute("data-id", msg[i]._id);
                    imgReying[i].style.width = '160px'
                }
            }

        })
        //待映
        $.ajax({
            url: `/api/film/getFileByState`,
            type: `post`,
            data: {
                state: `即将上映`
            },
            success(msg) {
                for (let i = 0; i < imgDaiying.length; i++) {
                    imgDaiying[i].src = `http://localhost:3000//upload/images/${msg[i].images}`;
                    imgDaiying[i].setAttribute("data-id", msg[i]._id)
                    imgDaiying[i].style.width = '160px';
                    daiyingDate[i].innerHTML = `${msg[i].showtime}`
                }
            }
        })
        //点击谁就获取谁的id
        $("#spoe").on("click", "#movie_shouye img", function () {
            const _id = $(this).attr("data-id")
            // const _id = e.target.getAttribute("_id");
            console.log(_id)
            //跳转到详情
            location.hash = `#/system/xiangqing/${_id}`
        })
    }
    //导航点击颜色改变事件




    navColor() {
        // $("#spoe").on("click", '.daohang>a',  (e)=> {
        //     e.target.classList.toggle("selected");
        // })
        // $(document).ready(function () {
        //     $(".daohang >a").each(function () {
        //         console.log($(this))
        //         $this = $(this);
        //         if ($this[0].href == String(window.location)) {
        //             $this.addClass("selected"); //selected表示被选中效果的类名   
        //         }

        //     });

        // });
    }
}