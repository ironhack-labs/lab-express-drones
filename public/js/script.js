document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("lab-express-drones JS imported successfully!");

    /**
     * Esto lo puse ya que no supe como manipular DOM desde Express/Node
     */
    const urlParams = new URLSearchParams(window.location.search);
    const updated = urlParams.get("updated");
    const deleted = urlParams.get("deleted");
    const added = urlParams.get("added");
    if (updated) new bootstrap.Toast(document.querySelector("#updatedToast")).show();
    else if (deleted) new bootstrap.Toast(document.querySelector("#deletedToast")).show();
    else if (added) new bootstrap.Toast(document.querySelector("#newToast")).show();
  },
  false
);
