function mostrarOcultarSenha() {
    const senhaInput = document.getElementById('senha');
    const olhoIcon = document.getElementById('olho');
  
    if (senhaInput.type === 'password') {
      senhaInput.type = 'text';
      olhoIcon.classList.add('aberto');
    } else {
      senhaInput.type = 'password';
      olhoIcon.classList.remove('aberto');
    }
  }
  