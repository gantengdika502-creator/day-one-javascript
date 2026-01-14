function deteksiKetik() {
    var teks = document.getElementById("namaUser").value;
    console.log("Monitoring input: " + teks);
}

function prosesData() {
    var nama = document.getElementById("namaUser").value;

    if (nama == "") {
        alert("Waduh, namanya diisi dulu ya!");
    } else {
        alert("Terima kasih " + nama + ", data berhasil masuk!");
        console.log("User " + nama + " sukses konfirmasi.");
    }
}