export default class Dianying {
    constructor() {
        this.pageData = {
            //数据库的总数据
            totalCount: 0,
            //当前页面是第几页
            currentPage: 1,
            //总共有多少页
            totalPage: 0,
            //当前页数是多少个数据
            pageSize: 30,
            // 获取电影数据
            films: [],
        }
        this.render();
        //动态渲染所有图片和内容
        this.filmRender();
        //事件
        this.handel();
    }
    render() {
        const html = `
        <div id="movie_dianying">
        <!-- 正在热映的导航 -->
        <nav>
            <div class="nav-reying">
                <a href="">正在热映</a>
                <a href="">即将上映</a>
                <a href="">经典影片</a>
            </div>
        </nav>
        <!-- 热映类型区域年代 -->
        <div class="leixing">
            <div class="leixing1">
                <span>类型：</span>
                <span>
                    <a href="">全部</a>
                    <a href="">爱情 </a>
                    <a href="">动画</a>
                    <a href="">剧情</a>
                    <a href="">恐怖</a>
                    <a href="">惊悚</a>
                    <a href="">科幻</a>
                    <a href="">动作</a>
                    <a href="">悬疑</a>
                    <a href="">犯罪</a>
                    <a href="">冒险</a>
                    <a href="">战争</a>
                    <a href="">奇幻</a>
                    <a href="">运动</a>
                    <a href="">古装</a>
                    <a href="">家庭</a>
                    <a href="">西部</a>
                    <a href="">历史</a>
                    <a href="">战争</a>
                    <a href="">歌舞</a>
                    <a href="">情色</a>
                    <a href="">黑色战争</a>
                    <a href="">短片</a>
                    <a href="">纪录片</a>
                    <a href="">其他</a>
                </span>
            </div>
            <!-- 区域 -->
            <div class="leixing1 quyu">
                <span>区域：</span>
                <span>
                    <a href="">全部</a>
                    <a href="">大陆 </a>
                    <a href="">美国</a>
                    <a href="">韩国</a>
                    <a href="">日本</a>
                    <a href="">中国香港</a>
                    <a href="">中国台湾</a>
                    <a href="">印度</a>
                    <a href="">法国</a>
                    <a href="">英国</a>
                    <a href="">俄罗斯</a>
                    <a href="">意大利</a>
                    <a href="">西班牙</a>
                    <a href="">德国</a>
                    <a href="">波兰</a>
                    <a href="">澳大利亚</a>
                    <a href="">伊朗</a>
                    <a href="">其他</a>
                </span>
            </div>
            <!-- 年代 -->
            <div class="leixing1 niandai">
                <span>年代：</span>
                <span>
                    <a href="">全部</a>
                    <a href="">2017</a>
                    <a href="">2016</a>
                    <a href="">2015</a>
                    <a href="">2014</a>
                    <a href="">2013</a>
                    <a href="">2012</a>
                    <a href="">2011</a>
                    <a href="">2010</a>
                    <a href="">2009</a>
                    <a href="">2008</a>
                    <a href="">2007</a>
                </span>
            </div>
        </div>
        <!-- 排序 -->
        <div class="px">
            <form action="" class="px1">
                <input type="radio" id="remen" name="paixu">
                <label for="remen">按热门排序</label>
                <input type="radio" id="shijian" name="paixu">
                <label for="shijian">按时间排序</label>
                <input type="radio" id="pingjia" name="paixu">
                <label for="pingjia">按评价排序</label>
            </form>
            <form action="" method="post" class="bofang">
                <input type="checkbox" id="xuanze">
                <label for="xuanze">可播放</label>
            </form>
        </div>
        <!-- 电影详情 -->
        <div class="xiangqing" id="movie_film">
        </div>
        <!-- 分页符 -->
        <div class="fenye">
            <a id="fistPage">1</a>
            <a id="twoPage">2</a>
            <a>3</a>
            <a>4</a>
            <a>235</a>
            <a>...</a>
            <a>下一页</a>
        </div>       
        </div>        
        `
        $("#movie_centre").html(html);
    }
    filmRender() {
        $.ajax({
            url: `/api/film`,
            type: 'GET',
            data: {
                //当前页数
                currentPage: this.pageData.currentPage,
                //当页条数
                pageSize: this.pageData.pageSize,
            },
            success: msg => {
                this.pageData = msg;
                const listHtml = this.pageData.films.map(item => {
                    return `
                    <div class="dianying">              
                    <img src="http://localhost:3000//upload/images/${item.images}" alt="" style="width:160px" data-id="${item._id}">
                <p>
                    <a href="">${item.cName}</a>
                </p>
                <p>
                    <i>8</i>
                    <span>.</span>
                    <i>3</i>
                </p>
                    </div>                
                    `
                })
                $("#movie_film").html(listHtml)
            }
        })
    }
    //事件
    handel() {
        //点击谁就获取谁的id
        $("#spoe").on("click", "#movie_dianying img", function () {
            const _id = $(this).attr("data-id")
            // const _id = e.target.getAttribute("_id");
            console.log(_id)
            //跳转到详情
            location.hash = `#/system/xiangqing/${_id}`
        })

        //点击第一页
        $("#fistPage").on("click", () => {
            this.pageData.currentPage = 1;
            this.filmRender();
        });
        //点击第二页
        $("#twoPage").on("click", () => {
            this.pageData.currentPage = 2;
            this.filmRender();
        });
    }
}