(function() {
    var app = angular.module('pizzaStore', []);

    var pizzas = [{
        name: '4 STAGIONI',
        price: 27.5,
        weight: 550,
        ingredients: 'sos rosii, mozzarella, ciuperci, salam, sunca presata, oregano, anghinare',
        images: [
            'images/4_stagioni-01.jpg',
            'images/4_stagioni-02.jpg',
            'images/4_stagioni-03.jpg'
        ],
        reviews: [{
            stars: 5,
            body: "I love this pizza!",
            author: "joe@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "This pizza sucks.",
            author: "tim@example.org",
            createdOn: 1397490980837
        }]
    }, {
        name: 'DIAVOLA',
        price: 25,
        weight: 450,
        ingredients: 'sos rosii, mozzarella, salam picant, oregano',
        images: [
            'images/diavola-01.jpg',
            'images/diavola-02.jpg',
            'images/diavola-03.jpg'
        ],
        reviews: [{
            stars: 3,
            body: "I think this pizza was just OK, could honestly be more spicy, IMO.",
            author: "JimmyDean@example.org",
            createdOn: 1397490980837
        }, {
            stars: 4,
            body: "Any pizza with chilly is for me!",
            author: "gemsRock@example.org",
            createdOn: 1397490980837
        }]
    }, {
        name: 'MARGHERITA',
        price: 17.5,
        weight: 350,
        ingredients: 'sos rosii, mozzarella, oregano',
        images: [],
        reviews: [{
            stars: 1,
            body: "This pizza is WAY too expensive for its value.",
            author: "turtleguyy@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "BBW: Simple Pizza != High Quality.",
            author: "LouisW407@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "Don't waste your $$$!",
            author: "nat@example.org",
            createdOn: 1397490980837
        }]
    }]

    app.controller('StoreController', function() {
        this.products = pizzas;
    });
    app.controller('GalleryController', function() {
        this.current = 0;
        this.setCurrent = function(current) {
            this.current = current ? current : 0;
        };
    });
})();