//  if(document.readyState === "loading"){
//     document.addEventListener("DOMContentLoaded", ready)
//  }else {
//     ready()
//  }

//  function ready(){

//  }

if (localStorage.getItem("estaLogado") === "false") {
  console.log("caiu aqui");
  window.location.href = "/login";
}

const user = JSON.parse(localStorage.getItem("user"));
var container = document.getElementById("allProducts");

for (let index = 0; index < user.carrinho.length; index++) {
  const element = user.carrinho[index];
  const name = element.name;
  const price = element.price.replace("R$", "");
  const desc = element.desc;
  const qtd = element.quantidade;
  const image = element.image;
  const precoTotal = price * qtd;

  console.log(precoTotal);
  var response;
  var json;

  var product = document.createElement("div");
  product.innerHTML = ` <div class="container">
            <div class="linhaConteudo" value = ${index}>
                <div class="image">
                    <img src="${element.image}" alt="">
                    <h2 id="nomeP">${element.name}</h2>
                </div>
                <div  class="preco">
                    <h2 class ="price" value = "10">${element.price}</h2>
                </div>
                <div class="quanti">
                    <input type="number" id = "input" class = "input" min="1" value ="${element.quantidade}">
                   
                    <button type = "button" ;" class = "remove-product">deletar</button>
                    </div>
                    
                <div class="preco">
                    <h2 class = "precoTotal">R$${precoTotal}</h2>
                </div>      
            </div>
        </div>`;

  container.appendChild(product);
}

const removeProductButton = document.getElementsByClassName("remove-product");
console.log(removeProductButton);

for (var i = 0; i < removeProductButton.length; i++) {
  console.log(i);
  removeProductButton[i].addEventListener("click", function async(event) {
    var indexDelete =
      event.target.parentElement.parentElement.getAttribute("value");
    console.log("id a ser deletado", indexDelete);

    console.log("user", user);

    var carrinho = user.carrinho;

    console.log("carrinho item", carrinho[indexDelete]);

    console.log("carrinho antes de remover", carrinho);
    carrinho.splice(indexDelete, 1);
    console.log("carrinho depois", carrinho);

    user.carrinho = carrinho;
    localStorage.setItem("user", JSON.stringify(user));
    console.log("user", user);
    updateTotal();
    location.reload();
  });
}
function updateTotal() {
  const precoProduto = document.getElementsByClassName("price");
  const quantidadeProduto = document.getElementsByClassName("input");
  var total = 0;
  for (var i = 0; i < precoProduto.length; i++) {
    const productPrice = precoProduto[i].textContent.replace("R$", "");

    console.log(productPrice);

    const quantidade = document.getElementsByClassName("input")[i].value;
    console.log(productPrice, "*", quantidade);
    document.getElementsByClassName("precoTotal")[i].innerText =
      "R$" + productPrice * quantidade;
    total += productPrice * quantidade;
  }

  console.log("total", total);
  document.getElementById("subTotal").innerText = "R$" + total;
  document.getElementById("valorTotal").innerText = "R$" + total;
  document.getElementById;
}

updateTotal();

const quantidadeInput = document.getElementsByClassName("input");
for (let i = 0; i < quantidadeInput.length; i++) {
  quantidadeInput[i].addEventListener("change", () => {
    updateTotal();

    console.log(quantidadeInput[i].value);
    var carrinho = user.carrinho;
    carrinho[0].quantidade = quantidadeInput[i].value;
    user.carrinho = carrinho;
    localStorage.setItem("user", JSON.stringify(user));
  });
}

document.getElementById("bot").addEventListener("click", () => {
  if (!user.carrinho.length) {
    alert("O carrinho esta vazio");
  } else {
    window.location.href = "/pagamento";
  }
});
