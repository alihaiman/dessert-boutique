window.onload = function() {
  const totalItems = 10;
  const modals = [];

  for (let i = 1; i <= totalItems; i++) {
    const card = document.getElementById(`card${i}`);
    const modal = document.getElementById(`modal${i}`);
    const close = document.getElementById(`close${i}`);

    modals.push(modal);
    card.onclick = function() {
      modal.classList.add("active");
    };
    close.onclick = function() {
      modal.classList.remove("active");
    };
    modal.onclick = function(e) {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    };
  }
  document.onkeydown = function(e) {
    if (e.key === "Escape") {
      modals.forEach(modal => modal.classList.remove("active"));
    }
  };
};
function orderNow(itemName, itemPrice) {
  document.getElementById("orderItemName").innerText = itemName;
  document.getElementById("orderItemPrice").innerText = itemPrice;
  document.getElementById("orderForm").classList.add("active");
}

document.getElementById("orderClose").addEventListener("click", () => {
  document.getElementById("orderForm").classList.remove("active");
});


function confirmOrder() {
  let name = document.getElementById("buyerName").value;
  let phone = document.getElementById("buyerPhone").value;
  let qty = document.getElementById("quantity").value;
  let loc = document.getElementById("buyerLocation").value;
  let custom = document.getElementById("custom").value;
  if (!name || !phone || !qty || !loc) {
    alert("Please fill all required fields!");
    return;
  }

  alert("Your order has been placed successfully!");
  document.getElementById("orderForm").classList.remove("active");

  document.getElementById("buyerName").value = '';
    document.getElementById("buyerPhone").value = '';
    document.getElementById("custom").value = '';
    document.getElementById("quantity").value = '';
    document.getElementById("buyerLocation").value = '';
}
