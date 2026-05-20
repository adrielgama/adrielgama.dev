import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { GitIcon } from "@/components/ui/svgs/git";
import { GitHub } from "@/components/ui/svgs/github";
import { TailwindCSS } from "@/components/ui/svgs/tailwindcss";
import { Storybook } from "@/components/ui/svgs/storybook";
import { Figma } from "@/components/ui/svgs/figma";
import { AWS } from "@/components/ui/svgs/aws";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Vercel } from "@/components/ui/svgs/vercel";
import { Vitest } from "@/components/ui/svgs/vitest";
import { Jest } from "@/components/ui/svgs/jest";
import { AzureDevops } from "@/components/ui/svgs/azuredevops";

export const DATA = {
  name: "Adriel Gama",
  initials: "aG",
  url: "https://adrielgama.dev",
  location: "Salvador, BA",
  locationLink: "https://www.google.com/maps/place/salvador",
  title: "Desenvolvedor Front-end",
  pronouns: "ele/dele",
  status: "Desenvolvendo",
  timezone: "America/Sao_Paulo",
  timezoneLabel: "GMT-3",
  description:
    "Desenvolvedor Front-end & Construtor de Produtos. Especialista em React, Next.js e TypeScript, com foco em performance, escalabilidade e impacto direto no negócio.",
  summary:
    "Desenvolvedor Front-end com mais de 5 anos de experiência em plataformas SaaS, e-commerce, ed-tech e sistemas web de alta performance. Responsável por resultados como +166% no GMV e +278% na receita transacionada em produção. Atuo com React, Next.js, TypeScript e arquitetura escalável de interfaces responsivas, em squads ágeis com cultura DevOps. Busco desafios técnicos em empresas orientadas a produto digital, escalabilidade e impacto real.",
  avatarUrl: "/adrielgama.jpg",
  skills: [
    { name: "AWS", icon: AWS },
    { name: "Azure DevOps", icon: AzureDevops },
    { name: "Docker", icon: Docker },
    { name: "Figma", icon: Figma },
    { name: "Git", icon: GitIcon },
    { name: "GitHub", icon: GitHub },
    { name: "Jest", icon: Jest },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "React", icon: ReactLight },
    { name: "Storybook", icon: Storybook },
    { name: "Supabase", icon: Supabase },
    { name: "Tailwind CSS", icon: TailwindCSS },
    { name: "Typescript", icon: Typescript },
    { name: "Vercel", icon: Vercel },
    { name: "Vitest", icon: Vitest },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Início" }],
  contact: {
    email: "adrielgama@gmail.com",
    tel: "+5571996559476",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/adrielgama",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/adrielgama",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/adrielgama",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Enviar E-mail",
        url: "mailto:adrielgama@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Farmácias APP | By GrupoSC",
      href: "https://www.farmaciasapp.com.br",
      badges: [] as string[],
      location: "Remoto",
      title: "Desenvolvedor Front-end",
      logoUrl: "/companies/pill.svg",
      start: "Julho 2021",
      end: "Presente",
      description:
        "Desenvolvimento e manutenção de aplicações web com ReactJS, TypeScript e Next.js, com suporte à integração e otimização de APIs em Node, Express e NestJS. Implementação de componentes reutilizáveis documentados com Styled Components e Storybook. Criação de APIs com documentação via Swagger. Resultados: +156% no volume de pedidos (2022–2023), +278% na receita transacionada, GMV de R$42,3M em 2024 (+166%) e ticket médio de R$93 (+R$25).",
    },
    {
      company: "EVOB",
      href: "https://www.evob.com.br",
      badges: ["Consultoria"] as string[],
      location: "Remoto",
      title: "Desenvolvedor Front-end",
      logoUrl: "/companies/evob.png",
      start: "Outubro 2025",
      end: "Presente",
      description:
        "Consultoria e manutenção de aplicações web com ReactJS, TypeScript e Next.js, em plataforma ED-Tech. Implementação de componentes reutilizáveis documentados com Styled Components e TailwindCSS.",
    },
    {
      company: "Beta Sistemas",
      href: "",
      badges: ["Part-time"] as string[],
      location: "Remoto",
      title: "Desenvolvedor Front-end",
      logoUrl: "/companies/beta.png",
      start: "Maio 2021",
      end: "Julho 2021",
      description:
        "Desenvolvimento de websites, landing pages, SPAs e aplicações web responsivas com HTML, CSS, React, TypeScript e Styled Components. Manutenção contínua de plataformas garantindo estabilidade, performance e compatibilidade cross-browser.",
    },
    {
      company: "Grupo Ramiro Campelo",
      href: "",
      badges: [] as string[],
      location: "Salvador, BA",
      title: "Assistente de Projetos de TI",
      logoUrl: "/companies/ramiro.png",
      start: "Janeiro 2021",
      end: "Julho 2021",
      description:
        "Identificação e relato de inconsistências a stakeholders internos. Coleta e importação de dados via SQL e Report Builder. Implantação e testes de sistemas internos com React, TypeScript e Styled Components. Gestão de cronogramas e suporte técnico na resolução de incidentes.",
    },
    {
      company: "COREN-BA",
      href: "https://www.corenba.gov.br",
      badges: [] as string[],
      location: "Salvador, BA",
      title: "Estagiário de Suporte de TI",
      logoUrl: "/companies/coren.png",
      start: "Agosto 2019",
      end: "Janeiro 2021",
      description:
        "Atendimento de chamados de suporte de TI para usuários internos e externos. Instalação e manutenção de softwares e equipamentos. Desenvolvimento e manutenção de páginas web com HTML, CSS, JavaScript e ReactJS. Redução no tempo médio de resolução de chamados por meio da padronização de processos internos.",
    },
  ],
  education: [
    {
      school: "Universidade Salvador (UNIFACS)",
      href: "https://www.unifacs.br",
      degree: "CST em Tecnologia da Informação",
      logoUrl:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=64&h=64&fit=crop",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Agenda AGM",
      href: "https://agenda.agmdigital.app",
      dates: "2026 – Presente",
      active: true,
      description:
        "Aplicação de agendamento integrada ao ecossistema AGM Digital. Permite gerenciamento de compromissos, horários e clientes com interface intuitiva e responsiva.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "React",
        "PostgreSQL",
        "Redis",
        "Docker",
        "NestJS",
        "Pagar.me",
        "Jest",
        "Cloud Flare",
        "Motion",
        "Recharts",
        "Railway",
        "Vercel",
        "OpenAI",
        "Prisma",
        "Claude AI",
      ],
      links: [{ type: "Website", href: "https://agenda.agmdigital.app" }],
      image: "/projects/agenda-agm.webp",
      video: "",
    },
    {
      title: "Tapetes & Tal",
      href: "https://www.tapetesetal.com.br",
      dates: "2017 – Presente",
      active: true,
      description:
        "E-commerce para tapetes e capachos vulcanizados personalizados. Desenvolvido com foco em performance, SEO e experiência de compra fluida.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "React",
        "EmailJS",
        "Vercel",
        "Zustand",
        "Vercel Analytics",
      ],
      links: [{ type: "Website", href: "https://www.tapetesetal.com.br" }],
      image: "/projects/tapetes-e-tal.webp",
      video: "",
    },
    {
      title: "AGM Digital",
      href: "https://www.agmdigital.app",
      dates: "2025 – Presente",
      active: true,
      description:
        "Plataforma digital da AGM com soluções para gestão e automação de negócios. Interface responsiva focada em performance e experiência do usuário, integrando os demais produtos do ecossistema AGM.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "React",
        "Shadcn",
        "Vercel",
        "Resend",
        "Cloud Flare",
      ],
      links: [{ type: "Website", href: "https://www.agmdigital.app" }],
      image: "/projects/agm.webp",
      video: "",
    },
    {
      title: "Truss Academy",
      href: "https://www.trussacademy.com.br",
      dates: "2025 – Presente",
      active: true,
      description:
        "Plataforma educacional para formação e capacitação profissional. Interface moderna com foco em usabilidade e acesso ao conteúdo de forma responsiva.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "React",
        "Vitest",
        "Styled Components",
      ],
      links: [{ type: "Website", href: "https://www.trussacademy.com.br" }],
      image: "/projects/truss-evob.webp",
      video: "",
    },
    {
      title: "AGM Chat",
      href: "https://www.agmchat.io",
      dates: "2025 – Presente",
      active: true,
      description:
        "Plataforma multi-tenant de atendimento ao cliente com IA integrada. Gerencia múltiplas empresas, agentes e conversas em tempo real a partir de um único painel. Inclui bot com base de conhecimento customizável, métricas avançadas, filas inteligentes e controle de acesso por hierarquia.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "WebSocket",
        "PostgreSQL",
        "Docker",
        "Supabase",
        "OpenAI",
        "Jest",
      ],
      links: [{ type: "Website", href: "https://www.agmchat.io" }],
      image: "/projects/agm-chat.webp",
      video: "",
    },
    {
      title: "Josiane Mendonça ADV",
      href: "https://github.com/adrielgama/josianemendonca.adv",
      dates: "2024",
      active: false,
      description:
        "Landing page para escritório de advocacia com apresentação clara dos serviços jurídicos oferecidos. Design limpo e profissional, focado em conversão e acessibilidade.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Tanstack Query",
        "Zustand",
        "EmailJS",
        "Vercel",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/adrielgama/josianemendonca.adv",
        },
      ],
      image: "/projects/josiane-adv.webp",
      video: "",
    },
  ],
  hackathons: [] as {
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    win?: string;
    links: { title: string; href: string }[];
  }[],
  keywords: [
    "Adriel Gama",
    "Adriel de Oliveira Gama",
    "desenvolvedor front-end",
    "desenvolvedor front-end Salvador",
    "desenvolvedor React",
    "desenvolvedor Next.js",
    "desenvolvedor TypeScript",
    "frontend developer Brazil",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "desenvolvimento web",
    "SaaS frontend",
    "UI development",
    "portfolio desenvolvedor",
  ],
};
