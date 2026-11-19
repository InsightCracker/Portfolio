// All site content lives in this file. Edit text here; the components only lay it out.

import images from "../assets/images.json";
import dataereImg from "../assets/dataere.webp";
import datacleanImg from "../assets/dataclean.webp";
import insuranceImg from "../assets/insurance.webp";
import fintechImg from "../assets/fintech.webp";
import pharmacyImg from "../assets/pharmacy.webp";
import usdebtImg from "../assets/usdebt.webp";
import hrImg from "../assets/hr.webp";

const img = (name, src) => ({ src, width: images[name].w, height: images[name].h });

export const site = {
  name: "Michael Oladimeji",
  brand: "InsightCracker",
  email: "oladimejimichael224@gmail.com",
  phone: "+234 903 6190 420",
  phoneHref: "tel:+2349036190420",
  whatsappHref: "https://wa.me/2349036190420",
  location: "Lagos, Nigeria",
  cv: "/Michael-Oladimeji-CV.pdf",
  year: new Date().getFullYear(),
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/InsightCracker" },
  { label: "GitHub", href: "https://github.com/InsightCracker" },
  { label: "X", href: "https://x.com/InsightCracker" },
  { label: "Instagram", href: "https://www.instagram.com/mightymykel" },
  { label: "WhatsApp", href: "https://wa.me/2349036190420" },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  lede: "I turn financial data into decisions, and build the web and AI tools that do it faster.",
  status: "Accountant, data analyst and web developer in Lagos. Open to roles and freelance projects.",
};

// The hero "T-account". Each side lists what sits on that side of the ledger.
export const ledger = {
  caption: "My skills, split between accounting and technology",
  debit: {
    side: "Dr",
    title: "Accounting",
    items: ["Financial reporting", "Reconciliation", "IFRS documentation", "Budgeting"],
  },
  credit: {
    side: "Cr",
    title: "Technology",
    items: ["SQL and Power BI", "Python", "React", "AI tools"],
  },
  total: "Both sides covered by one person.",
};

export const about = {
  lead: "I'm an accounting graduate working where finance meets data.",
  body: [
    "I handle financial reporting, reconciliation and IFRS-aligned documentation, analyze it with SQL, Power BI and Python, and build tools with React and AI, most visibly DataEre.",
    "I also teach Data Analytics at Codar Tech Africa, and I'm building my skills in AI-driven financial modeling for fraud detection, risk and forecasting.",
  ],
};

// Timeline, newest first. Set `visible: true` on a new entry once it is filled in.
export const background = [
  {
    visible: true,
    period: "Now",
    title: "Data Analytics instructor",
    org: "Codar Tech Africa",
    note: "",
  },
  {
    visible: true,
    period: "2021 to 2025",
    title: "B.Sc. Accounting, Second Class Upper",
    org: "Adekunle Ajasin University, Akungba-Akoko, Ondo State, Nigeria",
    note: "",
  },
  // TODO: add your other roles here (current job, internships, freelance work), newest first.
  {
    visible: false,
    period: "e.g. 2025 to now",
    title: "Your role title",
    org: "Organisation",
    note: "One sentence on what you did and what it changed.",
  },
];

export const skillGroups = [
  {
    title: "Finance and accounting",
    items: [
      "Financial reporting",
      "IFRS compliance",
      "Account reconciliation",
      "Budgeting and performance analysis",
      "Risk analysis and fraud detection",
      "QuickBooks",
    ],
  },
  {
    title: "Data analysis",
    items: [
      "Advanced Excel",
      "SQL",
      "Power BI and DAX",
      "Python (Pandas, Scikit-learn)",
      "Data storytelling",
    ],
  },
  {
    title: "Web development",
    items: ["React", "JavaScript", "HTML and CSS", "Node.js and Express", "MongoDB", "Git"],
  },
  {
    title: "AI and automation",
    items: [
      "Working with LLM APIs",
      "AI-generated insights",
      "Document extraction",
      "Automated reporting",
    ],
  },
];

export const dataere = {
  name: "DataEre",
  image: img("dataere", dataereImg),
  alt: "DataEre home page with the headline Build World-Class Data Skills",
  summary:
    "A platform where analysts practice with real-world data scenarios, turn messy PDFs into clean Excel files and generate professional reports. I'm the developer and product owner.",
  features: [
    "AI-generated insights",
    "Interactive challenges",
    "Performance tracking",
    "Leaderboards",
    "Automated reporting",
    "Document extraction",
  ],
  facts: [
    { k: "Built with", v: "React and Vite, Node and Express, MongoDB, Groq API" },
    {
      k: "Now building",
      v: "Dataset Challenge: upload a dataset and get AI-written multiple-choice questions. The correct answers are computed in code, so the model never decides what is right.",
    },
  ],
  live: "https://www.dataxo.cfd/",
  github: "https://github.com/InsightCracker/DataEre",
};

