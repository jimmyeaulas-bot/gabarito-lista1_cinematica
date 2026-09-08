/* =========================================================================
   BANCO DE EQUAÇÕES (DATABASE) E DADOS DAS 5 PROVAS (KITS A ATÉ E)
   Todas as respostas e gabaritos auditados e validados para 10,00 pontos.
   Agora com notação LaTeX para renderização via KaTeX.
========================================================================= */

const COLORS = {
  blue: "#173fa6",
  green: "#2f9e44",
  amber: "#e8590c",
  purple: "#7950f2",
  red: "#e03131",
  cyan: "#0c8599"
};

const DATABASE = {
  cinematica: {
    name: "Mecânica: Cinemática",
    items: [
      {
        id: "vm",
        badge: "MRU",
        concept: "Velocidade Média",
        formulaTexto: "\\(v_m = \\Delta S / \\Delta t\\)",
        descricao: "Para calcular velocidade média ou distância em velocidade uniforme."
      },
      {
        id: "sorvete",
        badge: "MRU",
        concept: "Posição (Sorvete)",
        formulaTexto: "\\(S = S_0 + v \\cdot t\\)",
        descricao: "Movimento com velocidade constante em função do tempo."
      },
      {
        id: "am",
        badge: "MRUV",
        concept: "Aceleração Média",
        formulaTexto: "\\(a_m = \\Delta v / \\Delta t\\)",
        descricao: "Taxa com que a velocidade varia em um intervalo de tempo."
      },
      {
        id: "vovô",
        badge: "MRUV",
        concept: "Velocidade (Vovô Ateu)",
        formulaTexto: "\\(v = v_0 + a \\cdot t\\)",
        descricao: "Determina a velocidade final no MRUV tendo o tempo decorrido."
      },
      {
        id: "sorvetao",
        badge: "MRUV",
        concept: "Posição (Sorvetão)",
        formulaTexto: "\\(S = S_0 + v_0 \\cdot t + \\cfrac{1}{2} \\cdot a \\cdot t^2\\)",
        descricao: "Posição ou deslocamento com aceleração constante."
      },
      {
        id: "torricelli",
        badge: "MRUV",
        concept: "Torricelli (Sem Tempo)",
        formulaTexto: "\\(v^2 = v_0^2 + 2 \\cdot a \\cdot \\Delta S\\)",
        descricao: "Equação independente do tempo para acelerações constantes."
      },
      {
        id: "vm_muv",
        badge: "MRUV",
        concept: "Velocidade Média no MUV",
        formulaTexto: "\\(v_m = \\cfrac{v_0 + v}{2}\\)",
        descricao: "Média aritmética das velocidades inicial e final em aceleração constante."
      }
    ]
  }
};

