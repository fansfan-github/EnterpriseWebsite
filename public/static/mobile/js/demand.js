/********************* 委托找房总人数 **********************/
var totalNum = function(){var Tnow = document.getElementById('Tnow');
    var TnowDtate = $('#count').val();
    var TnowStr = TnowDtate+"";
    for(var i=0;i<TnowStr.length;i++){
        var TnowSpan = TnowSpan+i
        TnowSpan = document.createElement('span');
        TnowSpan.className = "data-"+i
        TnowSpan.innerHTML = TnowStr[i]
        Tnow.appendChild(TnowSpan);
    }
    function total(){
        var now =Tnow.children[TnowStr.length-1];

        var nowDate = parseInt(now.innerHTML)
        if(nowDate<9){
            now.innerHTML=nowDate+1;
        }else{
            now.innerHTML= 0;
            t2();
        }
    }
    function t2(){
        var now2 =Tnow.children[TnowStr.length-2];
        var nowDate = parseInt(now2.innerHTML)
        if(nowDate<9){
            now2.innerHTML=nowDate+1;

        }else{
            now2.innerHTML= 0;
            t3();
        }
    };
    function t3(){
        var now3 =Tnow.children[TnowStr.length-3];
        var nowDate = parseInt(now3.innerHTML)
        if(nowDate<9){
            now3.innerHTML=nowDate+1;

        }else{
            now3.innerHTML= 0;
            t4();
        }
    };
    function t4(){
        var now4 =Tnow.children[TnowStr.length-4];
        var nowDate = parseInt(now4.innerHTML)
        if(nowDate<9){
            now4.innerHTML=nowDate+1;

        }else{
            now4.innerHTML= 0;
            // t4();
        }
    };
    total();
    setInterval(total,86400)

}

var entrustType = $(".demandBox .demandCon .entrustType li");
var sellType = $(".demandBox .demandCon .sellType li");
var textarea = $(".demandCon .textarea textarea");
var inp = $(".demandCon .inp input");
var inpVal = $(".demandCon .inp input").val();
var maillReg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;//邮箱正则
var telReg = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/;//手机正则
var textareaOne ="请描述您的具体需求，如：找一个靠近高速，大小1200到1500平，带装修，做模具行业的厂房等。" ;
var textareaTwo = "请描述您的具体需求，如：找南山科技园300㎡，带装修附近有公交，做文创行业的办公楼等。";
var textareaThree = "请描述您的具体需求，如：求购10-20亩，做食品行业的工业用地等。";
// $("entrustType,sellType").tap(function(){
//     $(this).addClass("focus").siblings("li").removeClass("focus");
//
// });
$(".demandBox .demandCon .entrustType li").tap(function(){
    $(this).addClass("focus").siblings("li").removeClass("focus");
    if($(this).index()==0){
        textarea.attr('placeholder',textareaOne);
    }else if($(this).index()==1){
        textarea.attr('placeholder',textareaTwo);
    }else if($(this).index()==2){
        textarea.attr('placeholder',textareaThree);
    }
});

$(".demandBox .demandCon .sellType li").tap(function(){
    $(this).addClass("focus").siblings("li").removeClass("focus");
});


//获得焦点
// inp[0].on('focus',function(){
//     if(inp[0].value.trim() || inp[0].value.trim()=="请输入位置"){
//         $(this).val("");
//         alert('s')
//     }
// });
inp[0].addEventListener('focus',function(){
    if(!this.value.trim() || this.value.trim()=="请选择位置"){
        this.value ="";
        this.className="active";
    }
});
inp[0].addEventListener('blur',function(){
    if(!this.value.trim() || this.value.trim()=="请选择位置"){
        // this.value ="请选择位置";
        this.className="";
    }
});
inp[1].addEventListener('focus',function(){
    if(!this.value.trim() || this.value.trim()=="请输入联系人名称"){
        this.value ="";
        this.className="active";
    }
});
inp[1].addEventListener('blur',function(){
    if(!this.value.trim() || this.value.trim()=="请输入联系人名称"){
        // this.value ="请输入联系人名称";
        this.className="";
    }
});
inp[2].addEventListener('focus',function(){
    if(!this.value.trim() || this.value.trim()=="请输入联系方式"){
        this.value ="";
        this.className="active";
    }
});
inp[2].addEventListener('blur',function(){
    if(!this.value.trim() || this.value.trim()=="请输入联系方式"){
        // this.value ="请输入联系方式";
        this.className="";
    }
});
// textarea[0].addEventListener('focus',function(){
//     if(!this.value.trim() || this.value.trim()==textareaOne || this.value.trim()==textareaTwo || this.value.trim()==textareaThree){
//         this.innerText ="";
//         this.value ="";
//         this.className="active";
//     }
// });
// textarea[0].addEventListener('blur',function(){
//     if(!this.value.trim() || this.value.trim()==textareaOne || this.value.trim()==textareaTwo || this.value.trim()==textareaThree){
//         if(entrustType.eq(0).hasClass("focus")){
//             this.value = textareaOne;
//         }else if(entrustType.eq(1).hasClass("focus")){
//             this.value = textareaTwo;
//         }else if(entrustType.eq(2).hasClass("focus")){
//             this.value = textareaThree;
//         }
//         this.className="";
//     }
//
// });

