const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe("Calcular Horas de Projeto", () => {
    test("Todas as funcionalidades", () => {
        const todasFuncionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "ssr",
            "integracao_api_propria"
        ]

        expect(calcularHorasDeProjeto(todasFuncionalidades)).toBe(104)
    })

    test("Se essa lista contendo 3 funcionalidades terá 24 horas", () => {

        const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"]

        expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24)
    })


    test("Caso não exista a funcionalidade declarada", () => {
        const listaFuncionalidadeInexistente = ["formluario"] //usando erro de digitação como exemplo

        expect(calcularHorasDeProjeto(listaFuncionalidadeInexistente)).toBeNaN()
    })

})