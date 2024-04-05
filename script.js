
document.getElementById("bottone").addEventListener("click", function() {
    const inputNumero = document.getElementById("numero");
    const numeroInserito = parseInt(inputNumero.value);

    if (!isNaN(numeroInserito)) {
        let risultato;
        if (numeroInserito % 2 === 0) {
            risultato = "Il numero inserito è pari";
        } else {
            risultato = "Il numero inserito è dispari";
        }
        document.getElementById("risultato").textContent = risultato;
        document.getElementById("avviso").textContent = ""; 
        document.getElementById("modal").style.display = "block";
    } else {
        document.getElementById("risultato").textContent = ""; 
        document.getElementById("avviso").textContent = "non barare. Inserisci un carattere numerico valido"; 
        document.getElementById("modal").style.display = "block";
    }
});


document.getElementById("numero").addEventListener("keydown", function(event) {
   
    if (event.keyCode === 13) {
        
        event.preventDefault();
        
        
        document.getElementById("bottone").click();
    }
});


document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});


window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
});
