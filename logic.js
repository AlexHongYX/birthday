
function login() {

    var username = document.getElementById("username");
    var pass = document.getElementById("password");

    if (username.value == "") {

        alert("请输入在一起日期");

    } else if (pass.value  == "") {

        alert("请输入生日日期");

    } else if(username.value == "1007" && pass.value == "19991229"){

        window.location.href="main.html";

    }
}
