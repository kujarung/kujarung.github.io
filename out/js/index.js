window.onload  = () => {
  const gnb = document.getElementById('gnbMenu');
  const drawerCon = document.getElementById("drawerCon");
  const xBtn = document.getElementById("xBtn");
  const body = document.querySelector('body');
  const openBtn = document.getElementById("isOpen");
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

  openBtn.addEventListener("click", () => {
    const targetGrap = document.getElementById("lineGrapOrder");
    if(openBtn.classList.contains("active")) {
      openBtn.classList.remove("active");
      lineGrapOrder.classList.add("hidden")
    } else {
      openBtn.classList.add("active");
      lineGrapOrder.classList.remove("hidden")
    }
  })
}