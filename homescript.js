document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = document.querySelector("#carouselExample");
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000,
        wrap: true
    });

    var detailButtons = document.querySelectorAll(".btn");
    detailButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Thông tin chi tiết sẽ sớm được cập nhật!");
        });
    });
});