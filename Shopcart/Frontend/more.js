const Data = [
    {
        item: ["moble", "iphone", "phone"],
        image: "Products/iphone 16.jpg",
        brand: "Iphone",
        model: "Apple Iphone 16",
        specification: "Blue, 126GB",
        price: "₹84,900",
        totalamount: "₹89,990"
    },
    {
        item: ["moble", "samsung", "phone"],
        image: "Products/samsung S25 ultra.webp",
        brand: "Samsung",
        model: "Samsung Galaxy S25 Ultra",
        specification: "Black, 126GB ROM | 12GB RAM",
        price: "₹1,41,999",
        totalamount: "₹1,50,999"
    },
    {
        item: ["moble", "google", "phone"],
        image: "Products/pixel-8a.webp",
        brand: "Google",
        model: "Google Pixel 8A",
        specification: "Skyblue, 128GB ROM | RAM 8GB",
        price: "₹37,999 ",
        totalamount: "₹52,990",
    },
    {
        item: ["moble", "moto", "phone"],
        image: "Products/moto g85.webp",
        brand: "Motorola",
        model: "Motorola G85 5G",
        specification: "Olive Green, 128 GB | 8 GB RAM",
        price: "₹15,999 ",
        totalamount: "₹16,999",
    },
    {
        item: ["moble", "nothing", "phone"],
        image: "Products/Nothing-2a.jpg",
        brand: "Nothing",
        model: "Nothing-2a 5G",
        specification: "Blue, 256 GB | 12 GB RAM)",
        price: "₹21,999 ",
        totalamount: "₹25,999",
    },
    {
        item: ["moble", "realme", "phone"],
        image: "Products/realme p3x 5g.jpg",
        brand: "Realme",
        model: "realme p3x 5g",
        specification: "Midnight Blue, 128 GB | 6 GB RAM",
        price: "₹21,999",
        totalamount: "₹23,999",
    },

    {
        item: ["men clothes", "shirt", "hafe shirt"],
        image: "products/men-shirts.webp",
        brand: "Cloth Factory",
        ditail: "Men short t-shirt",
        size: "Size: M, Skyblue",
        price: "₹319",
        totalamount: "₹12,99"
    },
    {
        item: ["men clothes", "full shirt"],
        image: "Products/men-regular-fit-solid-spread-collar-casual-shirt.webp",
        brand: "JUHIL BAZAR",
        ditail: "Men full Shirt",
        size: "Size: XXL | Black",
        price: "₹450",
        totalamount: "₹12,99"
    },
    {
        item: ["men clothes", "check shirt", "shirt"],
        image: "Products/xl-0-1-clothely-fashion-original-imah5yfy8hj2ye6z.webp",
        brand: "Clothely Fashion",
        ditail: "Men check Shirt",
        size: "Size: L | Blue and black",
        price: "₹455",
        totalamount: "₹999"
    },
    {
        item: ["men clothes", "hafe t-shirt", "t shrit"],
        image: "Products/hafe-t-shirt.webp",
        brand: "METRONAUT",
        ditail: "Printed men crew Neck",
        size: "Size: L",
        price: "₹399",
        totalamount: "₹12,99"
    },
    {
        item: ["men clothes", "full shrti", "shirt"],
        image: "Products/full-shirt.webp",
        brand: "Vebnor",
        ditail: "Men Regular",
        size: "Size: M",
        price: "₹299",
        totalamount: "₹799"
    },

    {
        item: ["women clothes", "flared"],
        image: "Products/free-emeros-original-imagn.webp",
        brand: "Emeros",
        ditail: "Women Flared Multicolor Viscose Rayon Trousers",
        size: "Size: Free",
        price: "₹378",
        totalamount: "₹14,99"
    },
    {
        item: ["women clothes", "floral"],
        image: "Products/3Buddy Fashion.webp",
        brand: "3Buddy Fashion",
        ditail: "Floral Print Bollywood Lycra Blend Saree",
        size: "Maroon",
        price: "₹389",
        totalamount: "₹2,599"
    },
    {
        item: ["women clothes", "kurta"],
        image: "Products/Royal Export.webp",
        brand: "Royal Export",
        ditail: "Women Chanderi Kurta ",
        size: "MaroonSize S, M, L, XL, XXL",
        price: "₹1,168",
        totalamount: "₹6,999"
    },
    {
        item: ["women clothes", "girls calf length dress"],
        image: "Products/ZWERLON.webp",
        brand: "ZWERLON",
        ditail: "Girls Calf Length Casual Dress",
        size: "Size 9 - 10 Years",
        price: "₹358",
        totalamount: "₹1,999"
    },
    {
        item: ["women clothes", "women suits"],
        image: "Products/Women-Visc.webp",
        brand: "PSCHOICE",
        ditail: "Women Viscose Rayon ",
        size: "Size: XS, S, M, L, XL,",
        price: "₹450",
        totalamount: "₹12,99"
    },
    // {
    //     item: ["women clothes","women suits"],        
    //     image: "Products/Indo-Era.webp",
    //     brand: "Indo Era",
    //     ditail: "Women Viscose Rayon ",
    //     size: "Size: XS, S, M, L, XL,",
    //     price: "₹999",
    //     totalamount: "₹6,999"
    // },

    {
        item: ["electronic"],
        image: "Products/boult-original.webp",
        brand: "Boult",
        ditail: "Boult Astra with Quad Mic ENC, 48Hrs Battery",
        specification: "White Opal, True Wireless",
        price: "₹1,199",
        totalamount: "₹3,499"
    },
    {
        item: ["electronic"],
        image: "Products/bout-original.webp",
        brand: "BoAt",
        ditail: "boAt Rockerz 430 w/ Beast Mode",
        specification: "Bold Blue, On the Ear",
        price: "₹1,199",
        totalamount: "₹2,499"
    },
    {
        item: ["electronic"],
        image: "Products/Asus-tuf.jpeg",
        brand: "ASUS",
        ditail: "ASUS TUF Gaming A15 AMD Ryzen 5",
        specification: "16 GB/512 GB SSD/4 GB",
        price: "₹59,990",
        totalamount: "₹79,990"
    },
    {
        item: ["electronic"],
        image: "Products/lg-wasing.webp",
        brand: "LG",
        ditail: "LG 7 kg 5 Star ",
        specification: "Washing Machine Grey, White",
        price: "₹11,440",
        totalamount: "₹14,199"
    },
    {
        item: ["electronic"],
        image: "Products/sumsung-smart-tv.jpeg",
        brand: "SAMSUNG",
        ditail: "SAMSUNG 80 cm (32 Inch)",
        specification: "ConnectShare (USB 2.0)",
        price: "₹14,440",
        totalamount: "₹18,900"
    },

    {
        item: ["toy"],
        image: "Products/Miss-Chief-Baby-Bunny.webp",
        ditail: "Miss & Chief Baby Bunny Rideon Car with Music,",
        price: "₹1,999",
        totalamount: "₹4,999"
    },
    {
        item: ["toy"],
        image: "Products/Miss-Chief-Spartan.webp",
        ditail: "Miss & Chief Baby Bunny Rideon Car with Music",
        price: "₹1,049",
        totalamount: "₹4,999"
    },
    {
        item: ["toy"],
        image: "Products/Kiddie Castle Portable 8.5 inch LCD Re-Writing.webp",
        ditail: "Kiddie Castle Portable 8.5 inch LCD Re-Writing",
        price: "₹116",
        totalamount: "₹699"
    },
    {
        item: ["toy"],
        image: "Products/CADDLE & TOES Famous Car Remote Control 3D.webp",
        ditail: "CADDLE & TOES Famous Car Remote Control 3D",
        price: "₹499",
        totalamount: "₹799"
    },
    {
        item: ["toy"],
        image: "Products/KrocieToys MOON BALL Crazy Ball.webp",
        ditail: "KrocieToys MOON BALL Crazy Ball",
        price: "₹99",
        totalamount: "₹149"
    },
]


