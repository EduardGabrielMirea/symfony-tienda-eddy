//Immediately-Invoked Function Expression (IIFE)
(function(){
    const infoProduct = $("#cart-modal");
    $( "a.open-cart-product" ).click(function(event) {
        alert(1);
        event.preventDefault();
        const id = $( this ).attr('data-id');
        const href = `/api/show/${id}`;
        $.get( href, function(data) {
            alert(2);
            $( infoProduct ).find( "#productName" ).text(data.name);
            $( infoProduct ).find( "#productPrice" ).text(data.price);
            $( infoProduct ).find( "#productImage" ).attr("src", "/img/" + data.photo);
            infoProduct.modal('show');
        })
    });
    $(".closeInfoProduct").click(function (e) {
        infoProduct.modal('hide');
    });
})();
