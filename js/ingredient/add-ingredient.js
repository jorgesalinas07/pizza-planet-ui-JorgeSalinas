function postIngredient(ingredient) {

    fetch('http://127.0.0.1:5000/ingredient/', {
        method: 'POST',
        body: JSON.stringify(ingredient),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    })
        .then(res => res.json())
        .then(res => showNotification());


}

/**
 * Get the form and submit it with fetch API
 */
let ingredientForm = $("#ingredient-form");
ingredientForm.submit(event => {

    let ingredient = getIngredientData();
    postIngredient(ingredient);

    event.preventDefault();
    event.currentTarget.reset();
});

/**
 * Gets the order data with JQuery
 */
function getIngredientData() {

    return {
        name: $("input[name='name']").val(),
        price: $("input[name='price']").val(),
    };
}

/**
 * Shows a notification when the order is accepted
 */
function showNotification() {
    let beverageAlert = document.getElementById("ingredient-alert");
    beverageAlert.classList.remove("ingredient-alert");
    setTimeout(() => beverageAlert.classList.toggle("ingredient-alert"), 2000);
}