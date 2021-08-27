//Generador de Mails
let vista = document.getElementById('vistaContenedorMails')

function cargarMailsInbox() {
  vistaContenedorMails.innerHTML = ""
  document.getElementById("0").classList.add('inbox')
  fetch("https://academia.tim.teknosgroup.com/turrion-kw93/api/messages/Inbox")
    .then(response => response.json())
    .then(data => {
      let mails = data;
      mails.map(mail => {
        vistaContenedorMails.innerHTML += `
      <div class="listaMail row">
        <div class="col-2 nombreEmail">${mail.from.name}</div> 
        <div class="col-9 asuntoMsgMail">${mail.subject}. ${mail.message} </div>
        <div class="col-1"> <button onclick="deleteItem('${mail.id}')"> <i class="fas fa-trash"></i> </button>
      </div>`
      })
    });
}
//Generador de Mails importantes

function cargarMailsEnviados() {
  vistaContenedorMails.innerHTML = ""
  document.getElementById("0").classList.add('inbox')
  fetch("https://academia.tim.teknosgroup.com/turrion-kw93/api/messages/Sent")
    .then(response => response.json())
    .then(data => {
      let mails = data;
      mails.map(mail => {
        vistaContenedorMails.innerHTML += `
      <div class="listaMail row">
        <div class="col-2 nombreEmail">${mail.from.name}</div> 
        <div class="col-9 asuntoMsgMail">${mail.subject}. ${mail.message} </div>
        <div class="col-1"> <button onclick="deleteItem('${mail.id}')"> <i class="fas fa-trash"></i> </button>
      </div>`
      })
    });
}

//Generador de Mails trash

function cargarMailsBorradores() {
  vistaContenedorMails.innerHTML = ""
  document.getElementById("0").classList.add('inbox')
  fetch("https://academia.tim.teknosgroup.com/turrion-kw93/api/messages/Draft")
    .then(response => response.json())
    .then(data => {
      let mails = data;
      mails.map(mail => {
        vistaContenedorMails.innerHTML += `
      <div class="listaMail row">
        <div class="col-2 nombreEmail">${mail.from.name}</div> 
        <div class="col-9 asuntoMsgMail">${mail.subject}. ${mail.message} </div>
        <div class="col-1"> <button onclick="deleteItem('${mail.id}')"> <i class="fas fa-trash"></i> </button>
      </div>`
      })
    });
}

//Generador de Mails importantes

function cargarMailsSpam() {
  vistaContenedorMails.innerHTML = ""
  document.getElementById("0").classList.add('inbox')
  fetch("https://academia.tim.teknosgroup.com/turrion-kw93/api/messages/spam")
    .then(response => response.json())
    .then(data => {
      let mails = data;
      mails.map(mail => {
        vistaContenedorMails.innerHTML += `
      <div class="listaMail row">
        <div class="col-2 nombreEmail">${mail.from.name}</div> 
        <div class="col-9 asuntoMsgMail">${mail.subject}. ${mail.message} </div>
        <div class="col-1"> <button onclick="deleteItem('${mail.id}')"> <i class="fas fa-trash"></i> </button>
      </div>`
      })
    });
}

function cargarMailsPapelera() {
  vistaContenedorMails.innerHTML = ""
  document.getElementById("0").classList.add('inbox')
  fetch("https://academia.tim.teknosgroup.com/turrion-kw93/api/messages/Trash")
    .then(response => response.json())
    .then(data => {
      let mails = data;
      mails.map(mail => {
        vistaContenedorMails.innerHTML += `
      <div class="listaMail row">
        <div class="col-2 nombreEmail">${mail.from.name}</div> 
        <div class="col-9 asuntoMsgMail">${mail.subject}. ${mail.message} </div>
        <div class="col-1"> <button onclick="deleteItem('${mail.id}')"> <i class="fas fa-trash"></i> </button>
      </div>`
      })
    });
}

function cargarMailsFavoritos() {
  vistaContenedorMails.innerHTML = ""
  document.getElementById("0").classList.add('inbox')
  fetch("https://academia.tim.teknosgroup.com/turrion-kw93/api/messages/Starred")
    .then(response => response.json())
    .then(data => {
      let mails = data;
      mails.map(mail => {
        vistaContenedorMails.innerHTML += `
      <div class="listaMail row">
        <div class="col-2 nombreEmail">${mail.from.name}</div> 
        <div class="col-9 asuntoMsgMail">${mail.subject}. ${mail.message} </div>
        <div class="col-1"> <button onclick="deleteItem('${mail.id}')"> <i class="fas fa-trash"></i> </button>
      </div>`
      })
    });
}


function cargarMailsImportantes() {
  vistaContenedorMails.innerHTML = ""
  document.getElementById("0").classList.add('inbox')
  fetch("https://academia.tim.teknosgroup.com/turrion-kw93/api/messages/Important")
    .then(response => response.json())
    .then(data => {
      let mails = data;
      mails.map(mail => {
        vistaContenedorMails.innerHTML += `
      <div class="listaMail row">
        <div class="col-2 nombreEmail">${mail.from.name}</div> 
        <div class="col-9 asuntoMsgMail">${mail.subject}. ${mail.message} </div>
        <div class="col-1"> <button onclick="deleteItem('${mail.id}')"> <i class="fas fa-trash"></i> </button>
      </div>`
      })
    });
}
//Redactar nuevo mail




//botton redactar y Modal

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// abrir modal
btn.onclick = function () {
  modal.style.display = "block";
}

// Si toca en X se cierra
span.onclick = function () {
  modal.style.display = "none";
}

// Cuando el usuario clickee fuera del modal, se cierra
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//____________________________

const reset = () => {


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

const deleteItem = (id) => {
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

function cargarButtons() {
  contenedorButton.innerHTML = ""
  fetch("https://academia.tim.teknosgroup.com/turrion-kw93/api/folders")
    .then(response => response.json())
    .then(data => {
      let buttons = data;
      buttons.map((button, i) => {
        contenedorButton.innerHTML += `
       <div id=${button.title} class="listaButtons row">
         <a onclick="load(button)" class="col-1 nombreEmail" id=${i}>${button.title}</a>    
        </div>
        <div id=${button.title} class="listaButtons row">
        <a onclick="load(button)" class="col-1 nombreEmail" id=${i}>${button.title}</a>
    </div>

     `
        let icon = document.createElement("i");
        const btn = document.getElementById(button.title).getElementsByTagName("a");

        switch (i) {
          case 0:
            icon.setAttribute("class", "bi bi-inbox-fill");
            btn.setAttribute("onclick", "cargarMailsInbox()");
            break;
          case 1:
            icon.setAttribute("class", "fas fa-paper-plane");
            btn.setAttribute("onclick", "cargarMailsEnviados()");
            break;
          case 2:
            icon.setAttribute("class", "fas fa-trash");
            btn.setAttribute("onclick", "cargarMailsPapelera()");
            break;
          case 3:
            icon.setAttribute("class", "fas fa-star");
            btn.setAttribute("onclick", "cargarMailsFavoritos()");
            break;
          case 4:
            icon.setAttribute("class", "fas fa-exclamation-circle");
            btn.setAttribute("onclick", "cargarMailsSpam()");
            break;
          case 5:
            icon.setAttribute("class", "bi bi-inbox-fill");
            btn.setAttribute("onclick", "cargarMailsBorradores()");
            break;
          case 6:
            icon.setAttribute("class", "bi bi-inbox-fill");
            btn.setAttribute("onclick", "cargarMailsImportantes()");
            break;
        }

        let parent = document.getElementById(button.title)



        parent.appendChild(icon);

      })
    });
}



cargarButtons()