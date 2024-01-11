$(document).ready(function () {
    $(".program-block").click(function () {
        $(".program-block").removeClass("active")
        $(this).addClass("active")
    })

    // membership

    $(".membership-plan").click(function () {
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
    $(".burger").click(function () {
        $(".burger").toggleClass("active");
        $(".nav").toggleClass("active");
    })



    // tabs
    $(".tab-block-title").click(function () {
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

    $(".plans").on("click", ".plan-block:not(.active)", function () {
        $(this).addClass("active")
            .siblings()
            .removeClass("active")
            .closest(".container")
            .find(".plan-table .table")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active")
    })


    if (!".select") {
        return
    }
    else {
        $(".select").select2({
            placeholder: 'Select an option'
        })
    }


    // pop-up

    function showPopup() {
        $(".pop-up").addClass("active")
        $("body").addClass("hiden")
    }

    function hidePopup() {
        $(".pop-up").removeClass("active")
        $(".pop-up-block").removeClass("active")
        $(".acuont .link").removeClass("active")
        $("body").removeClass("hiden")
    }


    $("#singup").click(function (e) {
        e.preventDefault();
        showPopup()
        $(".pop-up-signup").addClass("active")
        // acount link
        $(".acuont .link").removeClass("active")
        $(this).addClass("active")
    });

    $("#login").click(function (e) {
        e.preventDefault();
        $(".pop-up-login").addClass("active")
        $(".pop-up-signup").removeClass("active")
        showPopup()
        // acount link
        $(this).addClass("active")
    });

    $(".form-login a").click(function (e) {
        e.preventDefault();
        $(".pop-up-login").addClass("active")
        $(".pop-up-signup").removeClass("active")
        showPopup()
    });

    $(".pop-up-close").click(function (e) {
        e.preventDefault();
        hidePopup()
    });

    $(".pop-up-login-link").click(function (e) {
        e.preventDefault();
        $(".pop-up-login").removeClass("active")
        $(".pop-up-confirm").addClass("active")
    })

    $(".btn-confirm").click(function (e) {
        e.preventDefault();
        $(".pop-up-confirm").removeClass("active")
        $(".pop-up-sequrity").addClass("active")
    });

    $(".pop-up-sequrity .form-btn").click(function (e) {
        e.preventDefault();
        $(".pop-up-sequrity").removeClass("active")
        $(".pop-up-reset").addClass("active")
    });

    $(".pop-up-reset .form-btn").click(function (e) {
        e.preventDefault();
        $(".pop-up-reset").removeClass("active")
        $(".pop-up-verification").addClass("active")
    });

    $(".pop-up-verification .form-btn").click(function (e) {
        e.preventDefault();
        $(".pop-up-verification").removeClass("active")
        $(".pop-up-newpassword").addClass("active")
    });

    $(".pop-up-login .form-btn").click(function (e) { 
        e.preventDefault();
        $(".pop-up-login").removeClass("active")
        $(".pop-up-welcome").addClass("active")
    });

    $(".success-btn").click(function (e) { 
        e.preventDefault();
        $(".pop-up-success").removeClass("active")
        hidePopup()
    });

    $(".pop-up-newpassword .form-btn").click(function (e) { 
        e.preventDefault();
        $(".pop-up-newpassword").removeClass("active")
        $(".success").addClass("active")
    });

    // change password attribute
    let type = $("#password").attr("type")
    let newtype = $("#new-password").attr("type")
    // console.log(type);
    $("#tooglePassword").click(function () {
        console.log("click");

        if ($(this).hasClass("eye-icon")) {
            $(this).removeClass("eye-icon")
            $(this).addClass("eye-active")
            $("#password").attr("type", "text")
        } else {
            $(this).removeClass("eye-active")
            $(this).addClass("eye-icon")
            $("#password").attr("type", "password")
        }
    });

    $("#tooglenewPassword").click(function () {
        // console.log("click");

        if ($(this).hasClass("eye-icon")) {
            $(this).removeClass("eye-icon")
            $(this).addClass("eye-active")
            $("#new-password").attr("type", "text")
        } else {
            $(this).removeClass("eye-active")
            $(this).addClass("eye-icon")
            $("#new-password").attr("type", "password")
        }
    });

    $("#tooglePassword-one").click(function () {
        console.log("click");

        if ($(this).hasClass("eye-icon")) {
            $(this).removeClass("eye-icon")
            $(this).addClass("eye-active")
            $("#password-one").attr("type", "text")
        } else {
            $(this).removeClass("eye-active")
            $(this).addClass("eye-icon")
            $("#password-one").attr("type", "password")
        }
    });



});