export default class CinemaList {
    constructor() {
        this.pageData = {
            currentPage: 1,
            pageSize: 6,
            totalPages: 0,
            totalCount: 0,
            Cinemas: []
        }
        this.render();
        // 获取
        this.getcinema();
        // 增加
        this.addCinema();
        // 表头
        this.tableHeader();
        // 选择显示条数
        this.testPage();
        // 条件查询
        this.searchTerm();
        // 删除
        this.deleteCinema();
        // 修改
        this.repairCinmema();
        $.parser.parse();
    }
    render() {
        const template = ` <input type="hidden" id="repairid">
        <div id="main">
            <!-- 主体 -->
            <div class="easyui-panel" title="影院管理" style="padding:10px;background:#fafafa;">
                <p>
                    <!-- 增加按钮 -->
                    <a id="addbtn" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-add'" style="width:50px;background:#fafafa;"></a>
                    <!-- 选项列表 -->
                    <select id="cc" class="easyui-combobox" editable="false" name="dept" style="width:88px;" panelHeight=100>
                        <option value="cinemaName">影院名称</option>
                        <option value="cinemaAddress">影院地址</option>
                        <option value="cinemaTel">影院电话</option>
                    </select>
                    <!-- 搜索框 -->
                    <input id="search" class="easyui-textbox"  style="width:650px">
                    <a id="searchBtn"  class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="width:50px;background:#fafafa;"></a>
                </p>
                <!-- 影院列表 -->
                <table id="dg"></table>
            </div>
        </div>
        <!-- 增加影院页面小窗口 -->
        <div id="addCinema" class="easyui-window" title="影院增加" closed="true" style="width:600px;padding:30px;" data-options=" modal:true,collapsible:false,minimizable:false,maximizable:false,resizable:false">
        <input id="addName" class="easyui-textbox" label="影院名称" style="width:100%">   
        <input id="addAddress" class="easyui-textbox" label="影院地址" style="width:100%">
            <input id="addTel" class="easyui-textbox" label="影院电话" style="width:100%">
           
        </div>
        <!-- 修改影院窗口 -->
        <div id="repairCinema" class="easyui-window" title="修改影院" closed="true" style="width:600px;padding:20px;" data-options=" modal:true,collapsible:false,minimizable:false,maximizable:false,resizable:false">
            <input id="repairName" class="easyui-textbox" label="影院名称" style="width:100%">
            <input id="repairAddress" class="easyui-textbox" label="影院地址" style="width:100%">
            <input id="repairTel" class="easyui-textbox" label="影院电话" style="width:100%">
        </div>
        <div id="pp" style="background:#efefef;border:1px solid #ccc;"></div> `
        $("#rightPart").html(template)
    }
    // 表头渲染
    tableHeader() {
        // 影院列表
        $('#dg').datagrid({
            columns: [
                [{
                        field: '_id',
                        title: '编号',
                        width: 250,
                        align: 'center',
                    },
                    {
                        field: 'cinemaName',
                        title: '名称',
                        width: 150,
                        align: 'center',
                    },
                    {
                        field: 'cinemaAddress',
                        title: '地址',
                        width: 150,
                        align: 'center',
                    },
                    {
                        field: 'cinemaTel',
                        title: '电话',
                        width: 150,
                        align: 'center',
                    },
                    {
                        field: 'active',
                        title: '操作',
                        width: 150,
                        align: 'center',
                        formatter: function (value, row, index) {
                            // 删除修改按钮
                            return `<a data-deleteId=${row._id}  class="easyui-linkbutton delete" >删除</a>
                                         <a data-repairId=${row._id} class="easyui-linkbutton repair" >修改</a>`
                        }
                    },
                ]
            ]
        });
    }
    addCinema() {
        //新增按钮 打开弹窗
        $(function () {
            $('#addbtn').on('click', function () {
                // 点击新增按钮打开新增页面
                $('#addCinema').window('open');
            });
        });
        // 增加
        $("#addCinema").dialog({
            buttons: [{
                text: '增加',
                // 点击确定按钮时候 
                handler: () => {
                    // 获取新增影院信息
                    const newNam = $("#addName").textbox("getValue");
                    const addAddress = $("#addAddress").textbox("getValue");
                    const addTel = $("#addTel").textbox("getValue");
                    // 发送AJAX
                    $.ajax({
                        url: "/api/cinemas/addcinema",
                        type: "POST",
                        data: {
                            cinemaName: newNam,
                            cinemaAddress: addAddress,
                            cinemaTel: addTel
                        },
                        success: (msg) => {
                            if (msg) {
                                // 成功后关闭窗口，以及渲染数据
                                $('#addCinema').window('close');
                                this.getcinema();
                                alert("增加成功")
                            }
                        }
                    });
                }
            }, {
                text: '取消',
                handler: function () {
                    $('#addCinema').window('close');
                }
            }]
        });
    }
    // 获取
    getcinema(searchTerm) {
        // //  渲染数据
        $.ajax({
            url: `/api/cinemas`,
            type: "get",
            data: {
                searchTerm,
                currentPage: this.pageData.currentPage,
                pageSize: this.pageData.pageSize
            },
            success: msg => {
                this.pageData = msg;
                this.pageData.cinemas = msg.cinemas;
                $('#pp').pagination({
                    // 配置分页控件
                    pageNumber: this.pageData.currentPage - 0,
                    total: this.pageData.totalCount - 0,
                    beforePageText: "第",
                    afterPageText: `共${this.pageData.totalPages}页`,
                    pageSize: this.pageData.pageSize - 0,
                    pageList: [2, 4, 6, 8],
                    displayMsg: `当前页从第{from}到{to}条,总共{total}条`
                });
                // 影院列表
                $("#dg").datagrid({
                    data: msg.cinemas,
                    // 数据加载后重新渲染主体
                    onLoadSuccess() {
                        $.parser.parse('#main');
                    }
                }, )

            }
        })
    }
    // 选项以及条数
    testPage() {
        $('#pp').pagination({
            onSelectPage: (pageNumber, pageSize) => {
                // 当改变显示条数以及页数时候，获取改变后的当前页数以及需要显示的条数，重新获取影院
                this.pageData.currentPage = pageNumber;
                this.pageData.pageSize = pageSize;
                // 调用渲染函数
                this.getcinema();
            }
        });
    }
    // 条件查询
    searchTerm() {
        let select = "cinemaName";
        $('#cc').combobox({
            onChange: (newValue) => {
                select = newValue;
            },
        });
        // 输入框查询信息
        $(() => {
            $('#searchBtn').on('click', () => {
                // 让选中的选项为选中状态
                $(`[value=${select}]`).prop("selected");
                const news = $("#search").textbox("getValue");
                const data = `${select}&${news}`;
                this.getcinema(data);
                select = "cinemaName";
            });
        });
    }
    // 删除
    deleteCinema() {
        const _this = this;
        $("#main").on("click", ".delete", function () {
            // 修改弹窗默认属性
            $.messager.defaults = {
                ok: "确认",
                cancel: "取消"
            }
            $.messager.confirm('删除影院', `您确认想要删除该影院么？`, (r) => {
                // 点击确认时候，发送AJAX进行删除
                if (r) {
                    $.ajax({
                        url: "/api/cinemas",
                        type: "delete",
                        data: {
                            _id: $(this).data("deleteid")
                        },
                        // 返回结果
                        success: (msg) => {
                            if (msg.ok == 1) {
                                _this.getcinema();
                            }
                        }
                    })
                }
            });
        })
    }
    // 修改
    repairCinmema()
    {   const _this = this;
        $("#main").on("click",".repair",function()
        {
            $("#repairCinema").window("open");
           
        })
        $("#dg").datagrid({
            onClickRow(index, row) {
                $("#repairName").textbox("setValue", `${row.cinemaName}`);
                $("#repairAddress").textbox("setValue", `${row.cinemaAddress}`);
                $("#repairTel").textbox("setValue", `${row.cinemaTel}`);
                $("#repairid").val(`${row._id}`);
            }
        })
        $("#repairCinema").dialog({
            buttons: [{
                text: '修改',
                // 点击确定按钮时候 
                handler: () => {
                    // 获取新增影院信息
                    const newNam = $("#repairName").textbox("getValue");
                    const newAddress = $("#repairAddress").textbox("getValue");
                    const newTel = $("#repairTel").textbox("getValue");
                    // 发送AJAX
                    $.ajax({
                        url: "/api/cinemas",
                        type: "put",
                        data: {
                            cinemaName: newNam,
                            cinemaAddress: newAddress,
                            cinemaTel: newTel,
                            _id: $("#repairid").val(),
                        },
                        success: (msg) => {
                            if (msg.ok==1) {
                                // 成功后关闭窗口，以及渲染数据
                                $('#repairCinema').window('close');
                                // 重新渲染数据
                                this.getcinema();
                            }
                        }
                    });
                }
            }, {
                text: '取消',
                handler: function () {
                    $('#repairCinema').window('close');
                }
            }]
        });
    }
}