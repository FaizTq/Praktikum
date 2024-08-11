function hitungBMI(beratBadan, tinggiBadan) {
   
    tinggiBadan = tinggiBadan / 100;

    let BMI = beratBadan / (tinggiBadan * tinggiBadan);

    let status;
    if (BMI < 18.5) {
        status = "Kekurangan berat badan";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        status = "Normal (ideal)";
    } else if (BMI >= 25.0 && BMI <= 29.9) {
        status = "Kelebihan berat badan";
    } else {
        status = "Kegemukan (Obesitas)";
    }

    return {
        bmi: BMI.toFixed(2),
        status: status
    };
}

let beratBadan = 90; 
let tinggiBadan = 170; 

let hasil = hitungBMI(beratBadan, tinggiBadan);
console.log("BMI: " + hasil.bmi);
console.log("Status: " + hasil.status);