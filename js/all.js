$(function(){$("#dropdownMenu").on("show.bs.dropdown",function(){var n=$(this),o=n.find(".dropdown-menu");o.css("position","fixed"),o.css("top",n.height()+20)});var n=function(n){return"span"==n.target.localName?$(n.target):$("span",n.target)};$("h3").on("mouseleave",function(o){n(o).hide()}).on("mouseenter",function(o){n(o).show()})});