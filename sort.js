var names = [];

function SortNames() {
  var thename = document.theform.newname.value.trim();

  if (thename === "") return;

  // Convert to uppercase and add to array
  names.push(thename.toUpperCase());

  // Sort alphabetically
  names.sort();

  // Create numbered list
  var numberedList = names.map((name, index) => `${index + 1}. ${name}`).join("\n");

  // Display the result
  document.theform.sorted.value = numberedList;

  // Clear input
  document.theform.newname.value = "";
  document.theform.newname.focus();
}

// Add Enter key support
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("newname").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault(); // prevent form submit
      SortNames();
    }
  });
});
