/* ============================================================
   Content (bilingual) + interactivity
   Data sourced from Profile (7).pdf
   ============================================================ */
const USERNAME = "leonardobora";

const I18N = {
  pt:{
    "mascot":"Bem-vindo! ▸",
    "nav.home":"Início","nav.exp":"Experiência","nav.edu":"Educação",
    "nav.certs":"Certificações","nav.pubs":"Publicações","nav.mcp":"MCP & Skills",
    "nav.projects":"Projetos","nav.awards":"Prêmios",
    "sub.role":"Trainee @ Lightera","sub.tag":"Agentic Orchestration · AI Safety",
    "hero.name":"LEONARDO BORA",
    "hero.tagline":"Engenheiro de software que pensa IA de outro jeito. Agentes LLM, RAG e IA com privacidade, traduzidos para quem decide.",
    "label.summary":"Resumo",
    "summary":"Sou engenheiro de software que pensa em IA de forma diferente. Em vez de perseguir o próximo benchmark, foco no que acontece quando a IA encontra organizações, políticas e pessoas reais. Meu trabalho fica na interseção entre agentes LLM, sistemas RAG e IA consciente de privacidade, mas o que me move é traduzir essas tecnologias para uma linguagem que stakeholders não técnicos entendam, questionem e usem. Estou de volta à Lightera, agora como Trainee do programa 2026: 12 meses de job rotation por engenharia de fábrica, supply chain, controladoria e estratégia comercial. Acredito que construir cultura de IA não é implantar ferramentas, e sim desenvolver consciência coletiva sobre o que a IA pode e deve fazer. Menos hype, mais conversa honesta sobre ética, segurança e o poder real de humanos e máquinas trabalhando juntos.",
    "mcp.intro":"Principais competências técnicas em destaque no meu perfil.",
    "projects.intro":"Repositórios públicos, puxados ao vivo da API do GitHub (ordenados por atualização).",
    "projects.loading":"Carregando repositórios…",
    "info.title":"O que é MCP?","info.body":"Model Context Protocol: padrão aberto para conectar modelos de IA a ferramentas e dados de forma segura e padronizada.",
    "promo.mcp":"Model Context Protocol",
    "footer.rights":"Todos os direitos reservados."
  },
  en:{
    "mascot":"Welcome! ▸",
    "nav.home":"Home","nav.exp":"Experience","nav.edu":"Education",
    "nav.certs":"Certifications","nav.pubs":"Publications","nav.mcp":"MCP & Skills",
    "nav.projects":"Projects","nav.awards":"Awards",
    "sub.role":"Trainee @ Lightera","sub.tag":"Agentic Orchestration · AI Safety",
    "hero.name":"LEONARDO BORA",
    "hero.tagline":"A software engineer who thinks about AI differently. LLM agents, RAG & privacy-aware AI, translated for decision-makers.",
    "label.summary":"Summary",
    "summary":"I'm a software engineer who thinks about AI differently. Rather than chasing the next benchmark, I focus on what happens when AI meets real organizations, policies, and people. My work sits at the intersection of LLM agents, RAG systems and privacy-aware AI, but what drives me is translating these technologies into language non-technical stakeholders can understand, question and act on. I'm back at Lightera, now as a Trainee in the 2026 program: a 12-month job rotation across factory engineering, supply chain, controllership and commercial strategy. I believe building an AI culture isn't about deploying tools, it's about developing collective consciousness around what AI can and should do. Less hype, more honest conversation about ethics, safety, and the genuine power of humans and machines working together.",
    "mcp.intro":"Top technical skills highlighted on my profile.",
    "projects.intro":"Public repositories, pulled live from the GitHub API (sorted by last update).",
    "projects.loading":"Loading repositories…",
    "info.title":"What is MCP?","info.body":"Model Context Protocol: an open standard to connect AI models to tools and data in a secure, standardized way.",
    "promo.mcp":"Model Context Protocol",
    "footer.rights":"All rights reserved."
  }
};

