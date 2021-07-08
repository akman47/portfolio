async function saveMessage(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelectory("#message").value.trim();

    const response = await fetch('/api/contacts', {
        method: 'POST',
        body: JSON.stringify({
            name,
            email,
            message
        }),
        headers: {
            'Content-Type':'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
        alert('Message Sent')
        return;
    }
    else {
        alert(response.statusText);
    }
};

document.querySelector("#btn-contact-form").addEventListener("click", saveMessage);