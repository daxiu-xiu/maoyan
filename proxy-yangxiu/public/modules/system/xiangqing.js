export default class Xiangqing {
    constructor(_id) {
        this._id = _id;
        this.render();
        this.xiangqingRender();
    }
    render() {
        console.log(this._id)
        const html = `
        <div id="movie_xiangqing">
        <!-- 大图 -->
        <div class="datu">
            <div class="datu-zj">
                <!-- 白色底框 -->
                <div class="baise"></div>
                <!-- 内容 -->
                <div class="neirong">
                    <a href="">
                        <img src="../images/dianyingxiangqing_06.png" alt="" id="film_img"  style="width: 240px;">
                    </a>
                    <div class="mingzi">
                        <a href="" id="film_cname">湄公河行动</a>
                        <a href="" id="film_ename">Operation Mekong</a>
                        <span id="film_type1">动作，犯罪，剧情</span>
                        <span id="fiml_country">中国大陆，中国香港/124分钟</span>
                        <span id="film_showtime">2016-09-30大陆上映</span>
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
                            <a href="#/system/yingyuan/${this._id}">立即购票</a>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
        <!-- 大主体 -->
        <div class="zhuti">
            <div class="zhuti-left">
                <div class="jieshao">
                    <a href="">介绍</a>
                    <a href="">演职人员</a>
                    <a href="">奖项</a>
                    <a href="">图集</a>
                </div>
                <!-- 剧情介绍 -->
                <div class="jjjs">
                    <h4>剧情介绍</h4>
                    <p id="fime_synopsis">2011年10月5日，两艘中国商船在湄公河金三角水域遭遇袭击，13名中国船员全部遇难，泰国警方从船上搜出90万颗冰毒。消息传回国内，举国震惊。为了查明真相，云南缉毒总队长高刚（张涵予 饰）接受了特殊任务，率领一支骁勇善战的战斗小组进入泰国境内，与潜伏在泰国的情报员方新武（彭于晏
                        饰）碰头，二人联手深入金三角查案。经过调查，发现案件背后果然有着重重疑点，真正的凶手在嫁祸残害无辜中国船员后，不但逍遥法外，更意图利用毒品制造更大的阴谋……二人决定，不惜一切代价也要拿下真凶，打击毒品犯罪，为无辜国人讨回公道！
                    </p>
                </div>
                <!-- 演职人员 -->
                <div class="renyuan">
                    <h4>演职人员</h4>
                    <a href="">全部></a>
                </div>
                <!-- 演员和导演图片 -->
                <div class="yanyuan">
                    <div class="yanyuan1">
                        <span>导演</span>
                        <a href="">
                            <img src="../images/daoyan.jpg" alt="">
                        </a>
                        <p id="film_director">林超贤</p>
    
                    </div>
                    <div class="yanyuan1">
                        <span>演员</span>
                        <a href="">
                            <img src="../images/dianyingxiangqing_07.png" alt="">
                        </a>
                        <p>张涵予</p>
                        <span>饰：高刚</span>
                    </div>
                    <div class="yanyuan1">
                        <span></span>
                        <a href="">
                            <img src="../images/yanyuan_img01.jpg" alt="">
                        </a>
                        <p>彭于晏</p>
                        <span>饰：方新武</span>
                    </div>
    
                    <div class="yanyuan1">
                        <span></span>
                        <a href="">
                            <img src="../images/yanyuan_img02.jpg" alt="">
                        </a>
                        <p>冯文娟</p>
                        <span>饰：郭冰</span>
                    </div>
                    <div class="yanyuan1">
                        <span></span>
                        <a href="">
                            <img src="../images/yanyuan_img03.jpg" alt="">
                        </a>
                        <p>吴旭东</p>
                        <span>饰：特警队长</span>
                    </div>
                </div>
                <div class="renyuan">
                    <h4>图集</h4>
                    <a href="">全部></a>
                </div>
                <!-- 照片 -->
                <div class="zhaopian">
                    <!-- <div class="zhaopian-left"></div> -->
                    <a href="">
                        <img src="../images/dianyingxiangqing_09_03.png" alt="">
                    </a>
                    <div class="zhaopian-right">
                        <a href="">
                            <img src="../images/dianyingxiangqing_10.png" alt="">
                        </a>
                        <a href="">
                            <img src="../images/tuji_img03.jpg" alt="">
                        </a>
                        <a href="">
                            <img src="../images/tuji_img04.jpg" alt="">
                        </a>
                        <a href="">
                            <img src="../images/tuji_img05.jpg" alt="">
                        </a>
                    </div>
                </div>
                <!-- 热门短评 -->
                <div class="renyuan xie">
                    <h4>热门短评</h4>
                    <a href="">写评语</a>
                </div>
                <div class="remenduanping">
                    <div class="dp-top">
                        <a href="">
                            <img src="../images/610bd1d6daddffca084a9d45f8a24fcc11575.jpg" alt="">
                        </a>
                        <div class="huiyuan">
                            <img src="../images/v2.png" alt="">
                        </div>
    
                        <div class="names">
                            <a href="">yufujin</a>
                            <span>购</span>
                            <p>09-30
                                <img src="../images/star_icon02.png" alt="">
                            </p>
                        </div>
                        <!-- 点赞 -->
                        <div class="dianzan">
                            <i></i>
                            <span>12324</span>
                        </div>
                    </div>
                    <div class="dp-bottom">
                        <p>国产良心大作，不枉费我来看首映。视角很新，让我见识到了真正意义上的中国精神，中国式Team work，中国式敢死队。很热血，就冲演员们爆炸的演技，我给满分。</p>
                    </div>
                </div>
                <div class="remenduanping">
                    <div class="dp-top">
                        <a href="">
                            <img src="../images/610bd1d6daddffca084a9d45f8a24fcc11575.jpg" alt="">
                        </a>
                        <div class="huiyuan">
                            <img src="../images/v4.png" alt="">
                        </div>
    
                        <div class="names">
                            <a href="">vhdsdhgfhsfbsd/</a>
                            <span>购</span>
                            <p>09-30
                                <img src="../images/star_icon01.png" alt="">
                            </p>
                        </div>
                        <!-- 点赞 -->
                        <div class="dianzan">
                            <i></i>
                            <span>908</span>
                        </div>
                    </div>
                    <div class="dp-bottom">
                        <p>震撼,太震撼了.从应援出来脑中便盘旋着这俩字.因为父母的工作关系从小便对缉毒题材的影片感兴趣,二老因工作原因索性便独自一人</p>
    
                    </div>
                </div>
                <div class="remenduanping duanping3">
                    <div class="dp-top">
                        <a href="">
                            <img src="../images/610bd1d6daddffca084a9d45f8a24fcc11575.jpg" alt="">
                        </a>
                        <div class="huiyuan">
                            <img src="../images/v2.png" alt="">
                        </div>
    
                        <div class="names">
                            <a href="">小冉然</a>
                            <span>购</span>
                            <p>09-08
                                <img src="../images/star_icon02.png" alt="">
                            </p>
                        </div>
                        <!-- 点赞 -->
                        <div class="dianzan">
                            <i></i>
                            <span>4353</span>
                        </div>
                    </div>
                    <div class="dp-bottom">
                        <p>很不错，看的惊心动魄，张涵予特男子汉，留胡子的彭于晏太酷了</p>
                    </div>
                </div>
                <div class="remenduanping">
                    <div class="dp-top">
                        <a href="">
                            <img src="../images/610bd1d6daddffca084a9d45f8a24fcc11575.jpg" alt="">
                        </a>
                        <div class="huiyuan">
                            <img src="../images/v2.png" alt="">
                        </div>
    
                        <div class="names">
                            <a href="">aede45ddfdfn</a>
                            <span>购</span>
                            <p>09-30
                                <img src="../images/star_icon01.png" alt="">
                            </p>
                        </div>
                        <!-- 点赞 -->
                        <div class="dianzan">
                            <i></i>
                            <span>12324</span>
                        </div>
                    </div>
                    <div class="dp-bottom">
                        <p>国产良心大作，不枉费我来看首映。视角很新，让我见识到了真正意义上的中国精神，中国式Team work，中国式敢死队。很热血，就冲演员们爆炸的演技，我给满分。</p>
                    </div>
                </div>
                <div class="remenduanping duanping5">
                    <div class="dp-top">
                        <a href="">
                            <img src="../images/610bd1d6daddffca084a9d45f8a24fcc11575.jpg" alt="">
                        </a>
                        <div class="huiyuan">
                            <img src="../images/v2.png" alt="">
                        </div>
    
                        <div class="names">
                            <a href="">x99756</a>
                            <span>购</span>
                            <p>09-30
                                <img src="../images/star_icon02.png" alt="">
                            </p>
                        </div>
                        <!-- 点赞 -->
                        <div class="dianzan">
                            <i></i>
                            <span>1208</span>
                        </div>
                    </div>
                    <div class="dp-bottom">
                        <p>根据真实事件改编成电影 让我们直观的了解了贩毒制毒运毒的金三角。那里的孩子从小就被洗脑 抽烟、喝酒、吸毒，看着挺触目惊心的。电影片段有些部分不适宜孩子观影，今天就碰到有父母带着孩子观看这部电影 观影中途几次孩子大喊害怕……也许父母的初衷是想让孩子分辨善恶</p>
                    </div>
                </div>
                <div class="remenduanping duanping5">
                    <div class="dp-top">
                        <a href="">
                            <img src="../images/610bd1d6daddffca084a9d45f8a24fcc11575.jpg" alt="">
                        </a>
                        <div class="huiyuan">
                            <img src="../images/v2.png" alt="">
                        </div>
    
                        <div class="names">
                            <a href="">郭冯帅</a>
                            <span>购</span>
                            <p>09-8
                                <img src="../images/star_icon03.png" alt="">
                            </p>
                        </div>
                        <!-- 点赞 -->
                        <div class="dianzan">
                            <i></i>
                            <span>8904</span>
                        </div>
                    </div>
                    <div class="dp-bottom">
                        <p>超燃，仿佛置身于11年10.5事件中，到底是林超贤还原了这部真实案件还是成就了这两大男神无从考究，从电影剧情中感受到了当年惨案的震惊，影片毫无拖泥带水，剧情紧凑。谢谢您，导演。让我感受到了中国电影的重生</p>
                    </div>
                </div>
                <div class="remenduanping duping7">
                    <div class="dp-top">
                        <a href="">
                            <img src="../images/610bd1d6daddffca084a9d45f8a24fcc11575.jpg" alt="">
                        </a>
                        <div class="huiyuan">
                            <img src="../images/v2.png" alt="">
                        </div>
    
                        <div class="names">
                            <a href="">yufujin</a>
                            <span>购</span>
                            <p>09-30
                                <img src="../images/star_icon02.png" alt="">
                            </p>
                        </div>
                        <!-- 点赞 -->
                        <div class="dianzan">
                            <i></i>
                            <span>5624</span>
                        </div>
                    </div>
                    <div class="dp-bottom">
                        <p>根据真实事件改编成电影 让我们直观的了解了贩毒制毒运毒的金三角。那里的孩子从小就被洗脑 抽烟、喝酒、吸毒，看着挺触目惊心的。电影片段有些部分不适宜孩子观影，今天就碰到有父母带着孩子观看这部电影 观影中途几次孩子大喊害怕……也许父母的初衷是想让孩子分辨善恶
                            但是我觉得这部影片还是有些剧情不适宜孩子，尤其是小孩观看。剧情挺环环相扣，有些杀人的场面有些过于血腥了。但是，很喜欢影片中那只警犬，后来它的牺牲 让我哽咽了。同行观看的朋友说我一只狗死了你们都哭这样
                            …人死了也没见你们哭………或许你不懂，狗永远是狗 但人有时候不一定是人。总的来说这部片子还是值得看的。张涵予、彭于晏的演技也是大赞。！！</p>
                    </div>
                </div>
                <div class="remenduanping duanping3">
                    <div class="dp-top">
                        <a href="">
                            <img src="../images/610bd1d6daddffca084a9d45f8a24fcc11575.jpg" alt="">
                        </a>
                        <div class="huiyuan">
                            <img src="../images/v2.png" alt="">
                        </div>
    
                        <div class="names">
                            <a href="">opg780565</a>
                            <span>购</span>
                            <p>09-30
                                <img src="../images/star_icon03.png" alt="">
                            </p>
                        </div>
                        <!-- 点赞 -->
                        <div class="dianzan">
                            <i></i>
                            <span>9824</span>
                        </div>
                    </div>
                    <div class="dp-bottom">
                        <p>视角很新，让我见识到了真正意义上的中国精神，中国式Team </p>
                    </div>
                </div>
                <div class="remenduanping duanping5">
                    <div class="dp-top">
                        <a href="">
                            <img src="../images/610bd1d6daddffca084a9d45f8a24fcc11575.jpg" alt="">
                        </a>
                        <div class="huiyuan">
                            <img src="../images/v2.png" alt="">
                        </div>
    
                        <div class="names">
                            <a href="">白清</a>
                            <span>购</span>
                            <p>09-30
                                <img src="../images/star_icon03.png" alt="">
                            </p>
                        </div>
                        <!-- 点赞 -->
                        <div class="dianzan">
                            <i></i>
                            <span>6524</span>
                        </div>
                    </div>
                    <div class="dp-bottom">
                        <p>电影总体看来有打斗，有温情，有笑点，也有一些思考比如童子军。因为之前看过电视剧版的关系，一边在看一边与电视剧版的进度进行比较，可能会影响对电影的理解。但总体来说，个人认为电视剧版更好。剧情铺垫够，展开的够庞大而且对于其中的国家情怀渲染更有力</p>
                    </div>
                </div>
                <div class="remenduanping duanping5 duanping10">
                    <div class="dp-top">
                        <a href="">
                            <img src="../images/610bd1d6daddffca084a9d45f8a24fcc11575.jpg" alt="">
                        </a>
                        <div class="huiyuan">
                            <img src="../images/v2.png" alt="">
                        </div>
    
                        <div class="names">
                            <a href="">y931n</a>
                            <span>购</span>
                            <p>09-30
                                <img src="../images/star_icon01.png" alt="">
                            </p>
                        </div>
                        <!-- 点赞 -->
                        <div class="dianzan">
                            <i></i>
                            <span>3444</span>
                        </div>
                    </div>
                    <div class="dp-bottom">
                        <p>不得不说，剧情线是很单薄的，电视剧虽然长但其不失吸引力，就这点来说，差的多了。导演应该是港台吧，对于那种家国情怀还是不够，差很多。其实想说是烂片，但现在的环境里，算合格吧。哦，对了，看完电影脑子里一直回想的是直升机直升机</p>
                    </div>
                </div>
    
            </div>
            <!-- 右边   -->
            <div class="zhuti-right">
                <h4>
                    相关资讯
                </h4>
                <!-- 第一个资讯湄公河 -->
                <div class="zixun1">
                    <a href="">
                        <img src="../images/dianyingxiangqing_03.png" alt="">
                    </a>
                    <div class="wenzi">
                        <p>《湄公河行动》上映20天，票房突破10亿·大关</p>
                        <a href="">猫眼电影</a>
                        <img src="../images/icon_05.png" alt="">
                        <span>21145</span>
                        <img src="../images/icon10.png" alt="">
                        <span>1111</span>
                    </div>
                </div>
                <div class="zixun1">
                    <a href="">
                        <img src="../images/biao.jpg" alt="">
                    </a>
                    <div class="wenzi">
                        <p>《湄公河行动》不仅彭于晏没有死，而且啸天也没有死</p>
                        <a href="">橘子娱乐</a>
                        <img src="../images/icon_05.png" alt="">
                        <span>21145</span>
                        <img src="../images/icon10.png" alt="">
                        <span>1111</span>
                    </div>
                </div>
                <div class="zixun1 zixunmao">
                    <a href="">
                        <img src="../images/oneweek.jpg" alt="">
                    </a>
                    <div class="wenzi">
                        <p>《湄公河行动》连贯27亿，周大盘大跌52%</p>
                        <a href="">猫眼电影</a>
                        <img src="../images/icon_05.png" alt="">
                        <span>21145</span>
                        <img src="../images/icon10.png" alt="">
                        <span>1111</span>
                    </div>
                </div>
    
    
                <h4>
                    相关电影
                </h4>
                <div class="dianying">
                    <div class="xiangqing1">
                        <a href="">
                            <img src="../images/dianyingxiangqing_04.png" alt=""> </a>
                        <a href="">反贪风暴2</a>
                        <i>8.3</i>
    
                    </div>
                    <div class="xiangqing1">
                        <a href="">
                            <img src="../images/film_img02.jpg" alt=""> </a>
                        <a href="">追凶者也</a>
                        <i>8.3</i>
    
                    </div>
                    <div class="xiangqing1">
                        <a href="">
                            <img src="../images/film_img03.jpg" alt=""> </a>
                        <a href="">惊天破</a>
                        <i>8.3</i>
    
                    </div>
                </div>
                <div class="dianying">
                    <div class="xiangqing1">
                        <a href="">
                            <img src="../images/film_img04.jpg" alt=""> </a>
                        <a href="">机械师2:复活</a>
                        <i>8.3</i>
    
                    </div>
                    <div class="xiangqing1">
                        <a href="">
                            <img src="../images/film-img05.jpg" alt=""> </a>
                        <a href="">巴黎危机</a>
                        <i>8.3</i>
    
                    </div>
                    <div class="xiangqing1">
                        <a href="">
                            <img src="../images/film_img06.jpg" alt=""> </a>
                        <a href="">寒战2</a>
                        <i>8.3</i>
    
                    </div>
                </div>
            </div>
        </div>        
        </div>      
        `
        $("#movie_centre").html(html);
    }
    xiangqingRender() {
        $.ajax({
            url: `/api/film/${this._id}`,
            type: 'get',
            success([msg]) {
                // console.log(msg)
                $("#film_img").attr("src",`http://localhost:3000//upload/images/${msg.images}`);
                $("#film_cname").html(msg.cName);
                $("#film_ename").html(msg.eName);
                $("#film_type1").html(msg.type1);
                $("#fiml_country").html(msg.country);
                $("#film_showtime").html(`${msg.showtime}上映时间`);
                $("#fime_synopsis").html(msg.synopsis);
            }
        })
    }
}