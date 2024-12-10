
const item2 = document.getElementById("item2");

item2.addEventListener("click", () => {
  const parentText = item2.parentNode.textContent.trim();
  alert("Parent (ul) content: " + parentText);

  if (item2.previousElementSibling) {
    console.log("Previous sibling: " + item2.previousElementSibling.textContent);
  }

  if (item2.nextElementSibling) {
    console.log("Next sibling: " + item2.nextElementSibling.textContent);
  }
});
