var contactFormButtonEl = document.querySelector("#btn-contact-form");
var nameInputEl = document.querySelector("#name");
var emailInputEl = document.querySelector("#email");
var messageInputEl = document.querySelectory("#message");

var saveMessage = function(event) {
    event.preventDefault();

    var name = nameInputEl.value.trim();
    var email = emailInputEl.value.trim();
    var message = messageInputEl.value.trim();
}

contactFormButtonEl.addEventListener("click", saveMessage());