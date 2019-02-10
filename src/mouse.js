document.documentElement.style.overflow='hidden';
var move=function(e){
  e.preventDefault && e.preventDefault();
  e.returnValue=false;
  e.stopPropagation && e.stopPropagation();
  return false;
}
var keyFunc=function(e){
  if(37<=e.keyCode && e.keyCode<=40){
    return move(e);
  }
}
document.body.onkeydown=keyFunc;
