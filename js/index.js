//Generador de Mails
let vista = document.getElementById('vistaContenedorMails')

function cargarMails(){
  vistaContenedorMails.innerHTML = ""
  fetch("https://academia.tim.teknosgroup.com/turrion-kw93/api/messages/important")
  .then(response => response.json())
  .then(data => {
    let mails = data;
    mails.map(mail=>{
      vistaContenedorMails.innerHTML += `
      <div class="listaMail row">
        <div class="col-2 nombreEmail">${mail.from.name}</div> 
        <div class="col-9 asuntoMsgMail">${mail.subject} - nose como editar estoo</div>
        <div class="col-1"> <button onclick="deleteItem('${mail.id}')"> borrar </button>
      </div>`
    })
  });
}
//Redactar nuevo mail




//botton redactar

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//____________________________

const reset = () =>{


var requestOptions = {
  method: 'POST',
  redirect: 'follow'
};

fetch("https://academia.tim.teknosgroup.com/turrion-kw93/api/reset", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}



//Metodo delete

const deleteItem = (id) =>{
  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };

fetch(`https://academia.tim.teknosgroup.com/turrion-kw93/api/messages/important/${id}`, requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.then(result => window.location.reload())
.catch(error => console.log('error', error));
}


//Generador de botones de navegación

let contenedorButton = document.getElementById('contenedorButton')

function cargarButtons(){
  contenedorButton.innerHTML = ""
  fetch("https://academia.tim.teknosgroup.com/turrion-kw93/api/folders")
  .then(response => response.json())
  .then(data => {
    let buttons = data;
    buttons.map(button=>{
      contenedorButton.innerHTML += `
      <div class="listaButtons row">
        <a ${button.title=="Inbox"?"onclick='cargarMails()'":''} class="col-1 nombreEmail"> ${button.icon=="move_to_inbox"?"<i class='bi bi-inbox-fill'></i>": 
        button.icon=="send"?"<i class='bi bi-forward-fill'></i>":
        button.icon=="drafts"? "<i class='bi bi-trash'></i>":
        button.icon=="info"? '<i class="bi bi-info-circle-fill"></i>':
        button.icon=="delete"? '<i class="bi bi-trash2"></i>':
        button.icon=="star"? '<i class="bi bi-star-fill"></i>':'<i class="bi bi-bookmark"></i>'
      } ${button.title} </a> 
      </div>`
    })
  });
}



cargarButtons()