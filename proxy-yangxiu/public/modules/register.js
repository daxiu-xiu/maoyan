export default class Register {
    constructor() {
        this.render();
        this.handel();
    }
    render() {
        const html = `
    <div id="register">  <header>
    <div class="logo">
        <a href="../html/maoyanshouye.html">
            <img src="./images/logo_s.png" alt="">
        </a>

    </div>
</header>
<!-- 注册框框 -->
<div class="zhuce">
    <form action="" method="get">
        <p>
            <label for="zhuce_phone">手机号
            </label>
            <input type="text" maxlength="11" id="zhuce_phone"" class="sjh" value="15520622171">
            <a href="">注册成功后，全美团通用</a>
        </p>
        <p>
            <button>免费获取动态码</button>
        </p>
        <p>
            <label for="auth_code">短信动态码
            </label>
            <input type="text" maxlength="6" id="auth_code" class="sjh" value="123456">
            <a href=""></a>
        </p>
        <p>
            <label for="zhuce_psd">创建密码
            </label>
            <input type="text" id="zhuce_psd" class="sjh" placeholder="密码为下划线数字字母组成6-16位" value="13555oi0987">
            <a href=""></a>
        </p>
        <p>
            <span id="qiang">强</span>
            <span id="zhong">中</span>
            <span id="ruo">弱</span>
        </p>
        <p>
            <label for="re_psw">确认密码
            </label>
            <input type="text" id="re_psw" class="sjh">
            <a href=""></a>
        </p>
        <p>
            <button id="zhuce_but">同意以下协议并注册</button>
        </p>
        <div>
            <a href="">《美团网用户协议》</a>
        </div>
    </form>
</div>
<footer>
    <a href="#">Lorem ipit. Iusto dolore voluptas vero voluptate commodi assumenda suscipdam?</a>
</footer>
    </div>
        `
        $("#spoe").html(html);
    }
    handel() {
        //设置手机号，第一位必须为1，第二位不可以是1和2,后面9为必须是纯数字
        let phoneRe = /^[1][3-9][0-9]{9}$/;
        //设置验证码为纯数字六位数
        let authRe = /^[0-9]{6}$/;
        //设置密码为6-18位数的下划线，数字，字母组成
        let pswRe = /^[a-z0-9_-]{6,18}$/

        let isOK1 = false;
        let isOK2 = false;
        let isOK3 = false;
        let isOK4 = false;
        //手机号格式是否正确
        $("#zhuce_phone").on("blur", function () {
            //获取用户输入的手机号value用正则式判断是否正确
            if (phoneRe.test(zhuce_phone.value)) {
                zhuce_phone.nextElementSibling.innerHTML = "格式正确"
                zhuce_phone.nextElementSibling.style.color = "blue";
                $.ajax({
                    url: `/api/frontUsers/isEixt`,
                    type: `post`,
                    data: {
                        front_name: $("#zhuce_phone").val()
                    },
                    success(msg) {
                        if (msg) {
                            isOK1 = false;
                            alert("账号已经存在")
                        } else {
                            isOK1 = true;
                        }
                    }
                })

            } else {
                zhuce_phone.nextElementSibling.innerHTML = "格式错误"
                zhuce_phone.nextElementSibling.style.color = "red"
                isOK1 = false;
            }
        })
        //验证验证码格式是否正确
        $("#auth_code").on("blur", function () {
            //获取用户输入的验证码value用正则式判断是否正确
            if (authRe.test(auth_code.value)) {
                auth_code.nextElementSibling.innerHTML = "格式正确"
                auth_code.nextElementSibling.style.color = "blue"
                isOK2 = true;
            } else {
                auth_code.nextElementSibling.innerHTML = "格式错误"
                auth_code.nextElementSibling.style.color = "red"
                isOK2 = false;
            }
        })
        //输入密码绑定事件
        zhuce_psd.oninput = function () {
            //获取用户输入的验证码value用正则式判断是否正确
            if (pswRe.test(zhuce_psd.value)) {
                // console.log(123)
                zhuce_psd.nextElementSibling.innerHTML = "格式正确"
                zhuce_psd.nextElementSibling.style.color = "blue"
                if ((zhuce_psd.value).length >= 6 && (zhuce_psd.value).length <= 10) {
                    // console.log(1111)
                    ruo.style.backgroundColor = 'blue';
                    qiang.style.backgroundColor = '#eeeeee';
                    zhong.style.backgroundColor = '#eeeeee';
                } else if ((zhuce_psd.value).length > 10 && (zhuce_psd.value).length <= 12) {
                    ruo.style.backgroundColor = '#eeeeee';
                    qiang.style.backgroundColor = '#eeeeee';
                    zhong.style.backgroundColor = 'yellow';
                } else {
                    ruo.style.backgroundColor = '#eeeeee';
                    qiang.style.backgroundColor = 'red';
                    zhong.style.backgroundColor = '#eeeeee';
                }
                isOK3 = true;
            } else {
                zhuce_psd.nextElementSibling.innerHTML = "格式错误"
                zhuce_psd.nextElementSibling.style.color = "red"
                isOK3 = false;
            }
        }
        //判断两次密码的值是否一样
        re_psw.onblur = function () {
            //用value两次的值来判断是否一致
            if (re_psw.value == zhuce_psd.value) {
                re_psw.nextElementSibling.innerHTML = "正确"
                re_psw.nextElementSibling.style.color = "blue"
                isOK4 = true;
            } else {
                re_psw.nextElementSibling.innerHTML = "两次输入的密码不一致"
                re_psw.nextElementSibling.style.color = "red"
                isOK4 = false;
            }
        }
        //点击注册事件
        zhuce_but.onclick = function (event) {
            if (isOK1 && isOK2 && isOK3 && isOK4) {
                $.ajax({
                    url: `/frontUsers`,
                    type: `post`,
                    data: {
                        usersName: $("#zhuce_phone").val(),
                        password: $("#zhuce_psd").val()

                    },
                    success(msg) {
                        if (msg) {
                            alert("注册成功,跳转到登录");
                            location.hash = "#/login";
                        }
                    }
                })
            } else {
                event.preventDefault();
                alert("注册失败");
            }
        }
    }
}