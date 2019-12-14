//清空记录
$('.searchWrapBox .MessageBox .btn .sure').tap(function () {
    $.ajax({
        type: 'post',
        url: "https://m.zhaoshang800.com/Newmain/del/",
        data: {factory:'1'},
        success:function(msg){
            var historyUl = $(".searchWrapCon .history .historyUl ");
            var hisLi = '<li class="notHistoty">\n' +
                '                        暂无搜索历史记录\n' +
                '                    </li>';
            historyUl.html(hisLi)
        }
    })
});
//数据加载//
var page = 1;
hui.refresh('#refreshContainer', refresh);
hui.loadMore(getMore);
//加载更多
function getMore(){

    wTem.p = page;
    $.ajax({
        type : 'post',
        url  : "/index/search/workshop",
        data : {wTem:wTem,requestType:'ajaxLs'},
        success:function(msg){
//                    hui.closeLoading();
//                    load_stop();//loading动画关闭
            var res = JSON.parse(msg).list;
            var res_height = res.length;
            if(res == 'null'){
                hui.endLoadMore(true, '没有更多数据了哦');
                return false;
            }
            var li = '';
            if(res_height==0 || res_height==null){
                hui.endLoadMore(true, '没有更多数据了哦');
                return false;
            }
            for(var i = 0; i < res_height; i++){
                var li = document.createElement('li');
                li.innerHTML = '        <a href="'+res[i].url+'" class="clearFix">\n' +
                    '            <div class="pic">\n' +
                    '           <i>'+res[i].city_name+'</i>'+
                    '<img lazySrc="'+res[i].imgs[0]+'" src="'+res[i].imgs[0]+'" class="hui-lazy" />'+
                    '            </div>\n' +
                    '            <div class="txt">\n' +
                    '                <h2>'+ res[i].title+'</h2>\n' +
                    '                <p class="baseInfo"><span>'+res[i].add+'</span></p>\n' +
                    '                <p class="label">\n' +
                    '                    <span class="lab_1">'+(res[i].floor=="未填写"?'':res[i].floor)+'</span>\n' +
                    '                    <span class="lab_2">'+(res[i].structure=="未填写"?'':res[i].structure)+'</span>\n' +
                    '                    <span class="lab_3">'+(res[i].newolddegree==""?'':res[i].newolddegree)+'</span>\n' +
                    '                </p>\n' +
                    '                <p class="price cfPrice">' +
                    '<span '+(res[i].plantrent=="面议"?'style="display:none"':'')+'>' + res[i].plantrent + '元/m²</span>' +
                    '<span '+(res[i].measurearea == "未填写" && res[i].measurearea == 0 ? 'style="display:none"':'')+'>' + res[i].measurearea + 'm²</span>' +
                    '</p>\n' +
                    '            </div>\n' +
                    '        </a>\n'
                hui(li).appendTo('#list');
            }
            page++;
            hui.endLoadMore();
            hui.lazyLoad();//图片懒加载
            //结束刷新
            hui.endRefresh();
            //重置加载更多状态
            hui.resetLoadMore();
        }
    });
}
//下拉刷新
function refresh(){
    wTem.p=1;
//            hui.loading('加载中...');
//            load_start();//loading动画打开
    $.ajax({
        type : 'post',
        url  : "https://m.zhaoshang800.com/Newfactory/List/",
        data : {wTem:wTem,requestType:'ajaxLs'},
        success:function(msg){
//                    hui.closeLoading();
//                    load_stop();//loading动画关闭
            var res = JSON.parse(msg).list
            var more = document.getElementById('hui-load-more');
            var notListCon = document.getElementById('notListCon');//无数据
            var res_length = res.length;
            if(res_length==0 || res_length==null){
                notListCon.style.display='block';
                more.style.display='none';
                return false;
            }
            page = 2;
            $("#prompt_info").show();
            $("footer").show();
            hui.lazyLoad();//图片懒加载
            //结束刷新
            hui.endRefresh();
            //重置加载更多状态
            hui.resetLoadMore();
        },
//            error:function(error){
////                    hui.closeLoading();
////                    load_stop();//loading动画关闭
//                // hui.upToast('连接服务器失败！');
//                hui.endRefresh();
//                hui.iconToast('连接服务器失败', 'warn');
//                var more = document.getElementById('hui-load-more');
//                more.style.display='none';
//            }
    });
}