document.addEventListener('DOMContentLoaded', function() {
    // Crear estrellas de fondo animadas
    function createStar() {
        const star = document.createElement('div');
        star.innerHTML = '✨';
        star.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 15 + 8}px;
            left: ${Math.random() * 100}%;
            top: -20px;
            pointer-events: none;
            z-index: 1;
            animation: twinkle ${Math.random() * 3 + 2}s ease-in-out;
            opacity: ${Math.random() * 0.8 + 0.2};
        `;
        document.body.appendChild(star);
        
        setTimeout(() => {
            star.remove();
        }, 5000);
    }
    
    // Añadir animación de estrella parpadeante
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0% {
                transform: translateY(0) scale(0.5);
                opacity: 0;
            }
            50% {
                transform: translateY(50vh) scale(1);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) scale(0.5);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Crear estrellas periódicamente
    setInterval(createStar, 800);
    
    // Crear corazones flotantes adicionales
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = ['💕', '💖', '💗', '💝', '💓', '💘'][Math.floor(Math.random() * 6)];
        heart.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 20 + 15}px;
            left: ${Math.random() * 100}%;
            top: 100%;
            pointer-events: none;
            z-index: 1000;
            animation: floatUp ${Math.random() * 4 + 3}s ease-in-out;
            opacity: 0.8;
            filter: hue-rotate(${Math.random() * 60}deg);
        `;
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
    
    // Añadir animación de flotación hacia arriba
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg) scale(0.5);
                opacity: 0;
            }
            20% {
                opacity: 0.8;
                transform: translateY(-20vh) rotate(45deg) scale(1);
            }
            80% {
                opacity: 0.8;
                transform: translateY(-80vh) rotate(315deg) scale(1);
            }
            100% {
                transform: translateY(-100vh) rotate(360deg) scale(0.5);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(floatStyle);
    
    // Crear corazones periódicamente
    setInterval(createFloatingHeart, 1500);
    
    // Efecto de hover mejorado en las tarjetas de cualidades
    const qualityCards = document.querySelectorAll('.quality-card');
    qualityCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.icon');
            if (icon) {
                icon.style.transform = 'scale(1.3) rotate(360deg)';
                icon.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                icon.style.filter = `hue-rotate(${index * 60}deg)`;
            }
            
            // Añadir efecto de brillo
            this.style.boxShadow = `
                0 25px 50px rgba(0,0,0,0.2),
                0 0 40px rgba(251, 191, 36, 0.4),
                inset 0 0 20px rgba(255,255,255,0.2)
            `;
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.filter = 'none';
            }
            
            this.style.boxShadow = `
                0 15px 40px rgba(0,0,0,0.1),
                0 0 0 1px rgba(255,255,255,0.3) inset
            `;
        });
    });
    
    // Efecto de pulsación mejorado en el título principal
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        mainTitle.addEventListener('click', function() {
            this.style.animation = 'pulse 0.8s ease-in-out, rainbow 1s ease-in-out';
            setTimeout(() => {
                this.style.animation = 'gradientShift 4s ease-in-out infinite';
            }, 1000);
            
            // Crear explosión de corazones
            for (let i = 0; i < 12; i++) {
                setTimeout(() => createFloatingHeart(), i * 100);
            }
        });
    }
    
    // Añadir animación de pulso y arcoíris
    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = `
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
        
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(pulseStyle);
    
    // Efecto de escritura mejorado para el mensaje principal
    const mainMessage = document.querySelector('.main-message');
    if (mainMessage) {
        const originalText = mainMessage.textContent;
        mainMessage.textContent = '';
        mainMessage.style.opacity = '1';
        let index = 0;
        
        function openLetter(letterId) {
            const letters = {
                '1': {
                    title: 'Un recordatorio especial',
                    content: `
                        <p>Para la persona que lee esto,</p>
                        <p>Quiero que sepas que eres increíble tal y como eres. 
                        No necesitas ser diferente ni cambiar por nadie. Tu esencia única es tu mayor tesoro.</p>
                        <p>Hoy, en este momento, eres suficiente. Eres valiosa. Eres amada.</p>
                        <p>Nunca olvides lo especial que eres.</p>
                        <p>Con aprecio sincero,</p>
                        <p>Alguien que cree en ti</p>
                    `
                },
                '2': {
                    title: 'Un deseo para ti',
                    content: `
                        <p>A ti, que estás escribiendo tu propia historia,</p>
                        <p>Te deseo momentos de pura alegría, los que te hagan reír sin razón. 
                        Te deseo fuerza en los días difíciles y sabiduría para cada desafío.</p>
                        <p>Te deseo personas que valoren tu luz y te inspiren a brillar más fuerte. 
                        Te deseo que nunca pierdas esa chispa que te hace única.</p>
                        <p>Sobre todo, te deseo que te ames tanto como yo sé que el universo te ama.</p>
                        <p>Con todos mis buenos deseos,</p>
                        <p>Un admirador de tu potencial</p>
                    `
                },
                '3': {
                    title: 'Una promesa de esperanza',
                    content: `
                        <p>A quien necesita escuchar esto hoy,</p>
                        <p>Te prometo que todo estará bien. No ahora, no siempre, 
                        pero al final. Las tormentas pasan, el sol vuelve a salir.</p>
                        <p>Te prometo que cada día trae nuevas oportunidades, 
                        nuevas posibilidades, nuevas razones para sonreír.</p>
                        <p>Te prometo que tu fuerza interior es más grande de lo que crees, 
                        que tu capacidad para superar es infinita.</p>
                        <p>Te prometo que mereces todo lo bueno que la vida tiene para ofrecer.</p>
                        <p>Mantén la fe, mantén la esperanza.</p>
                        <p>Con fe en tu futuro,</p>
                        <p>Un amigo inesperado</p>
                    `
                }
            };
            
            const letter = letters[letterId];
            if (letter) {
                const modal = document.createElement('div');
                modal.innerHTML = `
                    <div style="
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0,0,0,0.8);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 10000;
                        animation: fadeIn 0.3s ease-out;
                    " onclick="this.remove()">
                        <div style="
                            background: linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,255,255,0.95));
                            border-radius: 25px;
                            padding: 50px;
                            max-width: 600px;
                            max-height: 80vh;
                            overflow-y: auto;
                            box-shadow: 0 30px 80px rgba(0,0,0,0.4);
                            backdrop-filter: blur(20px);
                            border: 3px solid rgba(255,255,255,0.3);
                            animation: slideUp 0.5s ease-out;
                            position: relative;
                        " onclick="event.stopPropagation()">
                            <button onclick="this.closest('div').parentElement.remove()" style="
                                position: absolute;
                                top: 15px;
                                right: 15px;
                                background: none;
                                border: none;
                                font-size: 2rem;
                                cursor: pointer;
                                color: #666;
                                transition: color 0.3s ease;
                            " onmouseover="this.style.color='#d63384'" onmouseout="this.style.color='#666'">
                                ✕
                            </button>
                            <h2 style="
                                font-size: 2rem;
                                color: #d63384;
                                margin-bottom: 25px;
                                font-weight: 700;
                                text-align: center;
                            ">${letter.title}</h2>
                            <div style="
                                font-size: 1.1rem;
                                line-height: 1.8;
                                color: #555;
                                text-align: justify;
                            ">${letter.content}</div>
                            <div style="
                                text-align: center;
                                margin-top: 30px;
                                font-size: 2rem;
                            ">💕</div>
                        </div>
                    </div>
                `;
                document.body.appendChild(modal);
                
                // Add animations
                const modalStyle = document.createElement('style');
                modalStyle.textContent = `
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    @keyframes slideUp {
                        from { 
                            opacity: 0;
                            transform: translateY(50px) scale(0.9);
                        }
                        to { 
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                    }
                `;
                document.head.appendChild(modalStyle);
            }
        }
        
        function typeWriter() {
            if (index < originalText.length) {
                mainMessage.textContent += originalText.charAt(index);
                index++;
                setTimeout(typeWriter, 40);
            } else {
                // Añadir efecto de cursor parpadeante
                mainMessage.innerHTML += '<span class="cursor">|</span>';
                const cursor = mainMessage.querySelector('.cursor');
                if (cursor) {
                    cursor.style.animation = 'blink 1s infinite';
                }
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
    
    // Añadir animación de cursor
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        .cursor {
            color: #f472b6;
            font-weight: bold;
            margin-left: 2px;
        }
    `;
    document.head.appendChild(cursorStyle);
    
    // Efecto de confeti mejorado al hacer clic en el footer
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.addEventListener('click', function(e) {
            createConfetti(e.clientX, e.clientY);
            createFireworks();
        });
    }
    
    function createConfetti(x, y) {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6ab04c', '#f472b6', '#bb86fc'];
        
        for (let i = 0; i < 40; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: ${Math.random() * 12 + 6}px;
                height: ${Math.random() * 12 + 6}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                z-index: 1001;
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                animation: confettiFall ${Math.random() * 3 + 2}s ease-out forwards;
                box-shadow: 0 0 6px rgba(255,255,255,0.5);
            `;
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
    
    function createFireworks() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f472b6'];
        
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight / 2;
                
                for (let j = 0; j < 20; j++) {
                    const spark = document.createElement('div');
                    const angle = (j / 20) * Math.PI * 2;
                    const velocity = Math.random() * 200 + 100;
                    
                    spark.style.cssText = `
                        position: fixed;
                        width: 4px;
                        height: 4px;
                        background: ${colors[Math.floor(Math.random() * colors.length)]};
                        left: ${x}px;
                        top: ${y}px;
                        pointer-events: none;
                        z-index: 1002;
                        border-radius: 50%;
                        animation: fireworkSpark 1s ease-out forwards;
                        box-shadow: 0 0 10px currentColor;
                    `;
                    
                    spark.style.setProperty('--dx', `${Math.cos(angle) * velocity}px`);
                    spark.style.setProperty('--dy', `${Math.sin(angle) * velocity}px`);
                    
                    document.body.appendChild(spark);
                    
                    setTimeout(() => {
                        spark.remove();
                    }, 1000);
                }
            }, i * 300);
        }
    }
    
    // Añadir animaciones para confeti y fuegos artificiales
    const confettiStyle = document.createElement('style');
    confettiStyle.textContent = `
        @keyframes confettiFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(${Math.random() * 300 + 200}px) rotate(${Math.random() * 720}deg);
                opacity: 0;
            }
        }
        
        @keyframes fireworkSpark {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(var(--dx), var(--dy)) scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(confettiStyle);
    
    // Efecto 3D mejorado en las tarjetas
    const cards = document.querySelectorAll('.message-card, .promise-card, .final-message');
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            const rotateX = -deltaY * 8;
            const rotateY = deltaX * 8;
            
            this.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.02)`;
            
            // Efecto de luz
            const shine = this.querySelector('.shine') || document.createElement('div');
            shine.className = 'shine';
            shine.style.cssText = `
                position: absolute;
                top: ${y}px;
                left: ${x}px;
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, rgba(255,255,255,0.3), transparent);
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 1;
                opacity: 0.6;
            `;
            
            if (!this.querySelector('.shine')) {
                this.appendChild(shine);
            } else {
                this.querySelector('.shine').style.top = `${y}px`;
                this.querySelector('.shine').style.left = `${x}px`;
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
            
            const shine = this.querySelector('.shine');
            if (shine) {
                shine.remove();
            }
        });
    });
    
    // Mensaje secreto mejorado: presionar "te quiero" en el teclado
    let secretCode = '';
    const secretMessage = 'tequiero';
    
    document.addEventListener('keypress', function(e) {
        secretCode += e.key.toLowerCase();
        
        if (secretCode.includes(secretMessage)) {
            showSecretMessage();
            secretCode = '';
        }
        
        if (secretCode.length > 10) {
            secretCode = secretCode.slice(-10);
        }
    });
    
    function showSecretMessage() {
        const secretDiv = document.createElement('div');
        secretDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f472b6);
                background-size: 300% 300%;
                color: white;
                padding: 40px;
                border-radius: 25px;
                font-size: 1.8rem;
                font-weight: bold;
                z-index: 10000;
                box-shadow: 0 30px 80px rgba(0,0,0,0.4);
                animation: secretAppear 0.6s ease-out, gradientShift 3s ease-in-out infinite;
                text-align: center;
                max-width: 500px;
                border: 3px solid rgba(255,255,255,0.3);
            ">
                💕 Eres el mejor regalo de la vida 💕
                <br><br>
                <span style="font-size: 1.2rem; font-weight: normal;">
                    Tu hermano/a te ama infinitamente<br>
                    Más que todas las estrellas del cielo
                </span>
                <br><br>
                <div style="font-size: 2rem;">🌟✨💖✨🌟</div>
            </div>
        `;
        document.body.appendChild(secretDiv);
        
        // Crear explosión de corazones
        for (let i = 0; i < 20; i++) {
            setTimeout(() => createFloatingHeart(), i * 50);
        }
        
        setTimeout(() => {
            secretDiv.style.animation = 'secretDisappear 0.6s ease-out';
            setTimeout(() => {
                secretDiv.remove();
            }, 600);
        }, 4000);
    }
    
    // Añadir animaciones para el mensaje secreto
    const secretStyle = document.createElement('style');
    secretStyle.textContent = `
        @keyframes secretAppear {
            from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.3) rotate(-180deg);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1) rotate(0deg);
            }
        }
        
        @keyframes secretDisappear {
            from {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1) rotate(0deg);
            }
            to {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.3) rotate(180deg);
            }
        }
    `;
    document.head.appendChild(secretStyle);
    
    // Efecto de partículas de fondo
    function createBackgroundParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255,255,255,${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
            z-index: 0;
            animation: particleFloat ${Math.random() * 10 + 5}s ease-in-out infinite;
        `;
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 15000);
    }
    
    // Añadir animación de partículas
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes particleFloat {
            0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.3;
            }
            25% {
                transform: translate(30px, -30px) scale(1.2);
                opacity: 0.6;
            }
            50% {
                transform: translate(-20px, -60px) scale(0.8);
                opacity: 0.4;
            }
            75% {
                transform: translate(-40px, -30px) scale(1.1);
                opacity: 0.7;
            }
        }
    `;
    document.head.appendChild(particleStyle);
    
    // Crear partículas de fondo periódicamente
    setInterval(createBackgroundParticle, 2000);
});

