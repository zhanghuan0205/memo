/**
 * Created by PX on 2017/6/6.
 */

window.$ = require("../plugin/jquery");

//下方编辑按钮的点击事件
$("#edit").on("click",function (e) {
    $("textarea").val(" ");
    if ($("#edit").text() == ""){
        $("#leftCon").css({
            "left":"0",
            "transition":"all 0.3s linear"
        });
    }else {
        e.stopPropagation();
    }
})

//首页上方编辑按钮点击事件
$("header").on("click","#topEdit",function () {
    var ss = "<div><i></i></div>";
    //判断当前标签内的值为”取消“or”编辑“
    if($("#topEdit").text() == "取消"){
            $("footer>#edit").text("").removeClass("add1").addClass("edit");
            $("#listCon").children().children().css("margin-left","0");
            $("#listCon").children().children("div").remove();
            $(this).text("编辑");
    }else {
        $("#listCon").children().children().css("margin-left","40px")
        $("#listCon").children().children("p").before(ss);
        $("footer>#edit").text("删除").removeClass("edit").addClass("add1");
        $("#topEdit").text("取消");
        $("#listCon li div").on("click",function (e) {
            e.stopPropagation();
            var thisLich = $(this).children();
            thisLich.text("√").css({'background':'#e9b114','color':'#fff'});
            $("footer>#edit").click(function () {
                thisLich.parents("li").remove();
                var setotal = $("#listCon").children().length
                $("#textNum").text(setotal + "个");
                if(setotal == 0){
                    $("footer>#edit").text("").removeClass("add1").addClass("edit");
                    $("#listCon").children().children().css("margin-left","0");
                    $("#listCon").children().children("div").remove();
                    $("#topEdit").text("编辑");
                }
            })
        })
    }
})
//编辑页面的保存按钮的键盘触发事件
$("textarea").keyup(function () {
    if($("textarea").val()!== ""){
        $("#saveCon").css("color","#e9b114");
    }else {
        $("#saveCon").css("color","#b8b8b8");
    }
})

//编辑页面保存按钮的点击事件
$("#saveCon").on("click",function () {
    saveCon();
})
//首页每条备忘录的点击事件
$("#listCon").on("click","li",function (e) {
        $("#leftCon").css({
            "left":"0",
            "transition":"all 0.3s linear"
        });
        var thisCon = $(this).children("p");
        // console.log(thisCon);
        function setTime() {
            thisCon.parent().remove()
        }
        setTimeout(setTime,300);
        $("textarea").val(thisCon.text());
        $("textarea").attr("disabled","disabled");
        $("#canEdit").click(function () {
            $("textarea").removeAttr("disabled");
        })
        // $("#saveCon").click(function (e) {
        //     e.stopPropagation();
        //     saveCon();
        //     // thisCon.text($("textarea").val());
        //     // thisCon.siblings().text(showTime());
        //     }
        // )
})

//编辑页面的返回按钮点击事件
$("header").on("click","#toBack",function () {
    $("#leftCon").css({
        "left":"100%",
        "transition":"all 0.3s linear"
    });
})

//获取当前时间
function showTime(){
    var nowDate = new Date();
    var str = "" + nowDate.getFullYear() + "-";
    var time = nowDate.getHours() + ":" + nowDate.getMinutes() + ":" + nowDate.getSeconds();
    str += (nowDate.getMonth()+1) + "-";
    str += nowDate.getDate() + " ";
    str += time;
    return str;
}

//

function saveCon() {
    var mainCon =  $("textarea").val();
    var text = `
            <li>
               <p>${mainCon}</p>
               <span>${showTime()}</span>
            </li>
        `;
    $("#leftCon").css({
        "left":"100%",
        "transition":"all 0.3s linear"
    });
    $("#topEdit").css("color","#e9b114");
    $("#listCon").append(text);
    var total = $("#listCon").children().length;
    $("#textNum").text(total + "个");
}
