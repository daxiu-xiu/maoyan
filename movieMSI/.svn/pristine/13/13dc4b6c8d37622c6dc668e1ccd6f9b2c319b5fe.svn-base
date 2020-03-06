export default class FrontUsers {
    constructor() {
        this.pageData = {
            currentPage: 1,
            pageSize: 6,
            totalPages: 0,
            totalCount: 0,
            users: []
        }
        this.render();
        this.table();
        this.getUsers();
        this.testPage();
        this.searchTerm();
        this.deleteUser();
        this.repairUsers();
        $.parser.parse();
    }
    render() {
        const page = `
        <input type="hidden" id="repairid">
        <div id="main">
        <!-- 主体 -->
        <div class="easyui-panel" title="用户管理" style="padding:10px;background:#fafafa;">
            <p>
                <!-- 选项列表 -->
                <select id="cc" class="easyui-combobox" editable="false" name="dept" style="width:88px;" panelHeight=100>
                    <option value="front_name">姓名</option>
                    <option value="front_phone">电话</option>
                    <option value="front_gender">性别</option>
                    <option value="front_age">年龄</option>
                </select>
                <!-- 搜索框 -->
                <input id="search" class="easyui-textbox"  style="width:650px">
                 <a id="searchBtn"  class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="width:50px;background:#fafafa;"></a>
            </p>
            <!-- 用户列表 -->
            <table id="dg"></table>
        </div>
    </div>
    <!-- 修改影院窗口 -->
    <div id="repairUser" class="easyui-window" title="修改影院" closed="true" style="width:600px;padding:20px;" data-options=" modal:true,collapsible:false,minimizable:false,maximizable:false,resizable:false">
        <input id="repairName" class="easyui-textbox" label="用户姓名" style="width:100%">
        <input id="repairPhone" class="easyui-textbox" label="用户电话" style="width:100%">
        <input id="repairGender" class="easyui-textbox" label="用户性别" style="width:100%">
        <input id="repairAge" class="easyui-textbox" label="用户年龄" style="width:100%">
    </div>
    <div id="pp" style="background:#efefef;border:1px solid #ccc;"></div><div id="page" style="background:#efefef;border:1px solid #ccc;"></div>
        `;
        $("#rightPart").html(page);
    }
    // 表头渲染
    table() {
        $("#dg").datagrid({
            columns: [
                [{
                        field: '_id',
                        title: '编号',
                        width: 100,
                        align: 'center'
                    },
                    {
                        field: 'front_name',
                        title: '姓名',
                        width: 100,
                        align: 'center'
                    },
                    {
                        field: 'front_age',
                        title: '年龄',
                        width: 100,
                        align: 'center'
                    },
                    {
                        field: 'front_gender',
                        title: '性别',
                        width: 100,
                        align: 'center'
                    },
                    {
                        field: 'front_phone',
                        title: '电话',
                        width: 100,
                        align: 'center'
                    },
                    {
                        field: 'active',
                        title: '操作',
                        width: 150,
                        align: 'center',
                        formatter: function (value, row, index) {
                            // console.log(row);

                            // 删除修改按钮
                            return `<a data-deleteId=${row._id}  class="easyui-linkbutton delete" >删除</a>
                                         <a data-repairId=${row._id} class="easyui-linkbutton repair" >修改</a>`
                        }
                    },
                ]
            ]
        })
    }
    // 获取
    getUsers(searchTerm) {
        // //  渲染数据
        $.ajax({
            url: `/api/frontUsers`,
            type: "get",
            data: {
                searchTerm,
                currentPage: this.pageData.currentPage,
                pageSize: this.pageData.pageSize
            },
            success: msg => {
                this.pageData = msg;
                this.pageData.users = msg.users;
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
                    data: this.pageData.users,
                    // 数据加载后重新渲染主体
                    onLoadSuccess() {
                        $.parser.parse('#main');
                    }
                })

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
                this.getUsers();
            }
        });
    }
    // // 条件查询
    searchTerm() {
        let select = "front_name";
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
                this.getUsers(data);
                select = "front_name";
            });
        });
    }
    // 删除
    deleteUser() {
        const _this = this;
        $("#main").on("click", ".delete", function () {
            // 修改弹窗默认属性
            $.messager.defaults = {
                ok: "确认",
                cancel: "取消"
            }
            $.messager.confirm('删除用户', `您确认想要删除该用户么？`, (r) => {
                // 点击确认时候，发送AJAX进行删除
                if (r) {
                    $.ajax({
                        url: "/api/frontUsers",
                        type: "delete",
                        data: {
                            _id: $(this).data("deleteid")
                        },
                        // 返回结果
                        success: (msg) => {
                            if (msg.ok == 1) {
                                _this.getUsers();
                            }
                        }
                    })
                }
            });
        })
    }
    // 修改
    repairUsers() {
        const _this = this;
        $("#main").on("click", ".repair", function () {
            $("#repairUser").window("open");

        })
        $("#dg").datagrid({
            onClickRow(index, row) {
                $("#repairName").textbox("setValue", `${row.front_name}`);
                $("#repairGender").textbox("setValue", `${row.front_gender}`);
                $("#repairAge").textbox("setValue", `${row.front_age}`);
                $("#repairPhone").textbox("setValue", `${row.front_phone}`);
                $("#repairid").val(`${row._id}`);
            }
        })
        $("#repairUser").dialog({
            buttons: [{
                text: '修改',
                // 点击确定按钮时候 
                handler: () => {
                    // 获取新增影院信息
                    const newNam = $("#repairName").textbox("getValue");
                    const newGender = $("#repairGender").textbox("getValue");
                    const newPhone= $("#repairPhone").textbox("getValue");
                    const newAge = $("#repairAge").textbox("getValue");

                    // 发送AJAX
                    $.ajax({
                        url: "/api/frontUsers",
                        type: "put",
                        data: {
                                _id:$("#repairid").val(),
                                front_name: newNam,
                                front_gender: newGender,
                                front_age:newAge,
                                front_phone: newPhone,    
                        },
                        success: (msg) => {
                            if (msg.ok == 1) {
                                // 成功后关闭窗口，以及渲染数据
                                $('#repairUser').window('close');
                                // 重新渲染数据
                                this.getUsers();
                            }
                        }
                    });
                }
            }, {
                text: '取消',
                handler: function () {
                    $('#repairUser').window('close');
                }
            }]
        });
    }
}