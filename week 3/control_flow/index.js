let nilai = prompt('masukan nilai anda 1 - 100 :');
if (nilai >= 101) {
    alert('Nilai anda jangan lebih dari 100 !!!!!!!');
} else if (nilai >= 90 && nilai <= 100) {
    alert('nilai anda A');
} else if (nilai >= 71 && nilai <= 89) {
    alert('nilai anda B');
} else if (nilai >= 51 && nilai <= 70) {
    alert('nilai anda C');
} else if (nilai >= 31 && nilai <= 50) {
    alert('nilai anda D');
} else if (nilai <= 30 && nilai >= 1) {
    alert('nilai anda E');
} else if (nilai <= 0) {
    alert('Harus lebih dari 0');
} else if (nilai = String) {
    alert('harus memasukan angka');
} else if (nilai == null || nilai == "") {
    alert('harus memasukan nilai')
} else {
    alert('makasih')
}