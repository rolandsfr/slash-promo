$('.explore-cta').click(() => {
    $(".version-screen").css("display", "flex");
    $(".version-screen").animate({opacity: 1, marginTop: 0}, 500)

})

$(".close-screen").click(() => {
    $(".version-screen").animate({opacity: 0.5, marginTop: "100vh"}, 500, () => {
        $(".version-screen").css("display", "none");
    })
})

$(window).on("load", () => {
    $(".preloading-screen").animate({opacity: 0}, 400, () => {
        $(".preloading-screen").css("display", "none")
    })

    if($(window).width() >= 1024) {
            new WOW().init();
        }
})