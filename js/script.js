const checkoutButton = document.getElementById('checkoutButton');
const myVideo = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');
const videoContainer = document.getElementById('videoContainer');
const playOverlay = document.getElementById('playOverlay');

// Função para pausar ou reproduzir o vídeo
function togglePlay() {
    if (myVideo.paused) {
        myVideo.play();
    } else {
        myVideo.pause();
    }
}

// Adiciona um evento de clique ao vídeo
myVideo.addEventListener('click', togglePlay);

// Adiciona um evento para mostrar/esconder o botão quando o vídeo é pausado/reproduzido
myVideo.addEventListener('play', function() {
    videoContainer.classList.remove('video-paused');
});

// Tenta reproduzir o vídeo automaticamente quando a página é carregada
window.addEventListener('load', function() {
    myVideo.play().catch(function(error) {
        console.log('Autoplay bloqueado, o vídeo não pode ser reproduzido automaticamente.');
    });
});

// Função que verifica o tempo de reprodução do vídeo
myVideo.addEventListener('timeupdate', function() {
    if (myVideo.currentTime >= 15) {
        checkoutButton.style.display = 'block';
    }
});

// Função para alternar a visibilidade da sobreposição e a reprodução do vídeo
function togglePlay() {
    if (myVideo.paused) {
        myVideo.play();
        playOverlay.style.display = 'none'; // Oculta a sobreposição
    } else {
        myVideo.pause();
        playOverlay.style.display = 'flex'; // Mostra a sobreposição
    }
}

// Adiciona um evento de clique à sobreposição
playOverlay.addEventListener('click', togglePlay);

// Adiciona um evento de clique ao vídeo para alternar a sobreposição
myVideo.addEventListener('click', togglePlay);

// Mostra a sobreposição quando o vídeo é pausado
myVideo.addEventListener('pause', function() {
    playOverlay.style.display = 'flex';
});