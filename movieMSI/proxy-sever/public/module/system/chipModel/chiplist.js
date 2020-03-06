export default class Chiplist {
    constructor() {
        //把我们页面上需要改变的数据已对象的形式全部保存在一个变量中
        this.pageData = {
            //数据库的总数据
            totalCount: 0,
            //当前页面是第几页
            currentPage: 1,
            //总共有多少页
            totalPage: 0,
            //当前页数是多少个数据
            pageSize: 8,
            //拿回的学生数据
            chip: []
        }
        this.filmId = '';
        this.cinemaId = '';
        this.render();
        this.tbRender();
        // this.handle();
        this.getChip();
        this.handle();
        this.getfilm();
        $.parser.parse();

    }
    render() {
        const html = `<div id="chip_header" >
        <a id="" href="#/system/addchip" class="easyui-linkbutton" data-options="iconCls:'icon-add'">新增排片</a>
        <select id="search_film" class="easyui-combobox" data-options="label:'选择电影:',panelHeight:'auto'" style="width:280px;">
        </select>
        <select id="search_cinema" class="easyui-combobox" data-options="label:'选择影院:',panelHeight:'auto'" style="width:280px;">
        </select>
        <select id="search_time" class="easyui-combobox" data-options="label:'放映时间:',panelHeight:'auto'" style="width:280px;">
        </select>
        <a  id="searchBut" class="easyui-linkbutton" data-options="iconCls:'icon-search'">查询</a>  
    </div>
    <div id="chip_warp" style="width:1100px;">
        <table id="chip_tb" style='width: 1100px' fitcolumns="true"></table>
        <div id="chip_paging" style="background:#efefef;border:1px solid #ccc;"></div> 
    </div>`
        $("#rightPart").html(html);
    }
    //表格渲染
    tbRender() {
        $('#chip_tb').datagrid({
            toolbar: "#chip_header",
            remoteSort: false,
            fitColumns: true,
            singleSelect: true,
            columns: [
                [{
                        field: '_id',
                        title: '排片编号',
                        width: '20%',
                        align: 'center'
                    },
                    {
                        field: 'filmId',
                        title: '电影',
                        width: '10%',
                        align: 'center',
                        formatter: function (value, row, index) {
                            // console.log(value,row,index)
                            return value.cName
                        }
                    },
                    {
                        field: 'cinemaId',
                        title: '影院',
                        width: '10%',
                        align: 'center',
                        formatter: function (value, row, index) {

                            return row.ProjectionsId.cinemaId.cinemaName
                        }
                    },
                    {
                        field: 'ProjectionsId',
                        title: '放映厅',
                        width: '10%',
                        align: 'center',
                        formatter: function (value, row, index) {
                            return row.ProjectionsId.scrm_name

                        }
                    },
                    {
                        field: 'time',
                        title: '放映时间',
                        width: '10%',
                        align: 'center'
                    },
                    {
                        field: 'fares',
                        title: '票价',
                        width: '10%',
                        align: 'center'
                    },
                    {
                        field: 'handle',
                        title: '操作',
                        width: '20%',
                        align: 'center',
                        formatter: function (value, row, index) {
                            return `<a href='#/system/updatechip/${row._id}' class="easyui-linkbutton rev" data-options="iconCls:'icon-help'" data-id=${row._id}>修改</a>
                                <a href="#"  class="easyui-linkbutton del" data-options="iconCls:'icon-remove'"  data-id=${row._id}>删除</a>`
                        }
                    },

                    {
                        field: 'sell',
                        title: '座位售卖明细',
                        width: '10%',
                        align: 'center',
                        //座位 售卖明细
                        formatter: function (value, row, index) {
                            return `<a  class="easyui-linkbutton zuowei" data-options="iconCls:'icon-cut'">座位</a>`
                        }
                    }
                ]
            ],
            onLoadSuccess: function () {
                $.parser.parse('#chip_warp');
            },
            striped: true,
        })

    }
    //获取排片明细渲染页面
    getChip(searchTerm) {
        $.ajax({
            url: `/api/chip`,
            type: 'GET',
            data: {
                search: searchTerm,
                currentPage: this.pageData.currentPage,
                pageSize: this.pageData.pageSize
            },
            success: msg => {
                this.pageData = msg;
                $('#chip_tb').datagrid({
                    data: this.pageData.chip,
                });
                $('#chip_paging').pagination({
                    total: this.pageData.totalCount - 0,
                    pageSize: this.pageData.pageSize - 0,
                    pageList: [4, 6, 8, 10],
                    displayMsg: `当前页面是第{from} 条到 {to} 条，数据总计：{total} 条`
                });
            }
        })
    }
    //获取所有电影中文名来渲染搜索框
    getfilm() {
        //这个组件combobox自带发送请求获取信息的功能
        $('#search_film').combobox({
            url: '/api/film/getall',
            method: `GET`,
            valueField: '_id',
            textField: 'cName',
            //电影
            onSelect: (rec) => {
                // console.log(rec);
                this.filmId = rec._id;
                //影院
                $.ajax({
                    url: `/api/chip/${rec._id}`,
                    type: 'post',
                    dataType: 'json',
                    success: (msg) => {
                        var yearList1 = msg.map((item) => (item.cinemaId));
                        $('#search_cinema').combobox({
                            data: yearList1,
                            valueField: '_id',
                            textField: 'cinemaName',
                            onSelect: (rec) => {
                                this.cinemaId = rec._id;
                                // console.log(rec)
                                //时间
                                $.ajax({
                                    url: `/api/chip/gettime`,
                                    type: 'GET',
                                    data: {
                                        cinemaId: this.cinemaId,
                                        filmId: this.filmId
                                    },
                                    success: msg => {
                                        $('#search_time').combobox({
                                            data: msg,
                                            valueField: '_id',
                                            textField: 'time',
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        });
    }
    //事件
    handle() {
        let chip = () => {
            this.getChip();
        }
        //点击上一页下一页
        $('#chip_paging').pagination({
            onSelectPage: (currentPage, pageSize) => {
                this.pageData.currentPage = currentPage;
                this.pageData.pageSize = pageSize;
                this.getChip();
            }
        });
        //删除按钮事件
        $("#rightPart").on("click", ".del", function () {
            $.messager.defaults = {
                ok: "是",
                cancel: '否',
                width: '350px'
            }
            $.messager.confirm('弹窗', '您确认想要删除此排片吗？', r => {
                let _id = $(this).data("id");
                console.log(_id)
                if (r) {
                    $.ajax({
                        url: `/api/chip/${_id}`,
                        type: "DELETE",
                        success: msg => {
                            if (msg) {
                                alert("删除成功")
                                chip();
                            }
                        }
                    })
                }
            });
        })
        //点击查询事件
        $("#searchBut").linkbutton({
            onClick: () => {
                // 电影名字
                // const filmId = $("#addfilm").combobox('getValue');
                // 影院
                // const cinemaId = $("#getcinema").combobox('getValue');
                // const filmId = this.filmId;
                // const cinemaId = this.cinemaId;
                const _id = $('#search_time').combobox('getValue');
                // console.log(_id)          
                $.ajax({
                    url: `/api/chip/getChipId`,
                    type: 'get',
                    data: {
                        _id
                    },
                    success: ([msg]) => {
                        console.log(msg)
                        //拿回来的数据进行渲染
                        // //电影名字
                        // $("#search_time").combobox("setValue", msg.time);
                        // const _id = $('#search_time').datetimebox('getValue'); 
                        // 电影名字
                        // const filmId = $("#addfilm").combobox('getValue');
                        // 影院
                        // const cinemaId = $("#getcinema").combobox('getValue');
                        const filmId = this.filmId;
                        const cinemaId = this.cinemaId;
                        // console.log(filmId,cinemaId)
                        const time = msg.time;
                        const data = `${filmId}&${cinemaId}&${time}`;
                        // console.log(filmId,cinemaId,data)
                        this.getChip(data)
                    }
                })
            }
        })


        //点击座位
        $("#rightPart").on("click", ".zuowei", function () {
            $.ajax({
                url: "/api/chip/getChipId",
                type: "get",
                success(msg) {
                    console.log(msg);
                }
            })

        })
    }

}