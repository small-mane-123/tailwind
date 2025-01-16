function cartApp() {
    return {
        items: [
            { id: 1, name: 'Waffle with Berries', price: 6.50, price: "6.50", image: '../src/image/image-waffle-desktop.jpg', inCart: false, quantity: 0, specify: 'waffle' },
            { id: 2, name: 'Vanilla Bean Crème Brûlée', price: 7.00, price: "7.00", image: '../src/image/image-creme-brulee-desktop.jpg', inCart: false, quantity: 0, specify: 'creme brulee' },
            { id: 3, name: 'Macaron Mix of Five', price: 8.00, price: "8.00", image: '../src/image/image-macaron-desktop.jpg', inCart: false, quantity: 0, specify: 'macaron' },
            { id: 4, name: 'Classic Tiramisu', price: 5.50, price: "5.50", image: '../src/image/image-tiramisu-desktop.jpg', inCart: false, quantity: 0, specify: 'tiramisu' },
            { id: 5, name: 'Pistachio Baklava', price: 4.00, price: "4.00", image: '../src/image/image-baklava-desktop.jpg', inCart: false, quantity: 0, specify: 'baklava' },
            { id: 6, name: 'Lemon Meringue Pie', price: 5.00, price: "5.00", image: '../src/image/image-meringue-desktop.jpg', inCart: false, quantity: 0, specify: 'pie' },
            { id: 7, name: 'Red Velvet Cake', price: 4.50, price: "4.50", image: '../src/image/image-cake-desktop.jpg', inCart: false, quantity: 0, specify: 'cake' },
            { id: 8, name: 'Salted Caramel Brownie', price: 5.50, price: "5.50", image: '../src/image/image-brownie-desktop.jpg', inCart: false, quantity: 0, specify: 'brownie' },
            { id: 9, name: 'Vanilla Panna Cotta', price: 6.50, price: "6.50", image: '../src/image/image-panna-cotta-desktop.jpg', inCart: false, quantity: 0, specify: 'panna otta' }
        ],
        cart: [],
        orderConfirmed: false,

        addToCart(item) {
            item.inCart = true;
            item.quantity = 1;
            this.cart.push(item);
        },

        increaseQuantity(item) {
            item.quantity++;
        },

        decreaseQuantity(item) {
            if (item.quantity > 1) {
            item.quantity--;
            } else {
            this.removeFromCart(item);
            }
        },

        removeFromCart(item) {
            item.inCart = false;
            item.quantity = 0;
            this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
        },

        get cartTotal() {
            return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        },

        confirmOrder() {
            this.orderConfirmed = true;
        },

        startNewOrder() {
        this.cart.forEach(item => {
            item.inCart = false;
            item.quantity = 0;
            });
            this.cart = [];
            this.orderConfirmed = false;
        },
    };
}

// Get the button element
const backToTopBtn = document.getElementById("backToTopBtn");
// Show the button when scrolling near the bottom of the page
window.onscroll = function () {
if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
    backToTopBtn.classList.remove("hidden");
} else {
    backToTopBtn.classList.add("hidden");
}
};
    // Scroll to top when clicking the button
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    });