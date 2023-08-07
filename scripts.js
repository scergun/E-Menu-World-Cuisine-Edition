const contentsDOM = document.querySelector('.contents');
const btnAllDOM = document.querySelector('#all')
const btnEuropeDOM = document.querySelector('#europe')
const btnAsiaDOM = document.querySelector('#asia')
const btnAmericasDOM = document.querySelector('#americas')

const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Asia",
        price: 10.99,
        img:
            "images/tteokbokki.png",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Kebab",
        category: "Europe",
        price: 10.99,
        img:
            "images/kebab.png",
        desc: `Dish of Middle Eastern or Central Asian origin that typically combines small pieces of meat such as lamb or beef with vegetables on a skewer and is then grilled.`,
    },
    {
        id: 3,
        title: "Burger",
        category: "Americas",
        price: 8.99,
        img:
            "images/burger-menu.png",
        desc: `A sandwich consisting of fillings usually a patty of ground meat, typically beef placed inside a sliced bun or bread roll.`,
    },
    {
        id: 4,
        title: "Sushi",
        category: "Asia",
        price: 9.99,
        img:
            "images/sushi.png",
        desc: `A staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold.`,
    },
    {
        id: 5,
        title: "Pizza",
        category: "Europe",
        price: 12.99,
        img:
            "images/pizza.png",
        desc: `A flat, open-faced baked pie of Italian origin, consisting of a thin layer of bread dough topped with spiced tomato sauce and cheese, often garnished with anchovies, sausage slices, mushrooms.`,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Asia",
        price: 8.99,
        img:
            "images/onigiri.png",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Croissant",
        category: "Europe",
        price: 4.99,
        img:
            "images/croissant.png",
        desc: `Croissant is a laminated, yeast-leavened bakery product that contains dough/roll-in fat layers to create a flaky, crispy texture.`,
    },
    {
        id: 8,
        title: "Chicken Ramen",
        category: "Asia",
        price: 12.99,
        img:
            "images/chicken-ramen.png",
        desc: `An incredibly flavorful easy homemade chicken ramen with authentic flavors. Served with caramelized soy chicken and a ramen egg.`,
    },
    {
        id: 9,
        title: "Taco",
        category: "Americas",
        price: 6.99,
        img:
            "images/taco.png",
        desc: `A Mexican food that consists of a folded and usually fried piece of thin bread (called a tortilla) that is filled with meat, cheese, lettuce.`,
    },
    {
        id: 10,
        title: "Guacamole",
        category: "Americas",
        price: 7.99,
        img:
            "images/guacamole.png",
        desc: `Guacamole is basically mashed, raw avocados mixed with other ingredients to taste.`,
    },
];

let result = '';

btnAllDOM.addEventListener('click', function () {

    let result = '';
    menu.forEach((e) => {
        result += `<div class="content">
        <img src="${e.img}" alt="">
        <div class="item">
            <div class="namePrice">
                <span class="name">${e.title}</span>
                <span class="price">${e.price}</span>
            </div>
            <span class="desc">
                ${e.desc}
            </span>
        </div>
    </div>`;
    });
    contentsDOM.innerHTML = result;
});

btnEuropeDOM.addEventListener('click', function () {
    europeFoods = menu.map(function (food) {
        if (food.category === "Europe") {
            return food;
        };
    }).filter(function (x) {
        if (x != undefined) {
            return x
        };
    });
    result = '';
    europeFoods.forEach((e) => {
        result += `<div class="content">
    <img src="${e.img}" alt="">
    <div class="item">
        <div class="namePrice">
            <span class="name">${e.title}</span>
            <span class="price">${e.price}</span>
        </div>
        <span class="desc">
            ${e.desc}
        </span>
    </div>
</div>`;
    });
    contentsDOM.innerHTML = result;
});

btnAsiaDOM.addEventListener('click', function () {
    asiaFoods = menu.map(function (food) {
        if (food.category === "Asia") {
            return food;
        };
    }).filter(function (x) {
        if (x != undefined) {
            return x
        };
    });
    result = '';
    asiaFoods.forEach((e) => {
        result += `<div class="content">
<img src="${e.img}" alt="">
<div class="item">
<div class="namePrice">
    <span class="name">${e.title}</span>
    <span class="price">${e.price}</span>
</div>
<span class="desc">
    ${e.desc}
</span>
</div>
</div>`;
    });
    contentsDOM.innerHTML = result;
})

btnAmericasDOM.addEventListener('click', function () {
    americanFoods = menu.map(function (food) {
        if (food.category === "Americas") {
            return food;
        };
    }).filter(function (x) {
        if (x != undefined) {
            return x
        };
    });
    result = '';
    americanFoods.forEach((e) => {
        result += `<div class="content">
<img src="${e.img}" alt="">
<div class="item">
<div class="namePrice">
<span class="name">${e.title}</span>
<span class="price">${e.price}</span>
</div>
<span class="desc">
${e.desc}
</span>
</div>
</div>`;
    });
    contentsDOM.innerHTML = result;

})
menu.forEach((e) => {
    result += `<div class="content">
        <img src="${e.img}" alt="">
        <div class="item">
            <div class="namePrice">
                <span class="name">${e.title}</span>
                <span class="price">${e.price}</span>
            </div>
            <span class="desc">
                ${e.desc}
            </span>
        </div>
    </div>`;
});
contentsDOM.innerHTML = result;


