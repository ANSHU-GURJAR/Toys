// ===============================
// TOYLAND PREMIUM JAVASCRIPT
// Part 1
// ===============================

// ---------- Custom Cursor ----------
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    }
});

// ---------- Dark Mode ----------
const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkBtn.innerHTML = "☀";
        } else {
            darkBtn.innerHTML = "🌙";
        }
    });
}

// ---------- Shopping Cart ----------
let cart = [];

function addToCart(name, price) {

    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    showToast(name + " Added To Cart");

    updateCart();
}

// ---------- Update Cart ----------

function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const total = document.getElementById("total");
    const totalItems = document.getElementById("total-items");
    const cartCount = document.getElementById("cart-count");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let totalPrice = 0;
    let items = 0;

    cart.forEach((item, index) => {

        totalPrice += item.price * item.quantity;
        items += item.quantity;

        cartItems.innerHTML += `

<div class="cart-product">

<div>

<h3>${item.name}</h3>

<p>₹${item.price}</p>

</div>

<div>

<button onclick="decreaseQty(${index})">-</button>

<span>${item.quantity}</span>

<button onclick="increaseQty(${index})">+</button>

<button onclick="removeItem(${index})">
🗑
</button>

</div>

</div>

`;

    });

    total.innerHTML = totalPrice;
    totalItems.innerHTML = items;
    cartCount.innerHTML = items;

}

// ---------- Increase ----------

function increaseQty(index){

cart[index].quantity++;

updateCart();

}

// ---------- Decrease ----------

function decreaseQty(index){

if(cart[index].quantity>1){

cart[index].quantity--;

}else{

cart.splice(index,1);

}

updateCart();

}

// ---------- Remove ----------

function removeItem(index){

cart.splice(index,1);

showToast("Item Removed");

updateCart();

}

// ---------- Checkout ----------

function checkout(){

if(cart.length==0){

alert("Your Cart Is Empty");

return;

}

alert("🎉 Order Placed Successfully");

cart=[];

updateCart();

}

// ---------- Toast ----------

function showToast(message){

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.remove();

},2500);

}
// ===============================
// TOYLAND PREMIUM JAVASCRIPT
// Part 2
// ===============================

// ===============================
// LIVE SEARCH
// ===============================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

searchInput.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let cards = document.querySelectorAll(".product-card");

cards.forEach(card=>{

let name = card.querySelector("h3").innerText.toLowerCase();

if(name.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// ===============================
// CONTACT FORM
// ===============================

const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

showToast("Message Sent Successfully ✅");

this.reset();

});

}

// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-card");

}

});

});

document.querySelectorAll(
".product-card,.category-card,.review-card,.offer-box"
).forEach(card=>{

observer.observe(card);

});

// ===============================
// HERO IMAGE ANIMATION
// ===============================

const heroImage=document.querySelector(".hero-image img");

if(heroImage){

setInterval(()=>{

heroImage.style.transform="scale(1.05) rotate(1deg)";

setTimeout(()=>{

heroImage.style.transform="scale(1) rotate(0deg)";

},900);

},2500);

}

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===============================
// LOADING EFFECT
// ===============================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// ===============================
// FLOATING BUTTON EFFECT
// ===============================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});

// ===============================
// RANDOM GLOW EFFECT
// ===============================

setInterval(()=>{

document.querySelectorAll(".product-card").forEach(card=>{

card.style.boxShadow=
"0 0 "+(20+Math.random()*20)+"px cyan";

});

},3000);

// ===============================
// PAGE READY
// ===============================

console.log("🚀 ToyLand Premium Loaded Successfully");