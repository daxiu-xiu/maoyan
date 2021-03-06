export default class System {
    constructor() {
        this.render();
        $.parser.parse();
    }
    render() {
        const page =
            `
            <!-- 头部 -->
            <div class="titlle_bac">
                <img src="./imagesAll/logo.png" alt="">
                <span class="title_one"></span>
                <span class="title_two">猫眼后台管理系统</span>
                <a href="#/backLogin" class="title_out"><img src="./imagesAll/out.png" alt=""><span>退出登录</span></a>
            </div>
            <!-- 主体 -->
            <div class="easyui-layout" style="width:100%;height:689px;" >
                <!-- 左边 -->
                <div id="leftPart" data-options="region:'west',title:'',split:true" style="width:200px;height:100px">
                    <div id="aa" class="easyui-accordion" style="width:300px;height:400px;" fit="true">
                        <div title="用户管理" data-options="iconCls:'icon-back' " style="overflow:auto;padding:10px; ">
                            <li><a href="#/system/frontUsers" class="menu_user">前台用户</a></li>
                            <li><a href="#/system/backUsers" class="menu_user">后台用户</a></li>   
                        </div>
                        <div title="电影管理" data-options="iconCls:'icon-reload'" style="padding:10px;">
                            <li><a href="#/system/film_list"  class="menu_user">电影列表</a></li>
                            <li><a href="#/system/film_add"  class="menu_user">增加电影</a></li>
                        </div>
                        <div title="影院管理" data-options="iconCls:'icon-print',selected:false" style="padding:10px;">
                        <li><a href="#/system/cinemaList" class="menu_user">影院列表
                        </a></li>
                           
                            <li><a href="#/system/addhall" class="menu_user">新增放映厅</a></li>
                        </div>
                        <div id="pai" title="排片管理" data-options="iconCls:'icon-sum',border:'false'" style="padding:10px;">
                            <li><a href="#/system/addchip" class="menu_user">增加排片</a></li>
                            <li><a href="#/system/chiplist" class="menu_user">排片列表</a></li>
                        </div>
                    </div>
                </div>
                <!-- 你们写在下面这个id里面 右边 -->
                <div id="rightPart" data-options="region:'center'," style="padding:5px;background:#eee;"></div>
            </div>
`
        $("#root").html(page)
    }
}