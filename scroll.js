var tags=document.querySelectorAll('.anchor a');
console.log(tags);


for(var i=0;i<tags.length;i++){
tags[i].addEventListener('click',function(event){
event.preventDefault();
var targetSectionId=this.textContent.trim();
var target=document.getElementById(targetSectionId);

var scrollInterval=setInterval(function(){
var targetCoordinates=target.getBoundingClientRect();
if(targetCoordinates.top <=238.1375122070312)
{ clearInterval(scrollInterval);
  return;
}
window.scrollBy(0,50);
},20);
})
}