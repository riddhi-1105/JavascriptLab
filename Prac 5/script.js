// Product Cart
let cart = [];

// Update Price Automatically
function updatePrice() {

    const product = document.getElementById("product");
    const selected = product.options[product.selectedIndex];

    const price = selected.getAttribute("data-price");

    document.getElementById("price").value = price ? price : "";

}

// Add Product
function addProduct() {

    const productSelect = document.getElementById("product");

    const name = productSelect.value;

    const price = Number(document.getElementById("price").value);

    const quantity = Number(document.getElementById("quantity").value);

    if (name === "") {
        alert("Please select a product.");
        return;
    }

    if (quantity <= 0 || isNaN(quantity)) {
        alert("Please enter a valid quantity.");
        return;
    }

    const product = {

        id: cart.length + 1,

        name: name,

        price: price,

        quantity: quantity

    };

    cart.push(product);

    displayCart();

    productSelect.selectedIndex = 0;
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";

}

// Display Cart
function displayCart() {

    const table = document.getElementById("cartTable");

    table.innerHTML = "";

    cart.forEach(function (item, index) {

        table.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${item.name}</td>

            <td>₹${item.price}</td>

            <td>${item.quantity}</td>

            <td>₹${item.price * item.quantity}</td>

            <td>

                <button class="remove-btn"

                onclick="removeProduct(${index})">

                Remove

                </button>

            </td>

        </tr>

        `;

    });

    // Item Summary using map()

    const summary = document.getElementById("summary");

    summary.innerHTML = "";

    cart.map(function (item) {

        summary.innerHTML += `

        <li>

        ${item.name}

        ×

        ${item.quantity}

        =

        ₹${item.price * item.quantity}

        </li>

        `;

    });

    // Premium Products using filter()

    const expensive = document.getElementById("expensive");

    expensive.innerHTML = "";

    const premium = cart.filter(function (item) {

        return item.price > 1000;

    });

    premium.forEach(function (item) {

        expensive.innerHTML += `

        <li>

        ${item.name}

        </li>

        `;

    });

}

// Calculate Bill
function calculateBill() {

    if (cart.length == 0) {

        alert("Cart is empty.");

        return;

    }

    // reduce()

    const total = cart.reduce(function (sum, item) {

        return sum + (item.price * item.quantity);

    }, 0);

    let discount = 0;

    if (total >= 50000) {

        discount = total * 0.20;

    }

    else if (total >= 20000) {

        discount = total * 0.10;

    }

    else if (total >= 5000) {

        discount = total * 0.05;

    }

    const subtotal = total - discount;

    const gst = subtotal * 0.18;

    const grandTotal = subtotal + gst;

    document.getElementById("result").innerHTML = `

        <p><strong>Total Products :</strong> ${cart.length}</p>

        <p><strong>Total Amount :</strong> ₹${total.toFixed(2)}</p>

        <p><strong>Discount :</strong> ₹${discount.toFixed(2)}</p>

        <p><strong>Amount After Discount :</strong> ₹${subtotal.toFixed(2)}</p>

        <p><strong>GST (18%) :</strong> ₹${gst.toFixed(2)}</p>

        <hr>

        <h2>Grand Total : ₹${grandTotal.toFixed(2)}</h2>

    `;

}

// Remove Product
function removeProduct(index) {

    cart.splice(index, 1);

    cart.forEach(function (item, i) {

        item.id = i + 1;

    });

    displayCart();

    document.getElementById("result").innerHTML = "<p>No bill calculated.</p>";

}

// Clear Cart
function clearCart() {

    if (confirm("Clear entire cart?")) {

        cart = [];

        document.getElementById("cartTable").innerHTML = "";

        document.getElementById("summary").innerHTML = "";

        document.getElementById("expensive").innerHTML = "";

        document.getElementById("result").innerHTML = "<p>No products added.</p>";

        document.getElementById("product").selectedIndex = 0;

        document.getElementById("price").value = "";

        document.getElementById("quantity").value = "";

    }

}