$(function(){
    $("img.lazy").lazyload({
        placeholder : "./image/zhanwei.png",
        effect: "fadeIn"
    });
	//1. 获得每层楼距离页面顶部的距离，并将它们放入一个数组中。
    var floorArr = [];
    if(window.screen.availWidth<=768){
        $(".floor").each(function(){
            let everyTop = $(this).offset().top-50+'px';    //每个div距离页面顶部的距离。
            floorArr.push(everyTop);
        })
    }else{
        $(".floor").each(function(){
            let everyTop = $(this).offset().top+'px';    //每个div距离页面顶部的距离。
            floorArr.push(everyTop);
        })
    }
    
    
        //监听滚动条滚过的距离，根据距离去判断滚到了那一层楼。
        // 绑定滚动事件，并且获得滚动的距离            
        //用on来绑定的事件可以使用off取消，因为点击楼层的时候，会有附带的跑马灯效果。方便取消监听。
        $(window).on("scroll",scrollMove)
        function scrollMove(){
            //滚动条滚动的距离
            var scrollTop = $(window).scrollTop();
            console.log(scrollTop)
            var index = 0;
            for(var i=0; i<floorArr.length; i++){
                var now = floorArr[i];    //当前楼层距离顶部的距离
                var next = floorArr[i+1];    //下一楼层距离顶部的距离。
                if(scrollTop>=now && scrollTop<next){
                    index = i;
                }else if(scrollTop>=floorArr[floorArr.length-1]){
                    index = floorArr.length-1;
                }
            }
            
        //3. 根据楼层索引，去改变楼层导航的样式
        //     $(".floorMenu .fl").eq(index).addClass("active").siblings("li").removeClass("active")      
        }
        //4. 给楼层导航绑定点击事件。
        $(".floorMenu .fl").click(function(){
            //取消滚动监听
            // $(window).off("scroll");
            $(this).addClass("active").siblings("li").removeClass("active");
            //获得点击li的索引。
            var idx  = $(this).index();
            //根据索引获取楼层顶部距离
            var sTop = floorArr[idx];
            $(document.body).animate({
                scrollTop:sTop
            },500)
            
        })
        $(".five").click(function(){
          $("html,body").animate({scrollTop:0},500);
        });
        $(window).on("scroll",function(){
            console.log()
            if($(".floor_one").offset().top-$(window).scrollTop()<=0){
                $(".floorMenu").show();
                $(".menu-box").show();
                
            }else{
                $(".floorMenu").hide();
                $(".menu-box").hide();
            }
        })
})