// nav 1
const logo = document.getElementById("logo");
const searchbar = document.getElementById("search");
const searchBtn = document.getElementById("search-btn")
// nav2
const mobileIcon = document.getElementById("mobile");
const menIcon = document.getElementById("men");
const womenIcon = document.getElementById("WomenData");
const electronicIcon = document.getElementById("electronicesNav");
const toyIcon = document.getElementById("toys");
// body
const InsertJsData = document.getElementById("js-data");
const cartinsrt = document.getElementById("addCart");
const containerBox = document.querySelector(".container-box");
const mobileDiv = document.querySelector(".shoping-box");
const menDiv = document.getElementById("men-div");
const womenDiv = document.getElementById("women");
const electronicesDiv = document.getElementById("electronices");
const toyDiv = document.getElementById("toy");

// logo function display none and block
logo.addEventListener("click", function () {
    InsertJsData.style.display = "none";
    containerBox.style.display = "block";
    cartinsrt.style.display = "none";
});

function cartfunc() {
    containerBox.style.display = "none"
    cartinsrt.style.display = "block";
    InsertJsData.style.display = "none";
}

// body insrt mobile data
let phoneInsert = "";
//body insrt men data
let menInsert = "";
// Body Insert women Data
let womenInsert = "";
// Body Insert electronic Data
let electronicInsert = "";
// body insert Toy data
let toyInsert = "";

