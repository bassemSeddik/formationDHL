let prenom = "Je m'appelle Bassem";
let age = 29;
let age2 = '29';

document.getElementById('p1').innerHTML = 'Type de prenom : ' + typeof prenom;
document.getElementById('p2').innerHTML = 'Type de age : ' + typeof age;
document.getElementById('p3').innerHTML = 'Type de age2 : ' + typeof age2;


// Les types spéciaux
let nullVariable = null;
let indefinedVariable;

document.getElementById('p4').innerHTML = 'Type de nullVariable : ' + typeof nullVariable;
document.getElementById('p5').innerHTML = 'Type de indefinedVariable : ' + typeof indefinedVariable;