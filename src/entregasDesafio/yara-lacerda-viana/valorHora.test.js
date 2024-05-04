const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe('Calcular valor por hora', () => {
    const salarioMinimo = 1412;
    const valorPorHoraReal = calcularValorPorHora(salarioMinimo)
    console.log('valorPorHoraReal', valorPorHoraReal)

    test('O valor por hora do salário mínimo deve ser maior que 0', () => {
        const zero = 0;
        expect(valorPorHoraReal).toBeGreaterThan(zero);
    })
    test('O valor por hora para um salário mínimo de 1412 reais deve ser 9 reais/hora', () => {
        const valorPorHoraEsperado = 9;
        expect(valorPorHoraReal).toBe(valorPorHoraEsperado);
    })

})
