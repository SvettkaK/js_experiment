


function include(url) {
  var script = document.createElement('script');
  script.src = url;
  script.charset = "utf-8";
  document.getElementsByTagName('head')[0].appendChild(script);
}

//include('../ufo/js/konva.min.js');
include('js/bg.js?'+new Date().getTime());
include('js/battle.js?'+new Date().getTime());
include('js/loc.js?'+new Date().getTime());