// Simple Music Toggle
let isPlaying = false;

function toggleMusic() {
    const button = document.querySelector('.music-toggle');
    const icon = document.querySelector('.music-icon');
    
    if (!isPlaying) {
        icon.textContent = '⏸️';
        button.classList.add('playing');
        isPlaying = true;
        
        // Create floating notes
        createFloatingNotes();
    } else {
        icon.textContent = '▶️';
        button.classList.remove('playing');
        isPlaying = false;
    }
}

function createFloatingNotes() {
    if (!isPlaying) return;
    
    const note = document.createElement('div');
    note.textContent = ['♪', '♫', '♬', '🎵'][Math.floor(Math.random() * 4)];
    note.style.cssText = `
        position: fixed;
        bottom: 90px;
        right: 60px;
        font-size: 1.2rem;
        color: #f472b6;
        opacity: 0.8;
        animation: floatNote 3s ease-in-out;
        pointer-events: none;
        z-index: 9998;
    `;
    
    document.body.appendChild(note);
    
    // Animate the note
    let position = 0;
    const floatAnimation = setInterval(() => {
        position += 2;
        note.style.bottom = (90 + position) + 'px';
        note.style.right = (60 + Math.sin(position * 0.05) * 15) + 'px';
        note.style.opacity = (0.8 - position / 150);
        
        if (position > 120) {
            clearInterval(floatAnimation);
            note.remove();
        }
    }, 50);
    
    // Create next note
    setTimeout(() => createFloatingNotes(), Math.random() * 2000 + 1000);
}

