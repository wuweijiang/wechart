
  var designwidth=750;
  var fontsize=100;
  var newfontsize;
  function resiz() {
    var devicewidth=document.documentElement.clientWidth;
    if(devicewidth<320){
      devicewidth=320;
    }
    console.log(devicewidth)
    var ratio=devicewidth/designwidth;
    newfontsize=fontsize*ratio;
    /*  $("html").css({fontSize:newfontsize});*/
    document.documentElement.style.fontSize=newfontsize+'px';
    return newfontsize;
  }
  resiz();
  // $(window).resize(resiz);
  window.onresize=resiz;