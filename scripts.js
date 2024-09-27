document.addEventListener('DOMContentLoaded', function () {
    let time = 30 * 60; // 15 minutos em segundos

    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    // Verifique se os elementos do cronômetro estão presentes
    if (minutesElement && secondsElement) {
        const countdown = setInterval(() => {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;

            // Formata os segundos para sempre ter dois dígitos
            seconds = seconds < 10 ? '0' + seconds : seconds;

            // Atualiza os elementos HTML com os minutos e segundos
            minutesElement.textContent = minutes;
            secondsElement.textContent = seconds;

            // Verifica se o tempo chegou a zero
            if (time > 0) {
                time--;
            } else {
                clearInterval(countdown); // Para o timer
                document.getElementById('timer').textContent = "Oferta Expirada!";
            }
        }, 1000); // Executa a cada 1 segundo
    } else {
        console.error("Erro: Elementos do cronômetro não foram encontrados!");
    }
});

