function DeretGeometri(a, r, n) {
    let jumlah = 0;
    let suku = a;

    for (let i = 0; i < n; i++) {
        jumlah += suku;  
        suku *= r;       
    }

    return jumlah;
}

let a = 4;  
let r = 3;  
let n = 10; 

let jumlahDeret = DeretGeometri(a, r, n);
console.log("Jumlah 10 suku pertama: " + jumlahDeret);