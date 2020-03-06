export default class Addchip {
    constructor() {
        this.render();
        this.handel();
        this.getfilm();
        this.getCinemas();
        // this.dateRender();
        $.parser.parse();
    }
    render() {
        const html = `     <div class="easyui-panel" title="新增排片" style="padding:10px" "fit:true">
         <div text-align:center" style="width:800px ">
   
   <div style="margin-bottom: 20px">
    <select id="addfilm" class="easyui-combobox" data-options="label:'选择电影:',panelHeight:'auto'" style="width:280px;">
    </select>
</div>
<div style="margin-bottom: 20px">
    <select id="getcinema"  class="easyui-combobox"  data-options="label:'选择影院:',panelHeight:'auto'" style="width:280px;">
    </select>
</div>
<div style="margin-bottom: 20px">
    <select id="getproject" class="easyui-combobox" data-options="label:'选择放映厅:',panelHeight:'auto'" style="width:280px;">
    </select>
</div>
<div style="margin-bottom: 20px">
    <input class="easyui-datetimebox" id="add_time" name="birthday" data-options="required:true,showSeconds:false,label:'放映时间:' " value="3/4/2010 2:3"
        style="width:280px">

</div>
<div style="margin-bottom: 20px">
    <input id="add_fares" class="easyui-textbox" style="width:280px" data-options="prompt:'￥',label:'设置票价：'">
</div>
<div style="margin-bottom: 20px">
    <a id="add_chip" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-add'">确认新增</a>
</div>
</div>
</div>`
        $("#rightPart").html(html);

    }

    // //设置日期格式
    // dateRender() {
    //     $.fn.datetimebox.defaults.formatter = function (date) {
    //         var y = date.getFullYear();
    //         var m = date.getMonth() + 1;
    //         var d = date.getDate();
    //         var h=date.getHours();
    //         var m=date.getMinutes();
    //         return y + '年' + m + '月' + d + "日"+h+"时"+m+"分";
    //     }
    // }
    // //一进来的时候就获取所有电影院和对应的 放映厅
    getCinemas() {
        //关联//这个组件combobox自带发送请求获取信息的功能
        $('#getcinema').combobox({
            url: '/api/cinemas/getALL_cinemas',
            method: `GET`,
            valueField: '_id',
            textField: 'cinemaName',
            onSelect: function (rec) {
                $('#getproject').combobox({
                    url: `/api/Projections/${rec._id}`,
                    valueField: "_id",
                    textField: "scrm_name"
                });
            }
        });
    }

    //获取所有电影
    getfilm() {
        //这个组件combobox自带发送请求获取信息的功能
        $('#addfilm').combobox({
            url: '/api/film/getall',
            method: `GET`,
            valueField: '_id',
            textField: 'cName'
        })
    };

    //事件
    handel() {
        $("#add_chip").linkbutton({
            onClick: function () {
                //场次时间
                const time = $('#add_time').datetimebox('getValue');
                //票价
                const fares = $("#add_fares").textbox('getValue');
                //电影名字
                const filmId = $("#addfilm").combobox('getValue');
                //影院
                const cinemaId = $("#getcinema").combobox('getValue');
                //放映厅
                const ProjectionsId = $("#getproject").combobox('getValue');
                $.ajax({
                    url: `/api/chip`,
                    type: `POST`,
                    data: {
                        time,
                        fares,
                        cinemaId,
                        filmId,
                        ProjectionsId,

                    },
                    success(msg) {
                        if (msg) {
                            $.messager.alert("新增", "新增成功");
                            location.hash = "#/system/chiplist";
                        }
                    }
                })
            }
        })
    }
}