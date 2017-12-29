setTimeout(function keepRun() {
   setTimeout(keepRun, 1000);

   var a = document.querySelector('video');

   if(a) {
      a.setAttribute("controls","controls");
      var el = a.parentElement.parentElement.parentElement.parentElement
      if (el.children.length > 1) {
         el.removeChild(el.children[1]);
         el.removeChild(el.children[1]);
      }
   }

   Array.prototype.slice.call(document.getElementsByTagName('article')).forEach(function(element){
      element.addEventListener("mousedown", function(e){
         var post = element.getElementsByTagName('video')[0]
         if(!post){
            post = element.getElementsByTagName('img')[1]
         }
         if(post){
            var copy = function (e) {
               e.preventDefault();
               if (e.clipboardData) {
                  e.clipboardData.setData('text/plain', post.getAttribute('src'));
               } else if (window.clipboardData) {
                  window.clipboardData.setData('Text', post.getAttribute('src'));
               }

            }
            window.addEventListener('copy', copy);
            document.execCommand('copy');
            window.removeEventListener('copy', copy);
         }
      });

   })

}, 1000);
