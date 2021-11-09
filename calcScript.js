function pertambahan(){
	var angka1=parseFloat(document.getElementById('angka1').value)
    var angka2=parseFloat(document.getElementById('angka2').value)
    var hasil=angka1+angka2
    console.log(hasil)
    alert("Result of " + angka1 + " + " + angka2 + " = " + hasil)
    document.getElementById('hasil').value=hasil
}

function pengurangan(){
    var angka1=parseFloat(document.getElementById('angka1').value)
    var angka2=parseFloat(document.getElementById('angka2').value)
    var hasil=angka1-angka2
    console.log(hasil)
    document.getElementById('hasil').value=hasil
    alert("Result of " + angka1 + " - " + angka2 + " = " + hasil)
}

function perkalian(){
	var angka1=parseFloat(document.getElementById('angka1').value)
    var angka2=parseFloat(document.getElementById('angka2').value)
    var hasil=angka1*angka2
    console.log(hasil)
    document.getElementById('hasil').value=hasil
    alert("Result of " + angka1 + " x " + angka2 + " = " + hasil)
}

function pembagian(){
	var angka1=parseFloat(document.getElementById('angka1').value)
    var angka2=parseFloat(document.getElementById('angka2').value)
    var hasil=angka1/angka2
    console.log(hasil)
    document.getElementById('hasil').value=hasil
    alert("Result of " + angka1 + " ÷ " + angka2 + " = " + hasil)
}

function reset(){
    document.getElementById('angka1').value = ''
    document.getElementById('angka2').value = ''
    document.getElementById('hasil').value = ''
}