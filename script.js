let images = [
  "images_background/perfume1.jpg",
  "images_background/perfume2.jpg",
  "images_background/perfume3.jpg",
];
let index = 0;

function changeImage() {
  index = (index + 1) % images.length;
  document.getElementById("carousel-img").src = images[index];
}

setInterval(changeImage, 3000);

function orderNow(event) {
  event.stopPropagation(); // Prevent triggering parent onclick events
  document.getElementById("purchase-message").innerText =
    "✅ Thank you for your purchase! Your order has been placed successfully.";
  document.getElementById("purchase-message").classList.remove("hidden");
}

function trackOrder() {
  let orderId = document.getElementById("order-id").value;
  let statusElement = document.getElementById("order-status");

  if (orderId === "") {
    statusElement.innerText = "Please enter a valid order ID.";
    return;
  }
  statusElement.innerText = "Your order #" + orderId + " is being processed.";
}

function showProductDetails(title, description, price) {
  // document.getElementById("modal-image").src = image;
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-description").innerText = description;
  document.getElementById("modal-price").innerText = "Price: " + price;
  document.getElementById("productModal").style.display = "block";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

window.onclick = function (event) {
  let modal = document.getElementById("productModal");
  if (event.target === modal) {
    closeModal();
  }
};
