var vjuh = (function showVjuh(option){
  
  if(arguments.length !== 0){
  
    var obj = {};
    obj.appearance = option.appearance || 80;
    
    var elements = document.querySelectorAll("*[class*='vj-down'], *[class*='vj-up'], *[class*='vj-left'], *[class*='vj-right'], *[class*='vj-growth']");
    
    var clientHeight = document.documentElement.clientHeight;
  
    function animate() {
      
      for(var i = 0; i < elements.length; i++){
      
        var currentPos = elements[i].getBoundingClientRect();
      
        if(currentPos.top*100/clientHeight <= obj.appearance){
          elements[i].classList.add("vjuh");
        }
      
      }
    
    }
  
    animate();
  
    window.addEventListener("scroll", animate);
  
  }
  
  return showVjuh;
})();