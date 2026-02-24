var CART = [];

function addToCart(product) {
    if (CART.indexOf(product) === -1) {
        CART.push(product);
    }
    alert("Product added to cart!");
}

function checkOut() {
    alert("Checking out....");
    return CART.join(" ");
}

function runPyScript(input) {
    alert("Opening dressing room with webcam...");
    var jqXHR = $.ajax({
        type: "POST",
        url: "/tryall",
        async: false,
        data: { mydata: input },
    });

    return jqXHR.responseText;
}

$(function () {
    $("#check_out").on("click", function () {
        alert("Get ready to try!");
        var datatosend = CART.join(" ");
        runPyScript(datatosend);
    });
});

