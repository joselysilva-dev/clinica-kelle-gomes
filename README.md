# 🌸 Clínica Dra. Kelle Gomes — Estética Avançada

<p align="center">
  <strong>Experiência digital premium desenvolvida para presença institucional, apresentação de serviços e conversão de clientes.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-Frontend-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

---

## ✨ Sobre o projeto

**Clínica Dra. Kelle Gomes** é uma solução web desenvolvida para transformar a presença digital de uma clínica de estética avançada em uma experiência mais profissional, sofisticada e orientada à conversão.

O projeto foi construído como uma **V1 comercial**, indo além de uma landing page demonstrativa.

A aplicação reúne posicionamento institucional, apresentação de procedimentos, resultados, formação profissional, informações de atendimento e diferentes pontos de conversão para o WhatsApp.

O desenvolvimento envolveu decisões de:

- arquitetura frontend;
- UX/UI;
- design responsivo;
- componentização;
- acessibilidade;
- identidade visual;
- estratégia de conversão;
- SEO básico;
- organização de conteúdo;
- preparação para evolução futura do produto.

> **Status:** V1 concluída, revisada, versionada e publicada para validação.

---

## 🎯 Objetivo

Criar uma presença digital capaz de representar o posicionamento profissional da Dra. Kelle Gomes e transformar o site em um ponto central para descoberta, confiança e contato.

A jornada foi estruturada para conduzir o visitante por:

**Autoridade → Procedimentos → Resultados → Formação → Atendimento → Conversão**

O WhatsApp funciona como principal canal de conversão da V1.

---

## 🖥️ Experiência desenvolvida

A página pública foi organizada em uma jornada comercial completa:

1. Navbar responsiva
2. Hero institucional
3. Posicionamento e diferenciais
4. Sobre a profissional
5. Procedimentos
6. Resultados / Before & After
7. Cursos e mentorias
8. Vídeo da clínica
9. Agenda em outras cidades
10. Diferenciais
11. FAQ
12. CTA de agendamento
13. Contato
14. Localização
15. Footer institucional

Cada seção possui responsabilidade própria dentro da experiência e foi construída de forma componentizada.

---

## 💎 Identidade visual

A interface segue uma direção:

**Premium · Feminina · Editorial · Sofisticada · Minimalista**

A identidade utiliza tons claros combinados com rosé, vinho e detalhes champagne.

### Paleta

| Papel | Cor |
|---|---|
| Off-white | `#FFF7F7` |
| Rosé claro | `#F8E2E3` |
| Rosé | `#D88C98` |
| Rosé profundo | `#B85C6C` |
| Vinho | `#7D3745` |
| Champagne | `#D8BE93` |
| Dourado suave | `#C6A46B` |
| Grafite | `#292326` |

### Tipografia

**Cormorant Garamond**  
Utilizada principalmente em títulos e elementos editoriais.

**DM Sans**  
Utilizada em textos, navegação e componentes de interface.

---

## 🧩 Principais funcionalidades

### 📱 Navegação responsiva

A navegação foi construída para se adaptar às diferentes larguras sem sobreposição de elementos.

**Desktop**

`Logo → Navegação → CTA`

**Tablet / Mobile**

`Logo → Menu hamburger`

O breakpoint principal foi definido em `1100px` para preservar a legibilidade e evitar compressão dos links em telas intermediárias.

A navegação foi validada especialmente em:

- 1440px
- 1280px
- 1100px
- 1024px
- 992px
- 900px
- 768px
- 430px
- 390px
- 360px

---

### 💬 Conversão via WhatsApp

Os CTAs utilizam mensagens contextualizadas conforme a intenção do visitante.

Existem fluxos específicos para:

- agendamento;
- informações sobre procedimentos;
- cursos e mentorias;
- agenda em outras cidades;
- interesse em resultados.

Isso reduz o atrito entre a navegação no site e o início do atendimento.

---

### 🩺 Procedimentos

A arquitetura permite apresentar diferentes áreas da estética avançada, incluindo serviços faciais e corporais.

A V1 foi preparada para apresentar procedimentos de forma organizada sem depender da exposição pública de preços.

---

### 📸 Before & After

A área de resultados foi desenvolvida como uma feature própria.

A arquitetura contempla:

