# 💼 Planejamento Financeiro Pessoal

Aplicação web completa de planejamento financeiro pessoal — visual, automatizada e estratégica.

## ✨ Funcionalidades

| Módulo | Descrição |
|--------|-----------|
| 👤 **Perfil** | Cadastro pessoal, perfil de investidor e objetivo |
| 📊 **Orçamento** | Receitas, despesas e análise da Regra 50/30/20 |
| 💳 **Dívidas** | Estratégias Bola de Neve e Avalanche |
| 🎯 **Metas** | Metas com barra de progresso e projeção |
| 🩺 **Diagnóstico** | Score financeiro + radar + plano de ação |
| 📅 **Acompanhamento** | Histórico mensal com gráfico de área |

## 🚀 Deploy no Vercel (3 passos)

### Opção A — Via GitHub (recomendado)

1. Faça upload desta pasta para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com) → **Add New Project**
3. Importe o repositório → clique **Deploy**

> O Vercel detecta Vite automaticamente. Nenhuma configuração extra necessária.

### Opção B — Via Vercel CLI

```bash
npm install -g vercel
cd planejamento-financeiro-pessoal
npm install
vercel
```

## 🛠️ Desenvolvimento local

```bash
npm install
npm run dev
# Acesse http://localhost:5173
```

## 📦 Build para produção

```bash
npm run build
# Arquivos gerados em /dist
```

## 🏗️ Estrutura do projeto

```
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx              ← Layout, header, tabs
    ├── index.css            ← Variáveis CSS globais
    ├── hooks/
    │   └── useFinancas.js   ← Estado global centralizado
    ├── utils/
    │   └── format.js        ← Formatadores e constantes
    ├── components/
    │   └── UI.jsx           ← Componentes reutilizáveis
    └── pages/
        ├── TabPerfil.jsx
        ├── TabOrcamento.jsx
        ├── TabDividas.jsx
        ├── TabMetas.jsx
        ├── TabDiagnostico.jsx
        └── TabAcompanhamento.jsx
```

## 🧰 Tecnologias

- **React 18** + **Vite 5**
- **Recharts** — gráficos (AreaChart, RadarChart, BarChart)
- **Lucide React** — ícones
- **Google Fonts** — Syne (display) + DM Sans (body)
- CSS Variables — tema dark consistente

## 📄 Licença

MIT — uso livre, comercial ou pessoal.
