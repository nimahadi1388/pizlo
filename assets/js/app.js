//variable
let menu = document.getElementById("menu");
let menuUl = document.getElementById("menuUl");
let btnMenu = document.getElementById("clickMenu");
let btnCart = document.getElementById("btnCart");
let boxs = document.querySelectorAll("#Menu .box");
let pizzaBox = document.getElementById("pizzaBox");
let likeHeart = document.querySelectorAll(".ri-heart-line");
let cartPlus = document.querySelectorAll(".bx-cart-plus");
let boxFood = document.querySelectorAll("#Menu .box");
let cart = [];

const addToCart = (product) => {
  cart.push(product);
  updateCart();
  console.log(cart);
};
const removeCart = (index) => {
  cart.splice(index, 1);
  document.getElementById("cartCount").textContent -= 1;
  updateCart();
};
const updateCart = () => {
  let containerItemCart = document.getElementById("containerItemCart");
  containerItemCart.innerHTML = "";
  cart.forEach((item, index) => {
    containerItemCart.innerHTML += `
    <div class="boxCart">
          <div class = 'boxC'>
            <h2>${item}</h2>
            <button class='removeCart' onclick='removeCart(${index})'>X</button>
          </div>
        </div>`;
    document.getElementById("cartCount").textContent = cart.length;
  });
};
likeHeart.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("ri-heart-line");
    item.classList.toggle("ri-heart-fill");
  });
});
//addEventListener
btnMenu.addEventListener("click", () => {
  menuUl.classList.toggle("active");
  btnMenu.classList.toggle("ri-menu-2-fill");
  btnMenu.classList.toggle("ri-close-line");
  document.body.classList.toggle("overY");
});
btnCart.addEventListener("click", () => {
  containerItemCart.classList.toggle("active");
  document.body.classList.toggle("overY");
});
