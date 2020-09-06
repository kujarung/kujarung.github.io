$( document ).ready(function() {
  
  // gnb 햄버거버튼 토글
  var nav_toggle_index = false
  
  $(".btn-hbg > .icon-hbg").click(function() {
      nav_toggle_index =! nav_toggle_index;
      if ( nav_toggle_index == false ) {
        // 닫기버튼이 햄버거버튼으로
        $(".btn-hbg > .icon-close").addClass("icon-hbg")
        $(".btn-hbg > .icon-close").removeClass("icon-close")

        $(".nav-mobile").slideToggle(250)
        $(".nav-dim").toggle()

      } else if ( nav_toggle_index == true ) {
        // 햄버거버튼이 닫기버튼으로
        $(".btn-hbg > .icon-hbg").addClass("icon-close")
        $(".btn-hbg > .icon-hbg").removeClass("icon-hbg")

        $(".nav-mobile").slideToggle(250)
        $(".nav-dim").toggle()
      }
  })

  // aside-bar
  // lnb-toggle
  $(".lnb-item").click(function() {
    $(this).toggleClass("lnb-item-active")
  })

  // tab
  // tab btn toggle
  $(".tab-btn").click(function(){
    $(".tab-btn-active").removeClass("tab-btn-active")
    $(this).addClass("tab-btn-active")
  })

  // 맵 modal
  $(".map-control-button").click(function(){
    $(this).toggleClass("active")
    
    // map-move 기능
    if($(".control-map-move").hasClass("active")) {
      $(".controller-map-move").addClass("active")
      // ...

    } else {
      // off
      $(".controller-map-move").removeClass("active")
    }


    // map-expansion 기능
    if($(".control-map-expansion").hasClass("active")) {
      $(".controller-map-expansion").addClass("active")
      // ...

    } else {
      // off
      $(".controller-map-expansion").removeClass("active")
    }


    // map-collapse 기능
    if($(".control-map-collapse").hasClass("active")) {
      $(".controller-map-collapse").addClass("active")
      // ...

    } else {
      // off
      $(".controller-map-collapse").removeClass("active")
    }


    // map-arr-left 기능
    if($(".control-map-arr-left").hasClass("active")) {
      $(".controller-map-arr-left").addClass("active")
      // ...

    } else {
      // off
      $(".controller-map-arr-left").removeClass("active")
    }


    // map-arr-right 기능
    if($(".control-map-arr-right").hasClass("active")) {
      $(".controller-map-arr-right").addClass("active")
      // ...

    } else {
      // off
      $(".controller-map-arr-right").removeClass("active")
    }

    // map-area 기능
    if($(".control-map-area").hasClass("active")) {
      $(".controller-map-area").addClass("active")
      // ...

    } else {
      // off
      $(".controller-map-area").removeClass("active")
    }

    // map-ruler 기능
    if($(".control-map-ruler").hasClass("active")) {
      $(".controller-map-ruler").addClass("active")
      // ...

    } else {
      // off
      $(".controller-map-ruler").removeClass("active")
    }

    // map-figure-area 기능
    if($(".control-map-figure-area").hasClass("active")) {
      $(".controller-map-figure-area").addClass("active")
      // ...

    } else {
      // off
      $(".controller-map-figure-area").removeClass("active")
    }


    // map-reset 기능
    if($(".control-map-reset").hasClass("active")) {
      $(".controller-map-reset").addClass("active")
      // ...

    } else {
      // off
      $(".controller-map-reset").removeClass("active")
    }


    // map-location 기능
    if($(".control-map-location").hasClass("active")) {
      $(".controller-map-location").addClass("active")
      // ...

    } else {
      // off
      $(".controller-map-location").removeClass("active")
    }


    // map-typing 기능
    if($(".control-map-typing").hasClass("active")) {
      $(".controller-map-typing").addClass("active")
      // ...

    } else {
      // off
      $(".controller-map-typing").removeClass("active")
    }
  })

  // 지도 검색칸 토글 버튼
  $(".btn-section-toggle").click(function(){
    $(".section-search").toggleClass("collapsed")
    $(this).toggleClass("active")

    if($(".btn-section-toggle").hasClass("active")) {
      $(this).css("transform", "rotate(-180deg)" )
      $(".section-map").removeClass("col-lg-9")
      $(".section-map").addClass("col-lg-12")
    } else {
      $(this).css("transform", "rotate(0deg)" )
      $(".section-map").removeClass("col-lg-12")
      $(".section-map").addClass("col-lg-9")
    }
  })

  // 지도 Modal 지도 더보기, 장소 더보기 버튼
  $(".btn-more-location").click(function(){
    if($("#nav-all-tab").hasClass("active")) {
      $("#nav-all-tab").removeClass("active")
      $("#nav-all").removeClass("show active")
    }
    if($("#nav-address-tab").hasClass("active")) {
      $("#nav-address-tab").removeClass("active")
      $("#nav-address").removeClass("show active")
    }
    
    $("#nav-location-tab").addClass("active")
    $("#nav-location").addClass("show active")
    
  })
  $(".btn-more-address").click(function(){
    if($("#nav-all-tab").hasClass("active")) {
      $("#nav-all-tab").removeClass("active")
      $("#nav-all").removeClass("show active")
    }
    if($("#nav-location-tab").hasClass("active")) {
      $("#nav-location-tab").removeClass("active")
      $("#nav-location").removeClass("show active")
    }

    $("#nav-address-tab").addClass("active")
    $("#nav-address").addClass("show active")
  })
});