window.onload  = () => {
  const swiper = document.querySelector('.swiper-container')
  if( swiper ) {
    var mySwiper = new Swiper('.swiper-container', {
      speed: 400,
      spaceBetween: 100
    });  
  }
  const gnb = document.getElementById('gnbMenu');
  const drawerCon = document.getElementById("drawerCon");
  const xBtn = document.getElementById("xBtn");
  const body = document.querySelector('body');
  gnb.addEventListener("click", () => {
    if(!drawerCon.classList.contains('active')) {
      drawerCon.classList.add("active");
      body.classList.add("not_scroll");
    }
  })

  drawerCon.addEventListener("click", (e) => {
    if(e.target.id === "drawerCon") {
      drawerCon.classList.remove("active");
      body.classList.remove("not_scroll");
    }
  })

  xBtn.addEventListener("click", () => {
    drawerCon.classList.remove("active");
    body.classList.remove("not_scroll");
  })

  const openBtn = document.getElementById("openBtn");
  const openBtn2 = document.getElementById("openBtn2");
  const targetGrap = document.getElementById("lineGrapOrder");
  const targetGrap2 = document.getElementById("lineGrapOrder2");
  if(openBtn) {
    openBtn.addEventListener("click", () => {
      if(openBtn.classList.contains("active")) {
        openBtn.classList.remove("active");
        targetGrap.classList.add("hidden")
      } else {
        openBtn.classList.add("active");
        targetGrap.classList.remove("hidden")
      }
    })
  }

  if(openBtn2) {
    openBtn2.addEventListener("click", () => {
      if(openBtn2.classList.contains("active")) {
        openBtn2.classList.remove("active");
        targetGrap2.classList.add("hidden")
      } else {
        openBtn2.classList.add("active");
        targetGrap2.classList.remove("hidden")
      }
    })  
  }
  
  window.addEventListener("scroll", () => {
    console.log("scroll")
    const header = document.querySelector('.header');
    if(window.scrollY > 50) {
      if( !header.classList.contains('fixed-header')) {
        header.classList.add('fixed-header')
      }
    } else {
      header.classList.remove('fixed-header')
    }
  })
}