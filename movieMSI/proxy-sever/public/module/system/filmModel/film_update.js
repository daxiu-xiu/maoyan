export default class Film_update {
    constructor(_id) {
        this._id = _id;
        this.render();
        this.getfilm();
        this.handel();
        $.parser.parse();
    }
    // 修改电影
    render() {
        const film_update = `
        <div id="update" style="width:500px;margin:auto;">
            <p>
                <input class="easyui-textbox" id="cName" data-options="label:'中文名:' " style="width:300px">
            </p>
            <p>
                <input class="easyui-textbox" id="eName" data-options="label:'英文名:'" style="width:300px">
            </p>
            <p>
                <select class="easyui-combobox" id="type" name="dept" data-options="label:'类型:'"
                style="width:250px;">
                    <option>爱情</option>
                    <option>动画</option>
                    <option>恐怖</option>
                    <option>动作</option>
                    <option>喜剧</option>
            </select>
            </p>
            <p>
                <input class="easyui-textbox" id="country" data-options="label:'制片国:'" style="width:300px">
            </p>
            <p>
                <input class="easyui-textbox" id="filmLength" data-options="label:'片长:'" style="width:300px">
            </p>
            <p>
                <input class="easyui-datebox" id="showtime" type="text" data-options="label:'上映时间:'"
                    style="width:200px"></input>
            </p>
            <p>
                <input class="easyui-textbox" id="director" data-options="label:'导演:'" style="width:300px">
            </p>
            <p>
                <input class="easyui-textbox" id="actor" data-options="label:'演员:'" style="width:300px">
            </p>
            <p>
                <input class="easyui-textbox" id="synopsis" type="text" data-options="multiline:'true',label:'简介:' "
                    style="width:350px;height:60px">
            </p>
            <p>
                <select class="easyui-combobox" id="state" name="dept" data-options="label:'所属状态:'"
                    style="width:250px;">
                    <option>正在热映</option>
                    <option>即将上映</option>
                </select>
            </p>

            <label>选择海报图:</label>
            <input id="hbtou" name="chuanhan" class="easyui-filebox" data-options="buttonText:'上传'" style="width:38px">
                <!-- 海报图片-->
           <div id="hantu1" style="width:150px;height:200px;border: 1px solid;">
                <img id="hantu" src="" alt="" id="images" style="width:100%;height:100%;border: 1px solid;">
           </div>
            <p>
                <a id="updateBtn" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-add'">确认修改</a>
            </p>
        </div>
        `;
        // <img src="" alt=""/>
        $("#rightPart").html(film_update);
    }
    // 获取数据 渲染到页面
    getfilm() {
        // console.log(this._id);
        $.ajax({
            url: `/api/film/${this._id}`,
            type: `GET`,
            success([msg]) {
                $("#cName").textbox("setValue", msg.cName);
                $("#eName").textbox("setValue", msg.eName);
                // console.log( $("#type").combobox("getValue"));
                $("#country").textbox("setValue", msg.country);
                $("#filmLength").textbox("setValue", msg.filmLength);
                $("#showtime").datebox("setValue", msg.showtime);
                $("#director").textbox("setValue", msg.director);
                $("#actor").textbox("setValue", msg.actor);
                $("#synopsis").textbox("setValue", msg.synopsis);
                $("#state").combobox("getValue", msg.state);
                $("#hantu").attr("src",`./upload/images/${msg.images}`)
            }
        })
    }
    // 确认修改
    handel() {
        // 上传图片
        $("#hbtou").filebox({
            onClickButton() {
                $("[name=chuanhan]").change(function () {
                    // console.log($("[name=chuanhan]")[0]);
                    const formData = new FormData();
                    formData.append('file', $("[name=chuanhan]")[0].files[0]);
                    $.ajax({
                        url: "/upload/temp",
                        type: "post",
                        data: formData,
                        cache: false,
                        contentType: false,
                        processData: false,
                        success: (msg) => {
                            if (msg) {
                                // console.log(msg);
                                $("#hantu")
                                    .attr("src", "./upload/temp/" + msg[0])
                                    .data("hantuname", msg[0])
                            }
                        }
                    })
                })
            }
        })
        $("#rightPart").on("click", "#updateBtn",  ()=> {
            // console.log(123);
            const cName = $("#cName").textbox('getValue');
            const eName = $("#eName").textbox('getValue');
            const type1 = $("#type").combobox('getValue');
            const country = $("#country").textbox('getValue');
            const filmLength = $("#filmLength").textbox('getValue');
            const showtime = $("#showtime").datebox('getValue');
            const director = $("#director").textbox('getValue');
            const actor = $("#actor").textbox('getValue');
            const synopsis = $("#synopsis").textbox('getValue');
            const state = $("#state").combobox('getValue');
            const images = $("#hantu").data("hantuname");
            console.log(images);
            
            $.ajax({
                // url: 'api/film/updata1',
                url: '/upload/changeImg',
                type: 'POST',
                data: {
                    _id:this._id,
                    cName,
                    eName,
                    type1,
                    country,
                    filmLength,
                    showtime,
                    director,
                    actor,
                    synopsis,
                    state,
                    images
                },
                success: msg => {
                    // console.log(msg);
                    if (msg) {
                        alert("修改成功");
                        location.hash = "#/system/film_list";
                    }
                }
            })
        })
    }
}