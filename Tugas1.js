let panjang = 20.5;
let lebar = 30;


let hargaPerMeter = 1500000;


let ppn = 15; // dalam persen


let luasTanah = panjang * lebar;


let hargaSebelumPPN = luasTanah * hargaPerMeter;


let totalPPN = (ppn / 100) * hargaSebelumPPN;


let totalHarga = hargaSebelumPPN + totalPPN;
console.log("Luas tanah: " + luasTanah + " meter persegi");
console.log("Harga tanah sebelum PPN: Rp " + hargaSebelumPPN);
console.log("Total PPN: Rp " + totalPPN);
console.log("Total harga setelah PPN: Rp " + totalHarga);