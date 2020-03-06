export default class Updata_back {
    constructor(_id) {
        this._id = _id;
        this.render();
        this.handel()
        $.parser.parse();
    }
    render() {
        const page =
            `
        <div class="changeUser">
        <p>用户修改</p>
        <p><span>账号:</span> <input id="backU_Name" class="easyui-textbox" data-options="iconCls:'icon-more'" style="width:200px"> </p>
        <p>
        <span>部门:</span>
        <select id="backU_other" class="easyui-combobox" name="dept" style="width:200px;" panelHeight="auto">   
    <option value="发传单">发传单</option>   
    <option value="敲代码">敲代码</option>   
    <option value="招人的">招人的</option>   
    <option value="卖票的">卖票的</option>   
</select> 
        </p>
        <a id="changeUeBtn" class="easyui-linkbutton" data-options="iconCls:'icon-search'">修改</a> 
        </div>
        `

        $("#rightPart").html(page)
    }
    handel() {
        //渲染获取的值

        $.ajax({
            url: "api/backUsers/getById",
            type: "GET",
            data: {
                _id: this._id
            },
            success([msg]) {
                $('#backU_other').combobox('setValue', msg.backphone);
                $('#backU_Name').textbox('setValue', msg.name);
            }
        })

        // 确认修改
        $("#changeUeBtn").click(() => {
            $.ajax({
                url: "api/backUsers/changeUer",
                type: "GET",
                data: {
                    _id: this._id,
                    name: $("#backU_Name").val(),
                    backphone: $('#backU_other').val()
                },
                success(msg) {
                    if (msg) {
                        alert("修改成功")
                        location.hash='#/system/backUsers'
                    }
                }
            })
        })

    }
}