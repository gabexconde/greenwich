function calculateTotal(items, displayId) {
    let subtotal = 0;

    // 1. Read menu quantities and prices
    items.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
            let qty = parseFloat(element.value) || 0;
            subtotal += qty * item.price;
        }
    });

    // 2. Detect Senior Citizen eligibility via Age Input
    // We get the value from the new age field
    let age = parseInt(document.getElementById("userAge").value) || 0;
    
    // In the Philippines, Senior Citizen age is 60 and above
    let isSenior = age >= 60;
    let discount = 0;

    // 3. Apply 12% discount when applicable
    if (isSenior && subtotal > 0) {
        discount = subtotal * 0.12;
    }

    let finalTotal = subtotal - discount;

    // 4. Display all computed values dynamically
    let discountMessage = isSenior 
        ? `<p style="color: #e31837; font-weight: bold;">Senior Discount (12%) Applied!</p>` 
        : `<p style="color: #666; font-size: 0.8rem;">No discount applied (Age: ${age})</p>`;

    document.getElementById(displayId).innerHTML = `
        <div style="margin-top:15px; border-top: 2px dashed #006838; padding-top:10px;">
            <p>Subtotal: ₱${subtotal.toFixed(2)}</p>
            <p>Discount: -₱${discount.toFixed(2)}</p>
            ${discountMessage}
            <h3 style="color: #006838;">Final Total: ₱${finalTotal.toFixed(2)}</h3>
        </div>
    `;
}

// Ensure your page-specific functions remain the same:
function computeGreenwichOrder() {
    const mainItems = [
        { id: "pizzaQty", price: 399 },
        { id: "lasagnaQty", price: 199 },
        { id: "carbonaraQty", price: 180 },
        { id: "chickenQty", price: 120 }
    ];
    calculateTotal(mainItems, "totalMain");
}

function computeDrinks() {
    const drinkItems = [
        { id: "icedTeaQty", price: 50 },
        { id: "sodaQty", price: 45 },
        { id: "pineQty", price: 60 },
        { id: "waterQty", price: 25 }
    ];
    calculateTotal(drinkItems, "totalDrinks");
}

function computeDessert() {
    const dessertItems = [
        { id: "pieQty", price: 45 },
        { id: "brownieQty", price: 55 },
        { id: "friesQty", price: 95 },
        { id: "garlicQty", price: 80 }
    ];
    calculateTotal(dessertItems, "totalDessert");
}

function openModal(imgElement) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("imgFull");
    let captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    // This takes the name of the food from the <span> next to the image
    captionText.innerHTML = imgElement.nextElementSibling.innerText;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}