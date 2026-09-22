export type Lang = 'pt' | 'en';

export const site = {
  url: 'https://boreal-plating.dazum-digital.chatgpt.site',
  phone: '+55 (47) 3419-9393',
  phoneHref: 'tel:+554734199393',
  email: 'contato@borealnet.com.br',
  commercialEmail: 'comercial@borealnet.com.br',
  hrEmail: 'rh@borealnet.com.br',
  address: 'Rua Tuiuti, 3835 — Aventureiro, Joinville — SC, 89226-001, Brasil',
  instagram: 'https://www.instagram.com/boreal_plating/',
  linkedin: 'https://www.linkedin.com/company/boreal-pecas-industriais',
};

export const nav = {
  pt: [
    ['Home', '/'], ['Quem Somos', '/quem-somos/'], ['O Que Fazemos', '/o-que-fazemos/'],
    ['P&D', '/ped/'], ['ESG', '/esg/'], ['Certificações', '/certificacoes/'], ['Fornecedores', '/fornecedores/'], ['Carreiras', '/carreiras/'], ['Contato', '/contato/'],
  ],
  en: [
    ['Home', '/en/'], ['About', '/en/about/'], ['What We Do', '/en/what-we-do/'],
    ['R&D', '/en/r-and-d/'], ['ESG', '/en/esg/'], ['Certifications', '/en/certifications/'], ['Suppliers', '/en/suppliers/'], ['Careers', '/en/careers/'], ['Contact', '/en/contact/'],
  ],
} satisfies Record<Lang, string[][]>;

export const languagePairs: Record<string, string> = {
  '/': '/en/', '/quem-somos/': '/en/about/', '/o-que-fazemos/': '/en/what-we-do/',
  '/ped/': '/en/r-and-d/', '/esg/': '/en/esg/', '/certificacoes/': '/en/certifications/', '/fornecedores/': '/en/suppliers/', '/carreiras/': '/en/careers/', '/contato/': '/en/contact/',
  '/en/': '/', '/en/about/': '/quem-somos/', '/en/what-we-do/': '/o-que-fazemos/',
  '/en/r-and-d/': '/ped/', '/en/esg/': '/esg/', '/en/certifications/': '/certificacoes/', '/en/suppliers/': '/fornecedores/', '/en/careers/': '/carreiras/', '/en/contact/': '/contato/',
};

export const certifications = [
  {
    title: 'ISO 9001:2015', number: '67548', validity: '29/06/2027',
    description: 'Sistema de Gestão da Qualidade para fabricação de peças plásticas e tratamento de superfícies metálicas e plásticas.',
    descriptionEn: 'Quality Management System for plastic-parts manufacturing and the treatment of metallic and plastic surfaces.',
    href: '/documents/certifications/iso-9001-2015-boreal-plating.pdf',
  },
  {
    title: 'AS9100:2016', number: '62482', validity: '31/05/2027',
    description: 'Gestão da qualidade para tratamento de superfícies metálicas e plásticas por processos eletrolíticos e químicos.',
    descriptionEn: 'Quality management for metallic and plastic surface treatments through electrolytic and chemical processes.',
    href: '/documents/certifications/as9100-2016-boreal-plating.pdf',
  },
  {
    title: 'Cyber Trust Europe — Silver Label', number: 'LBSLV-2026-E-000646', validity: '22/04/2027',
    description: 'Reconhecimento de práticas de segurança da informação e maturidade em cibersegurança.',
    descriptionEn: 'Recognition of information-security practices and cybersecurity maturity.',
    href: '/documents/certifications/cyber-trust-europe-label-2026.pdf',
  },
];

export const esgDocuments = [
  ['Política Ambiental', 'Diretrizes para prevenção da poluição, uso responsável de recursos e melhoria contínua.', '/documents/esg/politica-ambiental.pdf'],
  ['Certificado de Energia Renovável 2026', 'Certificação do consumo de energia elétrica proveniente de fontes renováveis.', '/documents/esg/certificado-energia-renovavel-2026-pt.pdf'],
  ['Certificado de Energia Renovável 2025', 'Certificação do consumo de energia elétrica proveniente de fontes renováveis.', '/documents/esg/certificado-energia-renovavel-2025-pt.pdf'],
  ['Código de Ética e Conduta', 'Princípios que orientam as relações e a conduta corporativa.', '/documents/esg/codigo-de-etica-e-conduta.pdf'],
  ['Relatório de Igualdade Salarial — 1º semestre de 2026', 'Publicação em conformidade com a Lei nº 14.611/2023.', '/documents/esg/relatorio-igualdade-salarial-1-2026.pdf'],
  ['Relatório de Igualdade Salarial — 2º semestre de 2025', 'Publicação em conformidade com a Lei nº 14.611/2023.', '/documents/esg/relatorio-igualdade-salarial-2-2025.pdf'],
];

export const esgDocumentsEn = [
  ['Environmental Policy', 'Guidelines for pollution prevention, responsible resource use and continual improvement.', '/documents/esg/politica-ambiental.pdf'],
  ['Renewable Energy Certificate 2026', 'Certification of electricity consumption from renewable sources.', '/documents/esg/renewable-energy-certificate-2026-en.pdf'],
  ['Renewable Energy Certificate 2025', 'Certification of electricity consumption from renewable sources.', '/documents/esg/renewable-energy-certificate-2025-en.pdf'],
  ['Code of Ethics and Conduct', 'Principles that guide corporate relationships and conduct.', '/documents/esg/codigo-de-etica-e-conduta.pdf'],
  ['Pay Equity Report — First half of 2026', 'Publication in accordance with Brazilian Law 14.611/2023.', '/documents/esg/relatorio-igualdade-salarial-1-2026.pdf'],
  ['Pay Equity Report — Second half of 2025', 'Publication in accordance with Brazilian Law 14.611/2023.', '/documents/esg/relatorio-igualdade-salarial-2-2025.pdf'],
];
