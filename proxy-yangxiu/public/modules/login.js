export default class Login {
    constructor() {
        this.render();
        this.handel();
    }
    render() {
        const html = `
    <div id="login">
    <header>
    <a href="../html/maoyanshouye.html">
        <img src="../images/logo.png" alt="">
    </a>
</header>
<!-- 登陆 -->
<div class="denglu">
    <div class="picture">
        <a href="#">
            <img src="../images/login.png" alt="">
        </a>
    </div>
    <!-- 输入框 -->
    <div class="suk">
        <a href="#">账号登陆</a>
        <a href="#">手机动态码登陆
            <i></i>
        </a>
        <form action="">
            <p>
                <input type="text" id="login_phone" maxlength="11" placeholder="手机号" class="input1">
                <img src="../images/login_icon01.png" alt="" class="img1">
            </p>
            <p>
                <input type="text" placeholder="密码" class="input1" id="login_psd">
                <img src="../images/login_icon02.png" alt="" class="img1">
            </p>
            <p>
                <input type="checkbox" id="daxiu">
                <label for="daxiu">7天内自动登陆</label>
                <a href="#">忘记密码？</a>
            </p>
            <p>
                <button id="loginBtn">登陆</button>
            </p>
            <p>
                <span>还没有账号？</span>
                <a href="#/register">免费注册</a>
            </p>
        </form>
    </div>
</div>
<footer>
    <a href="#">&copy;2016 quia , accusantium, nihil iusto blanditiis rerum similique.</a>
</footer>
    </div>
        `
        $("#spoe").html(html);
    }
    handel() {
        //鼠标离开的时候，验证账号是否存在
        $("#login_phone").on("blur", function () {
            $.ajax({
                url: `/api/frontUsers/isEixt`,
                type: `post`,
                data: {
                    front_name: $("#login_phone").val()
                },
                success(msg) {
                    if (msg) {

                    } else {
                        alert("账号不存在")
                    }
                }
            })

        })
        //验证密码账号是否匹配
        $("#loginBtn").on("click", function () {
            console.log($("#login_phone").val(), $("#login_psd").val())
            $.ajax({
                url: '/frontUsers/login',
                type: 'post',
                data: {
                    usersName: $("#login_phone").val(),
                    password: $("#login_psd").val()
                },
                success(msg) {
                    console.log(msg)
                    if (msg) {
                        alert('登录成功');
                        localStorage.usersName = msg[0].front_name;
                        location.hash = '#/system'
                    } else {
                        alert("登录失败")
                    }
                }
            })
        })

    }
}