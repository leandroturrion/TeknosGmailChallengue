let contenedorMails = document.getElementById('contenedorMails')

function cargarMails(){
  contenedorMails.innerHTML = ""
  fetch("https://academia.tim.teknosgroup.com/turrion-kw93/api/messages/important")
  .then(response => response.json())
  .then(data => {
    let mails = data;
    console.log(mails);
    mails.map(mail=>{
      contenedorMails.innerHTML += `
      <div class="listaMail row">
        <div class="col-1 nombreEmail">${mail.from.name}</div> 
        <div class="col-11 asuntoMsgMail">${mail.subject} - averigua como podes dejar el msj aca</div>
      </div>`
    })
  });
}

let contenedorButton = document.getElementById('contenedorMails')

function cargarMails(){
  contenedorMails.innerHTML = ""
  fetch("https://academia.tim.teknosgroup.com/turrion-kw93/api/messages/important")
  .then(response => response.json())
  .then(data => {
    let mails = data;
    console.log(mails);
    mails.map(mail=>{
      contenedorMails.innerHTML += `
      <div class="listaMail row">
        <div class="col-1 nombreEmail">${mail.from.name}</div> 
        <div class="col-11 asuntoMsgMail">${mail.subject} - averigua como podes dejar el msj aca</div>
      </div>`
    })
  });
}