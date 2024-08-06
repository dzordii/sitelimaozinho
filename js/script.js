const myVideo = document.getElementById('myVideo');
const playOverlay = document.getElementById('playOverlay');
const videoContainer = document.getElementById('videoContainer');

// Função para alternar a visibilidade da sobreposição e o estado do áudio do vídeo
function toggleAudio() {
    if (myVideo.muted) {
        myVideo.muted = false;
        playOverlay.style.display = 'none'; // Oculta a sobreposição
    } else {
        myVideo.muted = true;
        playOverlay.style.display = 'flex'; // Mostra a sobreposição
    }
}

// Adiciona um evento de clique à sobreposição para ativar o áudio
playOverlay.addEventListener('click', toggleAudio);

// Adiciona um evento de clique ao vídeo para alternar o estado do áudio e a sobreposição
myVideo.addEventListener('click', toggleAudio);

// Esconde a sobreposição quando o vídeo está com o áudio ativado
myVideo.addEventListener('play', function() {
    if (!myVideo.muted) {
        playOverlay.style.display = 'none';
    }
});

// Mostra a sobreposição quando o vídeo é mutado
myVideo.addEventListener('pause', function() {
    if (myVideo.muted) {
        playOverlay.style.display = 'flex';
    }
});

// Tenta reproduzir o vídeo automaticamente quando a página é carregada
window.addEventListener('load', function() {
    myVideo.play().catch(function(error) {
        console.log('Autoplay bloqueado, o vídeo não pode ser reproduzido automaticamente.');
        playOverlay.style.display = 'flex'; // Mostra a sobreposição se o autoplay for bloqueado
    });
});

// Função que verifica o tempo de reprodução do vídeo e mostra o botão de checkout
myVideo.addEventListener('timeupdate', function() {
    if (myVideo.currentTime >= 1110 ) { // Mostra o botão após 15 segundos
        checkoutButton.style.display = 'block';
    }
});