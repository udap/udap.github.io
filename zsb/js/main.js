 /*nav mouseover*/
 var time = null;
 $(".dropdown-product").hide();
 $("#productNav").mouseover(function() {
   clearTimeout(time);
   $(".dropdown-product").show();
 });
 $("#productNav").mouseout(function() {
   time = setTimeout(function() {
     $(".dropdown-product").hide();
   }, 500);
 });
 $(".dropdown-product").mouseover(function() {
   clearTimeout(time);
   $(".dropdown-product").show();
 });
 $(".dropdown-product").mouseout(function() {
   time = setTimeout(function() {
     $(".dropdown-product").hide();
   }, 500);
 });

 /** 二维码事件 */

$(".click_code").click(function(e) {
  e.stopPropagation();
  $(".zsbanz-code").show();
});

$("#close").click(function(e) {
  e.stopPropagation();
  $(".zsbanz-code").hide();
});