// Configuración de partículas (flores amarillas)
particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#ffeb3b", "#ffd700", "#ffe082"]
            },
            "shape": {
                "type": "edge",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 6
                }
            },
            "opacity": {
                "value": 0.7,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.5,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            }
        }
    }
);

// Mensajes dinámicos
const messages = [
    "Lucy, cada flor amarilla que veo me recuerda lo brillante que es tu sonrisa, como el sol de la mañana.",
    "Hoy, en el día de las flores amarillas, quiero que sepas que iluminas mi vida más que cualquier atardecer.",
    "Eres mi poesía favorita, mi canción más dulce, mi razón para creer en el amor verdadero.",
    "Si las flores amarillas simbolizan la amistad y el cariño, tú eres mi jardín eterno, lleno de colores y vida.",
    "Gracias por ser mi paz, mi alegría y mi amor más sincero. ¡Te amo más de lo que las palabras pueden expresar!",
    "Que este día esté lleno de sonrisas, abrazos y momentos tan dulces y únicos como tú."
];

const messageElement = document.getElementById('dynamic-message');
let currentIndex = 0;

function changeMessage() {
    messageElement.style.opacity = 0;
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        messageElement.textContent = messages[currentIndex];
        messageElement.style.opacity = 1;
    }, 1000);
}

messageElement.textContent = messages[0];
setInterval(changeMessage, 6000);
