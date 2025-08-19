function PaginaDeCadastro(){
    const button = document.getElementById('Cadastrar');
    
    button.addEventListener('click', function(){
        window.location.href = 'http://127.0.0.1:5500/cadastro.html'
    })
}

function CriarConta(){
    const uses = document.getElementById('newusername').value;
    const passs = document.getElementById('newpassword').value;

     localStorage.setItem('User', uses);
     localStorage.setItem('Pass', passs);

     window.location.href = 'http://127.0.0.1:5500/index.html';
}

function LoginSucess(){
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    const SavedUser = localStorage.getItem('User');
    const SavedPass = localStorage.getItem('Pass');

    if (user === SavedUser && pass === SavedPass){
        window.location.href = 'http://127.0.0.1:5500/jumpscare.html';
    }
}