// Data and finance projects. `result` is optional: one sentence on what the analysis found.
export const projects = [
  {
    id: "dataclean",
    title: "Data cleaning and validation",
    categories: ["data"],
    image: img("dataclean", datacleanImg),
    alt: "Excel workbook used for data cleaning and validation",
    tags: ["Excel", "Filtering", "Conditional formatting"],
    description:
      "Handled missing and invalid values, removed duplicates and standardized date formats, improving data accuracy and reliability for downstream analysis.",
    result: "",
    repo: "https://github.com/InsightCracker/Data-Cleaning---Excel",
  },
  {
    id: "insurance",
    title: "Insurance risk analysis",
    categories: ["finance", "data"],
    image: img("insurance", insuranceImg),
    alt: "Power BI dashboard for insurance risk analysis",
    tags: ["Excel", "Power BI", "Insurance analysis", "Data interpretation"],
    description:
      "Built an interactive Power BI dashboard covering 50,000 policies and $3.67B in premium, exposing risk patterns by age, region, income and behaviour.",
    result: "",
    repo: "https://github.com/InsightCracker/Insurance-Risk-Analysis",
  },
  {
    id: "fintech",
    title: "Financial transaction analytics",
    categories: ["finance", "data"],
    image: img("fintech", fintechImg),
    alt: "Power BI dashboard of financial transaction and fraud analytics",
    tags: ["SQL", "Power BI", "DAX", "Financial analysis"],
    description:
      "Time-window analysis of transaction volume, fraud rates, success and failure rates, and network performance, surfacing operational risks and improvement opportunities.",
    result: "",
    repo: "https://github.com/InsightCracker/Financial-Transaction-Performance-Fraud-Analytics",
  },
  {
    id: "pharmacy",
    title: "Pharmacy Pulse analysis",
    categories: ["data"],
    image: img("pharmacy", pharmacyImg),
    alt: "Pharmacy Pulse Power BI dashboard showing revenue, profit, cost and quantity sold",
    tags: ["Excel", "Power BI", "Product analysis", "Data storytelling"],
    description:
      "Analyzed revenue, cost, profit, sales volume and regional performance of a European pharmacy chain to find key trends and the strongest and weakest areas.",
    result: "",
    // TODO: the old site linked this card to the Ballon d'Or repo by mistake.
    // Paste the correct Pharmacy Pulse repo URL here, or leave it null to hide the link.
    repo: null,
  },
  {
    id: "usdebt",
    title: "US debt to the penny",
    categories: ["finance", "data"],
    image: img("usdebt", usdebtImg),
    alt: "Analysis of U.S. debt-to-the-penny data",
    tags: ["SQL", "Excel", "Financial analysis", "Database schema"],
    description:
      "Designed a relational database schema to analyze U.S. debt-to-the-penny data, modeling debt instruments and growth rates over time.",
    result: "",
    repo: "https://github.com/InsightCracker/US-Debt-Analysis",
  },
  {
    id: "hr",
    title: "HR analytics: absenteeism",
    categories: ["data"],
    image: img("hr", hrImg),
    alt: "Power BI report on employee absenteeism",
    tags: ["Excel", "Power BI", "HR analytics", "Data visualization"],
    description:
      "A study of absenteeism covering behavioural, demographic and operational drivers, including health, commute, age, tenure and seasonal patterns.",
    result: "",
    repo: "https://github.com/InsightCracker/HR-ANALYTICS-REPORT---ABSENTEEISM",
  },
];

// Websites you built for clients. Nothing here shows on the site until `visible` is true.
// To add a screenshot: put a .webp in src/assets, import it at the top, and set
// image: { src: yourImport, width: 1200, height: 750 }.
export const clientWork = [
  {
    id: "ngo-1",
    visible: false, // TODO: set to true after filling this in and getting the client's OK
    title: "First NGO website (name)",
    summary: "What the organisation needed, in one sentence.",
    built: "What you built: the main features.",
    stack: ["React"],
    role: "Sole developer",
    result: "",
    url: "https://",
    image: null,
    alt: "",
  },
  {
    id: "ngo-2",
    visible: false, // TODO: set to true after filling this in and getting the client's OK
    title: "Second NGO website (name)",
    summary: "What the organisation needed, in one sentence.",
    built: "What you built: the main features.",
    stack: ["React"],
    role: "Sole developer",
    result: "",
    url: "https://",
    image: null,
    alt: "",
  },
];

// Client offers. `title` also fills the topic list in the contact form.
export const services = [
  {
    title: "Financial reporting and reconciliation",
    for: "Small businesses and organisations that need clean, reliable books.",
    gets: ["Reconciled accounts", "IFRS-aligned financial reports", "Budget versus actual analysis"],
  },
  {
    title: "Dashboards and data analysis",
    for: "Teams with data in spreadsheets and no clear answers from it.",
    gets: [
      "Power BI or Excel dashboards",
      "SQL analysis of your data",
      "A short write-up of what the numbers say",
    ],
  },
  {
    title: "QuickBooks setup and bookkeeping",
    for: "Businesses moving off spreadsheets, or behind on their records.",
    gets: [
      "QuickBooks set up for your business",
      "Journal entries and records brought up to date",
      "Accounts payable and receivable tracking",
    ],
  },
  {
    title: "Websites and custom tools",
    for: "Organisations and founders who need a website or a tool built.",
    gets: [
      "A fast React website that works on mobile",
      "Contact forms and integrations",
      "AI-powered features where they help",
    ],
  },
];
