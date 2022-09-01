
function fetchBeverage(_id) {
    fetch(`http://127.0.0.1:5000/beverage/id/${_id}`)
        .then(response => response.json())
        .then(beverage => {
            $("#_id").val(beverage._id);
            $("#type").val(beverage.type);
            $("#price").val(beverage.price);

        });
}

function loadInformation() {
    let urlParams = new URLSearchParams(window.location.search);
    let _id = urlParams.get('_id');
    fetchBeverage(_id)
}

function putBeverage(beverage) {

    fetch('http://127.0.0.1:5000/beverage/', {
        method: 'PUT',
        body: JSON.stringify(beverage),
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
let beverageForm = $("#beverage-form");
beverageForm.submit(event => {

    let beverage = getBeverageData();
    putBeverage(beverage);

    event.preventDefault();
    event.currentTarget.reset();
    window.location.href = '/app/beverage/beverage.html';
});

/**
 * Gets the beverage data with JQuery
 */
function getBeverageData() {
    return {
        _id: $("input[id='_id']").val(),
        type: $("input[id='type']").val(),
        price: $("input[id='price']").val()
    };
}

/**
 * Shows a notification when the beverage is accepted
 */
function showNotification() {
    let beverageAlert = document.getElementById("beverage-alert");
    beverageAlert.classList.remove("ingredient-alert");
    setTimeout(() => beverageAlert.classList.toggle("ingredient-alert"), 2000);
}


window.onload = loadInformation;