const DATA = {
  experience:[
    {org:"Lightera", role:{pt:"Trainee",en:"Trainee"}, period:"Apr 2026 — Present · Curitiba, PR",
     desc:{pt:"Selecionado para o competitivo Programa Trainee 2026 da Lightera — 12 meses de job rotation por engenharia de fábrica, supply chain, controladoria e estratégia comercial. Lightera é a marca global unificada da Furukawa Electric para fibra óptica e cabos.",
           en:"Selected for Lightera's competitive 2026 Trainee Program — a 12-month job rotation across factory engineering, supply chain, controllership and commercial strategy. Lightera is Furukawa Electric's unified global brand for optical fiber and cable."}},
    {org:"Lightera", role:{pt:"Engineering Intern",en:"Engineering Intern"}, period:"Apr 2025 — Dec 2025 · Curitiba, PR",
     desc:{pt:"Estágio de engenharia de software no time SPO (Software Product Ownership), na interseção entre produto, desenvolvimento e IA. Ciclo completo em metodologias ágeis, desenvolvimento de aplicações com IA e serviços de nuvem AWS.",
           en:"Software engineering intern in the SPO (Software Product Ownership) team, at the intersection of product, development and AI. Full agile lifecycle, AI-powered application development and AWS cloud services."}},
    {org:"Furukawa Electric LatAm", role:{pt:"Software Engineer Intern",en:"Software Engineer Intern"}, period:"Apr 2024 — Mar 2025 · Curitiba, PR",
     desc:{pt:"Estágio de engenharia embarcado no time de liderança de produto (SPO), antes do rebranding global para Lightera. Sprints ágeis, controle de versão e entrega de incrementos de software em contexto industrial.",
           en:"Engineering intern embedded in the software product leadership (SPO) team, before the global rebranding to Lightera. Agile sprints, version control and shipping software increments in an industrial context."}},
    {org:"3MIND TECH", role:{pt:"Bubble.io Web Dev Intern",en:"Bubble.io Web Dev Intern"}, period:"Aug 2023 — Dec 2023 · Curitiba, PR",
     desc:{pt:"Desenvolvimento de aplicações low-code (Bubble.io) para o setor jurídico-comercial. Prototipagem rápida e tradução de lógica de negócio em arquitetura de aplicação.",
           en:"Low-code application development (Bubble.io) for the legal-commercial sector. Rapid prototyping and translating business logic into application architecture."}},
    {org:"NEXTCARD", role:{pt:"Consultor de Vendas",en:"Sales Consultant"}, period:"Aug 2022 — Aug 2023 · Pinhais, PR",
     desc:{pt:"Consultoria de negócios em soluções de automação comercial: controle de acesso, hardware de identificação e sistema POS. Gestão de relacionamento com cliente ponta a ponta.",
           en:"Business consulting in commercial automation solutions: access control, identification hardware and POS systems. End-to-end client relationship management."}}
  ],
  education:[
    {org:"Pontifícia Universidade Católica do Paraná (PUC-PR)", role:{pt:"Pós-graduação — IA & Data Science",en:"Postgraduate — AI & Data Science"}, period:"Mar 2026 — Oct 2027"},
    {org:"Unibrasil University Center", role:{pt:"Bacharelado em Engenharia de Software",en:"B.Eng. in Software Engineering"}, period:"Jan 2022 — Dec 2025"}
  ],
  certifications:[
    "Replit Platform Builder","Application Security Training (Web, API)",
    "PIBEP PUC-PR 2026/2027","Python 3: Avançando na orientação a objetos",
    "Shopify: Loja online no ar","BlueDot Impact — AI Safety"
  ],
  publications:[
    {title:"Agentes de IA a Serviço do Microempreendedor", period:{pt:"Publicação",en:"Publication"},
     desc:{pt:"Potencializando negócios locais com WhatsApp Business.",
           en:"Empowering local businesses with WhatsApp Business."}}
  ],
  skills:["Model Context Protocol (MCP)","LLM Agents","RAG & Privacy-aware AI","AI Governance & Safety","Version Control","SMI — Gestão de Manutenção"],
  awards:[
    {org:{pt:"1º lugar — IEL Talents Award 2025",en:"1st place — IEL Talents Award 2025"}, period:"2025",
     desc:{pt:"Projeto piloto de IA generativa premiado.",en:"Award-winning generative AI pilot project."}},
    {org:"Perplexity AI Business Fellow", period:"2025",
     desc:{pt:"Fellow 2025 — discussões sobre adoção responsável de IA em empresas.",en:"2025 Fellow — discussions on responsible enterprise AI adoption."}}
  ]
};

