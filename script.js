function calculateTotal() {
  // Select all price cells
  const priceElements = document.querySelectorAll(".prices");

  // Calculate the total price
  let totalPrice = 0;
  priceElements.forEach((priceElement) => {
    totalPrice += parseFloat(priceElement.textContent);
  });

  // Create a new row for the total
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // Set attributes and content for the new row
  totalCell.colSpan = 2; // Span across both columns
  totalCell.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  totalCell.style.textAlign = "right";
  totalRow.appendChild(totalCell);

  // Append the total row to the table
  const table = document.getElementById("groceryTable");
  table.appendChild(totalRow);
}
