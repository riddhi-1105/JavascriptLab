/* =====================================================
   VÉRONA PRODUCT DATA
===================================================== */

const products = [

    {
        id: 1,
        name: "Fiction Book",
        category: "books",
        price: 499,
        image: "Book.jpg",
        description:
            "A captivating story for quiet evenings and thoughtful moments."
    },

    {
        id: 2,
        name: "Hoodie",
        category: "clothing",
        price: 1499,
        image: "Hoodie.jpg",
        description:
            "A comfortable everyday hoodie with a clean modern silhouette."
    },

    {
        id: 3,
        name: "Programming Book",
        category: "books",
        price: 899,
        image: "Programming.jpg",
        description:
            "Build your programming knowledge with practical examples."
    },

    {
        id: 4,
        name: "Smartphone",
        category: "electronics",
        price: 24999,
        image: "Phone.jpg",
        description:
            "Modern performance with an elegant design and immersive display."
    },

    {
        id: 5,
        name: "Smartwatch",
        category: "electronics",
        price: 4999,
        image: "Watch.jpg",
        description:
            "Stay connected, organized and active throughout your day."
    },

    {
        id: 6,
        name: "Sneakers",
        category: "clothing",
        price: 2999,
        image: "Sneakers.jpg",
        description:
            "Versatile everyday sneakers designed for comfort and style."
    },

    {
        id: 7,
        name: "T-Shirt",
        category: "clothing",
        price: 799,
        image: "Tshirt.jpg",
        description:
            "A timeless essential made for effortless everyday dressing."
    },

    {
        id: 8,
        name: "Wireless Headphones",
        category: "electronics",
        price: 3999,
        image: "Headphones.jpg",
        description:
            "Immersive wireless audio with a sleek and comfortable design."
    }

];


/* =====================================================
   HTML ELEMENTS
===================================================== */

const productGrid =
    document.getElementById("productGrid");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const clearButton =
    document.getElementById("clearButton");

const searchError =
    document.getElementById("searchError");

const productCount =
    document.getElementById("productCount");

const noResults =
    document.getElementById("noResults");

const resetResultsButton =
    document.getElementById("resetResultsButton");

const filterForm =
    document.getElementById("filterForm");

const cartCount =
    document.getElementById("cartCount");


/* =====================================================
   CATEGORY LABELS
===================================================== */

const categoryLabels = {

    electronics: "Electronics",

    clothing: "Clothing",

    books: "Books",

    accessories: "Accessories"

};


/* =====================================================
   FORMAT PRICE
===================================================== */

function formatPrice(price) {

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(price);

}


/* =====================================================
   CREATE PRODUCT CARD
===================================================== */

