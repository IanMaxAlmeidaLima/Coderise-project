document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const usuario = document.getElementById('usuario').value.trim();
        const senha = document.getElementById('senha').value.trim();

        if (usuario !== '' && senha !== '') {
            window.location.assign('home.html');
        } else {
            alert('Por favor, preencha ambos os campos.');
        }
        });
    });
