export default class Film_list {
    constructor() {
        this.pageData = {
            //数据库的总数据
            totalCount: 0,
            //当前页面是第几页
            currentPage: 1,
            //总共有多少页
            totalPage: 0,
            //当前页数是多少个数据
            pageSize: 3,
            // 获取电影数据
            films: [],
            // 查询默认值
            search_val: "",
            search_typ: ""
        }
        $.parser.parse();
        this.render();
        this.handel();
        this.getfilms();
        this.flip_over();
        $.parser.parse();
    }
    render() {
        const film_list = `
        <div id="styFilm_list">
        <div class="easyui-panel" title="电影列表" style="padding:10px">
        <div id="styFilm_list_one">
            <!-- 新增按钮 -->
            <a id="btn" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-add'">新增</a>
            <!-- 下拉搜索框 -->
            <input id="search" class="easyui-searchbox" style="width:200px"
                data-options="prompt:'请输入查询内容',menu:'#searchType'"></input>
            <div id="searchType" style="width:100px">
                <div data-options="name:'cName'">中文名</div>
                <div data-options="name:'type1'">类型</div>
                <div data-options="name:'country'">制片国家</div>
                <div data-options="name:'filmLength'">片长</div>
                <div data-options="name:'state'">所属状态</div>
            </div>
        </div>
        <div id="warp">
        <table id="table"  style='width:1100px'>
        </table>
        <div id="page" style="background:#efefef;border:1px solid #ccc;"></div>
        </div>
        </div>
        `;
        $("#rightPart").html(film_list);
    }
    // 渲染表格
    handel() {
        $('#table').datagrid({
            toolbar: '#styFilm_list_one',
            fitColumns: true,
            singleSelect: true,
            columns: [
                [{
                        field: '_id',
                        title: '编号',
                        width: 180,
                        align: "center"
                    },
                    {
                        field: 'images',
                        title: '图片',
                        width: 160,
                        align: "center",
                        formatter: function (value, row, index) {
                            // 删除修改按钮
                            return `<img src="./upload/images/${row.images}" alt=""/>`
                        }
                    },
                    {
                        field: 'cName',
                        title: '中文名',
                        width: 100,
                        align: "center"
                    },
                    {
                        field: 'eName',
                        title: '英文名',
                        width: 100,
                        align: "center"
                    },
                    {
                        field: 'type1',
                        title: '类型',
                        width: 80,
                        align: "center"
                    },
                    {
                        field: 'country',
                        title: '制片国家',
                        width: 80,
                        align: "center"
                    },
                    {
                        field: 'filmLength',
                        title: '片长',
                        width: 80,
                        align: "center"
                    },
                    {
                        field: 'showtime',
                        title: '上映时间',
                        width: 100,
                        align: "center"
                    },
                    {
                        field: 'director',
                        title: '导演',
                        width: 80,
                        align: "center"
                    },
                    {
                        field: 'actor',
                        title: '演员',
                        width: 80,
                        align: "center"
                    },
                    {
                        field: 'synopsis',
                        title: '简介',
                        width: 150,
                        align: "center"
                    },
                    {
                        field: 'state',
                        title: '所属状态',
                        width: 80,
                        align: "center"
                    },
                    {
                        field: 'handle',
                        title: '操作',
                        width: 150,
                        align: 'center',
                        formatter: function (value, row, index) {
                            return `
                            <a href="#/system/film_update/${row._id}" class="easyui-linkbutton update" data-id="${row._id}" data-option="iconCls:'icon-pencil'" >修改</a>
                            <a href="#" class="easyui-linkbutton remove" data-id="${row._id}" data-option="iconCls:'icon-remove'">删除</a>
                        `
                        }
                    }
                ]
            ],
            onLoadSuccess: function () {
                $.parser.parse('#warp');
            }
        });
    }
    // 获取所有电影 渲染列表
    getfilms() {
        const _this = this;
     
        $.ajax({
            url: `/api/film`,
            type: 'GET',
            data: {
                currentPage: this.pageData.currentPage,
                pageSize: this.pageData.pageSize,
                search_val:this.pageData.search_val,
                search_typ:this.pageData.search_typ,

            },
            success: msg => {
                this.pageData = msg;
            //    console.log(this.pageData);
               
                $('#table').datagrid({
                    data: this.pageData.films
                });
            
                $('#page').pagination({
                    total: this.pageData.totalCount - 0,
                    pageSize: this.pageData.pageSize - 0,
                    pageList: [3, 6, 9],
                    displayMsg: `当前页面是第{from} 条到 {to} 条，数据总计：{total} 条`
                });
            }
        })

        // 查询
        $("#search").searchbox({
            searcher: (value, name) => {             
                _this.pageData.search_val = value;
                _this.pageData.search_typ = name;
                _this.getfilms();
            }
        })


    }
    // 翻页
    flip_over() {
        let getfilms = () => {
            this.getfilms();
        }
        // 点击上一页/下一页
        $("#page").pagination({
            onSelectPage: (currentPage, pageSize) => {
                this.pageData.currentPage = currentPage;
                this.pageData.pageSize = pageSize;
                this.getfilms();
            }
        });
        // 点击新增按钮跳转到新增页面
        $("#btn").linkbutton({
            onClick: function () {
                location.hash = "#/system/film_add"
            }
        });
        // 删除事件
        $("#rightPart").on("click", ".remove", function () {
            $.messager.defaults = {
                ok: "是",
                cancel: '否',
                width: '350px'
            }
            $.messager.confirm('弹窗', '您确认想要删除此电影吗？', r => {
                let _id = $(this).data("id");
                if (r) {
                    $.ajax({
                        url: `/api/film/${_id}`,
                        type: "DELETE",
                        success: msg => {
                            if (msg) {
                                alert('删除成功');
                                getfilms();
                            }

                        }
                    })
                }
            });
        })
    }
}