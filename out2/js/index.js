window.onload = function() {
  var tabCon = document.getElementsByClassName("tab-con")[0];
  var tabs = document.getElementsByClassName('tab');
  // tab관련 js
  if(tabCon && tabs ) {
    tabCon.addEventListener('click', function(e) {
      for(tab of tabs) {
        tab.classList.remove('active')
      }
      e.target.classList.add('active')
    })
  }

  // drwer 관련 js
  var menuIcon = document.getElementById('menuIcon');
  var drawer = document.getElementById('drawer');
  var main = document.getElementsByClassName('m-main')[0]
  var dim = document.createElement("div");
  if(menuIcon) {
    menuIcon.addEventListener('click', function() {
      if(main.classList.contains('not_scroll')) {
        main.classList.remove('not_scroll');
        document.getElementsByClassName('drawer-dim')[0].remove();
        drawer.classList.remove('active');
      } else {
        dim.classList.add('drawer-dim');
        main.classList.add('not_scroll');
        main.appendChild(dim);
        drawer.classList.add('active');
      }
    })
  }

  // dim 클릭 시 이벤트 제거
  document.addEventListener('click', function(e) {
    if( e.target.classList.contains('drawer-dim') ) {
      main.classList.remove('not_scroll')
      drawer.classList.remove('active')
      document.getElementsByClassName('drawer-dim')[0].remove();
    }
  })

  var navMenu = document.getElementsByClassName('nav-menu')[0];
  if(navMenu) {
    navMenu.addEventListener('click', function(e) {
      var lis = document.querySelectorAll('.nav-menu li');
      if( e.target.nodeName === "LI") {
        if(!e.target.classList.contains('active')) {
          lis.forEach( function(li) {
            li.classList.remove('active');
            e.target.classList.add('active')
          })
        }
      }
    })
  }
}