// Add floating note animation to CSS
const musicStyle = document.createElement('style');
musicStyle.textContent = `
    @keyframes floatNote {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
        }
        100% {
            transform: translateY(-120px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(musicStyle);

// Make functions globally available
window.openLetter = openLetter;
window.handleImageUpload = handleImageUpload;
window.showGraduacionImage = showGraduacionImage;
window.toggleMusic = toggleMusic;

// Function to show graduacion image when clicking on empty spaces
function showGraduacionImage(element) {
    const placeholder = element.querySelector('.gallery-placeholder');
    if (placeholder && !placeholder.style.backgroundImage || placeholder.style.backgroundImage === 'none') {
        // Set the graduacion image as background
        placeholder.style.backgroundImage = "url('./images/graduacion.jpg')";
        placeholder.style.backgroundSize = 'cover';
        placeholder.style.backgroundPosition = 'center';
        placeholder.style.backgroundRepeat = 'no-repeat';
        
        // Hide the icon and text
        const icon = placeholder.querySelector('span');
        if (icon) icon.style.display = 'none';
        const text = placeholder.querySelector('p');
        if (text) text.style.display = 'none';
        
        // Add a remove button
        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = '🗑️';
        removeBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.7);
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            cursor: pointer;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            z-index: 10;
        `;
        removeBtn.onclick = function() {
            // Remove image and restore placeholder
            placeholder.style.backgroundImage = '';
            placeholder.innerHTML = `
                <span>${icon.textContent}</span>
                <p>${text.textContent}</p>
            `;
            removeBtn.remove();
        };
        
        removeBtn.onmouseover = function() {
            this.style.background = 'rgba(220, 53, 69, 0.9)';
            this.style.transform = 'scale(1.1)';
        };
        
        removeBtn.onmouseout = function() {
            this.style.background = 'rgba(0,0,0,0.7)';
            this.style.transform = 'scale(1)';
        };
        
        placeholder.appendChild(removeBtn);
    }
}

