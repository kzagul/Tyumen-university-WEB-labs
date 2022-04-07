let webstore = new Vue({
    el: '#site',
    data: {
        siteName: "Vue.js Pet Depot",
        showProduct: true,
        order: {
            firstName: "",
            lastName: ""
        },
        product: {
            id: 1001,
            title: "CatFood, 25lb bag",
            description: "A 25 pound bag of <em>irresistible</em>, organic goodness for your cat.",
            price: 10000,
            image: "i.jpeg",
            availableInventory: 5
        },
        cart: []
    }
})