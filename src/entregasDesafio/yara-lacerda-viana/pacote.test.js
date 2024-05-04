const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('pacote', () => {
    test('Deve retornar pacote_basico quando totalHorasProjeto for <= 50', () => {
        const totalHorasProjeto = 50
        const result = calcularPacote(totalHorasProjeto)

        expect(result).toEqual('pacote_basico')

    })

    test('Deve retornar pacote_intermediario quando totalHorasProjeto for <= 100', () => {
        const totalHorasProjeto = 100
        const result = calcularPacote(totalHorasProjeto)

        expect(result).toEqual('pacote_intermediario')

    })

    test('Deve retornar pacote_premium quando totalHorasProjeto for <= 200', () => {
        const totalHorasProjeto = 180
        const result = calcularPacote(totalHorasProjeto)

        expect(result).toEqual('pacote_premium')

    })

})

