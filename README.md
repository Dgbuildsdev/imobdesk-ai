# 🏢 ImobDesk AI

<p align="center">
  <h3 align="center">
    Plataforma SaaS Inteligente para Despachantes Imobiliários
  </h3>

  <p align="center">
    Centralize clientes, imóveis, processos, documentos, financeiro e Inteligência Artificial em uma única plataforma.
  </p>
</p>

<p align="center">

![Status](https://img.shields.io/badge/status-Em%20Desenvolvimento-orange?style=for-the-badge)
![Backend](https://img.shields.io/badge/Backend-NestJS-E0234E?style=for-the-badge&logo=nestjs)
![Database](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![AI](https://img.shields.io/badge/Google_Gemini-AI-blueviolet?style=for-the-badge)

</p>

---

# 📖 Sobre o Projeto

O **ImobDesk AI** é uma plataforma SaaS desenvolvida para modernizar a rotina de despachantes imobiliários, imobiliárias e profissionais especializados em documentação imobiliária.

A proposta da plataforma é reunir todas as operações em um único ambiente inteligente, automatizando processos burocráticos e aumentando significativamente a produtividade das equipes.

A aplicação foi planejada para ser totalmente escalável, preparada para múltiplas empresas (Multi-Tenant) e integrada com Inteligência Artificial para auxiliar usuários durante toda a operação.

---

# 🎯 Objetivos

- 🚀 Automatizar processos imobiliários
- 📄 Organizar documentos digitalmente
- 📊 Centralizar toda a gestão operacional
- 🤖 Utilizar Inteligência Artificial no atendimento
- 📈 Melhorar produtividade
- 🔒 Garantir segurança dos dados
- 🏢 Atender múltiplas empresas em uma única plataforma

---

# ✨ Funcionalidades

## 👥 Gestão de Clientes

- Cadastro de Pessoa Física e Jurídica
- CPF / CNPJ
- Telefones
- E-mails
- Histórico de atendimento
- Relacionamento com processos

---

## 🏠 Gestão de Imóveis

- Cadastro de propriedades
- Tipo do imóvel
- Endereço completo
- Cidade e Estado
- Matrícula
- Organização por empresa
- Histórico de movimentações

---

## 📂 Gestão de Processos

Sistema completo de Workflow.

Exemplos de processos:

- Compra e Venda
- Transferência
- Escrituras
- Regularizações
- Financiamentos
- Documentações

Recursos:

- Tipos personalizados
- Etapas configuráveis
- Responsáveis
- Status
- Histórico completo

---

## 📄 Gestão Documental

- Upload de documentos
- Organização por processo
- Validação documental
- Controle de pendências
- Histórico
- Alertas de vencimento

---

## ✅ Gestão de Tarefas

- Criação de tarefas
- Responsáveis
- Prioridades
- Datas
- Status
- Notificações

---

## 💰 Financeiro

- Receitas
- Despesas
- Indicadores
- Dashboard Financeiro
- Relatórios

---

## 📊 Dashboard

Painel administrativo contendo:

- Clientes
- Processos
- Imóveis
- Financeiro
- Indicadores
- Produtividade
- Métricas

---

## 🤖 Inteligência Artificial

Integração com IA para:

- Atendimento automático
- Assistente interno
- Criação de documentos
- Sugestões inteligentes
- Automação de tarefas
- Análise de informações

Tecnologias previstas:

- Google Gemini API
- AI SDK
- Agentes Inteligentes

---

## 📅 Agenda

- Compromissos
- Prazos
- Reuniões
- Alertas
- Integração futura com Google Calendar

---

## 📱 Comunicação

Integração com WhatsApp para:

- Atendimento ao cliente
- Avisos automáticos
- Atualização dos processos
- Comunicação comercial

---

# 🏢 Arquitetura SaaS

O sistema foi desenvolvido utilizando arquitetura Multi-Tenant.

Cada empresa possui ambiente totalmente isolado.

Cada organização possui:

- Usuários
- Clientes
- Imóveis
- Processos
- Documentos
- Financeiro

Controle realizado através de:

- Organization ID
- JWT
- RBAC
- Guards do NestJS

---

# 🔒 Segurança

- JWT Authentication
- RBAC
- Guards do NestJS
- Proteção de Rotas
- Validação de Dados
- Isolamento por Organização
- Prisma ORM
- TypeScript Strict

---

# 🚀 Stack Tecnológica

## Backend

- NestJS
- Node.js
- TypeScript

---

## Banco de Dados

- PostgreSQL
- Prisma ORM

---

## Frontend (Planejado)

- Next.js
- React
- Tailwind CSS
- Shadcn UI
- Radix UI
- Lucide Icons

---

## Inteligência Artificial

- Google Gemini API
- AI SDK
- Agentes Inteligentes

---

## Infraestrutura

- Docker
- Docker Compose
- Git
- GitHub

---

## Qualidade de Código

- ESLint
- Prettier
- Jest
- Husky
- TypeScript Strict Mode

---

# 📂 Estrutura Atual

```text
src/
├── auth/
├── users/
├── organizations/
├── clients/
├── properties/
├── processes/
├── process-types/
├── process-stages/
├── documents/
├── tasks/
├── finance/
├── dashboard/
├── calendar/
├── whatsapp/
├── notifications/
├── ai/
├── prisma/
└── common/
```

---

# ⚙️ Como Executar

## Clone o projeto

```bash
git clone https://github.com/seuusuario/imobdesk-ai.git
```

## Entre na pasta

```bash
cd imobdesk-ai
```

## Instale as dependências

```bash
npm install
```

## Configure o arquivo `.env`

```env
DATABASE_URL=
JWT_SECRET=
GEMINI_API_KEY=
PORT=3000
```

## Execute o PostgreSQL

```bash
docker compose up -d
```

## Execute as migrations

```bash
npx prisma migrate dev
```

## Inicie o servidor

```bash
npm run start:dev
```

---

# 📌 Status Atual

## ✅ Concluído

- Estrutura NestJS
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Multiempresa
- CRUD Usuários
- CRUD Clientes
- CRUD Imóveis
- CRUD Processos
- Migrations
- ESLint
- Prettier
- Versionamento Git

---

## 🚧 Em Desenvolvimento

- Tipos de Processos
- Workflow
- Documentos
- Tarefas
- Financeiro
- Dashboard
- Inteligência Artificial
- WhatsApp
- Frontend SaaS
- Controle Avançado de Permissões

---

# 🗺️ Roadmap

## ✅ Fase 1 — Fundação

- [x] Backend
- [x] PostgreSQL
- [x] Prisma
- [x] JWT
- [x] Multiempresa

---

## 🚧 Fase 2 — Operação Imobiliária

- [ ] Workflow
- [ ] Documentos
- [ ] Tarefas
- [ ] Financeiro
- [ ] Dashboard
- [ ] Notificações

---

## 🤖 Fase 3 — Inteligência Artificial

- [ ] Assistente IA
- [ ] Geração de documentos
- [ ] Automações
- [ ] Sugestões inteligentes

---

## 🚀 Fase 4 — Plataforma SaaS

- [ ] Frontend
- [ ] Dashboard Premium
- [ ] Assinaturas
- [ ] Pagamentos
- [ ] Área Administrativa
- [ ] API Pública

---

# 💡 Visão

O ImobDesk AI tem como missão se tornar a principal plataforma inteligente para profissionais do mercado imobiliário, unificando gestão empresarial, documentação, automações e Inteligência Artificial em um único ecossistema.

Nossa visão é reduzir a burocracia, aumentar a eficiência operacional e oferecer uma experiência moderna para empresas que atuam no setor imobiliário.

---

# 👨‍💻 Desenvolvimento

Projeto desenvolvido seguindo princípios de engenharia de software modernos:

- Clean Architecture
- SOLID
- Clean Code
- Arquitetura Modular
- Domain Driven Design (DDD)
- TypeScript Strict
- Escalabilidade
- Segurança
- Multi-Tenant SaaS
- Boas práticas de desenvolvimento

---

# 📄 Licença

Este projeto é privado e está em desenvolvimento.

Todos os direitos reservados © ImobDesk AI.
