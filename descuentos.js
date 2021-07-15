//Cupones disponibles
const coupons = [
    {
        name: "puchi",
        discount: 15,
    },
    {
        name: "pitu",
        discount: 20,
    },
    {
        name: "pancho",
        discount: 30,
    },
];

// Bloque que calcula descuentos
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
};

//  Bloque que interactua con el formulario
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputCoupon");
    const couponValue = inputDiscount.value;

    // Funcion que valida si existe los cupones
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    // Variable donde se guarda el cupon del user
    const userCoupon = coupons.find(isCouponValueValid);

    // Maquina magica de descuesntos con error first
    if (!userCoupon) {
        alert(`El cupón ${couponValue} no es válido`);
    } else {
        const descuento = userCoupon.discount
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        
        const priceOutput = document.getElementById("priceOutput");
        priceOutput.innerText = `El precio con descuento son: $${precioConDescuento}`;
    };
};



