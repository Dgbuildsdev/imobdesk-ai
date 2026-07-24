\# ImobDesk AI



\## Plataforma SaaS Inteligente para Despachantes Imobiliários



!\[Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange)

!\[Backend](https://img.shields.io/badge/backend-NestJS-red)

!\[Database](https://img.shields.io/badge/database-PostgreSQL-blue)

!\[ORM](https://img.shields.io/badge/ORM-Prisma-black)

!\[AI](https://img.shields.io/badge/AI-Gemini-green)



\---



\## Sobre o Projeto



O \*\*ImobDesk AI\*\* é uma plataforma SaaS desenvolvida para modernizar a operação de despachantes imobiliários, imobiliárias e profissionais envolvidos em documentação imobiliária.



A plataforma centraliza:



\- Clientes

\- Imóveis

\- Processos imobiliários

\- Documentos

\- Tarefas

\- Financeiro

\- Comunicação

\- Inteligência Artificial



em um único ambiente.



O objetivo é transformar processos burocráticos em fluxos digitais inteligentes, aumentando produtividade, organização e controle operacional.



\---



\# Visão Geral da Plataforma



Fluxo principal:



```

Cliente

&#x20;  |

&#x20;  v

Atendimento

&#x20;  |

&#x20;  v

Imóvel

&#x20;  |

&#x20;  v

Processo Imobiliário

&#x20;  |

&#x20;  v

Documentação

&#x20;  |

&#x20;  v

Contrato

&#x20;  |

&#x20;  v

Financeiro

```



\---



\# Funcionalidades



\## Clientes



Gestão completa de clientes:



\- Cadastro de pessoas físicas e jurídicas

\- CPF/CNPJ

\- Telefones

\- E-mails

\- Histórico de relacionamento

\- Associação com processos



\---



\## Imóveis



Controle de propriedades:



\- Cadastro de imóveis

\- Tipo de imóvel

\- Endereço completo

\- Cidade e estado

\- Matrícula

\- Histórico vinculado aos processos



\---



\## Processos Imobiliários



Sistema de workflow:



\- Criação de processos

\- Tipos de processos

\- Etapas personalizadas

\- Controle de andamento

\- Responsáveis

\- Status

\- Histórico



Exemplos:



\- Compra e venda

\- Transferência de propriedade

\- Escrituras

\- Regularizações

\- Financiamentos



\---



\## Documentos



Gestão documental:



\- Upload de arquivos

\- Organização por processo

\- Controle de documentos pendentes

\- Validação documental

\- Histórico



\---



\## Tarefas



Gestão operacional:



\- Criação de tarefas

\- Responsáveis

\- Prioridades

\- Datas

\- Status

\- Notificações



\---



\## Financeiro



Estrutura preparada para:



\- Receitas

\- Despesas

\- Relatórios

\- Indicadores

\- Dashboard financeiro



\---



\# Inteligência Artificial



O ImobDesk AI terá recursos inteligentes:



\- Atendimento automático

\- Assistente interno

\- Sugestão de ações

\- Análise de documentos

\- Automação de tarefas



Tecnologias:



\- Google Gemini

\- AI SDK

\- Agentes inteligentes



\---



\# Arquitetura SaaS Multiempresa



O sistema foi projetado para múltiplas organizações.



Cada empresa possui:



\- Usuários próprios

\- Clientes próprios

\- Imóveis próprios

\- Processos próprios

\- Dados isolados



Modelo baseado em:



\- Organization ID

\- JWT

\- RBAC

\- Controle de permissões



\---



\# Tecnologias



\## Backend



\- NestJS

\- Node.js

\- TypeScript

\- Prisma ORM

\- PostgreSQL

\- JWT Authentication



\---



\## Frontend



\- Next.js

\- React

\- TypeScript

\- Tailwind CSS



\---



\## Infraestrutura



\- Docker

\- Docker Compose

\- GitHub Actions

\- pnpm Workspace



\---



\## Qualidade



Ferramentas:



\- ESLint

\- Prettier

\- Jest

\- TypeScript Strict Mode



\---



\# Estrutura Atual



```

imobdesk-ai



├── apps

│

│   ├── api

│   │   ├── auth

│   │   ├── users

│   │   ├── organizations

│   │   ├── clients

│   │   ├── properties

│   │   ├── processes

│   │   ├── documents

│   │   ├── tasks

│   │   ├── finance

│   │   ├── dashboard

│   │   ├── whatsapp

│   │   ├── ai

│   │   └── prisma

│   │

│   └── web

│

├── packages

├── docker

├── docs

│

├── docker-compose.yml

├── pnpm-workspace.yaml

└── README.md

```



\---



\# Status Atual



\## Concluído



\- Estrutura NestJS

\- Prisma configurado

\- PostgreSQL integrado

\- Autenticação JWT

\- Multiempresa

\- Usuários

\- Clientes

\- Imóveis

\- Processos

\- Migrations

\- ESLint

\- Prettier

\- GitHub Actions



\---



\# Roadmap



\## Fase 1 - Fundação SaaS



Concluído:



\- Backend

\- Banco de dados

\- Autenticação

\- Estrutura multiempresa





\## Fase 2 - Operação Imobiliária



Em desenvolvimento:



\- Workflow completo

\- Documentos

\- Tarefas

\- Notificações

\- Dashboard





\## Fase 3 - Inteligência Artificial



Planejado:



\- Assistente IA

\- Automações

\- Análise inteligente

\- WhatsApp





\## Fase 4 - Plataforma SaaS



Planejado:



\- Planos

\- Assinaturas

\- Pagamentos

\- Dashboard premium

\- Área administrativa



\---



\# Desenvolvimento



Instalar:



```bash

pnpm install

```



Subir infraestrutura:



```bash

docker compose up -d

```



Executar API:



```bash

pnpm --filter api dev

```



Executar Web:



```bash

pnpm --filter web dev

```



\---



\# Licença



Projeto privado em desenvolvimento.



Todos os direitos reservados.



