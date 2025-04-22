class Cronometro {
    constructor() {
        this.segundos = 0;
        this.isRunning = false;
        this.timer = null;

        // Elementos del DOM
        this.display = document.getElementById('display');
        this.startButton = document.getElementById('start');
        this.stopButton = document.getElementById('stop');
        this.resetButton = document.getElementById('reset');

        // Configuración de eventos
        this.startButton.addEventListener('click', () => this.start());
        this.stopButton.addEventListener('click', () => this.stop());
        this.resetButton.addEventListener('click', () => this.reset());

        // Inicialización
        this.updateDisplay();
    }

    // Método para actualizar la visualización
    updateDisplay() {
        const minutes = Math.floor(this.segundos / 60);
        const secs = this.segundos % 60;
        this.display.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    // Método para iniciar el cronómetro
    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.startButton.disabled = true;
        this.stopButton.disabled = false;
        this.resetButton.disabled = false;
        this.timer = setInterval(() => {
            this.segundos++;
            this.updateDisplay();
        }, 1000);
    }

    // Método para detener el cronómetro
    stop() {
        clearInterval(this.timer);
        this.isRunning = false;
        this.startButton.disabled = false;
        this.stopButton.disabled = true;
    }

    // Método para reiniciar el cronómetro
    reset() {
        clearInterval(this.timer);
        this.segundos = 0;
        this.updateDisplay();
        this.isRunning = false;
        this.startButton.disabled = false;
        this.stopButton.disabled = true;
        this.resetButton.disabled = true;
    }
}

// Inicialización del cronómetro
document.addEventListener('DOMContentLoaded', () => new Cronometro());
