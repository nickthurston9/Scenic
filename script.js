function dropDown(){
  var x = document.getElementById("myNavig");
  if(x.className === "navig"){
    x.className += " responsive";
  } else {
    x.className = "navig";
  }
}
