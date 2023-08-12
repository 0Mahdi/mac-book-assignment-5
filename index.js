// Wrap your code in a function to avoid polluting the global scope
function initializeMemoryCard() {
    const zeroCostButton = document.getElementById("zeroCost");
    const memoryButton = document.getElementById("memory");
    const zeroStorButton = document.getElementById("zeroStor");
    const mediumStorButton = document.getElementById("mediumStor");
    const largeStorButton = document.getElementById("largeStor");
    const freeDeliveryButton = document.getElementById("freeDelivery");
    const deliveryCostButton = document.getElementById("deliveryCost");
    const extraMemoryField = document.getElementById("extra-memo-cost");
    const extraStorageField = document.getElementById("extra-storage-cost");
    const deliveryField = document.getElementById("deliveryCharge");

    // Update memory cost
    memoryButton.addEventListener("click", function () {
        updateMemoryCost(180);
    });

    zeroCostButton.addEventListener("click", function () {
        updateMemoryCost(0);
    });

    // Update storage cost
    zeroStorButton.addEventListener("click", function () {
        updateStorageCost(0);
    });

    mediumStorButton.addEventListener("click", function () {
        updateStorageCost(100);
    });

    largeStorButton.addEventListener("click", function () {
        updateStorageCost(180);
    });

    // Update delivery cost
    freeDeliveryButton.addEventListener("click", function () {
        updateDeliveryCost(0);
    });

    deliveryCostButton.addEventListener("click", function () {
        updateDeliveryCost(20);
    });

    function updateMemoryCost(cost) {
        extraMemoryField.innerText = cost.toString();
    }

    function updateStorageCost(cost) {
        extraStorageField.innerText = cost.toString();
    }

    function updateDeliveryCost(cost) {
        deliveryField.innerText = cost.toString();
    };
    // Function to calculate and update the total price
    function updateTotalPrice() {
        const basePrice = 1299; // Initial base price
        const extraMemoryCost = parseFloat(extraMemoryField.innerText);
        const extraStorageCost = parseFloat(extraStorageField.innerText);
        const deliveryCharge = parseFloat(deliveryField.innerText);

        const total = basePrice + extraMemoryCost + extraStorageCost + deliveryCharge;

        // Update the Total Price element
        const totalPriceElement = document.getElementById("totalPrice");
        totalPriceElement.innerText = "$" + total.toFixed(2);
    }
    // Add event listeners to update the total price whenever selections change
    memoryButton.addEventListener("click", updateTotalPrice);
    zeroCostButton.addEventListener("click", updateTotalPrice);
    zeroStorButton.addEventListener("click", updateTotalPrice);
    mediumStorButton.addEventListener("click", updateTotalPrice);
    largeStorButton.addEventListener("click", updateTotalPrice);
    freeDeliveryButton.addEventListener("click", updateTotalPrice);
    deliveryCostButton.addEventListener("click", updateTotalPrice);

    // Call the updateTotalPrice function initially to display the correct total
    updateTotalPrice()
};
// Call the initialization function when the DOM is loaded
document.addEventListener("DOMContentLoaded", initializeMemoryCard);