// Image upload functionality
function handleImageUpload(event, element) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            const placeholder = element.querySelector('.gallery-placeholder');
            if (placeholder) {
                // Create image element
                const img = document.createElement('img');
                img.src = imageUrl;
                img.style.cssText = `
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 15px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                `;
                
                // Hide the input and icon
                const input = element.querySelector('input[type="file"]');
                if (input) input.style.display = 'none';
                const icon = placeholder.querySelector('span');
                if (icon) icon.style.display = 'none';
                
                // Add a remove button
                const removeBtn = document.createElement('button');
                removeBtn.innerHTML = '🗑️';
                removeBtn.style.cssText = `
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: rgba(0,0,0,0.7);
                    border: none;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    z-index: 10;
                `;
                removeBtn.onclick = function() {
                    // Remove image and restore placeholder
                    img.remove();
                    placeholder.innerHTML = `
                        <span>${icon.textContent}</span>
                        <p>${placeholder.querySelector('p').textContent}</p>
                        <input type="file" accept="image/*" onchange="handleImageUpload(event, this)" style="margin-top: 10px; padding: 5px; border: 2px solid #f472b6; border-radius: 8px; width: 100%; background: rgba(255,255,255,0.9); color: #666; font-size: 0.9rem;" placeholder="Selecciona una imagen bonita">
                    `;
                    removeBtn.remove();
                };
                
                removeBtn.onmouseover = function() {
                    this.style.background = 'rgba(220, 53, 69, 0.9)';
                    this.style.transform = 'scale(1.1)';
                };
                
                removeBtn.onmouseout = function() {
                    this.style.background = 'rgba(0,0,0,0.7)';
                    this.style.transform = 'scale(1)';
                };
                
                placeholder.appendChild(img);
                placeholder.appendChild(removeBtn);
            }
        };
        reader.readAsDataURL(file);
    }
}