/* BANCO COMPLETO DAS PROVAS (A, B, C, D, E) */
const PROVAS = {
  A: {
    titulo: "Lista Dupla A",
    questoes: [
      {
        numero: 1,
        id: "#8WW9XV3",
        pontos: "1,50 pts",
        enunciado: "Um móvel realiza um movimento retilíneo uniforme com velocidade constante de 15 m/s. No instante t = 0, sua posição é de 120 m. Qual será a posição do móvel após 4 segundos?",
        alternativas: ["a) 150 m", "b) 165 m", "c) 180 m", "d) 195 m", "e) 200 m"],
        correta: 2,
        fase1: [
          { termo: "Velocidade constante (v)", valor: "15 m/s" },
          { termo: "Posição inicial (S₀)", valor: "120 m (em t = 0)" },
          { termo: "Tempo decorrido (t)", valor: "4 s" },
          { termo: "Incógnita procurada", valor: "Posição final (S) após 4s" }
        ],
        fase2: {
          nome: "Função Horária da Posição no MRU (Sorvete)",
          formula: "\\(S = S_0 + v \\cdot t\\)",
          motivo: "A velocidade é constante (MRU) e desejamos encontrar a posição final dados S₀, v e t."
        },
        fase3: [
          "Substituindo os dados: \\(S = 120 + 15 \\cdot 4\\)",
          "Calculando a multiplicação: \\(S = 120 + 60\\)",
          "Posição final: \\(S = 180\\) metros (Alternativa C)."
        ]
      },
      {
        numero: 2,
        id: "#NEE8BNG",
        pontos: "1,50 pts",
        enunciado: "Um automóvel desloca-se com velocidade constante de 54 km/h. Qual será a distância percorrida pelo automóvel durante 8 minutos, em metros? Considere: 1 km = 1000 m, 1 h = 3600 s.",
        alternativas: ["a) 5 400 m", "b) 6 000 m", "c) 7 200 m", "d) 8 100 m", "e) 9 000 m"],
        correta: 2,
        fase1: [
          { termo: "Velocidade (v)", valor: "54 km/h ➔ conversão: 54 / 3,6 = 15 m/s" },
          { termo: "Tempo (Δt)", valor: "8 minutos ➔ conversão: 8 · 60 = 480 s" },
          { termo: "Incógnita procurada", valor: "Distância percorrida (ΔS) em metros" }
        ],
        fase2: {
          nome: "Velocidade Média / Deslocamento MRU",
          formula: "\\(\\Delta S = v \\cdot \\Delta t\\)",
          motivo: "O automóvel move-se em velocidade constante. As unidades precisam estar no S.I. (m/s e s)."
        },
        fase3: [
          "Conversão de unidades: 54 km/h = 15 m/s e 8 min = 480 s.",
          "Substituição na fórmula: \\(\\Delta S = 15 \\cdot 480\\)",
          "Multiplicação direta: \\(\\Delta S = 7.200\\) metros (Alternativa C)."
        ]
      },
      {
        numero: 3,
        id: "#WLLZYDK",
        pontos: "2,00 pts",
        enunciado: "Uma motocicleta aumenta sua velocidade de 6 m/s para 30 m/s durante um intervalo de 6 segundos. Considerando que a aceleração é constante, qual é a aceleração média da motocicleta nesse intervalo?",
        alternativas: ["a) 3 m/s²", "b) 4 m/s²", "c) 5 m/s²", "d) 6 m/s²", "e) 8 m/s²"],
        correta: 1,
        fase1: [
          { termo: "Velocidade inicial (v₀)", valor: "6 m/s" },
          { termo: "Velocidade final (v)", valor: "30 m/s" },
          { termo: "Intervalo de tempo (Δt)", valor: "6 s" },
          { termo: "Incógnita", valor: "Aceleração média (a_m)" }
        ],
        fase2: {
          nome: "Definição de Aceleração Média",
          formula: "\\(a_m = \\cfrac{\\Delta v}{\\Delta t} = \\cfrac{v - v_0}{\\Delta t}\\)",
          motivo: "Temos a variação da velocidade em um determinado intervalo de tempo."
        },
        fase3: [
          "Variação de velocidade: \\(\\Delta v = 30 - 6 = 24\\) m/s",
          "Aplicação da fórmula: \\(a_m = \\cfrac{24}{6}\\)",
          "Resultado: \\(a_m = 4\\) m/s² (Alternativa B)."
        ]
      },
      {
        numero: 4,
        id: "#5997GVL",
        pontos: "2,00 pts",
        enunciado: "Um objeto inicia seu movimento com velocidade de 4 m/s e apresenta aceleração constante de 2 m/s². Qual será o deslocamento do objeto durante os primeiros 5 segundos? Utilize a função de deslocamento do Movimento Uniformemente Variado - ver quadro do professor.",
        alternativas: ["a) 30 m", "b) 35 m", "c) 40 m", "d) 45 m", "e) 50 m"],
        correta: 3,
        fase1: [
          { termo: "Velocidade inicial (v₀)", valor: "4 m/s" },
          { termo: "Aceleração constante (a)", valor: "2 m/s²" },
          { termo: "Tempo (t)", valor: "5 s" },
          { termo: "Incógnita", valor: "Deslocamento escalar (ΔS)" }
        ],
        fase2: {
          nome: "Equação Horária do Deslocamento (Sorvetão)",
          formula: "\\(\\Delta S = v_0 \\cdot t + \\cfrac{1}{2} \\cdot a \\cdot t^2\\)",
          motivo: "Movimento uniformemente variado onde temos v₀, aceleração e tempo, procurando o deslocamento."
        },
        fase3: [
          "Substituindo na equação: \\(\\Delta S = 4 \\cdot 5 + \\cfrac{1}{2} \\cdot 2 \\cdot (5^2)\\)",
          "Resolvendo as potências e parcelas: \\(\\Delta S = 20 + 1 \\cdot 25\\)",
          "Somando os termos: \\(\\Delta S = 20 + 25 = 45\\) metros (Alternativa D)."
        ]
      },
      {
        numero: 5,
        id: "#2PPD6V7",
        pontos: "3,00 pts",
        enunciado: "(Adaptada) Dois móveis, A e B, percorrem uma mesma trajetória retilínea, movimentando-se no mesmo sentido e com velocidades constantes. No instante t = 0: o móvel A encontra-se na posição S₁ = 20 m e possui velocidade v₁ = 30 m/s; o móvel B encontra-se na posição S₂ = 140 m e possui velocidade v₂ = 10 m/s. As posições dos móveis são dadas por S₁ = 20 + 30t e S₂ = 140 + 10t. Em qual posição ocorrerá o encontro entre os dois móveis?",
        alternativas: ["a) 160 m", "b) 180 m", "c) 200 m", "d) 220 m", "e) 240 m"],
        correta: 2,
        fase1: [
          { termo: "Função móvel A", valor: "S₁ = 20 + 30t" },
          { termo: "Função móvel B", valor: "S₂ = 140 + 10t" },
          { termo: "Condição física de encontro", valor: "S₁ = S₂" },
          { termo: "Pergunta do problema", valor: "Posição do encontro (S) em metros" }
        ],
        fase2: {
          nome: "Igualdade das Funções Horárias de Posição",
          formula: "\\(S_1(t) = S_2(t)\\)",
          motivo: "Para que dois corpos se encontrem no mesmo ponto da trajetória, suas posições devem coincidir."
        },
        fase3: [
          "Igualando as posições: \\(20 + 30t = 140 + 10t\\)",
          "Isolando t: \\(30t - 10t = 140 - 20 \\Rightarrow 20t = 120 \\Rightarrow t = 6\\) segundos (momento do encontro)",
          "Determinando a posição no móvel A: \\(S_1 = 20 + 30(6) = 20 + 180 = 200\\) metros",
          "Verificação no móvel B: \\(S_2 = 140 + 10(6) = 140 + 60 = 200\\) metros (Alternativa C)."
        ]
      }
    ]
  },

  B: {
    titulo: "Lista Dupla B",
    questoes: [
      {
        numero: 1,
        id: "#WLLZY8K",
        pontos: "1,50 pts",
        enunciado: "Um móvel realiza movimento retilíneo uniforme segundo a função horária S(t) = 25 + 7t, em que S é medido em metros e t em segundos. Qual será a posição do móvel no instante t = 5 s?",
        alternativas: ["a) 50 m", "b) 55 m", "c) 60 m", "d) 65 m", "e) 70 m"],
        correta: 2,
        fase1: [
          { termo: "Função horária dada", valor: "S(t) = 25 + 7t" },
          { termo: "Instante considerado", valor: "t = 5 s" },
          { termo: "Incógnita", valor: "Posição S(5)" }
        ],
        fase2: {
          nome: "Aplicação da Função Horária",
          formula: "\\(S = S_0 + v \\cdot t\\)",
          motivo: "A equação já foi dada no enunciado; basta substituir a variável tempo."
        },
        fase3: [
          "Substituição de t: \\(S(5) = 25 + 7 \\cdot 5\\)",
          "Multiplicação prioritária: \\(S(5) = 25 + 35\\)",
          "Resultado: \\(S = 60\\) metros (Alternativa C)."
        ]
      },
      {
        numero: 2,
        id: "#YXXRPW4",
        pontos: "1,50 pts",
        enunciado: "Um veículo desloca-se em movimento retilíneo uniforme com velocidade constante de 12 m/s. Quanto tempo será necessário para que o veículo percorra uma distância de 240 metros?",
        alternativas: ["a) 12 s", "b) 15 s", "c) 20 s", "d) 24 s", "e) 30 s"],
        correta: 2,
        fase1: [
          { termo: "Velocidade constante (v)", valor: "12 m/s" },
          { termo: "Distância a percorrer (ΔS)", valor: "240 m" },
          { termo: "Incógnita", valor: "Tempo necessário (Δt)" }
        ],
        fase2: {
          nome: "Relação de Velocidade Média do MRU",
          formula: "\\(\\Delta t = \\cfrac{\\Delta S}{v}\\)",
          motivo: "Velocidade escalar constante ao longo de todo o percurso retilíneo."
        },
        fase3: [
          "Isolando o tempo na equação: \\(\\Delta t = \\cfrac{240}{12}\\)",
          "Divisão direta: \\(\\Delta t = 20\\) segundos (Alternativa C)."
        ]
      },
      {
        numero: 3,
        id: "#E336PEK",
        pontos: "2,00 pts",
        enunciado: "(Baseada na Equação de Torricelli) Um automóvel desloca-se com velocidade de 18 m/s quando o motorista inicia uma frenagem. Durante a frenagem, o automóvel apresenta aceleração constante de -3 m/s². Qual será a distância percorrida pelo automóvel até parar completamente? Utilize a Equação de Torricelli - ver quadro do professor.",
        alternativas: ["a) 36 m", "b) 45 m", "c) 54 m", "d) 63 m", "e) 72 m"],
        correta: 2,
        fase1: [
          { termo: "Velocidade inicial (v₀)", valor: "18 m/s" },
          { termo: "Aceleração de frenagem (a)", valor: "-3 m/s² (desaceleração)" },
          { termo: "Velocidade final (v)", valor: "0 m/s (parada completa)" },
          { termo: "Incógnita", valor: "Distância de parada (ΔS)" }
        ],
        fase2: {
          nome: "Equação de Torricelli",
          formula: "\\(v^2 = v_0^2 + 2 \\cdot a \\cdot \\Delta S\\)",
          motivo: "O problema não informa nem solicita o tempo de frenagem."
        },
        fase3: [
          "Substituição dos valores: \\(0^2 = 18^2 + 2 \\cdot (-3) \\cdot \\Delta S\\)",
          "Desenvolvendo: \\(0 = 324 - 6 \\cdot \\Delta S\\)",
          "Isolando o termo: \\(6 \\cdot \\Delta S = 324 \\Rightarrow \\Delta S = \\cfrac{324}{6} = 54\\) metros (Alternativa C)."
        ]
      },
      {
        numero: 4,
        id: "#6445LR9",
        pontos: "2,00 pts",
        enunciado: "Um objeto possui velocidade inicial de 5 m/s e movimenta-se com aceleração constante de 3 m/s² durante 4 segundos. Qual será sua velocidade ao final desse intervalo? Utilize a relação de velocidade no Movimento Uniformemente Variado - ver quadro do professor.",
        alternativas: ["a) 12 m/s", "b) 15 m/s", "c) 16 m/s", "d) 17 m/s", "e) 20 m/s"],
        correta: 3,
        fase1: [
          { termo: "Velocidade inicial (v₀)", valor: "5 m/s" },
          { termo: "Aceleração (a)", valor: "3 m/s²" },
          { termo: "Tempo (t)", valor: "4 s" },
          { termo: "Incógnita", valor: "Velocidade final (v)" }
        ],
        fase2: {
          nome: "Função Horária da Velocidade no MRUV (Vovô Ateu)",
          formula: "\\(v = v_0 + a \\cdot t\\)",
          motivo: "Temos aceleração contínua e conhecemos o tempo de aplicação da aceleração."
        },
        fase3: [
          "Substituindo na fórmula: \\(v = 5 + 3 \\cdot 4\\)",
          "Multiplicando: \\(v = 5 + 12\\)",
          "Velocidade final: \\(v = 17\\) m/s (Alternativa D)."
        ]
      },
      {
        numero: 5,
        id: "#1225PRV",
        pontos: "3,00 pts",
        enunciado: "(Baseada na Equação de Torricelli) Um automóvel desloca-se inicialmente com velocidade de 10 m/s. Após percorrer 75 metros, sua velocidade atinge 20 m/s. Considerando que a aceleração é constante, qual foi a aceleração do automóvel durante esse percurso? Utilize a Equação de Torricelli - ver quadro do professor.",
        alternativas: ["a) 1 m/s²", "b) 2 m/s²", "c) 2,5 m/s²", "d) 3 m/s²", "e) 4 m/s²"],
        correta: 1,
        fase1: [
          { termo: "Velocidade inicial (v₀)", valor: "10 m/s" },
          { termo: "Deslocamento (ΔS)", valor: "75 m" },
          { termo: "Velocidade final (v)", valor: "20 m/s" },
          { termo: "Incógnita", valor: "Aceleração escalar (a)" }
        ],
        fase2: {
          nome: "Equação de Torricelli",
          formula: "\\(v^2 = v_0^2 + 2 \\cdot a \\cdot \\Delta S\\)",
          motivo: "Aceleração uniforme relacionando velocidades e distância sem envolver o tempo."
        },
        fase3: [
          "Substituição na equação: \\(20^2 = 10^2 + 2 \\cdot a \\cdot 75\\)",
          "Efetuando potências e multiplicações: \\(400 = 100 + 150 \\cdot a\\)",
          "Isolando o termo com a incógnita: \\(150 \\cdot a = 400 - 100 \\Rightarrow 150 \\cdot a = 300\\)",
          "Divisão final: \\(a = \\cfrac{300}{150} = 2\\) m/s² (Alternativa B)."
        ]
      }
    ]
  },

  C: {
    titulo: "Lista Dupla C",
    questoes: [
      {
        numero: 1,
        id: "#YXXRP24",
        pontos: "1,50 pts",
        enunciado: "Um automóvel desloca-se com velocidade constante de 90 km/h. Qual é o valor dessa velocidade em metros por segundo? Considere: 1 km = 1000 m, 1 h = 3600 s.",
        alternativas: ["a) 15 m/s", "b) 20 m/s", "c) 25 m/s", "d) 30 m/s", "e) 35 m/s"],
        correta: 2,
        fase1: [
          { termo: "Velocidade informada", valor: "90 km/h" },
          { termo: "Fator de conversão", valor: "1 km/h = (1000 m)/(3600 s) = 1 / 3,6" },
          { termo: "Objetivo", valor: "Converter velocidade para o Sistema Internacional (m/s)" }
        ],
        fase2: {
          nome: "Conversão Direta de Unidades de Velocidade",
          formula: "\\(v (\\text{m/s}) = \\cfrac{v (\\text{km/h})}{3,6}\\)",
          motivo: "Relação métrica decorrente de 1.000m / 3.600s."
        },
        fase3: [
          "Divisão por 3,6: \\(v = \\cfrac{90}{3,6}\\)",
          "Cálculo equivalente: \\(900 / 36 = 25\\)",
          "Resultado: \\(v = 25\\) m/s (Alternativa C)."
        ]
      },
      {
        numero: 2,
        id: "#KVVLD74",
        pontos: "1,50 pts",
        enunciado: "Um corredor mantém velocidade constante de 9 m/s durante uma corrida. Se ele mantém essa velocidade durante 20 segundos, qual será a distância percorrida?",
        alternativas: ["a) 120 m", "b) 150 m", "c) 160 m", "d) 180 m", "e) 200 m"],
        correta: 3,
        fase1: [
          { termo: "Velocidade constante (v)", valor: "9 m/s" },
          { termo: "Intervalo de tempo (Δt)", valor: "20 s" },
          { termo: "Incógnita", valor: "Distância percorrida (ΔS)" }
        ],
        fase2: {
          nome: "Equação da Distância no MRU",
          formula: "\\(\\Delta S = v \\cdot \\Delta t\\)",
          motivo: "Movimento em linha reta com velocidade inalterada."
        },
        fase3: [
          "Substituição direta: \\(\\Delta S = 9 \\cdot 20\\)",
          "Multiplicação: \\(\\Delta S = 180\\) metros (Alternativa D)."
        ]
      },
      {
        numero: 3,
        id: "#6445LP9",
        pontos: "2,00 pts",
        enunciado: "Um automóvel realiza um movimento uniformemente variado. Sua velocidade inicial é de 11 m/s e sua velocidade final é de 25 m/s. Qual é a velocidade média do automóvel nesse intervalo?",
        alternativas: ["a) 16 m/s", "b) 17 m/s", "c) 18 m/s", "d) 19 m/s", "e) 20 m/s"],
        correta: 2,
        fase1: [
          { termo: "Tipo de movimento", valor: "Movimento Uniformemente Variado (aceleração constante)" },
          { termo: "Velocidade inicial (v₀)", valor: "11 m/s" },
          { termo: "Velocidade final (v)", valor: "25 m/s" },
          { termo: "Incógnita", valor: "Velocidade média (v_m)" }
        ],
        fase2: {
          nome: "Propriedade da Velocidade Média no MUV",
          formula: "\\(v_m = \\cfrac{v_0 + v}{2}\\)",
          motivo: "Exclusivamente no MUV a velocidade média é a média aritmética das velocidades das extremidades do intervalo."
        },
        fase3: [
          "Aplicação da fórmula: \\(v_m = \\cfrac{11 + 25}{2}\\)",
          "Soma do numerador: \\(v_m = \\cfrac{36}{2}\\)",
          "Resultado: \\(v_m = 18\\) m/s (Alternativa C)."
        ]
      },
      {
        numero: 4,
        id: "#799LD6R",
        pontos: "2,00 pts",
        enunciado: "Um móvel parte da posição inicial S₀ = 8 m, com velocidade inicial de 2 m/s e aceleração constante de 4 m/s². Qual será sua posição após 3 segundos? Utilize a função horária da posição no Movimento Uniformemente Variado - ver quadro do professor.",
        alternativas: ["a) 24 m", "b) 28 m", "c) 32 m", "d) 36 m", "e) 40 m"],
        correta: 2,
        fase1: [
          { termo: "Posição inicial (S₀)", valor: "8 m" },
          { termo: "Velocidade inicial (v₀)", valor: "2 m/s" },
          { termo: "Aceleração (a)", valor: "4 m/s²" },
          { termo: "Instante de tempo (t)", valor: "3 s" },
          { termo: "Incógnita", valor: "Posição final S(3)" }
        ],
        fase2: {
          nome: "Função Horária da Posição no MUV (Sorvetão)",
          formula: "\\(S = S_0 + v_0 \\cdot t + \\cfrac{1}{2} \\cdot a \\cdot t^2\\)",
          motivo: "Posição final dependente de velocidade inicial, aceleração constante e tempo."
        },
        fase3: [
          "Substituindo na expressão: \\(S = 8 + 2 \\cdot 3 + \\cfrac{1}{2} \\cdot 4 \\cdot (3^2)\\)",
          "Resolvendo produtos e potências: \\(S = 8 + 6 + 2 \\cdot 9\\)",
          "Somando parcelas: \\(S = 8 + 6 + 18 = 32\\) metros (Alternativa C)."
        ]
      },
      {
        numero: 5,
        id: "#LDD3XG4",
        pontos: "3,00 pts",
        enunciado: "(Adaptada) Dois móveis, A e B, percorrem uma mesma trajetória retilínea, movimentando-se no mesmo sentido e com velocidades constantes. No instante t = 0: o móvel A encontra-se na posição S₁ = 50 m e possui velocidade v₁ = 25 m/s; o móvel B encontra-se na posição S₂ = 170 m e possui velocidade v₂ = 15 m/s. As posições dos móveis são dadas por S₁ = 50 + 25t e S₂ = 170 + 15t. Em que instante os dois móveis se encontrarão?",
        alternativas: ["a) 8 s", "b) 10 s", "c) 12 s", "d) 14 s", "e) 16 s"],
        correta: 2,
        fase1: [
          { termo: "Função móvel A", valor: "S₁ = 50 + 25t" },
          { termo: "Função móvel B", valor: "S₂ = 170 + 15t" },
          { termo: "Condição física", valor: "S₁(t) = S₂(t)" },
          { termo: "Incógnita procurada", valor: "Instante t de encontro (em segundos)" }
        ],
        fase2: {
          nome: "Equação de Encontro",
          formula: "\\(S_1 = S_2\\)",
          motivo: "Determinar o instante t comum em que ambos os corpos ocupam o mesmo espaço."
        },
        fase3: [
          "Igualando as funções: \\(50 + 25t = 170 + 15t\\)",
          "Subtraindo 15t e 50: \\(25t - 15t = 170 - 50\\)",
          "Reduzindo termos: \\(10t = 120\\)",
          "Isolando t: \\(t = \\cfrac{120}{10} = 12\\) segundos (Alternativa C)."
        ]
      }
    ]
  },

  D: {
    titulo: "Lista Dupla D",
    questoes: [
      {
        numero: 1,
        id: "#PVVW62W",
        pontos: "1,50 pts",
        enunciado: "Um móvel realiza um movimento retilíneo uniforme com velocidade constante de 20 m/s. No instante t = 0, sua posição é de 50 m. Qual será a posição do móvel após 3 segundos?",
        alternativas: ["a) 90 m", "b) 100 m", "c) 110 m", "d) 120 m", "e) 130 m"],
        correta: 2,
        fase1: [
          { termo: "Velocidade constante (v)", valor: "20 m/s" },
          { termo: "Posição inicial (S₀)", valor: "50 m" },
          { termo: "Instante de tempo (t)", valor: "3 s" },
          { termo: "Incógnita", valor: "Posição final S" }
        ],
        fase2: {
          nome: "Função Horária do MRU (Sorvete)",
          formula: "\\(S = S_0 + v \\cdot t\\)",
          motivo: "Movimento em velocidade constante."
        },
        fase3: [
          "Substituindo dados: \\(S = 50 + 20 \\cdot 3\\)",
          "Multiplicação: \\(S = 50 + 60\\)",
          "Posição final: \\(S = 110\\) metros (Alternativa C)."
        ]
      },
      {
        numero: 2,
        id: "#6445274",
        pontos: "1,50 pts",
        enunciado: "Um automóvel desloca-se com velocidade constante de 72 km/h. Qual é o valor dessa velocidade em metros por segundo? Considere: 1 km = 1000 m, 1 h = 3600 s.",
        alternativas: ["a) 15 m/s", "b) 18 m/s", "c) 20 m/s", "d) 25 m/s", "e) 30 m/s"],
        correta: 2,
        fase1: [
          { termo: "Velocidade em km/h", valor: "72 km/h" },
          { termo: "Unidade desejada", valor: "m/s (Sistema Internacional)" },
          { termo: "Fator de conversão", valor: "Dividir por 3,6" }
        ],
        fase2: {
          nome: "Conversão de Unidade de Velocidade",
          formula: "\\(v (\\text{m/s}) = \\cfrac{v (\\text{km/h})}{3,6}\\)",
          motivo: "1 km = 1000 m e 1 h = 3600 s, logo 1000/3600 = 1/3,6."
        },
        fase3: [
          "Cálculo: \\(v = \\cfrac{72}{3,6}\\)",
          "Multiplicando numerador e denominador por 10: \\(\\cfrac{720}{36}\\)",
          "Resultado exato: \\(20\\) m/s (Alternativa C)."
        ]
      },
      {
        numero: 3,
        id: "#12258YE",
        pontos: "2,00 pts",
        enunciado: "Um carro aumenta sua velocidade de 8 m/s para 20 m/s durante um intervalo de 4 segundos. Considerando que a aceleração é constante, qual é a aceleração média do carro nesse intervalo?",
        alternativas: ["a) 2 m/s²", "b) 2,5 m/s²", "c) 3 m/s²", "d) 3,5 m/s²", "e) 4 m/s²"],
        correta: 2,
        fase1: [
          { termo: "Velocidade inicial (v₀)", valor: "8 m/s" },
          { termo: "Velocidade final (v)", valor: "20 m/s" },
          { termo: "Tempo (Δt)", valor: "4 s" },
          { termo: "Incógnita", valor: "Aceleração escalar média (a_m)" }
        ],
        fase2: {
          nome: "Aceleração Escalar Média",
          formula: "\\(a_m = \\cfrac{v - v_0}{\\Delta t}\\)",
          motivo: "Taxa temporal de variação da velocidade."
        },
        fase3: [
          "Subtração das velocidades: \\(\\Delta v = 20 - 8 = 12\\) m/s",
          "Divisão pelo tempo: \\(a_m = \\cfrac{12}{4}\\)",
          "Aceleração média: \\(a_m = 3\\) m/s² (Alternativa C)."
        ]
      },
      {
        numero: 4,
        id: "#GGG7N35",
        pontos: "2,00 pts",
        enunciado: "Um objeto inicia seu movimento com velocidade de 3 m/s e apresenta aceleração constante de 2 m/s². Qual será o deslocamento do objeto durante os primeiros 6 segundos? Utilize a função de deslocamento do Movimento Uniformemente Variado - ver quadro do professor.",
        alternativas: ["a) 36 m", "b) 42 m", "c) 48 m", "d) 54 m", "e) 60 m"],
        correta: 3,
        fase1: [
          { termo: "Velocidade inicial (v₀)", valor: "3 m/s" },
          { termo: "Aceleração constante (a)", valor: "2 m/s²" },
          { termo: "Tempo (t)", valor: "6 s" },
          { termo: "Incógnita", valor: "Deslocamento (ΔS)" }
        ],
        fase2: {
          nome: "Função Horária do Deslocamento no MUV",
          formula: "\\(\\Delta S = v_0 \\cdot t + \\cfrac{1}{2} \\cdot a \\cdot t^2\\)",
          motivo: "Cálculo da distância com velocidade inicial diferente de zero e aceleração constante."
        },
        fase3: [
          "Substituindo valores: \\(\\Delta S = 3 \\cdot 6 + \\cfrac{1}{2} \\cdot 2 \\cdot (6^2)\\)",
          "Calculando parcelas: \\(\\Delta S = 18 + 1 \\cdot 36\\)",
          "Soma: \\(\\Delta S = 18 + 36 = 54\\) metros (Alternativa D)."
        ]
      },
      {
        numero: 5,
        id: "#LDD3Y2W",
        pontos: "3,00 pts",
        enunciado: "Dois móveis, A e B, percorrem uma mesma trajetória retilínea, movimentando-se em sentidos opostos com velocidades constantes. No instante t = 0: o móvel A encontra-se na posição S₁ = 0 m e possui velocidade v₁ = 10 m/s no sentido positivo; o móvel B encontra-se na posição S₂ = 200 m e possui velocidade v₂ = 15 m/s no sentido negativo. As posições são dadas por S₁ = 0 + 10t e S₂ = 200 - 15t. Em que instante os dois móveis se encontrarão?",
        alternativas: ["a) 6 s", "b) 8 s", "c) 10 s", "d) 12 s", "e) 14 s"],
        correta: 1,
        fase1: [
          { termo: "Equação móvel A", valor: "S₁ = 10t" },
          { termo: "Equação móvel B", valor: "S₂ = 200 - 15t" },
          { termo: "Sentidos", valor: "Opostos (+10 m/s e -15 m/s)" },
          { termo: "Incógnita", valor: "Instante t de encontro (s)" }
        ],
        fase2: {
          nome: "Condição de Encontro em MRU com Sentidos Opostos",
          formula: "\\(S_1(t) = S_2(t)\\)",
          motivo: "Ambos os corpos coincidem em um mesmo ponto da reta."
        },
        fase3: [
          "Igualando posições: \\(10t = 200 - 15t\\)",
          "Passando o termo negativo para a esquerda: \\(10t + 15t = 200\\)",
          "Somando os coeficientes: \\(25t = 200\\)",
          "Divisão final: \\(t = \\cfrac{200}{25} = 8\\) segundos (Alternativa B)."
        ]
      }
    ]
  },

  E: {
    titulo: "Lista Dupla E",
    questoes: [
      {
        numero: 1,
        id: "#BWW537Y",
        pontos: "1,50 pts",
        enunciado: "Um móvel realiza um movimento retilíneo uniforme com velocidade constante de 12 m/s. No instante t = 0, sua posição é de 40 m. Qual será a posição do móvel após 7 segundos?",
        alternativas: ["a) 100 m", "b) 112 m", "c) 120 m", "d) 124 m", "e) 140 m"],
        correta: 3,
        fase1: [
          { termo: "Velocidade constante (v)", valor: "12 m/s" },
          { termo: "Posição inicial (S₀)", valor: "40 m" },
          { termo: "Tempo (t)", valor: "7 s" },
          { termo: "Incógnita", valor: "Posição final S" }
        ],
        fase2: {
          nome: "Função Horária da Posição (MRU)",
          formula: "\\(S = S_0 + v \\cdot t\\)",
          motivo: "Movimento retilíneo com velocidade constante."
        },
        fase3: [
          "Substituindo na fórmula: \\(S = 40 + 12 \\cdot 7\\)",
          "Multiplicação: \\(S = 40 + 84\\)",
          "Posição final: \\(S = 124\\) metros (Alternativa D)."
        ]
      },
      {
        numero: 2,
        id: "#ZRRX97K",
        pontos: "1,50 pts",
        enunciado: "Um ciclista se desloca com velocidade constante de 36 km/h. Qual é o valor dessa velocidade em metros por segundo? Considere: 1 km = 1000 m, 1 h = 3600 s.",
        alternativas: ["a) 8 m/s", "b) 10 m/s", "c) 12 m/s", "d) 14 m/s", "e) 15 m/s"],
        correta: 1,
        fase1: [
          { termo: "Velocidade em km/h", valor: "36 km/h" },
          { termo: "Unidade de destino", valor: "m/s" },
          { termo: "Fator de conversão", valor: "Dividir por 3,6" }
        ],
        fase2: {
          nome: "Conversão Fundamental de Velocidade",
          formula: "\\(v (\\text{m/s}) = \\cfrac{v (\\text{km/h})}{3,6}\\)",
          motivo: "Padronização no Sistema Internacional de Unidades."
        },
        fase3: [
          "Divisão direta: \\(v = \\cfrac{36}{3,6}\\)",
          "Resultado exato: \\(v = 10\\) m/s (Alternativa B)."
        ]
      },
      {
        numero: 3,
        id: "#9XXZVD8",
        pontos: "2,00 pts",
        enunciado: "Uma motocicleta aumenta sua velocidade de 4 m/s para 16 m/s durante um intervalo de 3 segundos. Considerando que a aceleração é constante, qual é a aceleração média da motocicleta nesse intervalo?",
        alternativas: ["a) 2 m/s²", "b) 3 m/s²", "c) 4 m/s²", "d) 5 m/s²", "e) 6 m/s²"],
        correta: 2,
        fase1: [
          { termo: "Velocidade inicial (v₀)", valor: "4 m/s" },
          { termo: "Velocidade final (v)", valor: "16 m/s" },
          { termo: "Intervalo de tempo (Δt)", valor: "3 s" },
          { termo: "Incógnita", valor: "Aceleração escalar média (a_m)" }
        ],
        fase2: {
          nome: "Aceleração Escalar Média",
          formula: "\\(a_m = \\cfrac{v - v_0}{\\Delta t}\\)",
          motivo: "Variação de velocidade uniforme pelo tempo decorrido."
        },
        fase3: [
          "Variação de velocidade: \\(\\Delta v = 16 - 4 = 12\\) m/s",
          "Dividindo pelo tempo: \\(a_m = \\cfrac{12}{3}\\)",
          "Aceleração média: \\(a_m = 4\\) m/s² (Alternativa C)."
        ]
      },
      {
        numero: 4,
        id: "#8WW9RLL",
        pontos: "2,00 pts",
        enunciado: "Um objeto possui velocidade inicial de 8 m/s e movimenta-se com aceleração constante de 2 m/s² durante 6 segundos. Qual será sua velocidade ao final desse intervalo? Utilize a relação de velocidade no Movimento Uniformemente Variado - ver quadro do professor.",
        alternativas: ["a) 16 m/s", "b) 18 m/s", "c) 20 m/s", "d) 22 m/s", "e) 24 m/s"],
        correta: 2,
        fase1: [
          { termo: "Velocidade inicial (v₀)", valor: "8 m/s" },
          { termo: "Aceleração constante (a)", valor: "2 m/s²" },
          { termo: "Tempo (t)", valor: "6 s" },
          { termo: "Incógnita", valor: "Velocidade final (v)" }
        ],
        fase2: {
          nome: "Função Horária da Velocidade no MUV (Vovô Ateu)",
          formula: "\\(v = v_0 + a \\cdot t\\)",
          motivo: "Conhecemos a velocidade inicial, aceleração constante e o tempo de percurso."
        },
        fase3: [
          "Substituição na fórmula: \\(v = 8 + 2 \\cdot 6\\)",
          "Multiplicação prioritária: \\(v = 8 + 12\\)",
          "Velocidade adquirida: \\(v = 20\\) m/s (Alternativa C)."
        ]
      },
      {
        numero: 5,
        id: "#NEE8V2P",
        pontos: "3,00 pts",
        enunciado: "Dois móveis, A e B, percorrem uma mesma trajetória retilínea, movimentando-se em sentidos opostos com velocidades constantes. No instante t = 0: o móvel A encontra-se na posição S₁ = 30 m e possui velocidade v₁ = 8 m/s no sentido positivo; o móvel B encontra-se na posição S₂ = 150 m e possui velocidade v₂ = 12 m/s no sentido negativo. As posições são dadas por S₁ = 30 + 8t e S₂ = 150 - 12t. Em qual posição ocorrerá o encontro entre os dois móveis?",
        alternativas: ["a) 60 m", "b) 66 m", "c) 78 m", "d) 84 m", "e) 90 m"],
        correta: 2,
        fase1: [
          { termo: "Função do móvel A", valor: "S₁ = 30 + 8t" },
          { termo: "Função do móvel B", valor: "S₂ = 150 - 12t" },
          { termo: "Condição de encontro", valor: "S₁ = S₂" },
          { termo: "Atenção ao pedido", valor: "Posição S de encontro (em metros)" }
        ],
        fase2: {
          nome: "Equação de Encontro e Substituição na Função de Posição",
          formula: "\\(S_1(t) = S_2(t) \\Rightarrow S(t)\\)",
          motivo: "Primeiro calcula-se o instante t comum e em seguida calcula-se o espaço S correspondente."
        },
        fase3: [
          "Igualando as posições: \\(30 + 8t = 150 - 12t\\)",
          "Agrupando t: \\(8t + 12t = 150 - 30 \\Rightarrow 20t = 120 \\Rightarrow t = 6\\) segundos (instante de encontro)",
          "Calculando a posição em S₁: \\(S_1 = 30 + 8 \\cdot 6 = 30 + 48 = 78\\) metros",
          "Verificação em S₂: \\(S_2 = 150 - 12 \\cdot 6 = 150 - 72 = 78\\) metros (Alternativa C)."
        ]
      }
    ]
  }
};

