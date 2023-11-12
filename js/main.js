$(document).ready(function () {
    $(".program-block").click(function(){
        $(".program-block").removeClass("active")
        $(this).addClass("active")
    })

    // membership

    $(".membership-plan").click(function(){
        $(".membership-plan").removeClass("active")
        $(this).addClass("active")
    })

    // slider-review
    $(".slider-review").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: ' <button class="btn slick-btn slick-next active"></button>',
        prevArrow: ' <button class="btn slick-btn slick-prev"></button>',
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    arrows: false
                }
            }
        ]
    })

    $(".slider-review .slick-btn").click(function (e) { 
        e.preventDefault();
        $(".slider-review .slick-btn").removeClass("active")
        $(this).addClass("active")
    });

    // burger menu
    $(".burger").click(function(){
        $(".burger").toggleClass("active");
        $(".nav").toggleClass("active");
    })

    

    // tabs
    $(".tab-block-title").click(function(){
        $(".tab-block-title").removeClass("active")
        $(".tab-content").slideUp();
        $(this).siblings().slideDown();
        $(this).addClass("active");
    })

    // video

    $(".video-btn").click(function (e) { 
        e.preventDefault();
        $(".trainning-video").addClass("hide")
        $(".video-btn").addClass("hide")
        $(".video-btn").siblings().trigger("play");
    });

    // table tabs
    
    $(".plans").on("click", ".plan-block:not(.active)", function(){
        $(this).addClass("active")
            .siblings()
            .removeClass("active")
            .closest(".container")
            .find(".plan-table .table")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active")
    })


    if(!".select"){
        return
    }
    else {
        $(".select").select2({
            placeholder: 'Select an option'
        })
    }
    

    // pop-up

    $("#singup").click(function (e) { 
        e.preventDefault();
        $(".pop-up").addClass("active")
        // acount link
        $(".acuont .link").removeClass("active")
        $(this).addClass("active")
    });

    $(".pop-up-close").click(function (e) { 
        e.preventDefault();
        $(".pop-up").removeClass("active")
        $(".acuont .link").removeClass("active")
    });

    // change password attribute
    let type = $("#password").attr("type")
    // console.log(type);
        $("#tooglePassword").click(function () { 
            console.log("click");

            if($(this).hasClass("eye-icon")){
                $(this).removeClass("eye-icon")
                $(this).addClass("eye-active")
                $("#password").attr("type", "text")
            } else {
                $(this).removeClass("eye-active")
                $(this).addClass("eye-icon")
                $("#password").attr("type", "password")
            }
        });
        
    
});