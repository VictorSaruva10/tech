
# Tech Blog - O Futuro da Tecnologia Está Aqui

Um blog moderno sobre tecnologia, games, smartphones, hardware e inovações digitais.

## 🚀 Deploy na Netlify

### Método 1: Deploy Automático via Git
1. Conecte seu repositório GitHub à Netlify
2. Configure as seguintes opções:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

### Método 2: Deploy Manual
```bash
# 1. Instalar dependências
npm install

# 2. Fazer build de produção
npm run build

# 3. Deploy manual (arrastar pasta dist para Netlify)
```

### Método 3: Netlify CLI
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login na Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Verificação de tipos
npm run type-check

# Linting
npm run lint
```

## 📁 Estrutura do Projeto

```
tech-blog/
├── public/
│   ├── _headers          # Headers HTTP da Netlify
│   └── _redirects        # Redirecionamentos
├── src/
│   ├── components/       # Componentes React
│   ├── pages/           # Páginas da aplicação
│   ├── hooks/           # Hooks customizados
│   └── lib/             # Utilitários
├── netlify.toml         # Configuração principal da Netlify
└── vite.config.ts       # Configuração do Vite
```

## 🔧 Configurações de Produção

### Otimizações Implementadas:
- ✅ Code splitting automático
- ✅ Compressão de assets
- ✅ Cache otimizado (1 ano para assets)
- ✅ Headers de segurança
- ✅ Redirecionamento SPA
- ✅ Minificação com Terser
- ✅ Sourcemaps desabilitados em produção

### Recursos:
- 📱 Design responsivo
- ⚡ Performance otimizada
- 🔒 Headers de segurança
- 🎨 Animações com Framer Motion
- 🧭 Navegação com React Router
- ❤️ Sistema de favoritos

## 🌐 URLs de Produção

Após o deploy, as seguintes rotas estarão disponíveis:
- `/` - Página inicial
- `/noticias` - Últimas notícias
- `/lancamentos` - Lançamentos do mês
- `/reviews` - Reviews da semana
- `/contato` - Página de contato
- `/gaming` - Seção de games
- `/mobile` - Smartphones e tablets
- `/hardware` - Computadores e hardware
- `/ai` - Inteligência artificial
- `/vr` - Realidade virtual
- `/sustentabilidade` - Tecnologia sustentável

## 📊 Performance

O projeto está otimizado para:
- **Lighthouse Score**: 90+ em todas as métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s

## 🔗 Links Úteis

- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
