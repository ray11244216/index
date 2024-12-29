/*
// 商品圖片輪播功能
let currentImageIndex = 0;
const carouselImages = [
    'images/d1.jpg',
    'images/d2.jpg',
    'images/d3.jpg',
    'images/d4.jpg'
];
const mainImage = document.getElementById('main-image');

// 自動播放輪播圖片
function autoPlayCarousel() {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    mainImage.src = carouselImages[currentImageIndex];
}
setInterval(autoPlayCarousel, 3000); // 每 3 秒切換圖片

// 更新購物車數量
const cart = [];
const cartButton = document.querySelector('.add-to-cart');
const cartCount = document.createElement('div');
cartCount.classList.add('cart-count');
document.body.appendChild(cartCount);
updateCartCount();

cartButton.addEventListener('click', () => {
    const productTitle = document.querySelector('.product-title').textContent;
    const price = document.querySelector('.price').textContent;
    const quantity = parseInt(document.querySelector('.quantity input').value, 10);

    const existingItem = cart.find(item => item.name === productTitle);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name: productTitle, price: price, quantity: quantity });
    }

    alert(`${productTitle} 已加入購物車，數量: ${quantity}`);
    updateCartCount();
    console.log(cart);
});

// 更新購物車顯示數量
function updateCartCount() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalQuantity;
    cartCount.style.display = totalQuantity > 0 ? 'block' : 'none';
}

// 數量調整功能
const decreaseButton = document.querySelector('.decrease');
const increaseButton = document.querySelector('.increase');
const quantityInput = document.querySelector('.quantity input');

decreaseButton.addEventListener('click', () => {
    if (quantityInput.value > 1) {
        quantityInput.value--;
    }
});

increaseButton.addEventListener('click', () => {
    quantityInput.value++;
});

// 跑馬燈效果
const marquee = document.querySelector('.marquee');
let marqueeOffset = 0;
function scrollMarquee() {
    marqueeOffset -= 2;
    if (marqueeOffset < -marquee.scrollWidth) {
        marqueeOffset = marquee.offsetWidth;
    }
    marquee.style.transform = `translateX(${marqueeOffset}px)`;
}
setInterval(scrollMarquee, 20);

// 動態按鈕點擊效果
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.classList.add('pressed');
    });
    button.addEventListener('mouseup', () => {
        button.classList.remove('pressed');
    });
});
*/