- categorias;
- grid responsivo;
- cards;
- galeria;
- modal;
- lazy loading;
- navegação acessível;
- fechamento por `Escape`;
- bloqueio de scroll;
- restauração de foco.

Categorias estruturadas:

```ts
type GalleryCategory =
  | "facial"
  | "rejuvenescimento"
  | "vascular"
  | "corporal";
```

### Privacidade e integridade

A aplicação **não utiliza resultados fictícios para simular pacientes reais**.

Enquanto os materiais clínicos autorizados não estiverem disponíveis, a interface apresenta um estado visual próprio para novos resultados.

---

### 🎓 Cursos e mentorias

O projeto também contempla o posicionamento profissional voltado à formação.

A seção apresenta a área de capacitação e direciona interessados para um fluxo específico de atendimento pelo WhatsApp.

---

### 🎥 Vídeo institucional

Foi criada uma seção dedicada à apresentação do ambiente da clínica.

O vídeo utiliza:

- `controls`;
- `playsInline`;
- `preload="metadata"`;
- container responsivo;
- reprodução sem autoplay forçado com áudio.

---

### 📍 Agenda em outras cidades

A interface diferencia a localização principal de agendas especiais realizadas em outras cidades.

Essa decisão evita apresentar atendimentos itinerantes como unidades físicas permanentes.

---

## ♿ Acessibilidade

Durante o refinamento da V1 foram considerados aspectos como:

- navegação por teclado;
- atributos ARIA;
- `aria-expanded`;
- `aria-controls`;
- fechamento de modal/menu com `Escape`;
- gerenciamento de foco;
- restauração de foco;
- bloqueio adequado de scroll;
- estrutura semântica;
- estados interativos;
- redução de comportamentos problemáticos em diferentes viewports.

---

## ⚙️ Stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- CSS Modules
- Framer Motion
- Lucide React

### Engenharia e qualidade

- Git
- GitHub
- ESLint
- Componentização
- Responsive Design
- Semantic HTML
- Accessibility
- SEO básico

### Deploy

- Vercel

---

## 🏗️ Arquitetura

A aplicação utiliza uma organização frontend orientada a componentes e responsabilidades.

```text
src/
├── assets/
│   ├── images/
│   ├── logos/
│   ├── before-after/
│   └── videos/
│
├── components/
│   ├── navigation/
│   └── sections/
│
├── constants/
├── contexts/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── styles/
└── types/
```

A estrutura permite que novas funcionalidades sejam incorporadas sem transformar a Home em um componente monolítico.

---

## 🔗 Configuração centralizada de contato

Informações utilizadas em diferentes pontos da aplicação são centralizadas em:

```text
src/constants/contact.ts
```

Essa estratégia evita duplicação de dados como:

- WhatsApp;
- Instagram;
- mensagens de conversão;
- informações de contato.

Alterações futuras podem ser realizadas em um único ponto da aplicação.

---

## 🔍 SEO e experiência web

A V1 inclui uma camada inicial de otimização:

- `lang="pt-BR"`;
- título descritivo;
- meta description;
- favicon personalizado;
- manifest;
- estrutura semântica;
- navegação interna consistente;
- responsividade;
- identidade visual aplicada aos ícones da aplicação.

Título utilizado:

```text
Dra. Kelle Gomes | Estética Avançada
```

---

## 🧪 Qualidade

Antes do fechamento da V1 foram executadas revisões técnicas e visuais.

### Validado

- [x] Responsividade
- [x] Navbar desktop
- [x] Navbar tablet
- [x] Navbar mobile
- [x] Menu hamburger
- [x] Links internos
- [x] WhatsApp
- [x] Instagram
- [x] Footer
- [x] Política de Privacidade
- [x] Termos de Uso
- [x] Favicon
- [x] Manifest
- [x] Assets
- [x] Build de produção
- [x] Lint

Também foram eliminados links vazios e referências de imagem inválidas.

---

## 🚀 Executando localmente

### 1. Clone o repositório

```bash
git clone https://github.com/joselysilva-dev/clinica-kelle-gomes.git
```

### 2. Entre no projeto

