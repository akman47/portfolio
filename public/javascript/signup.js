async function signupFormHandler(event) {
    event.preventDefault();

    const first_name = document.querySelector('#signup-first-name').value.trim();
    const last_name = document.querySelector('#signup-last-name').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if (first_name && last_name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        if (response.ok) {
            document.querySelector('.signup-modal').style.display = "none";
            document.location.reload();
        }
        else {
            alert(response.statusText);
        }
    }
    else {
        alert('Please fill out entire form')
    } 
}

function openSignupModal(event) {
    document.querySelector('.signup-modal').style.display = "block";
}

function closeSignupModal(event) {
    document.querySelector('.signup-modal').style.display = "none";
}

document.querySelector('#btn-signup').addEventListener('click', openSignupModal);
document.querySelector('#btn-close').addEventListener('click', closeSignupModal);
document.querySelector('#btn-create').addEventListener('submit', signupFormHandler);