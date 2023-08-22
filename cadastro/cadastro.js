
function cadastrar() {
    let productsData = {
      cod: document.getElementById("cod").value,
      prod: document.getElementById("prod").value,
      quant: document.getElementById("quant").value,
      price: document.getElementById("price").value,
    };

    document.getElementById("tableMain").innerHTML += `
      <tr>
      <td>${productsData.cod}</td>
      <td>${productsData.prod}</td>
      <td>${productsData.quant}</td>
      <td>${productsData.price}</td>
      <td>${productsData.quant * productsData.price}</td>
      </tr>`;
  }