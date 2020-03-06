export default class Backregister {
    constructor() {
        this.render();
        $.parser.parse();
        this.handel();
    }
    //渲染
    render() {
        const page =
            `
            <div class="registerAll">
            
            <div class="registerlittle">
            <h1>注册</h1>
        <img src="../../imagesAll/logo.png" alt="" id="registerLogo">
        <p><span>账号:</span> <input class="easyui-textbox" data-options="iconCls:'icon-more'" id="backName"  style="width:200px"> </p>

        <p>
        <span>部门:</span>
        <select id="backphone" class="easyui-combobox" name="dept" style="width:200px;" panelHeight="auto">   
    <option value="发传单">发传单</option>   
    <option value="敲代码">敲代码</option>   
    <option value="招人的">招人的</option>   
    <option value="卖票的">卖票的</option>   
</select> 
        </p>
        <p><span>密码:</span> <input class="easyui-textbox" data-options="iconCls:'icon-lock'" id="backPwd" style="width:200px"> </p>

        <a id="registerBtn" href="#/backLogin" class="easyui-linkbutton" data-options="iconCls:'icon-search'">注册</a> 
        </div>
        </div>
        `
        $("#root").html(page)
    }

    handel() {
        $("#registerBtn").click(function () {
            const name = $("#backName").val();
            const password = $("#backPwd").val();
            const backphone = $("#backphone").val();
            console.log(backphone);
            
            $.ajax({
                type: "POST",
                // url: "api/backUsers/register",
                url:"users/register",
                data: {
                    name,
                    password,
                    backphone
                },
                success(msg) {
                    if (msg) {
                        alert("注册成功！")
                    }
                }
            })

        })
    }
    // select(){
    //     $("#backphone").
    // }


}