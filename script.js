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

#cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    background-color: white;
    padding: 20px;
    width: 280px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-5px);
}

.card h3 {
    margin-bottom: 10px;
    color: #388e3c;
}

#quiz {
    text-align: center;
    margin-bottom: 50px;
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

footer {
    background-color: #1b5e20;
    color: white;
    text-align: center;
    padding: 15px;
    margin-top: 30px;
}

@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }

    #cards {
        flex-direction: column;
        align-items: center;
    }
}
