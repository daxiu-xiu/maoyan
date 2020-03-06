export default class BackUsers {
    constructor() {
        this.pageData = {
            // 当前页
            currentPage: 1,
            // 每页显示条数
            pageSize: 5,
            // 总条数
            totalCount: 10,
            // 总页数
            totalPages: 0,
        }
        this.render();
        this.setPage();
        $.parser.parse();
        this.table();
        this.getBackUsers()
        this.handel()
    }
    render() {
        const page = `
        <!--  表 格  -->
        <table id="backUsersTable">
        </table>
        <!-- 页数 -->
     <div id="setPage" style="background:#efefef;border:1px solid #ccc;"></div>
   
        `;
        $("#rightPart").html(page);
    }
    getBackUsers() {
        const currentPage = this.pageData.currentPage;
        const pageSize = this.pageData.pageSize;
        $.ajax({
            type: "GET",
            url: "api/backUsers",
            data: {
                currentPage,
                pageSize
            },
            success: (msg) => {
                $("#backUsersTable").datagrid({
                    data: msg.data
                })
                $('#setPage').pagination({
                    pageNumber: msg.currentPage - 0,
                    total: msg.totalCount,
                    pageSize: msg.pageSize,
                    pageList: [1, 2, 5, 10],
                    displayMsg: "从第 {from} 个数据到第{to} 数据，总计 {total}个数据",
                })
            }
        })
    }
    //翻页事件
    setPage() {
        $('#setPage').pagination({
            onSelectPage: (pageNumber, pageSize) => {
                //设置新的当前页和显示数，再重新赋值回去
                this.pageData.currentPage = pageNumber;
                this.pageData.pageSize = pageSize;
                this.getBackUsers();
            }
        })

    }
    //表格
    table() {
        $("#backUsersTable").datagrid({
            columns: [
                [{
                        field: '_id',
                        title: '编号',
                        width: 400,
                        align: 'center'
                    },
                    {
                        field: 'name',
                        title: '姓名',
                        width: 400,
                        align: 'center'
                    },
                    {
                        field: 'backphone',
                        title: '手机号',
                        width: 400,
                        align: 'center'
                    },
                    {
                        field: 'play',
                        title: '操作',
                        width: 100,
                        align: 'center',
                        formatter: function (value, row, index) {
                            return `<a id="changeUsers"  data-id="${row._id}" class="easyui-linkbutton" data-options="iconCls:'icon-search'">修改</a>  
                            <a  data-id="${row._id}" id="removeUsers"  class="easyui-linkbutton">删除</a> `
                        }
                    },
                ]
            ]
        })
    }

    //事件
    handel() {
        const _this = this;
        //删除
        $("#rightPart").on("click", "#removeUsers", function () {
            const _id = $(this).data("id");
            $.ajax({
                url: 'api/backUsers',
                type: 'delete',
                data: {
                    _id
                },
                success(msg) {
                    if (msg) {
                        alert("删除成功")
                    }
                    _this.getBackUsers();
                    $.parser.parse();
                }
            })

        })
        //修改
        //获取
        $("#rightPart").on("click", "#changeUsers", function () {
            const _id = $(this).data("id");
            location.hash=`/system/updataBackU/${_id}`
            



        })
    }
}