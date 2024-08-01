const checkoutButton = document.getElementById('checkoutButton');
const myVideo = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');
const videoContainer = document.getElementById('videoContainer');

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

// Adiciona um evento de clique ao botão
playButton.addEventListener('click', togglePlay);

// Adiciona um evento para mostrar/esconder o botão quando o vídeo é pausado/reproduzido
myVideo.addEventListener('play', function() {
    videoContainer.classList.remove('video-paused');
});

myVideo.addEventListener('pause', function() {
    videoContainer.classList.add('video-paused');
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