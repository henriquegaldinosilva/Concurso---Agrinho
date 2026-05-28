/* Configurações Globais e Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
}

:root {
    --cor-principal: #2e7d32;
    --cor-secundaria: #81c784;
    --cor-escura: #1b5e20;
    --cor-fundo: #f4f6f4;
    --cor-texto: #333;
}

body {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    line-height: 1.6;
}

.container {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.bg-alternativo {
    background-color: #e8f5e9;
    padding: 60px 20px;
}

.titulo-secao {
    text-align: center;
    font-size: 2.5rem;
    color: var(--cor-escura);
    margin-bottom: 40px;
}

/* Menu de Navegação */
header {
    background-color: white;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
    z-index: 1000;
}

.logo {
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--cor-principal);
}

.logo span {
    color: #e65100;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    text-decoration: none;
    color: var(--cor-texto);
    font-weight: 600;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: var(--cor-principal);
}

/* Banner Principal (Hero) */
.hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80') no-repeat center center/cover;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: 0 20px;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
}

.hero-content p {
    font-size: 1.3rem;
    margin-bottom: 30px;
    max-width: 800px;
}

.btn-principal {
    background-color: #e65100;
    color: white;
    padding: 12px 30px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 25px;
    transition: background 0.3s;
    border: none;
    cursor: pointer;
}

.btn-principal:hover {
    background-color: #ff6d00;
}

/* Grid de Cards */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.card {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-5px);
}

.icone-card {
    font-size: 3rem;
    color: var(--cor-principal);
    margin-bottom: 15px;
}

/* Seção de Mídia */
.midia-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
}

.video-box, .imagem-box {
    flex: 1 1 45%;
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.video-box iframe, .imagem-box img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
}

.legenda {
    margin-top: 10px;
    font-size: 0.9rem;
    color: #666;
    text-align: center;
    font-style: italic;
}

/* Simulador Interativo */
.simulador-box {
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    text-align: center;
}

.sub-zero {
    text-align: center;
    margin-top: -30px;
    margin-bottom: 30px;
    color: #666;
}

.barra-status {
    width: 100%;
    height: 30px;
    background-color: #ddd;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
}

#indicador-equilibrio {
    width: 50%; /* Começa no meio */
    height: 100%;
    background: linear-gradient(to right, #ff1744, #00e676, #d500f9);
    transition: width 0.5s ease-out;
}

.status-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    margin-bottom: 30px;
    color: #555;
}

.botoes-simulador button {
    background-color: var(--cor-principal);
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.2s;
}

.botoes-simulador button:hover {
    background-color: var(--cor-escura);
}

#feedback-simulador {
    margin-top: 20px;
    font-weight: bold;
    font-size: 1.1rem;
}

/* Quiz */
#quiz-container {
    background: white;
    padding: 30px;
    border-radius: 10px;
    max-width: 700px;
    margin: 0 auto;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

#pergunta {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 20px;
}

.btn-opcao {
    display: block;
    width: 100%;
    padding: 12px;
    background-color: #f0f0f0;
    border: 2px solid #ddd;
    border-radius: 8px;
    margin-bottom: 10px;
    text-align: left;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s;
}

.btn-opcao:hover {
    background-color: #e0e0e0;
}

#resultado-quiz {
    text-align: center;
    background: white;
    padding: 30px;
    border-radius: 10px;
    max-width: 700px;
    margin: 0 auto;
}

/* Rodapé */
footer {
    background-color: #212121;
    color: #aaa;
    text-align: center;
    padding: 30px 20px;
    font-size: 0.9rem;
}

/* Responsividade Básica */
@media (max-width: 768px) {
    header { flex-direction: column; }
    nav ul { margin-top: 15px; }
    .hero-content h1 { font-size: 2.2rem; }
    .midia-container { flex-direction: column; }
}