//实时监听input
$('.demandCon>div.tj').on('input', function(e) {
    var val = $(this).find('input').val();
    var tVal = $(this).find("textarea").val();
    if(val=="" ||tVal==""){
        $(this).find(" .resetIco").hide();
    }else if(val!=""||val!=null||tVal!=""||tVal!=null){
        $(this).find(" .resetIco").show();
    }
});

//清除搜索内容
$(".demandCon .resetIco").tap(function(){
    // $(".searchForm input").val("");
    $(this).siblings('input').trigger('focus');
    $(this).siblings('input').val('');
    $(this).siblings('textarea').trigger('focus');
    $(this).siblings('textarea').val('');
    $(this).hide();

});



function dialog(type) {
    //type=1:成功 type=2:提交失败 type=3:服务器出错
    var type = arguments[0]?arguments[0]:1;
    var _this = $('.megDialog')
    _this.show();
    if(type==1){
        _this.addClass('megSuusen').removeClass('megFail')
        _this.find('h4').text('信息提交成功');
        _this.find('.fail').text('请保持电话通畅，客服将会联系您');
    }else if(type==2){
        _this.removeClass('megSuusen').addClass('megFail')
        _this.find('h4').text('信息提交失败');
        _this.find('.fail').text('请重新提交');
    }else if(type==3){
        _this.removeClass('megSuusen').addClass('megFail')
        _this.find('h4').text('服务器出错');
        _this.find('.fail').text('请重新提交');
    }else if(type==4){
        _this.removeClass('megSuusen megFail')
        _this.find('h4').text('请勿频繁提交');
        _this.find('.fail').text('您已成功提交，请勿频繁提交');
    }

    $(".megDialog").next('.maskBox').show();
    return false;
}
$(".demandBox").append('<div class="verifyTipsBox center"><p class="verifyTips ">手机号码格式有误，请重新输入</p></div> ');
var verifyTipsBox = $(".verifyTipsBox");
var verifyTips = $(".verifyTipsBox .verifyTips");
/************ 设置自动消失事件 *************/
function dieAway(){
    verifyTipsBox.show();

    setTimeout(function(){
        $(".verifyTipsBox").animate({
            opacity:'0',
            // display:'none',
        }, 300, 'ease-out');
    },1000);
    $(".verifyTipsBox").css({"opacity":"1"})
    setTimeout(function () {
        verifyTipsBox.hide();
    },4000)
}

$('form.demandCon').submit(function(event){
    // if(!inp[0].value.trim() || inp[0].value.trim()=="请选择位置"){
    //     verifyTips.text("请选择位置");
    //     dieAway();
    //     return false;
    // }
    if(!inp[1].value.trim() || inp[1].value.trim()=="请输入联系人名称"){
        verifyTips.text("请输入联系人名称");
        dieAway();
        return false;
    }
    if(!inp[2].value.trim()){
        verifyTips.text("联系方式不能为空");
        dieAway();
        return false;
    }
    if(!telReg.test(inp[2].value)){
        verifyTips.text("您输入的手机格式有误，请重新输入");
        dieAway();
        return false;
    }
    if(!textarea[0].value.trim() || textarea[0].value.trim()==textareaOne || textarea[0].value.trim()==textareaTwo || textarea[0].value.trim()==textareaThree){
        verifyTips.text("请输入您的具体需求");
        dieAway();
        return false;
    }
    var demand_type =  $(".demandCon .entrustType ul li.focus").attr("val");
    var type = $('.demandCon .sellType ul li.focus').attr('val');
    var area = $('.demandCon .inp input.active').attr('data-label');
    var name = $("input[name='name']").val();
    var tel = $("input[name='tel']").val();
    var detail = $("textarea[name='detail']").val();
    var token = $("input[name='token']").val();
    $.ajax({
        type : 'post',
        url  : "/index/publish/customer.html",
        data : {all:area,leixing:type,name:name,tel:tel,detail:detail,leibie:demand_type,token:token},
        success:function(msg){
            if(msg == 1){
                $('#sub').attr("disabled","disabled");
                $('#sub').css({"background-color":"#ccc"});
                $('#sub').html('已委托');
                dialog(msg)
            }else if(msg == 2){
                return  dialog(msg)
            }else if(msg == 4){
                return  dialog(msg)
            }
        },
        error:function(error){
            return  dialog(3);
        },
    })
    return false;
    // event.preventDefault();//阻止默认行为
})

$(".megDialog p.btn").tap(function(){
    var _this = $('.megDialog')
    _this.hide();
    $(".megDialog").next('.maskBox').hide();
})