// Function to load images from a folder
function loadImagesFromFolder() {
    // Array of image filenames to load
    const imageFiles = [
        'momentos-juntos.jpg',
        'familia-feliz.jpg', 
        'aventuras-diversion.jpg',
        'creatividad-infancia.jpg',
        'amigos-especiales.jpg',
        'sueños-cumplidos.jpg',
        'potencial-infinito.jpg',
        'graduacion.jpg'
    ];
    
    // Find all gallery placeholders
    const placeholders = document.querySelectorAll('.gallery-placeholder');
    
    placeholders.forEach((placeholder, index) => {
        if (index < imageFiles.length) {
            const imagePath = `./images/${imageFiles[index]}`;
            const img = document.createElement('img');
            img.src = imagePath;
            img.style.cssText = `
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 15px;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
            `;
            
            // Hide the input and icon
            const input = placeholder.querySelector('input[type="file"]');
            if (input) input.style.display = 'none';
            const icon = placeholder.querySelector('span');
            if (icon) icon.style.display = 'none';
            
            // Add a remove button
            const removeBtn = document.createElement('button');
            removeBtn.innerHTML = '🗑️';
            removeBtn.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                background: rgba(0,0,0,0.7);
                border: none;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                cursor: pointer;
                font-size: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                z-index: 10;
            `;
            removeBtn.onclick = function() {
                // Remove image and restore placeholder
                img.remove();
                placeholder.innerHTML = `
                    <span>${icon.textContent}</span>
                    <p>${placeholder.querySelector('p').textContent}</p>
                    <input type="file" accept="image/*" onchange="handleImageUpload(event, this)" style="margin-top: 10px; padding: 5px; border: 2px solid #f472b6; border-radius: 8px; width: 100%; background: rgba(255,255,255,0.9); color: #666; font-size: 0.9rem;" placeholder="Selecciona una imagen bonita">
                `;
                removeBtn.remove();
            };
            
            removeBtn.onmouseover = function() {
                this.style.background = 'rgba(220, 53, 69, 0.9)';
                this.style.transform = 'scale(1.1)';
            };
            
            removeBtn.onmouseout = function() {
                this.style.background = 'rgba(0,0,0,0.7)';
                this.style.transform = 'scale(1)';
            };
            
            placeholder.appendChild(img);
            placeholder.appendChild(removeBtn);
        }
    });
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Load images when page loads
    loadImagesFromFolder();
    
    // Background Music - Simple Version
    const bgMusic = document.getElementById('bg-music');
    
    if (bgMusic) {
        console.log('🎵 Music element found:', bgMusic);
        console.log('🎵 Music sources:', bgMusic.querySelectorAll('source'));
        
        // Set volume
        bgMusic.volume = 0.5;
        
        // Add event listeners for debugging
        bgMusic.addEventListener('loadstart', () => console.log('📥 Loading music...'));
        bgMusic.addEventListener('loadeddata', () => console.log('✅ Music loaded'));
        bgMusic.addEventListener('canplay', () => console.log('🎧 Can play'));
        bgMusic.addEventListener('play', () => console.log('🎵 Music playing!'));
        bgMusic.addEventListener('pause', () => console.log('⏸️ Music paused'));
        bgMusic.addEventListener('error', (e) => {
            console.log('❌ Music error:', e);
            console.log('Error details:', bgMusic.error);
        });
        
        // Try to play immediately
        console.log('🎵 Attempting to play...');
        bgMusic.play().then(() => {
            console.log('✅ Music started successfully!');
        }).catch(error => {
            console.log('❌ Autoplay failed:', error);
            console.log('🖱️ Will start on first user interaction');
            
            // Start on first click
            document.addEventListener('click', function playOnFirstClick() {
                console.log('🖱️ User clicked, starting music...');
                bgMusic.play().then(() => {
                    console.log('✅ Music started on user interaction!');
                }).catch(e => {
                    console.log('❌ Still failed:', e);
                });
                document.removeEventListener('click', playOnFirstClick);
            }, { once: true });
        });
    } else {
        console.log('❌ Music element not found');
    }
});

// Crear partículas de fondo periódicamente
setInterval(createBackgroundParticle, 2000);

// Create floating notes effect
function createFloatingNotes() {
    const note = document.createElement('div');
    note.textContent = ['♪', '♫', '♬', '🎵'][Math.floor(Math.random() * 4)];
    note.style.cssText = `
        position: fixed;
        bottom: 90px;
        right: 60px;
        font-size: 1.2rem;
        color: #f472b6;
        opacity: 0.8;
        animation: floatNote 3s ease-in-out;
        pointer-events: none;
        z-index: 9998;
    `;
    
    document.body.appendChild(note);
    
    // Animate the note
    let position = 0;
    const floatAnimation = setInterval(() => {
        position += 2;
        note.style.bottom = (90 + position) + 'px';
        note.style.right = (60 + Math.sin(position * 0.05) * 15) + 'px';
        note.style.opacity = (0.8 - position / 150);
        
        if (position > 120) {
            clearInterval(floatAnimation);
            note.remove();
        }
    }, 50);
}

// Add floating note animation to CSS
const musicStyle = document.createElement('style');
musicStyle.textContent = `
    @keyframes floatNote {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
        }
        100% {
            transform: translateY(-120px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(musicStyle);

// Crear partículas de fondo periódicamente
setInterval(createBackgroundParticle, 2000);