```bash
cd clinica-kelle-gomes
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

### Build de produção

```bash
npm run build
```

### Lint

```bash
npm run lint
```

---

## 🔐 Variáveis de ambiente

O projeto utiliza variáveis de ambiente para configurações que podem variar entre desenvolvimento e produção.

Exemplos:

```env
VITE_API_URL=
VITE_APP_NAME=
VITE_WHATSAPP_NUMBER=
```

> Arquivos `.env` contendo configurações locais ou dados sensíveis não devem ser versionados.

---

## 🚀 Deploy

A V1 está preparada para deploy como aplicação Vite.

O fluxo utilizado é:

```text
GitHub
   ↓
Vercel
   ↓
Build
   ↓
Deploy
   ↓
Validação online
```

A publicação online permite validar a experiência real antes da apresentação e aprovação definitiva.

---

## 📊 Status da V1

| Área | Status |
|---|---|
| Arquitetura frontend | ✅ |
| Interface pública | ✅ |
| Responsividade | ✅ |
| Navegação | ✅ |
| Identidade visual | ✅ |
| WhatsApp | ✅ |
| Before & After | ✅ Estrutura pronta |
| Cursos / Mentorias | ✅ |
| Vídeo institucional | ✅ |
| SEO básico | ✅ |
| Favicon | ✅ |
| QA | ✅ |
| Build | ✅ |
| Lint | ✅ |
| GitHub | ✅ |
| Deploy de validação | ✅ |

---

## 🛣️ Roadmap

A arquitetura foi pensada para permitir que a solução deixe de ser apenas uma experiência institucional e evolua para uma plataforma de gestão.

### V2 — possibilidades futuras

```text
Website público
      │
      ├── Conteúdo dinâmico
      ├── Resultados autorizados
      ├── Procedimentos
      ├── Cursos
      └── Agenda
              │
              ▼
        Backend / API
              │
              ▼
          Banco de dados
              │
              ▼
       Painel administrativo
```

Possíveis evoluções:

- autenticação administrativa;
- painel da clínica;
- gerenciamento de procedimentos;
- gerenciamento de resultados;
- upload de imagens;
- gerenciamento de cursos;
- agenda por cidades;
- solicitações de atendimento;
- banco de dados;
- dashboard;
- conteúdo dinâmico;
- otimização de performance;
- manutenção contínua.

Esses itens representam **evoluções planejadas**, não funcionalidades públicas concluídas da V1.

---

## 🧠 Decisões de engenharia

Algumas decisões importantes tomadas durante o desenvolvimento:

**Responsividade baseada no conteúdo**  
O breakpoint da Navbar foi definido de acordo com o espaço necessário para a navegação, e não apenas por categorias genéricas de dispositivos.

**Fonte única para contatos**  
Dados recorrentes foram centralizados para reduzir inconsistências e facilitar manutenção.

**Feature própria para resultados**  
A galeria Before & After possui arquitetura independente para permitir futura integração com conteúdo real/dinâmico.

**V1 independente do backend**  
A experiência comercial pode funcionar e ser apresentada sem tornar a publicação dependente da infraestrutura futura.

**Separação entre produto atual e roadmap**  
Funcionalidades planejadas para uma V2 não são apresentadas como funcionalidades já entregues.

**Integridade do conteúdo clínico**  
Não foram utilizados resultados, estatísticas, pacientes ou depoimentos fictícios para aumentar artificialmente a percepção de autoridade.

---

## 📈 O que este projeto demonstra

Este projeto faz parte do meu portfólio de Engenharia de Software e demonstra prática em:

- desenvolvimento frontend com React e TypeScript;
- arquitetura de componentes;
- organização de projetos;
- UX/UI responsiva;
- integração com canais externos;
- acessibilidade;
- Git e GitHub;
- QA;
- deploy;
- documentação técnica;
- transformação de requisitos de negócio em uma solução digital;
- planejamento evolutivo de software.

---

## 👩‍💻 Desenvolvido por

**Josely Silva**

Estudante de Engenharia de Software  
Backend em formação · Desenvolvimento Web · APIs · Banco de Dados

GitHub: **@joselysilva-dev**

---

## 📄 Observação

Este repositório representa um projeto desenvolvido para portfólio, validação e apresentação da solução.

Conteúdos, identidade visual, imagens e materiais relacionados à Clínica Dra. Kelle Gomes devem respeitar as respectivas autorizações de uso.

---

<p align="center">
  <strong>Clínica Dra. Kelle Gomes</strong><br>
  Tecnologia, experiência digital e posicionamento profissional.
</p>
