/* ============ CADERNO ESCOLAR QUADRICULADO ============ */
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

:root {
  --ink: #173fa6;
  --red: #e03131;
  --green: #2f9e44;
  --yel: #ffd43b;
  --lar: #e8590c;
  --papel: #fbfdff;
  --grade: #d6e6f7;
  --destaque-fundo: #fffdf2;
}

body {
  margin: 0;
  color: #21315e;
  font-family: 'Patrick Hand', system-ui, sans-serif;
  font-size: 1.15rem;
  line-height: 1.5;
  padding: 0 14px;
  background-color: var(--papel);
  background-image: 
    linear-gradient(var(--grade) 1px, transparent 1px),
    linear-gradient(90deg, var(--grade) 1px, transparent 1px);
  background-size: 22px 22px;
}

/* Margem vermelha de caderno escolar e furos laterais */
body::before {
  content: "";
  position: fixed;
  left: 44px; top: 0; bottom: 0;
  width: 2px;
  background: #ff8787;
  opacity: .75;
  pointer-events: none;
  z-index: 0;
}
body::after {
  content: "";
  position: fixed;
  left: 0; top: 0; bottom: 0;
  width: 44px;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(circle at 20px 90px, #b9c6de 0 7px, transparent 8px) repeat-y;
  background-size: 44px 220px;
}

@media (max-width: 760px) {
  body::before, body::after { display: none; }
  body { padding: 0 10px; }
}

/* Tipografia */
h1, h2, h3, h4 {
  font-family: 'Caveat', cursive;
  color: var(--ink);
  line-height: 1.15;
  margin: .3em 0;
}

h1 { 
  font-size: clamp(2rem, 5vw, 2.7rem); 
  text-decoration: underline wavy var(--yel); 
}

h2 { font-size: 1.7rem; }
h3 { font-size: 1.4rem; }

.skip { 
  position: absolute; left: -999px; top: 0; background: #fff; padding: 8px; border: 2px solid var(--ink); 
}
.skip:focus { left: 8px; z-index: 999; }

header.topo, main, footer { 
  max-width: 980px; 
  margin: 0 auto; 
  position: relative; 
  z-index: 1; 
}

header.topo { padding-top: 22px; }

.meta-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.tag-prof {
  background: #e7f5ff;
  border: 2px solid var(--ink);
  padding: 3px 12px;
  border-radius: 8px;
  font-family: 'Caveat', cursive;
  font-size: 1.25rem;
  font-weight: bold;
}

.prog {
  border: 2px dashed var(--green);
  color: var(--green);
  border-radius: 999px;
  padding: 3px 16px;
  font-weight: bold;
  background: #fff;
}

/* Abas das Provas (A até E) */
nav[aria-label] ol { 
  display: flex; gap: 10px; list-style: none; padding: 12px 0; overflow-x: auto; margin: 0; 
}

.btn-aba {
  min-width: 100px;
  min-height: 44px;
  border: 2px solid var(--ink);
  border-radius: 12px;
  background: #fff;
  color: var(--ink);
  box-shadow: 3px 3px 0 var(--ink);
  font-family: 'Caveat', cursive;
  font-weight: 700;
  font-size: 1.35rem;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.btn-aba:hover { background: #e7f5ff; }
.btn-aba.ativa {
  background: var(--yel);
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--ink);
  border-color: #000;
}

/* Fita Adesiva Decorativa */
.tape {
  position: absolute; height: 26px; width: 110px;
  background: rgba(255, 212, 59, .75);
  top: -13px; left: 34px; transform: rotate(-4deg);
}
.tape.t2 { 
  left: auto; right: 34px; transform: rotate(3deg); background: rgba(116, 192, 252, .6); 
}

/* Cartões de Exercício */
.card, .questao-card {
  background: var(--destaque-fundo);
  border: 2px solid var(--ink);
  border-radius: 16px;
  box-shadow: 5px 5px 0 #dbe7fb;
  padding: 16px 20px;
  position: relative;
  margin: 26px 0;
}

.card-cabecalho {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  border-bottom: 2px dashed #d6e6f7;
  padding-bottom: 8px;
  margin-bottom: 12px;
}

.num-q {
  display: inline-grid; place-items: center;
  width: 42px; height: 42px;
  border: 2px solid var(--ink); border-radius: 50%;
  background: var(--yel);
  font-family: 'Caveat', cursive; font-size: 1.4rem; font-weight: 700;
}

.q-id {
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  background: #edf2ff;
  border: 1px solid #bac8ff;
  padding: 2px 8px;
  border-radius: 6px;
}

.pontos {
  margin-left: auto;
  border: 2px solid var(--lar); color: var(--lar);
  border-radius: 999px; padding: 2px 12px;
  font-size: 1rem; font-weight: bold; background: #fff;
}

.enunciado {
  font-size: 1.25rem;
  margin-bottom: 14px;
}

/* Alternativas Múltipla Escolha */
.lista-alternativas {
  list-style: none;
  padding: 0;
  margin: 10px 0 16px 0;
  display: grid;
  gap: 8px;
}

.item-alt {
  padding: 6px 12px;
  border: 2px dashed #ced4da;
  border-radius: 10px;
  background: #fff;
}

.item-alt.correta {
  border: 2px solid var(--green);
  background: #d3f9d8;
  font-weight: bold;
}

.item-alt.correta::after {
  content: "  (Gabarito Oficial)";
  color: var(--green);
  font-family: 'Caveat', cursive;
  font-size: 1.2rem;
}

/* ============ FASES DA RESOLUÇÃO (I, II e III) ============ */
.fases-container {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 14px;
}

.fase-bloco {
  border: 2px solid #94a8c9;
  border-radius: 12px;
  background: #fff;
  padding: 12px 16px;
  transition: all 0.3s ease;
}

.fase-bloco.fase-1 { border-color: #4dabf7; background: #f8fbff; }
.fase-bloco.fase-2 { border-color: #ffa94d; background: #fff9f2; }
.fase-bloco.fase-3 { border-color: #69db7c; background: #f4fbf5; }

.fase-titulo {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 0;
  font-size: 1.35rem;
}

.fase-bloco.fase-1 .fase-titulo { color: #1971c2; }
.fase-bloco.fase-2 .fase-titulo { color: var(--lar); }
.fase-bloco.fase-3 .fase-titulo { color: var(--green); }

.fase-conteudo {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px dashed #ced4da;
  animation: surgimento 0.4s ease-out;
}

.oculto { display: none !important; }

@keyframes surgimento {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Tabelas e Caixas de Dados */
.tabela-dados {
  width: 100%;
  border-collapse: collapse;
  margin: 6px 0;
  font-size: 1.1rem;
}

.tabela-dados td, .tabela-dados th {
  padding: 4px 10px;
  border-bottom: 1px dotted #bccadb;
  text-align: left;
}

.tabela-dados th { color: var(--ink); }

/* Equação Selecionada (Fase II) */
.badge-equacao {
  display: inline-block;
  font-family: 'Fira Code', monospace;
  background: #fff3bf;
  border: 2px solid var(--lar);
  border-radius: 8px;
  padding: 6px 14px;
  font-size: 1.15rem;
  font-weight: bold;
  color: #d9480f;
  margin: 6px 0;
}

/* Passos da Resolução (Fase III) */
.passos-resolucao {
  margin: 8px 0;
  padding-left: 20px;
}

.passos-resolucao li {
  margin-bottom: 8px;
}

/* Botões de Ação Didática */
.btn-fase {
  font-family: 'Caveat', cursive;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 6px 18px;
  border: 2px solid var(--ink);
  border-radius: 12px;
  background: #fff;
  color: var(--ink);
  box-shadow: 2px 2px 0 var(--ink);
  cursor: pointer;
  margin-top: 6px;
}

.btn-fase:hover { background: #edf2ff; }
.btn-fase:active { transform: translate(2px, 2px); box-shadow: none; }

.btn-fase.concluida {
  background: #b2f2bb;
  border-color: var(--green);
  color: #2b8a3e;
  box-shadow: none;
  cursor: default;
}

/* Post-its Decorativos */
.postit {
  background: #fff9b1;
  border-radius: 2px;
  box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.15);
  padding: 12px 16px;
  font-family: 'Caveat', cursive;
  font-size: 1.3rem;
  transform: rotate(-1deg);
  margin: 18px 0;
}
.postit.azul { background: #d0ebff; transform: rotate(1deg); }

/* Quadro de Fórmulas */
.grade-equacoes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 12px;
  margin-top: 10px;
}

.card-formula {
  background: #fff;
  border: 2px solid var(--ink);
  border-radius: 10px;
  padding: 8px 12px;
  box-shadow: 2px 2px 0 #cad7ee;
}

.card-formula .tag-tipo {
  font-size: 0.85rem;
  font-weight: bold;
  color: #fff;
  background: var(--ink);
  padding: 1px 6px;
  border-radius: 4px;
}

/* Ajustes para o KaTeX */
.katex-display {
  margin: 0.5em 0;
  text-align: center;
}
.katex {
  font-size: 1.1em;
}
.badge-equacao .katex {
  font-size: 1.15rem;
}
