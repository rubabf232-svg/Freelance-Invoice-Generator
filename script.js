function generateInvoice() {

    const business = document.getElementById("business").value;
    const client = document.getElementById("client").value;
    const service = document.getElementById("service").value;

    const price = Number(document.getElementById("price").value);
    const quantity = Number(document.getElementById("quantity").value);
    const taxRate = Number(document.getElementById("tax").value);

    if (!business || !client || !service || !price || !quantity) {
        alert("Please fill all fields.");
        return;
    }

    const subtotal = price * quantity;

    const taxAmount = subtotal * (taxRate / 100);

    const finalTotal = subtotal + taxAmount;

    document.getElementById("invoiceBusiness").textContent = business;

    document.getElementById("invoiceClient").textContent = client;

    document.getElementById("invoiceService").textContent = service;

    document.getElementById("invoiceQuantity").textContent = quantity;

    document.getElementById("invoicePrice").textContent =
        "$" + price.toFixed(2);

    document.getElementById("invoiceTotal").textContent =
        "$" + subtotal.toFixed(2);

    document.getElementById("subtotal").textContent =
        "$" + subtotal.toFixed(2);

    document.getElementById("taxAmount").textContent =
        "$" + taxAmount.toFixed(2);

    document.getElementById("finalTotal").textContent =
        "$" + finalTotal.toFixed(2);

    const today = new Date();

    document.getElementById("invoiceDate").textContent =
        today.toLocaleDateString();
}