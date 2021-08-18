function handleProduct(isIncrease , productInput , perProductPrice) {
    const productText = document.getElementById( productInput + '-number');
    let ProductNumber = productText.value;
    if (isIncrease == true) {
        ProductNumber = parseInt(ProductNumber) + 1;
    } else if (ProductNumber > 0) {
        ProductNumber = parseInt(ProductNumber) - 1;
    }
    productText.value = ProductNumber;
    const caseTotalText = document.getElementById(productInput + '-total');
    caseTotalText.innerText = ProductNumber * perProductPrice;

    // subTotal 
    calculateTotal();
}

// All Product Number
function allProductNumber(productName){
    const allProduct = document.getElementById(productName + '-number');
    const allProductNumbers = parseInt(allProduct.value);
    return allProductNumbers;
};


// Calculate Total 
function calculateTotal(){
    const caseTotal = allProductNumber('case') * 100;
    const phoneTotal = allProductNumber('phone') * 500;
    const subTotal = caseTotal + phoneTotal ;
    const tax = subTotal / 10 ;
    const total = subTotal + tax;
    
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}


// handle phone increase and descries
document.getElementById('phone-plus').addEventListener('click', function () {
    handleProduct(true , 'phone' , 500);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    handleProduct(false , 'phone' , 500);
});

// handle case increase and descries
document.getElementById('plus-btn').addEventListener('click', function () {
    handleProduct(true , 'case' , 100);
});

document.getElementById('minus-btn').addEventListener('click', function () {
    handleProduct(false , 'case' , 100);
});



// handle phone increase and descries

// document.getElementById('phone-plus').addEventListener('click' , function(){
//     const phoneNumberText = document.getElementById('phone-number');
//     const phoneNumber = phoneNumberText.value;
//     phoneNumberText.value = parseInt(phoneNumber) + 1;
// });
// document.getElementById('phone-minus').addEventListener('click' , function(){
//     const phoneNumberText = document.getElementById('phone-number');
//     const phoneNumber = phoneNumberText.value;
//     phoneNumberText.value = parseInt(phoneNumber) - 1;
// });




// handle case increase decrease

// document.getElementById('plus-btn').addEventListener('click' , function(){
//     const productText = document.getElementById('input-number');
//     const ProductNumber = productText.value;
//     productText.value = parseInt(ProductNumber) + 1;
// });
// document.getElementById('minus-btn').addEventListener('click' , function(){
//     const productText = document.getElementById('input-number');
//     const ProductNumber = productText.value;
//     productText.value = parseInt(ProductNumber) - 1;
// })