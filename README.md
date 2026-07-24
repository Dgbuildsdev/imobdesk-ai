\# 🚀 ImobDesk AI



\## Plataforma SaaS Inteligente para Despachantes Imobiliários



!\[Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange)

!\[Backend](https://img.shields.io/badge/backend-NestJS-red)

!\[Database](https://img.shields.io/badge/database-PostgreSQL-blue)

!\[ORM](https://img.shields.io/badge/ORM-Prisma-black)

!\[AI](https://img.shields.io/badge/AI-Gemini-green)



\---



\# 📌 Sobre o Projeto



O \*\*ImobDesk AI\*\* é uma plataforma SaaS desenvolvida para modernizar a operação de:



\- Despachantes imobiliários

\- Imobiliárias

\- Escritórios de documentação imobiliária

\- Profissionais do mercado imobiliário



A plataforma centraliza toda a operação em um único ambiente:



\- Gestão de clientes

\- Gestão de imóveis

\- Processos imobiliários

\- Documentação

\- Tarefas

\- Financeiro

\- Comunicação

\- Inteligência Artificial



O objetivo é substituir controles manuais e planilhas por uma plataforma inteligente, segura e escalável.



\---



\# 🎯 Visão do Produto



O ImobDesk AI será uma plataforma completa para acompanhar todo ciclo imobiliário:



```text

Cliente

&#x20;  |

&#x20;  v

Atendimento

&#x20;  |

&#x20;  v

Cadastro do Imóvel

&#x20;  |

&#x20;  v

Processo Imobiliário

&#x20;  |

&#x20;  v

Documentação

&#x20;  |

&#x20;  v

Aprovação

&#x20;  |

&#x20;  v

Financeiro

&#x20;  |

&#x20;  v

Conclusão

```



\---



\# 🏢 Funcionalidades



\## 👥 Gestão de Clientes



Controle completo de clientes:



\- Pessoa física e jurídica

\- CPF/CNPJ

\- Telefones

\- E-mails

\- Histórico de atendimento

\- Relacionamento com processos



\---



\# 🏠 Gestão de Imóveis



Cadastro e controle de propriedades:



\- Tipo de imóvel

\- Endereço completo

\- Cidade e estado

\- Matrícula

\- Histórico

\- Processos vinculados



\---



\# 📂 Processos Imobiliários



Sistema de workflow completo:



\- Criação de processos

\- Tipos personalizados

\- Etapas configuráveis

\- Responsáveis

\- Status

\- Histórico de alterações



Exemplos:



\- Compra e venda

\- Transferência

\- Escrituras

\- Regularizações

\- Financiamentos



\---



\# 📄 Gestão Documental



Controle inteligente de documentos:



\- Upload de arquivos

\- Organização por processo

\- Documentos pendentes

\- Validação documental

\- Histórico

\- Controle de prazos



\---



\# ✅ Gestão de Tarefas



Organização operacional:



\- Criação de tarefas

\- Responsáveis

\- Prioridades

\- Datas

\- Status

\- Notificações



\---



\# 💰 Financeiro



Módulo financeiro:



\- Receitas

\- Despesas

\- Relatórios

\- Indicadores

\- Dashboard financeiro



\---



\# 🤖 Inteligência Artificial



O ImobDesk AI contará com recursos inteligentes:



\- Atendimento automático

\- Assistente interno

\- Sugestões inteligentes

\- Análise documental

\- Automação de processos



Tecnologias:



\- Google Gemini API

\- AI SDK

\- Agentes inteligentes



\---



\# 🏢 Arquitetura SaaS Multiempresa



O sistema foi projetado para múltiplas organizações.



Cada empresa terá:



\- Usuários próprios

\- Clientes próprios

\- Imóveis próprios

\- Processos próprios

\- Dados isolados



Segurança baseada em:



\- Organization ID

\- JWT Authentication

\- RBAC

\- Controle de permissões



\---



\# 🛠️ Stack Tecnológica



\## Backend



\- NestJS

\- Node.js

\- TypeScript

\- Prisma ORM

\- PostgreSQL

\- JWT

\- Jest



\---



\## Frontend



\- Next.js

\- React

\- TypeScript

\- Tailwind CSS

\- Shadcn UI

\- Radix UI



\---



\## Infraestrutura



\- Docker

\- Docker Compose

\- pnpm Workspace

\- Git

\- GitHub Actions

\- CI/CD



\---



\# 🧱 Arquitetura do Projeto



```

imobdesk-ai



├── apps



│   ├── api

│   │

│   ├── auth

│   ├── users

│   ├── organizations

│   ├── clients

│   ├── properties

│   ├── processes

│   ├── documents

│   ├── tasks

│   ├── finance

│   ├── dashboard

│   ├── whatsapp

│   ├── ai

│   └── prisma

│

│

└── web



├── packages



├── docker



├── docs



├── docker-compose.yml



├── pnpm-workspace.yaml



└── README.md

```



\---



\# ✅ Status Atual



\## Concluído



\- Estrutura inicial NestJS

\- Arquitetura modular

\- Prisma configurado

\- PostgreSQL integrado

\- Autenticação JWT

\- Sistema multiempresa

\- Usuários

\- Clientes

\- Imóveis

\- Processos

\- Migrations Prisma

\- ESLint

\- Prettier

\- GitHub Actions



\---



\# 🚧 Em Desenvolvimento



Próximas entregas:



\- Workflow completo

\- Documentos

\- Tarefas

\- Notificações

\- Dashboard

\- IA integrada

\- WhatsApp

\- Frontend SaaS

\- Controle avançado de permissões



\---



\# 🗺️ Roadmap



\## Fase 1 - Fundação SaaS ✅



\- Backend

\- Banco de dados

\- Autenticação

\- Multiempresa





\## Fase 2 - Operação Imobiliária



\- Processos completos

\- Documentos

\- Workflow

\- Tarefas

\- Notificações





\## Fase 3 - Inteligência Artificial



\- Assistente IA

\- Automações

\- Análise inteligente

\- WhatsApp





\## Fase 4 - Plataforma SaaS Completa



\- Planos

\- Assinaturas

\- Pagamentos

\- Dashboard premium

\- Área administrativa



\---



\# 💻 Desenvolvimento Local



Instalar dependências:



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



\# 🔒 Licença



Projeto privado em desenvolvimento.



Todos os direitos reservados.



\---



\# 👨‍💻 Desenvolvimento



Projeto desenvolvido com foco em:



\- Arquitetura escalável

\- Código limpo

\- Segurança

\- Boas práticas

\- Preparação para crescimento SaaS