Data.forEach((v, k) => {
    // if (v.item.includes("moble") === true) {
    if (Array.isArray(v.item) && v.item.includes("moble")) {
        // console.log(v, v.image, v.item.includes("moble"));

        phoneInsert += ` <div class="cover-box">
                            <div class="box-img">
                                <div class="image-mobile">
                                <img src="${v.image}" alt="">
                                </div>
                                <div class="cart-btn">
                                    <button class="minus">-</button>
                                    <input class="inp-value" type="text" readonly value="1">
                                    <button class="plus">+</button>
                                </div>
                            </div>
                            <div class="product-dital">
                                <h3>${v.brand}</h3>
                                <div class="dital-all">
                                    <p>${v.model}</p>
                                    <p>${v.specification}</p>
                                    <p id="price">${v.price} <del id="total">${v.totalamount}</del></p>
                                </div>
                                <div class="box-btn">
                                    <button onclick="c()">Cart</button>
                                    <button >Buy</button>
                                </div>
                            </div>
                        </div>`
    }
    else if (Array.isArray(v.item) && v.item.includes("men clothes")) {
        // console.log(v, v.image, v.item.includes("men clothes"));
        menInsert += `<div class="clothes-box">
                        <div class="clothes-img">
                            <img src="${v.image}" alt="">
                        </div>
                        <div class="clothes-dital">
                            <h3>${v.brand}</h3>
                            <div class="clothes-all-dital">
                                <p>${v.ditail}</p>
                                <p>${v.size}</p>
                                <p id="price">${v.price} <del id="total">${v.totalamount}</del></p>
                            </div>
                            <div class="box-btn">
                                <button>Cart</button>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>`
    }
    else if (Array.isArray(v.item) && v.item.includes("women clothes")) {
        // console.log(v, v.image, v.item.includes("women clothes"));
        womenInsert += `<div class="clothes-box">
                        <div class="clothes-img">
                            <img src="${v.image}" alt="">
                        </div>
                        <div class="clothes-dital">
                            <h3>${v.brand}</h3>
                            <div class="clothes-all-dital">
                                <p>${v.ditail}</p>
                                <p>${v.size}</p>
                                <p id="price">${v.price} <del id="total">${v.totalamount}</del></p>
                            </div>
                            <div class="box-btn">
                                <button>Cart</button>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>`
    }
    else if (Array.isArray(v.item) && v.item.includes("electronic")) {
        // console.log(v, v.image, v.item.includes("electronic"))
        electronicInsert += `<div class="clothes-box">
                        <div class="clothes-img">
                            <img src="${v.image}" alt="">
                        </div>
                        <div class="clothes-dital">
                            <h3>${v.brand}</h3>
                            <div class="clothes-all-dital">
                                <p>${v.ditail}</p>
                                <p>${v.size}</p>
                                <p id="price">${v.price} <del id="total">${v.totalamount}</del></p>
                            </div>
                            <div class="box-btn">
                                <button>Cart</button>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>`
    }
    else if (Array.isArray(v.item) && v.item.includes("toy")) {
        // console.log(v, v.image, v.item.includes("toy"))
        toyInsert += `<div class="clothes-box">
                        <div class="clothes-img">
                            <img src="${v.image}" alt="">
                        </div>
                        <div class="clothes-dital">
                            <h3>${v.brand}</h3>
                            <div class="clothes-all-dital">
                                <p>${v.ditail}</p>
                                <p>${v.size}</p>
                                <p id="price">${v.price} <del id="total">${v.totalamount}</del></p>
                            </div>
                            <div class="box-btn">
                                <button>Cart</button>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>`
    }
});

