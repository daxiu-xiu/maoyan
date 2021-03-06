export default class Film_add {
    constructor() {
        this.render();
        this.handel();
        this.dateRender()
        $.parser.parse();
    }
    // 新增电影
    render() {
        const film_add = `
        <div class="movieADD">
        <div class="easyui-panel" title="新增电影" style="padding:10px">
        <div id="form" style="width: 750px;margin: auto;margin-top: 50px; display: flex;justify-content: space-between;">
        <div id="left">
            <p>                     
                <input class="easyui-textbox" id="cName"  data-options="label:'中文名:',required: 'true',missingMessage:'此项不能为空' ,prompt:'中文名' "
                style="width:300px">  
            </p>
            <p>
                <input class="easyui-textbox" id="eName" data-options="label:'英文名:',required: 'true',missingMessage:'此项不能为空' ,prompt:'英文名' "
                style="width:300px">
            </p>
            <p>
                <select class="easyui-combobox" id="type" name="type" data-options="label:'类型:'"
                    style="width:300px;">
                    <option value="爱情">爱情</option>
                    <option>动画</option>
                    <option>恐怖</option>
                    <option>动作</option>
                    <option>喜剧</option>
                </select>
            </p>
            <p>
                <input class="easyui-textbox" id="country" data-options="label:'制片国:',required: 'true',missingMessage:'此项不能为空' ,prompt:'制片国' "
                style="width:300px">
            </p>
            <p>
                <input class="easyui-textbox" id="filmLength" data-options="label:'片长:',required: 'true',missingMessage:'此项不能为空' ,prompt:'片长' "
                style="width:300px">
            </p>
            <p>
                <input class="easyui-datebox" id="showtime" type="text" data-options="label:'上映时间:',required: 'true',missingMessage:'此项不能为空' ,prompt:'上映时间' "
                    style="width:200px"></input>
            </p>
            <p>
                <input class="easyui-textbox" id="director" data-options="label:'导演:',required: 'true',missingMessage:'此项不能为空' ,prompt:'导演' "
                style="width:300px">
            </p>
            <p>
                <input class="easyui-textbox" id="actor" data-options="label:'演员:',required: 'true',missingMessage:'此项不能为空' ,prompt:'演员' "
                style="width:300px">
            </p>
        </div>
        <div id="right">
            <label>简介:</label>
            <p>
                <input class="easyui-textbox" id="synopsis" type="text" data-options="required: 'true',missingMessage:'此项不能为空',multiline:'true'"
                    style="width:350px;height:100px">
            </p>
            <p>
                <select class="easyui-combobox" id="state" name="dept" data-options="label:'所属状态:'"
                    style="width:250px;">
                    <option >正在热映</option>
                    <option>即将上映</option>
                </select>
            </p>
            <label>选择海报图:</label>
            <input id="hbtou" name="chuanhan" class="easyui-filebox" data-options="buttonText:'上传'" style="width:38px">
                <!-- 海报图片-->
           <div id="hantu1" style="width:150px;height:200px;border: 2px solid green;">
                <img id="hantu" src="" alt="" id="images" style="width:100%;height:100%;border: 1px solid;">
           </div>
            <p>
                <a id="addBtn" class="easyui-linkbutton" data-options="iconCls:'icon-add'">新增</a>
            </p>
        </div>
    </div>
    </div>
        `
        $("#rightPart").html(film_add);
    }

    //设置日期格式
    dateRender() {
        $.fn.datebox.defaults.formatter = function (date) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            return y + '年' + m + '月' + d + "日";
        }
    }
    handel() {
        //文件上传  1
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
        //  新增数据
        $("#addBtn").linkbutton({
            onClick: function () {
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
                if (images == undefined) {
                    alert("请上传电影海报！！")
                } else {
                    $.ajax({
                        url: '/upload/xin',
                        type: 'POST',
                        data: {
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
                        success: (msg) => {
                            console.log(msg);
                            if (msg) {
                                alert("新增成功");
                                location.hash = "#/system/film_list";
                            }
                        }
                    })
                }

            }
        })


    }
}