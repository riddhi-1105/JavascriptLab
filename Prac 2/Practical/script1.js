// ===============================
// Search Products
// ===============================

function searchProducts() {

    let input = document.getElementById("searchProduct").value.toLowerCase();

    let labels = document.querySelectorAll("#productList label");

    labels.forEach(label => {

        if (label.textContent.toLowerCase().includes(input)) {
            label.style.display = "flex";
        } else {
            label.style.display = "none";
        }

    });

}



// ===============================
// Generate Bill
// ===============================

function calculateBill() {

    // var example
    var customerName = document.getElementById("name").value.trim();

    // let example
    let contact = document.getElementById("contact").value.trim();

    // Checkbox Products
    let selectedProducts = Array.from(
        document.querySelectorAll('#productList input[type="checkbox"]:checked')
    ).map(item => item.value);

    let price = Number(document.getElementById("price").value);

    let quantity = Number(document.getElementById("quantity").value);

    let discount = Number(document.getElementById("discount").value) || 0;

    let payment = document.getElementById("payment").value;

    // const example
    const GST = 18;

    // Validation

    if (
        customerName === "" ||
        contact === "" ||
        selectedProducts.length === 0 ||
        price <= 0 ||
        quantity <= 0
    ) {
        alert("Please fill all the required details.");
        return;
    }

    // Bill Calculations

    let subtotal = price * quantity;

    let discountAmount = subtotal * discount / 100;

    let amountAfterDiscount = subtotal - discountAmount;

    let gstAmount = amountAfterDiscount * GST / 100;

    let finalTotal = amountAfterDiscount + gstAmount;

    // Bill Number

    let billNumber = "DM" + Math.floor(Math.random() * 90000 + 10000);

    // Date

    let date = new Date();

    // Primitive Data Types

    let storeName = "DMart";      // String

    let totalItems = quantity;    // Number

    let isMember = true;          // Boolean

    let deliveryDate;             // Undefined

    let coupon = null;            // Null

    // Type Conversion

    let conversion = Number("100") + 50;

    // Type Coercion

    let coercion = "100" + 50;

    // Object

    const bill = {

        customerName,

        contact,

        selectedProducts,

        subtotal,

        discountAmount,

        gstAmount,

        finalTotal

    };

    // Object Destructuring

    const {

        customerName: name,

        contact: mobile,

        selectedProducts: products,

        subtotal: sub,

        discountAmount: dis,

        gstAmount: gst,

        finalTotal: total

    } = bill;

    // Display Bill

    document.getElementById("output").innerHTML = `

<h2 style="text-align:center;color:#003366;">
🛒 DMart Smart Bill
</h2>

<hr>

<p><b>Bill Number :</b> ${billNumber}</p>

<p><b>Date :</b> ${date.toLocaleString()}</p>

<p><b>Store :</b> ${storeName}</p>

<hr>

<p><b>Customer Name :</b> ${name}</p>

<p><b>Mobile :</b> ${mobile}</p>

<p><b>Products :</b> ${products.join(", ")}</p>

<p><b>Price Per Item :</b> ₹${price.toFixed(2)}</p>

<p><b>Quantity :</b> ${quantity}</p>

<p><b>Payment Method :</b> ${payment}</p>

<hr>

<p><b>Subtotal :</b> ₹${sub.toFixed(2)}</p>

<p><b>Discount (${discount}%) :</b> ₹${dis.toFixed(2)}</p>

<p><b>GST (18%) :</b> ₹${gst.toFixed(2)}</p>

<h2 style="color:green;">
Grand Total : ₹${total.toFixed(2)}
</h2>

<hr>

<h3 style="color:#003366;">
Primitive Data Types
</h3>

<p>String : ${storeName}</p>

<p>Number : ${totalItems}</p>

<p>Boolean : ${isMember}</p>

<p>Undefined : ${deliveryDate}</p>

<p>Null : ${coupon}</p>

<hr>

<h3 style="color:#003366;">
Type Conversion
</h3>

<p>Number("100") + 50 = <b>${conversion}</b></p>

<h3 style="color:#003366;">
Type Coercion
</h3>

<p>"100" + 50 = <b>${coercion}</b></p>

<hr>

<h2 style="text-align:center;color:#003366;">
⭐⭐ Thank You for Shopping at DMart ⭐⭐
</h2>

`;

}



// ===============================
// Clear Form
// ===============================

function clearForm() {

    document.getElementById("billForm").reset();

    document.getElementById("searchProduct").value = "";

    let labels = document.querySelectorAll("#productList label");

    labels.forEach(label => {

        label.style.display = "flex";

    });

    document.getElementById("output").innerHTML = `

<h2 style="text-align:center;color:#003366;">
🧾 Bill Summary
</h2>

<p style="text-align:center;">
Your bill will appear here after clicking
<b>Generate Bill</b>.
</p>

`;

}