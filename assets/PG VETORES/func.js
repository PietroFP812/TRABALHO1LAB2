// Função para somar dois vetores
function somarVetores(vetorA, vetorB) {
    if (vetorA.length !== vetorB.length) {
        throw new Error("Os vetores devem ter o mesmo tamanho.");
    }
    return vetorA.map((valor, index) => valor + vetorB[index]);
}

// Função para subtrair dois vetores
function subtrairVetores(vetorA, vetorB) {
    if (vetorA.length !== vetorB.length) {
        throw new Error("Os vetores devem ter o mesmo tamanho.");
    }
    return vetorA.map((valor, index) => valor - vetorB[index]);
}
