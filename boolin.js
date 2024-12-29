document.addEventListener('DOMContentLoaded', function () {
    
    const cartBtn = document.querySelector('.cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeCartBtn = document.getElementById('close-cart');
    const cartList = document.getElementById('cart-list');
    const cartTotalPrice = document.getElementById('cart-total-price');
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    
    if (cartBtn && cartModal && closeCartBtn) {
        cartBtn.addEventListener('click', function () {
            cartModal.style.display = 'block';
            updateCart();
        });
        closeCartBtn.addEventListener('click', function () {
            cartModal.style.display = 'none';
        });
    }


    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = this.closest('.product');
            const productName = product.querySelector('h3').textContent;
            const productPrice = parseFloat(product.getAttribute('data-price'));


            const existingProduct = cart.find(item => item.name === productName);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }

            updateCart();
            localStorage.setItem("cart", JSON.stringify(cart)); 
        });
    });


    function updateCart() {
        cartList.innerHTML = ''; 
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            cartList.appendChild(li);
            total += item.price * item.quantity;
        });
        cartTotalPrice.textContent = `$${total.toFixed(2)}`;
    }


    const discountCodeInput = document.getElementById('discount-code');
    const applyDiscountBtn = document.getElementById('apply-discount');

    if (discountCodeInput && applyDiscountBtn) {
        applyDiscountBtn.addEventListener('click', function () {
            const discountCode = discountCodeInput.value.trim().toLowerCase();
            let total = parseFloat(cartTotalPrice.textContent.replace('$', ''));
            if (discountCode === 'save10') {
                total = total * 0.9; 
                cartTotalPrice.textContent = `$${total.toFixed(2)}`;
                alert('優惠碼已套用！');
            } else {
                alert('無效的優惠碼！');
            }
        });
    }


    const sortOptions = document.getElementById('sort-options');
    if (sortOptions) {
        sortOptions.addEventListener('change', function () {
            const products = Array.from(document.querySelectorAll('.product'));
            const value = this.value;

           
            products.sort((a, b) => {
                const priceA = parseFloat(a.getAttribute('data-price'));
                const priceB = parseFloat(b.getAttribute('data-price'));
                
                if (value === 'price') {
                    return priceB - priceA; 
                } else if (value === 'price-asc') {
                    return priceA - priceB; 
                }
                return 0; 
            });

            
            const productList = document.getElementById('product-list');
            if (productList) {
                productList.innerHTML = ''; 
                products.forEach(product => {
                    productList.appendChild(product);
                });
            }
        });
    }

    
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function () {
            window.location.href = 'login.html';
        });
    }

   
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); 

            const emailInput = document.getElementById('email');
            const email = emailInput ? emailInput.value.trim() : '';

            if (email) {
                alert(`${email}，歡迎您！`);
                window.location.href = 'index.html';
            } else {
                alert('請輸入有效的電子郵件！');
            }
        });
    }

    
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('確認密碼必須與密碼一致！');
            } else {
                const name = document.getElementById('name').value.trim();
                const age = document.getElementById('age').value.trim();
                const email = document.getElementById('email').value.trim();

                if (name && age && email) {
                    alert('註冊成功！');
                    window.location.href = 'index.html'; 
                } else {
                    alert('請填寫所有欄位！');
                }
            }
        });
    }

  
    const addToCartButtonsAlt = document.querySelectorAll(".add-to-cart");
    addToCartButtonsAlt.forEach(function(button) {
        button.addEventListener("click", function(event) {
            const productElement = button.closest(".product"); 
            const productName = productElement.querySelector("h3").textContent;
            const productPrice = parseFloat(productElement.querySelector("p").textContent.replace('$', '')); // 獲取商品價格

            
            addToCart(productName, productPrice);
        });
    });

    
    function addToCart(name, price) {
        
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const product = { name, price, quantity: 1 };

        
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart)); 

        alert(`${name} 已加入購物車！`);
    }

    
    const checkoutButton = document.getElementById('checkout-btn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            window.location.href = 'checkout.html';
        });
    }
    
    window.addEventListener("scroll", function() {
        const backToTopButton = document.getElementById("back-to-top");
        if (window.scrollY > 200) { 
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    
    document.getElementById("back-to-top").addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});

