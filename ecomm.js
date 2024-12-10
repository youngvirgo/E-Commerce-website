let body = document.querySelector("body");
let products = document.querySelector(".products");
let favcartContainer = document.querySelector(".favcartContainer");
let closeCart = document.querySelector(".close");
let cartnumcon = document.querySelector(".cartnumcon");
let productList = document.querySelector(".productlist");
let total = document.querySelector(".total");
let Clearcart = document.querySelector(".Clearcart");
let checkoutList = [];

favcartContainer.addEventListener("click",function showcart() {
    body.classList.add("active");
})

closeCart.addEventListener("click",function showcart() {
    body.classList.remove("active");
})

function onInit() {
    productsData.forEach((item, key) => {
        let div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML = `
        <img src="images/${item.image}" alt="local_ric_image">
        <div class="name">${item.Name}</div>
        <div class="desc">${item.description}</div>
        <div class="price">$${item.price}</div>
        <button onclick="Addtocart(${key})"><i class="fa-solid fa-cart-shopping fa-xxl" style="color: #161718;"></i>Add To Cart</button>
        `;
       
        products.appendChild(div);
    });
}
onInit()



function Addtocart(id) {
    
    if (checkoutList[id] == null) {
        checkoutList[id] = productsData[id];
        checkoutList[id].cartnumcon = 1;
    }
    else{
        checkoutList[id].cartnumcon += 1;
    }
    
  reloadCart()  
}

function reloadCart() {
    productList.innerHTML = "" ;
    let count = 0;
    let totalprice = 0;


    checkoutList.forEach((item, key) => {
        let li = document.createElement("li");
        totalprice+=parseInt(item.price*item.cartnumcon);
        count += item.cartnumcon;
        li.innerHTML = `
        <img src="images/${item.image}">
        <div>${item.Name}</div>
        <div>${item.price}</div>
        <div>
        <button onclick="changeQuantity(${key},${item.cartnumcon-1})">-</button>
        <div>${item.cartnumcon}</div>
        <button onclick="changeQuantity(${key},${item.cartnumcon+1})">+</button>
        </div>
        `;
        productList.appendChild(li);
    }); 

    total.innerHTML = `<span>Checkout (${count} items)$ ${totalprice}</span>`;
    cartnumcon.innerHTML = count;  
}

function changeQuantity(key, cartnumcon) {
    if (cartnumcon == 0) {
        delete checkoutList[key];
    }
    else{
        checkoutList[key].cartnumcon=cartnumcon;
    }
    reloadCart();
}
closeCart.addEventListener("click", () => {
    productList.push('empty');
        
    }
)
document.querySelector(".bars").addEventListener("click",function () {
    document.querySelector(".dropdown").style.display = "block";
    document.querySelector(".bars").style.display = "none";
})
document.querySelector(".closex").addEventListener("click",function () {
    document.querySelector(".dropdown").style.display = "none";
    document.querySelector(".bars").style.display = "block";
})