/* =========================================================================
   CONTROLE DE INTERFACE E EVENTOS (FLUXO DIDÁTICO)
========================================================================= */

let provaAtual = "A";
let passosRevelados = 0;

// Função para re-renderizar o KaTeX após mudanças no DOM
function renderizarMath() {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ]
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarQuadroFormulas();
  renderizarQuestoes(provaAtual);
  configurarAbas();
  // renderizarMath() já é chamado dentro das funções acima
});

// Renderiza o painel superior de fórmulas a partir do DATABASE
function renderizarQuadroFormulas() {
  const painel = document.getElementById("painel-equacoes");
  painel.innerHTML = "";
  DATABASE.cinematica.items.forEach(eq => {
    const card = document.createElement("div");
    card.className = "card-formula";
    card.innerHTML = `
      <div><span class="tag-tipo">${eq.badge}</span> <strong>${eq.concept}</strong></div>
      <div style="font-family: 'Fira Code', monospace; color: ${COLORS.blue}; margin: 6px 0; font-weight: bold;">
        ${eq.formulaTexto}
      </div>
      <div style="font-size: 0.95rem; color: #495057;">${eq.descricao}</div>
    `;
    painel.appendChild(card);
  });
  renderizarMath();
}

// Configura troca de abas (Provas A a E)
function configurarAbas() {
  const botoes = document.querySelectorAll(".btn-aba");
  botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      botoes.forEach(b => b.classList.remove("ativa"));
      btn.classList.add("ativa");
      provaAtual = btn.dataset.prova;
      renderizarQuestoes(provaAtual);
      window.scrollTo({ top: 320, behavior: "smooth" });
    });
  });
}

