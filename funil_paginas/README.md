# Funil de Vendas — Protocolo de Longevidade (Dr. Santiago Vecina)

Site estático (HTML puro) pronto para deploy na **Vercel**.

## Estrutura

| Arquivo | Rota pública | Página |
|---|---|---|
| `index.html` | `/` | Captura / Isca digital |
| `vendas.html` | `/vendas` | Página de vendas ($17) |
| `obrigado.html` | `/obrigado` | Obrigado / Entrega + download |
| `vercel.json` | — | Config (clean URLs, headers, cache) |
| `_fonte_react/` | — | Versão React (.tsx) — só referência, **não** é publicada |

Fluxo: `/` → (formulário) → `/vendas` → (comprar) → `/obrigado`

## ⚠️ Antes de publicar

1. **Adicione o PDF do protocolo** na raiz desta pasta com o nome exato:
   `Protocolo_Longevidade_Reset45Dias_Dr_Santiago.pdf`
   (O botão "Baixar o Protocolo" em `/obrigado` aponta para esse arquivo. Sem ele, o download dá 404.)
2. Troque o e-mail de suporte e o botão de compra pelo link real do checkout
   (Hotmart/Stripe) — hoje o botão de vendas apenas avança para `/obrigado`.

## Como subir na Vercel

### Opção A — CLI (mais rápido)
```bash
npm i -g vercel
cd funil_paginas
vercel          # preview
vercel --prod   # produção
```

### Opção B — Git + Vercel Dashboard
1. Suba esta pasta para um repositório no GitHub/GitLab.
2. Em vercel.com → **Add New Project** → importe o repositório.
3. Framework Preset: **Other** · Build Command: *(vazio)* · Output Directory: `./`
4. Deploy.

### Opção C — Drag & drop
Arraste a pasta em https://vercel.com/new (ou use o Netlify Drop).

> Como é site estático, não há build. A Vercel serve os arquivos direto.
