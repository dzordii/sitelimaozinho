
const checkoutButton = document.getElementById('checkoutButton');
const myVideo = document.getElementById('myVideo');
var video = document.getElementById("myVideo");
var playButton = document.getElementById("playButton");
var videoContainer = document.getElementById("videoContainer");

// Função para pausar ou reproduzir o vídeo
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Adiciona um evento de clique ao vídeo
video.addEventListener("click", togglePlay);

// Adiciona um evento de clique ao botão
playButton.addEventListener("click", togglePlay);

// Adiciona um evento para mostrar/esconder o botão quando o vídeo é pausado/reproduzido
video.addEventListener("play", function() {
    videoContainer.classList.remove("video-paused");
});

video.addEventListener("pause", function() {
    videoContainer.classList.add("video-paused");
});

// Remove a função de play automático se o vídeo for pausado
window.addEventListener("load", function() {
    video.play().catch(function(error) {
        // Tenta reproduzir o vídeo, caso seja bloqueado
        console.log("Autoplay bloqueado, o vídeo não pode ser reproduzido automaticamente.");
    });
});



    // Função que verifica o tempo de reprodução do vídeo
    myVideo.addEventListener('timeupdate', function() {
        // Verifica se o vídeo passou de 15 segundos
        if (myVideo.currentTime >= 15) {
            // Mostra o botão de checkout
            checkoutButton.style.display = 'block';
        }
    });