/* ---------- render helpers ---------- */
const lang = () => document.documentElement.getAttribute("data-lang");
const t = (key) => I18N[lang()][key] ?? key;
const loc = (v) => typeof v === "object" ? (v[lang()] ?? v.en) : v;

function applyI18n(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.documentElement.lang = lang()==="pt" ? "pt-BR" : "en";
  renderDynamic();
}

function itemCard(title, period, desc){
  return `<div class="exp-item"><h3>${title}</h3>
    <div class="meta">${period||""}</div>
    ${desc?`<p>${desc}</p>`:""}</div>`;
}

function renderDynamic(){
  document.getElementById("expList").innerHTML =
    DATA.experience.map(e=>itemCard(`${loc(e.role)} · ${e.org}`, e.period, loc(e.desc))).join("");
  document.getElementById("eduList").innerHTML =
    DATA.education.map(e=>itemCard(e.org, e.period, loc(e.role))).join("");
  document.getElementById("certList").innerHTML =
    DATA.certifications.map(c=>`<li>${c}</li>`).join("");
  document.getElementById("skillList").innerHTML =
    DATA.skills.map(s=>`<li>${s}</li>`).join("");
  document.getElementById("pubList").innerHTML =
    DATA.publications.map(p=>itemCard(p.title, loc(p.period), loc(p.desc))).join("");
  document.getElementById("awardList").innerHTML =
    DATA.awards.map(a=>itemCard(loc(a.org), a.period, loc(a.desc))).join("");
}

/* ---------- tabs ---------- */
document.querySelectorAll(".nav-link").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".nav-link").forEach(b=>b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p=>p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("tab-"+btn.dataset.tab).classList.add("active");
    document.getElementById("navLinks").classList.remove("open");
    window.scrollTo({top:0,behavior:"smooth"});
  });
});

/* ---------- mobile nav ---------- */
document.getElementById("navToggle").addEventListener("click",()=>{
  document.getElementById("navLinks").classList.toggle("open");
});

/* ---------- language toggle ---------- */
document.getElementById("langToggle").addEventListener("click",()=>{
  const next = lang()==="pt" ? "en" : "pt";
  document.documentElement.setAttribute("data-lang", next);
  localStorage.setItem("lang", next);
  applyI18n();
});

/* ---------- GitHub projects (live API) ---------- */
async function loadRepos(){
  const grid = document.getElementById("repoGrid");
  try{
    const res = await fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`);
    if(!res.ok) throw new Error("GitHub API "+res.status);
    let repos = await res.json();
    repos = repos.filter(r=>!r.fork).sort((a,b)=>b.stargazers_count-a.stargazers_count || new Date(b.pushed_at)-new Date(a.pushed_at)).slice(0,9);
    grid.innerHTML = repos.map(r=>`
      <a class="repo-card"  <h4>${r.name}</h4>
        <p>${r.description ? r.description : (lang()==="pt"?"Sem descrição.":"No description.")}</p>
        <div class="repo-meta">
          ${r.language?`<span class="repo-lang">${r.language}</span>`:""}
          <span>★ ${r.stargazers_count}</span>
        </div>
      </a>`).join("") || `<p class="body-copy">${lang()==="pt"?"Nenhum repositório público.":"No public repositories."}</p>`;
  }catch(err){
    grid.innerHTML = `<p class="body-copy">
      ${lang()==="pt"?"Não foi possível carregar os repositórios agora. Veja em ":"Couldn't load repositories right now. See "}
      https://github.com/${USERNAME}.</p>`;
  }
}

/* ---------- init ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
document.documentElement.setAttribute("data-lang", localStorage.getItem("lang") || "pt");
applyI18n();
loadRepos();
