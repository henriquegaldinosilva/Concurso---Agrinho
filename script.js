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