// Monta a lista de questões da prova selecionada
function renderizarQuestoes(letraProva) {
  const container = document.getElementById("lista-questoes");
  container.innerHTML = "";
  const lista = PROVAS[letraProva].questoes;

  lista.forEach((q, index) => {
    const qEl = document.createElement("article");
    qEl.className = "questao-card";
    qEl.innerHTML = `
      <div class="card-cabecalho">
        <span class="num-q">${q.numero}</span>
        <span class="q-id">ID: ${q.id}</span>
        <span class="pontos">${q.pontos}</span>
      </div>

      <div class="enunciado">${q.enunciado}</div>

      <ul class="lista-alternativas">
        ${q.alternativas.map((alt, i) => `
          <li class="item-alt ${i === q.correta ? 'correta' : ''}">${alt}</li>
        `).join("")}
      </ul>

      <!-- FASES DIDÁTICAS -->
      <div class="fases-container">
        
        <!-- FASE I: EXTRAÇÃO DOS DADOS -->
        <section class="fase-bloco fase-1" id="fase1-q${index}">
          <h3 class="fase-titulo">Fase I: Leitura e Extração dos Dados</h3>
          <p style="margin: 4px 0; font-size: 1rem; color: #495057;">Interpretação do enunciado e identificação das variáveis no S.I.</p>
          
          <button type="button" class="btn-fase" onclick="revelarFase(this, 'conteudo-fase1-q${index}')">
            Revelar Fase I (Dados)
          </button>

          <div id="conteudo-fase1-q${index}" class="fase-conteudo oculto">
            <table class="tabela-dados">
              <thead>
                <tr>
                  <th>Grandeza / Informação</th>
                  <th>Valor Extraído do Texto</th>
                </tr>
              </thead>
              <tbody>
                ${q.fase1.map(d => `
                  <tr>
                    <td><strong>${d.termo}</strong></td>
                    <td>${d.valor}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </section>

        <!-- FASE II: SELEÇÃO DA EQUAÇÃO -->
        <section class="fase-bloco fase-2" id="fase2-q${index}">
          <h3 class="fase-titulo">Fase II: Seleção da Equação Correta</h3>
          <p style="margin: 4px 0; font-size: 1rem; color: #495057;">Escolha da ferramenta matemática com base nos dados conhecidos.</p>
          
          <button type="button" class="btn-fase" onclick="revelarFase(this, 'conteudo-fase2-q${index}')">
            Revelar Fase II (Equação)
          </button>

          <div id="conteudo-fase2-q${index}" class="fase-conteudo oculto">
            <span class="badge-equacao">${q.fase2.formula}</span>
            <p><strong>Conceito:</strong> ${q.fase2.nome}</p>
            <p><strong>Por que usar esta equação?</strong> ${q.fase2.motivo}</p>
          </div>
        </section>

        <!-- FASE III: RESOLUÇÃO DETALHADA -->
        <section class="fase-bloco fase-3" id="fase3-q${index}">
          <h3 class="fase-titulo">Fase III: Resolução Passo a Passo</h3>
          <p style="margin: 4px 0; font-size: 1rem; color: #495057;">Substituições, simplificações e conferência do gabarito.</p>
          
          <button type="button" class="btn-fase" onclick="revelarFase(this, 'conteudo-fase3-q${index}')">
            Revelar Fase III (Resolução)
          </button>

          <div id="conteudo-fase3-q${index}" class="fase-conteudo oculto">
            <ol class="passos-resolucao">
              ${q.fase3.map(p => `<li>${p}</li>`).join("")}
            </ol>
            <div style="font-family: 'Caveat', cursive; font-size: 1.35rem; color: var(--green); font-weight: bold; margin-top: 8px;">
              Gabarito verificado com sucesso!
            </div>
          </div>
        </section>

      </div>
    `;
    container.appendChild(qEl);
  });
  renderizarMath();
}

// Controla a abertura gradativa de cada fase e contabiliza o progresso
function revelarFase(botao, conteudoId) {
  const painel = document.getElementById(conteudoId);
  if (painel.classList.contains("oculto")) {
    painel.classList.remove("oculto");
    botao.classList.add("concluida");
    botao.textContent = "Fase Concluída ✓";
    passosRevelados++;
    atualizarBarraProgresso();
    // Re-renderizar KaTeX para o novo conteúdo
    renderizarMath();
  }
}

function atualizarBarraProgresso() {
  const el = document.getElementById("progresso-geral");
  if (el) {
    el.textContent = `${passosRevelados} Passos Analisados`;
  }
}
