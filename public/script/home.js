async function estaLogado() {

    const menu = document.getElementsByClassName("menu")[0]
    var headerNLogado = `  
    <div>
    <a href="/"><h1>Exclusive</h1></a>
    </div>
    <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://chat.whatsapp.com/L6aeRiY2BTd3GWNkRT33I5">Contact</a></li>
          
            <li id="login"><a href="/login">Sign Up</a></li>
            <li id="loginVendedor"><a href="/vendedor/login">seller's area</a></li>
        </ul>
       
        <div class="search-bar">
            <div class="container1">
                <h1> <br> </h1>
               
                  
              </div>
             
          
           
        </div> `

    var headerLogado = `
    <div class = "logo">
    <a href="/"><h1>Exclusive</h1></a>
    </div>    
    <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://chat.whatsapp.com/L6aeRiY2BTd3GWNkRT33I5">Contact</a></li>
          
        </ul>
       
       
            <div class="container1">
               
                <div class = "icons">
       <a href="/carrinho"><button type="submit">   <span class="material-symbols-outlined">
            shopping_cart
            </span></button></a> 

                </div>
           <div class = "icons">
             <div class="dropdown">
  <button class="dropbtn"><span class="material-symbols-outlined">
account_circle
</span></button>
  <div class="dropdown-content">
  <a href="/conta/editar">Manage my account</a>
  <a href="/carrinho">My order</a>
  <a id = "btnLogOut" href="#">Logout</a>
  </div>
  </div>
</div>
             
             
          
           
        </div>`

    var adminLogado = ` <a href="/"><h1>Seller's Area</h1></a>
        <ul>
            
          
        </ul>
       
        <div class="search-bar">
            <div class="container1">
                <h1> <br> </h1>
             <div class="dropdown">
  <button class="dropbtn">Perfil</button>
  <div class="dropdown-content">
  <a id = "btnLogOut" href="#">Logout</a>
  </div>
</div>
              </div>
             
          
           
        </div>`
    if (localStorage.getItem("admin") === "true") {
        console.log("era pra ter ido");
        menu.innerHTML = adminLogado
    } else if (localStorage.getItem("estaLogado") === "true") {
        menu.innerHTML = headerLogado
    } else {
        menu.innerHTML = headerNLogado
    }


    console.log("ta pegand");


}

function logOut() {
    const btnLogOut = document.getElementById("btnLogOut")


    btnLogOut.addEventListener('click', () => {
        localStorage.setItem("estaLogado", false)
        localStorage.setItem("admin", false)
        localStorage.removeItem("user")
        window.location.href = "/"
    })
}

// function eAdmin() {
//     const menu = document.getElementsByClassName("menu")[0]
//     var adminLogado = ` <a href=""><h1>AREA DO VENDEDOR</h1></a>
//         <ul>


//         </ul>

//         <div class="search-bar">
//             <div class="container1">
//                 <h1> <br> </h1>
//              <div class="dropdown">
//   <button class="dropbtn">Perfil</button>
//   <div class="dropdown-content">
//   <a id = "btnLogOut" href="#">Logout</a>
//   </div>
// </div>
//               </div>



//         </div>`
//     if(localStorage.getItem("admin") === "true"){
//         console.log("era pra ter ido");
//         menu.innerHTML = adminLogado    
//     }
// }

// eAdmin()
estaLogado()
logOut();