mobileDiv.innerHTML = phoneInsert;
mobileIcon.addEventListener("click", function () {
    containerBox.style.display = "none";
    InsertJsData.style.display = "flex";
    cartinsrt.style.display = "none";
    InsertJsData.innerHTML = phoneInsert;
});


menDiv.innerHTML = menInsert;
menIcon.addEventListener("click", function () {
    containerBox.style.display = "none";
    InsertJsData.style.display = "flex";
    cartinsrt.style.display = "none";
    InsertJsData.innerHTML = menInsert;
});


womenDiv.innerHTML = womenInsert;
womenIcon.addEventListener("click", function () {
    containerBox.style.display = "none";
    InsertJsData.style.display = "flex";
    cartinsrt.style.display = "none";
    InsertJsData.innerHTML = womenInsert;
});


electronicesDiv.innerHTML = electronicInsert;
electronicIcon.addEventListener("click", function () {
    containerBox.style.display = "none";
    InsertJsData.style.display = "flex";
    cartinsrt.style.display = "none";
    InsertJsData.innerHTML = electronicInsert;
});


toyDiv.innerHTML = toyInsert;
toyIcon.addEventListener("click", function () {
    containerBox.style.display = "none";
    InsertJsData.style.display = "flex";
    cartinsrt.style.display = "none";
    InsertJsData.innerHTML = toyInsert;
});


searchBtn.addEventListener("click", () => {
    // searchbar.value = "moble"
    InsertJsData.innerHTML = ""
    let searchvalue = searchbar.value.toLowerCase();
    let find = Data.filter((v, k) => {
        console.log(v, v.item, v.item.includes(searchvalue), searchvalue)
        if (Array.isArray(v.item) && v.item.includes(searchvalue)) {
            return v
        }
    })
    containerBox.style.display = "none";
    InsertJsData.style.display = "flex";

    for (const ind in find) {
        InsertJsData.innerHTML += `<div class="cover-box">
                            <div class="box-img">
                                <div class="image-mobile">
                                <img src="${find[ind].image}" alt="">
                                </div>
                                <div class="cart-btn">
                                    <button class="minus">-</button>
                                    <input class="inp-value" type="text" readonly value="1">
                                    <button class="plus">+</button>
                                </div>
                            </div>
                            <div class="product-dital">
                                <h3>${find[ind].brand}</h3>
                                <div class="dital-all">
                                    <p>${find[ind].model}</p>
                                    <p>${find[ind].specification}</p>
                                    <p id="price">${find[ind].price} <del id="total">${find[ind].totalamount}</del></p>
                                </div>
                                <div class="box-btn">
                                    <button id="cart${[ind]}">Cart</button>
                                    <button >Buy</button>
                                </div>
                            </div>
                        </div>`;
                        cartfunction([ind])
                    }
            
})

// Add to Cart Data 
const InsertCartCover = document.getElementById("cart-cover");
function cartfunction([ind]){
    let cartID = document.querySelectorAll(`#cart${[ind]}`);
        cartID.addEventListener("click",function(){
            alert("hello")
        })
}

const addtoCart = [];

let cartData = Data.forEach((cartV, cartI) => {


})





