// cart.js

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        renderCartItems();
    }
});
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-to-cart-btn');
    if (!btn) return;
    const datasetName = btn.getAttribute('data-name');
    const datasetPrice = btn.getAttribute('data-price');
    const datasetImage = btn.getAttribute('data-image');
    let product = null;
    if (datasetName && datasetPrice) {
        product = {
            name: datasetName,
            price: parseFloat(datasetPrice),
            image: datasetImage || ''
        };
    } else {
        const productCard = btn.closest('.group') || btn.closest('.bg-cardBg');
        if (!productCard) return;
        const nameEl = productCard.querySelector('h3');
        const priceEl = productCard.querySelector('.text-neonGreen');
        const imgEl = productCard.querySelector('img');
        if (!nameEl || !priceEl || !imgEl) return;
        const name = nameEl.innerText;
        const price = parseFloat(priceEl.innerText.replace(' ر.س', '').trim());
        const image = imgEl.src;
        product = { name, price, image };
    }
    addToCart(product);
});

// إضافة منتج للسلة
function addToCart(product) {
    let cart = getCart();
    cart.push(product);
    localStorage.setItem('dlt_cart', JSON.stringify(cart));
    
    refreshCartViews();
    showToast(`تمت إضافة ${product.name} للسلة`);
}

// حذف منتج من السلة
function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    localStorage.setItem('dlt_cart', JSON.stringify(cart));
    
    refreshCartViews();
    showToast('تم حذف المنتج من السلة');
}

// جلب محتويات السلة
function getCart() {
    return JSON.parse(localStorage.getItem('dlt_cart')) || [];
}

function refreshCartViews() {
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        renderCartItems();
    }
    if (typeof window.renderCheckout === 'function') {
        window.renderCheckout();
    }
}

function removeOneByKey(name, price, image) {
    let cart = getCart();
    const idx = cart.findIndex(it => it.name === name && it.price === price && it.image === image);
    if (idx !== -1) {
        cart.splice(idx, 1);
        localStorage.setItem('dlt_cart', JSON.stringify(cart));
        refreshCartViews();
        showToast('تم حذف عنصر من السلة');
    }
}

function removeAllByKey(name, price, image) {
    let cart = getCart();
    cart = cart.filter(it => !(it.name === name && it.price === price && it.image === image));
    localStorage.setItem('dlt_cart', JSON.stringify(cart));
    refreshCartViews();
    showToast('تم حذف المجموعة من السلة');
}

// تحديث عداد السلة في القائمة العلوية
function updateCartCount() {
    const cart = getCart();
    const countElements = document.querySelectorAll('#cart-count');
    countElements.forEach(el => {
        el.innerText = cart.length;
        // إخفاء العداد إذا كان صفر
        if (cart.length === 0) {
            el.style.display = 'none';
        } else {
            el.style.display = 'flex';
        }
    });
}

// عرض المنتجات في صفحة السلة
function renderCartItems() {
    const cartContainer = document.getElementById('cart-items-container');
    const cartTotalElement = document.getElementById('cart-total');
    
    if (!cartContainer) return;

    const cart = getCart();
    cartContainer.innerHTML = '';
    
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="text-center py-12">
                <p class="text-gray-400 text-xl mb-4">سلتك فارغة حالياً</p>
                <a href="index.html" class="text-neonPurple hover:text-neonBlue transition underline">تصفح المنتجات</a>
            </div>
        `;
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'flex items-center justify-between bg-black/20 p-4 rounded-lg border border-white/5 mb-4 hover:border-neonPurple/30 transition';
            itemElement.innerHTML = `
                <div class="flex items-center gap-4 min-w-0 flex-1">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md flex-shrink-0">
                    <div class="min-w-0">
                        <h4 class="font-bold text-white truncate">${item.name}</h4>
                        <span class="text-neonGreen font-pixel text-sm">${item.price} ر.س</span>
                    </div>
                </div>
                <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-400 p-2 transition flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            `;
            cartContainer.appendChild(itemElement);
        });
    }

    if (cartTotalElement) {
        cartTotalElement.innerText = total + ' ر.س';
    }
}

// إظهار رسالة تنبيه صغيرة (Toast)
function showToast(message) {
    // إنشاء عنصر التنبيه
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-neonPurple text-white px-6 py-3 rounded-lg shadow-[0_0_15px_rgba(217,0,255,0.4)] z-50 translate-y-full opacity-0 transition-all duration-300 w-[90%] md:w-auto text-center';
    toast.innerText = message;
    
    document.body.appendChild(toast);
    
    // تفعيل الحركة
    setTimeout(() => {
        toast.classList.remove('translate-y-full', 'opacity-0');
    }, 100);

    // إخفاء بعد 3 ثواني
    setTimeout(() => {
        toast.classList.add('translate-y-full', 'opacity-0');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}
