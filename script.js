* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4fff4;
    color: #333;
    line-height: 1.6;
}

.container {
    width: 90%;
    max-width: 1000px;
    margin: auto;
    padding: 20px;
}

header {
    background: linear-gradient(to right, #2e7d32, #66bb6a);
    color: white;
    text-align: center;
    padding: 80px 20px;
}

header h1 {
    font-size: 3rem;
    margin-bottom: 15px;
}

header p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.botao {
    display: inline-block;
    background-color: white;
    color: #2e7d32;
    padding: 12px 25px;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    transition: 0.3s;
}

.botao:hover {
    background-color: #dcedc8;
}

section {
    margin-top: 40px;
}

section h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #2e7d32;
}

.imagem-tema {
    display: block;
    max-width: 100%;
    margin: 20px auto;
    border-radius: 12px;
}

.video-tema {
    border-radius: 12px;
}

/* Cards */
.cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.card {
    background-color: white;
    padding: 15px;
    width: 280px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-5px);
}

.card img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
}

/* Quiz */
#quiz {
    text-align: center;
}

#quiz button {
    background-color: #43a047;
    color: white;
    border: none;
    padding: 12px 20px;
    margin: 10px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: 0.3s;
}

#quiz button:hover {
    background-color: #2e7d32;
}

#mensagem {
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: bold;
}

/* Contador */
#contador {
    text-align: center;
    margin-top: 40px;
}

#contador button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 15px;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
}

#resultado {
    margin-top: 15px;
    font-weight: bold;
    font-size: 1.2rem;
}

/* Footer */
footer {
    background-color: #1b5e20;
    color: white;
    text-align: center;
    padding: 15px;
    margin-top: 30px;
}

/* Responsividade */
@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }

    .cards-wrapper {
        flex-direction: column;
        align-items: center;
    }
}
