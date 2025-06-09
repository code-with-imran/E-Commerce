{// shoping banner
    let banner = [
        "banner/boult-original-Photoroom.png",
        "banner/iphone 16-Photoroom.png",
        "banner/Miss-Chief-Spartan-Photoroom.png",
        "banner/men-shirts-Photoroom.png",
        "banner/free-emeros-original-imagn-Photoroom.png"
    ];

    let bannerURL = document.getElementById("hero-product");
    let index = 0;

    function next() {
        index++
        if (index >= banner.length) {
            index = 0;
        }
        bannerURL.src = banner[index];
    }

    function prev() {
        index--
        if (index == -1) {
            index = 3;
        }
        bannerURL.src = banner[index];
    }
    setInterval(next, 3500);

}







