export default class BackLogin {
    constructor() {
        this.render();
        $.parser.parse();
        this.handel();
    }
    render() {
        const page =
            `
        <div class="loginAll">
        <div class="loginlittle">
        <h1>登录</h1>
        <img src="../../imagesAll/logo.png" alt="" id="loginLogo">
        <p><span>账号:</span> <input id="name" class="easyui-textbox" data-options="iconCls:'icon-more'" style="width:200px"> </p>
        <p>
        <span>部门:</span>
        <select id="backphone" class="easyui-combobox" name="dept" style="width:200px;" panelHeight="auto">   
    <option value="发传单">发传单</option>   
    <option value="敲代码">敲代码</option>   
    <option value="招人的">招人的</option>   
    <option value="卖票的">卖票的</option>   
</select> 
        </p>
        <p><span>密码:</span> <input id="password" class="easyui-textbox" data-options="iconCls:'icon-lock'" style="width:200px"> </p>
        <a id="loginBtn" class="easyui-linkbutton" data-options="iconCls:'icon-search'">登录</a> 
        <a href="#/backRegister"> 没有账号，去注册</a>
        </div>
        </div>
        `
        $("#root").html(page);
    }
    handel() {
        $("#loginBtn").click(function () {
            $.ajax({
                // url:'api/backUsers/login',
                url:'users/login',
                type:'POST',
                data:{name:$("#name").val(),password:$("#password").val(),backphone:$("#backphone").val()},
                success(msg){
                   if(msg){
                       alert("登录成功")
                       location.hash='#/system'
                   }
                }
            })
        })
    }
}