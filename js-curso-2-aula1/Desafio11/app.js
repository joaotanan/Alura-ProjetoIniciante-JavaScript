function salaCircular(raio) {
    let pi = 3.14;

    let area = pi * (raio * raio);
    let perimetro = 2 * pi * raio;

    console.log("Área:", area);
    console.log("Perímetro:", perimetro);
}

salaCircular(3);