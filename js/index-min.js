$(document).ready(function(){function o(){$windowwidth=$(window).width(),$(".inner-hamburger-menu").removeClass("open"),$windowwidth>=751?($(".footer").css("display","flex"),$("#member .content-rightblock").addClass("scrollbar")):($(".footer").css("display","none"),$("#member .content-rightblock").removeClass("scrollbar"))}function e(){$biggrid=$(".big-grid").height(),$biggrid2=$(".big-grid-2").height(),$distancewindow=$(window).scrollTop(),$windowheight=$(window).height(),($distancewindow+$windowheight>$biggrid2-80||$distancewindow+$windowheight>$biggrid-80)&&$(".fixed-bottom-mobile-navigation").addClass("show")}$("#close").click(function(o){o.preventDefault(),$("#intro").fadeToggle("1s","linear")}),$(function(){$("body a").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this.hash);(o=o.length?o:$("[name="+this.hash.slice(1)+"]")).length&&$("html,body").animate({scrollTop:o.offset().top},1e3)}})}),$(".hamburger-menu").on("click",function(){$(".inner-hamburger-menu").toggleClass("open"),$(".inner-hamburger-menu").hasClass("open")?(console.log("Hamburger menu is opened"),$(".footer").css("display","flex")):(console.log("Hamburger menu is closed"),$(".footer").css("display","none"))}),$(".footer nav a").on("click",function(){$(window).width()<751&&($(".inner-hamburger-menu").removeClass("open"),$(".footer").fadeOut())}),o(),$(window).resize(function(){o()}),$(window).scroll(function(){e()}),$(".pop-up-image.slick-container").slick({slidesToShow:1,slidesToScroll:1,draggable:!1,swipe:!1,arrows:!0}),$(".overlay.slick-container").slick({slidesToShow:1,slidesToScroll:1,autoplay:!1,arrows:!0}),$(".carousel-pop-up .carousel").slick({slidesToShow:1,slidesToScroll:1,draggable:!0,autoplay:!0,autoplaySpeed:4e3,arrows:!1}),$(".member-information").clone().appendTo("#member .content-rightblock"),$(".carousel-pop-up-button").on("click",function(){$(".carousel-pop-up").fadeIn(300),console.log("Member pop up active")}),$(".carousel-pop-up-close").on("click",function(){$(".carousel-pop-up").fadeOut(300),console.log("Member pop up inactive")}),e();var t=[],i=[];$(document).keydown(function(o){t.push(o.keyCode),t.toString().indexOf("38,38,40,40,37,39,37,39,66,65")>=0&&($(document).unbind("keydown",arguments.callee),console.log("Konami code activated!"),$code='<iframe style="width: 100vw; height: 100vh; pointer-events: none;" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp&autoplay=1;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',$("body").html($code)),i.push(o.keyCode),i.toString().indexOf("68,69,83,73,71,78,79,83,79,85,82,67,69")>=0&&($(document).unbind("keydown",arguments.callee),console.log("Easter egg activated!"),$("#hiddengame").css("display","block"),$cookiescript="<script type='text/javascript' src='js/cookie.js'><\/script><script type='text/javascript' src='../js/cookie.js'><\/script>",$($cookiescript).appendTo("footer"),null!=$.cookie("hiddenscore")?($count=$.cookie("hiddenscore"),$opacity=1-.02*$count):($count=0,$opacity=1),$("#hiddenscore").html($count),$posleft=100*Math.random(),$postop=100*Math.random(),$postop<=10?$postop=10:$postop>=90&&($postop=90),$posleft<=10?$posleft=10:$posleft>=90&&($posleft=90),$opacity<=.24&&($opacity=.24),$("#hiddenblock").css("top",$postop+"%").css("left",$posleft+"%").css("opacity",$opacity))}),$("#hiddenblock").on("click",function(){$count++,$("#hiddenscore").html($count),$.cookie("hiddenscore",$count),$posleft=100*Math.random(),$postop=100*Math.random(),$opacity-=.02,$postop<=10?$postop=10:$postop>=90&&($postop=90),$posleft<=10?$posleft=10:$posleft>=90&&($posleft=90),$opacity<=.24&&($opacity=.24),$("#hiddenblock").css("top",$postop+"%").css("left",$posleft+"%").css("opacity",$opacity)}),$("#escape").on("click",function(){$("#hiddengame").css("display","none")})});