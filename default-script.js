// Mendapatkan query string dari URL
var queryString = window.location.search;

// Parse query string menjadi objek JavaScript
var params = new URLSearchParams(queryString);

// Mendapatkan nilai variabel var
var packet = params.get('packet');

// Mendapatkan semua elemen input quantity
const quantityInputs = document.querySelectorAll('.quantity');

// Variabel untuk menyimpan data input quantity
let quantityBuburA_half = 0;
let quantityBuburA_1 = 0;
let quantityBuburB_half = 0;
let quantityBuburB_1 = 0;
let quantityNasiTim_half = 0;
let quantityNasiTim_1 = 0;
let quantitySup = 0;
let quantityJusBuah = 0;

// Fungsi untuk menyimpan data input quantity ke dalam variabel
function saveQuantities() {
    quantityBuburA_half = parseInt(document.getElementById('quantity-buburA-half').value) || 0;
    quantityBuburA_1 = parseInt(document.getElementById('quantity-buburA-1').value) || 0;
    quantityBuburB_half = parseInt(document.getElementById('quantity-buburB-half').value) || 0;
    quantityBuburB_1 = parseInt(document.getElementById('quantity-buburB-1').value) || 0;
    quantityNasiTim_half = parseInt(document.getElementById('quantity-nasitim-half').value) || 0;
    quantityNasiTim_1 = parseInt(document.getElementById('quantity-nasitim-1').value) || 0;
    quantitySup = parseInt(document.getElementById('quantity-sup').value) || 0;
    quantityJusBuah = parseInt(document.getElementById('quantity-jusbuah').value) || 0;
}

// Memanggil fungsi saveQuantities setiap kali nilai input berubah
quantityInputs.forEach(input => {
    input.addEventListener('change', saveQuantities);
});

// Fungsi untuk melakukan log data ke konsol
function logData() {
    console.log("Quantity Bubur A (1/2 porsi):", quantityBuburA_half);
    console.log("Quantity Bubur A (1 porsi):", quantityBuburA_1);
    console.log("Quantity Bubur B (1/2 porsi):", quantityBuburB_half);
    console.log("Quantity Bubur B (1 porsi):", quantityBuburB_1);
    console.log("Quantity Nasi Tim (1/2 porsi):", quantityNasiTim_half);
    console.log("Quantity Nasi Tim (1 porsi):", quantityNasiTim_1);
    console.log("Quantity Sup:", quantitySup);
    console.log("Quantity Jus Buah:", quantityJusBuah);

    // Membangun URL dengan parameter variabel
    const url = `index.html?packet=${packet}&buburA_half=${quantityBuburA_half}&buburA_1=${quantityBuburA_1}&buburB_half=${quantityBuburB_half}&buburB_1=${quantityBuburB_1}&nasitim_half=${quantityNasiTim_half}&nasitim_1=${quantityNasiTim_1}&sup=${quantitySup}&jusbuah=${quantityJusBuah}`;

    // Mengarahkan halaman ke URL yang dibangun
    window.location.href = url;
}

// Mendapatkan tombol log
const logButton = document.getElementById('logButton');

// Menambahkan event listener untuk tombol log
logButton.addEventListener('click', logData);
