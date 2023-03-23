// deklarasi html ke variabel
var heightInput = document.querySelector("#height");
var weightInput = document.querySelector("#weight");
var calculateButton = document.querySelector("#calculate");
var result = document.querySelector("#result");
var statement = document.querySelector("#category");
var height, weight, male, female;

//function saat button klik hitung
calculateButton.addEventListener("click", ()=>{   
    height = heightInput.value;
    weight = weightInput.value;
    let BMI = (weight / (height * height) *10000);
    
    BMI = BMI.toFixed(1);
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "Kekurangan Berat Badan";    
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        statement.innerText = "Normal (Ideal)";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        statement.innerText = "Kelebihan Berat Badan";
    }else{
        statement.innerText = "Kegemukan (Obesitas)";
    }

    // let statement;  
    // if (document.getElementById('pria').checked){
    //   if(BMI < 18.5){
    //       statement.innerText = "Kekurangan Berat Badan";    
    //   }else if((BMI > 18.5) && (BMI <= 24.9)){
    //       statement.innerText = "Normal (Ideal)";
    //   }else if((BMI >= 25) && (BMI <= 29.9 )){
    //       statement.innerText = "Kelebihan Berat Badan";
    //   }else{
    //       statement.innerText = "Kegemukan (Obesitas)";
    //   }
    // } else if (document.getElementById('wanita').checked){
    //   if(BMI < 17){
    //     statement.innerText = "Kekurangan Berat Badan";    
    // }else if((BMI > 17) && (BMI <= 22.9)){
    //     statement.innerText = "Normal (Ideal)";
    // }else if((BMI >= 23) && (BMI <= 26.9 )){
    //     statement.innerText = "Kelebihan Berat Badan";
    // }else{
    //     statement.innerText = "Kegemukan (Obesitas)";
    //   }
    // }
});

//function button reset form
function reset()
{
    document.getElementById("weight").value= "";
    document.getElementById("usia").value= "";
    document.getElementById("height").value= "";
    document.getElementById("result").innerHTML= "";
    document.getElementById("category").innerHTML= "";
    document.querySelector('input[name="gender"]:checked').checked = false;
}