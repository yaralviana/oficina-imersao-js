const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto.js")

describe("Calcular Valor do Projeto", () => {
    const valorHora = 8

    test("Se o projeto tiver 24horas (<=50), taxa aplicada deve ser do Pacote Básico (1.1)", () => {
        const funcionalidades = ["setup", "formulario"]
        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(211)

    })

    test("Se o projeto tiver 56horas (> 50 e <=100), taxa aplicada deve ser do Pacote Intermediário (1.12)", () => {
        const funcionalidades = ["setup", "formulario", "responsividade", "otimizacao_seo"]

        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(502)

    })


    test("Se projetos tiver 104ho (> 100), taxa aplicada deve ser do Pacote Básico (1.1)", () => {
        const funcionalidades = ["setup", "formulario", "responsividade", "otimizacao_seo", "construcao_1_pagina",
            "integracao_mailchimp", "ssr", "integracao_api_propria"]
        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(957)

    })

})

