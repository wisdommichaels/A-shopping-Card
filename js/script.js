document.addEventListener("DOMContentLoaded", () => {
    const updateTotalPrice = () => {
      const totalElement = document.querySelector(".total");
      let totalPrice = 0;
      document.querySelectorAll(".card").forEach(card => {
        const unitPrice = parseFloat(card.querySelector(".unit-price").textContent.replace("$", "").trim());
        const quantity = parseInt(card.querySelector(".quantity").textContent.trim());
        totalPrice += unitPrice * quantity;
      });
      totalElement.textContent = `${totalPrice} $`;
    };
  
    document.querySelectorAll(".fa-plus-circle").forEach(button => {
      button.addEventListener("click", () => {
        const quantityElement = button.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = ++quantity;
        updateTotalPrice();
      });
    });
  
    document.querySelectorAll(".fa-minus-circle").forEach(button => {
      button.addEventListener("click", () => {
        const quantityElement = button.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantityElement.textContent = --quantity;
          updateTotalPrice();
        }
      });
    });
  
    document.querySelectorAll(".fa-trash-alt").forEach(button => {
      button.addEventListener("click", () => {
        const cardBody = button.closest(".card-body");
        cardBody.parentElement.removeChild(cardBody);
        updateTotalPrice();
      });
    });
  
    document.querySelectorAll(".fa-heart").forEach(button => {
      button.addEventListener("click", () => {
        button.classList.toggle("liked");
        button.style.color = button.classList.contains("liked") ? "red" : "black";
      });
    });
  
    updateTotalPrice();
  });
  