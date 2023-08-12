function comparar() {
    const n1 = Number(document.getElementById('n1').value || 0);
    const n2 = Number(document.getElementById('n2').value || 0);
    const operator = document.getElementById("operador").value;
    
    let result;
 
    if (operator == "igual") {
        result = n1 === n2 ? "verdadeiro" : "falso";
    } else if (operator == "maior") {
        result = n1 > n2 ? "verdadeiro" : "falso";
    } else if (operator == "menor") {
        result = n1 < n2 ? "verdadeiro" : "falso";
    } else if (operator == "maiorIgual") {
        result = n1 >= n2 ? "verdadeiro" : "falso";
    } else if (operator == "menorIgual") {
        result = n1 <= n2 ? "verdadeiro" : "falso";
    } else if (operator == "dif") {
        result = n1 !== n2 ? "verdadeiro" : "falso";
    }
  
    document.getElementById('result').value = result;
 }
 