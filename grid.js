$(document).ready(function(){
 $(".sidebar").hide();
 var i=document.querySelector("i");
 $(i).click(function(){
 	if($(".sidebar").is(":hidden")){
  $(".sidebar").slideDown( "slow");}
  else
  {
  	$(".sidebar").slideUp("slow");
  }
 });
 var body=document.querySelector("body");
 var w=$(body).width();
 $(i).click(function(){
 $(".sidebar").slidefade(300);
 });
});