function createProductCard(product, index) {

    const card =
        document.createElement("article");

    card.className =
        "product-card";

    card.style.animationDelay =
        `${index * 60}ms`;


    /* IMAGE */

    const imageContainer =
        document.createElement("div");

    imageContainer.className =
        "product-image";


    const image =
        document.createElement("img");

    image.src =
        product.image;

    image.alt =
        product.name;

    image.loading =
        "eager";


    /*
       If image cannot be loaded,
       show a useful fallback instead of
       a broken-image icon.
    */

    image.onerror = function () {

        image.src =
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="800"
                     height="800"
                     viewBox="0 0 800 800">

                    <rect width="800"
                          height="800"
                          fill="#f4eaed"/>

                    <circle
                        cx="400"
                        cy="350"
                        r="110"
                        fill="none"
                        stroke="#651f34"
                        stroke-width="3"/>

                    <text
                        x="400"
                        y="390"
                        text-anchor="middle"
                        font-family="Georgia"
                        font-size="130"
                        fill="#651f34">
                        V
                    </text>

                    <text
                        x="400"
                        y="550"
                        text-anchor="middle"
                        font-family="Arial"
                        font-size="30"
                        fill="#651f34">
                        ${product.name}
                    </text>

                </svg>
            `);

    };


    imageContainer.appendChild(image);


    /* CATEGORY */

    const category =
        document.createElement("span");

    category.className =
        "category";

    category.textContent =
        categoryLabels[product.category];


    imageContainer.appendChild(category);


    /* PRODUCT INFO */

    const info =
        document.createElement("div");

    info.className =
        "product-info";


    const title =
        document.createElement("h3");

    title.textContent =
        product.name;


    const description =
        document.createElement("p");

    description.className =
        "product-description";

    description.textContent =
        product.description;


    /* BOTTOM */

    const bottom =
        document.createElement("div");

    bottom.className =
        "product-bottom";


    const price =
        document.createElement("span");

    price.className =
        "price";

    price.textContent =
        formatPrice(product.price);


    const addButton =
        document.createElement("button");

    addButton.type =
        "button";

    addButton.className =
        "add-button";

    addButton.dataset.id =
        product.id;

    addButton.textContent =
        "Add to Bag +";


    bottom.appendChild(price);

    bottom.appendChild(addButton);


    info.appendChild(title);

    info.appendChild(description);

    info.appendChild(bottom);


    /* FINAL CARD */

    card.appendChild(imageContainer);

    card.appendChild(info);


    return card;

}


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(list) {

    productGrid.innerHTML = "";

    productCount.textContent =
        list.length;


    if (list.length === 0) {

        noResults.hidden = false;

        return;

    }


    noResults.hidden = true;


    list.forEach(
        (product, index) => {

            const card =
                createProductCard(
                    product,
                    index
                );

            productGrid.appendChild(card);

        }
    );

}


/* =====================================================
   VALIDATE SEARCH
===================================================== */

function validateSearch() {

    const value =
        searchInput.value.trim();


    /*
       Empty search is valid.
       It means all products.
    */

    if (value === "") {

        searchInput.classList.remove(
            "invalid",
            "valid"
        );

        searchError.textContent = "";

        return true;
    }


    /*
       Only letters and spaces.
    */

    const validPattern =
        /^[A-Za-z ]+$/;


    if (!validPattern.test(value)) {

        searchInput.classList.remove(
            "valid"
        );

        searchInput.classList.add(
            "invalid"
        );

        searchError.textContent =
            "Please use letters and spaces only. Numbers and special characters are not allowed.";

        return false;
    }


    searchInput.classList.remove(
        "invalid"
    );

    searchInput.classList.add(
        "valid"
    );

    searchError.textContent = "";

    return true;

}


/* =====================================================
   FILTER PRODUCTS
===================================================== */

function filterProducts() {

    /*
       Validate search first.
    */

    if (!validateSearch()) {

        productGrid.innerHTML = "";

        productCount.textContent = "0";

        noResults.hidden = true;

        return;
    }


    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    const selectedCategory =
        categoryFilter.value;


    const filteredProducts =
        products.filter(product => {

            const productName =
                product.name.toLowerCase();


            const searchMatches =
                productName.includes(
                    searchText
                );


            const categoryMatches =
                selectedCategory === "all" ||
                product.category ===
                    selectedCategory;


            return (
                searchMatches &&
                categoryMatches
            );

        });


    displayProducts(filteredProducts);

}


/* =====================================================
   INPUT EVENT
===================================================== */

searchInput.addEventListener(
    "input",
    filterProducts
);


/* =====================================================
   CATEGORY CHANGE EVENT
===================================================== */

categoryFilter.addEventListener(
    "change",
    filterProducts
);


/* =====================================================
   CLEAR FILTER EVENT
===================================================== */

clearButton.addEventListener(
    "click",
    function () {

        searchInput.value = "";

        categoryFilter.value =
            "all";

        searchInput.classList.remove(
            "invalid",
            "valid"
        );

        searchError.textContent =
            "";

        displayProducts(products);

    }
);


/* =====================================================
   VIEW ALL BUTTON
===================================================== */

resetResultsButton.addEventListener(
    "click",
    function () {

        searchInput.value = "";

        categoryFilter.value =
            "all";

        searchInput.classList.remove(
            "invalid",
            "valid"
        );

        searchError.textContent =
            "";

        displayProducts(products);

    }
);


/* =====================================================
   FORM SUBMIT
===================================================== */

filterForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        filterProducts();

    }
);


/* =====================================================
   ADD TO BAG
===================================================== */

let cart = 0;


productGrid.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                ".add-button"
            );


        if (!button) {
            return;
        }


        cart++;

        cartCount.textContent =
            cart;


        const originalText =
            button.textContent;


        button.textContent =
            "Added ✓";

        button.style.color =
            "#397052";


        setTimeout(
            function () {

                button.textContent =
                    originalText;

                button.style.color =
                    "";

            },
            1000
        );

    }
);


/* =====================================================
   INITIAL LOAD
===================================================== */

displayProducts(products);
