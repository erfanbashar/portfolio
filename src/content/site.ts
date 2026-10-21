export const site = {
 name: 'Erfan Bashar',
 headline: 'Core Banking & Systems Analyst',
 roles: 'Technical Business Analysis · SQL Development · Application Support',
 intro: 'I’m a banking technology professional based in Mississauga, Canada. My experience spans Finacle and TCS core banking, systems and technical business analysis, SQL development, and production application support. I connect business requirements with practical solutions, dependable data, and clear documentation.',
 email: 'erfan.bashar.13@gmail.com', // Add your public contact email.
 linkedin: 'https://www.linkedin.com/in/erfanbashar', // Add your exact LinkedIn URL.
 contactEndpoint: '', // HTTPS API Gateway endpoint. Leave empty for safe preview mode.
};
export const projects = [
 {slug:'core-banking-integration',title:'Core banking integration',category:'Banking systems',summary:'A case-study template for connecting core banking applications with digital services.',tags:['Core banking','Integration','Systems analysis'],featured:true},
 {slug:'sql-reporting',title:'SQL reporting & optimization',category:'SQL & data',summary:'A case-study template for turning complex operational data into dependable reporting.',tags:['SQL','Data quality','Reporting'],featured:true},
 {slug:'power-bi-dashboard',title:'From data to decisions',category:'Power BI',summary:'A case-study template for a Power BI dashboard, its audience, and the decisions it supports.',tags:['Power BI','Data analysis','Visualization'],featured:true},
 {slug:'technical-documentation',title:'Clarity for technical teams',category:'Documentation',summary:'A case-study template for requirements, process flows, and operational documentation.',tags:['Requirements','Process mapping','Documentation'],featured:false},
];
export type Project = typeof projects[number];

export const experience = [
 {company:'UNI Financial',role:'Systems Analyst — Banking Platform',period:'Oct 2024 — Present',location:'Mississauga, Canada',points:['Support Finacle core banking across payments, accounting, lending, and deposits; translate business needs into technical procedures and feature requirements.','Coordinate production validation testing and review end-to-end test plans, with release playbooks maintained in Confluence.','Develop Power BI dashboards backed by PostgreSQL and PL/pgSQL, and investigate production issues with business teams and vendors.'],tags:['Finacle','PostgreSQL','Power BI','Application support']},
 {company:'NAGAD Finance Limited',role:'Lead Systems Analyst',period:'Jun 2023 — Oct 2024',location:'Dhaka, Bangladesh',points:['Led application architecture, systems analysis, and business process mapping for a digital banking ecosystem.','Defined API integration scopes, payload structures, and system-to-system gap analysis with internal and external partners.','Prepared specifications and data integration scopes for an alternate credit-scoring system covering 300,000 customers and connecting core banking with loan origination.'],tags:['Core banking','API integration','Requirements','Credit scoring']},
 {company:'Mutual Trust Bank PLC',role:'Senior Systems Analyst',period:'Jul 2021 — Jun 2023',location:'Dhaka, Bangladesh',points:['Supported a TCS core banking customer-onboarding application used to onboard more than 90,000 customers.','Mapped business processes and data integrations to reduce account-opening turnaround time by 60%.','Performed technical analysis for mobile and online banking integrations with more than 15 third-party systems.'],tags:['TCS core banking','REST APIs','Process mapping','Digital banking']},
 {company:'BRAC Bank PLC',role:'Senior Systems Analyst',period:'Aug 2017 — Jun 2021',location:'Dhaka, Bangladesh',points:['Supported the Finacle core banking migration involving more than one million accounts.','Developed PL/SQL batch billing automation that saved more than 800 hours of back-office work, and a JavaScript KYC module in Finacle.','Improved SMS alert procedures to reduce duplicate messages and supported end-of-day batches and start-of-day application checks.'],tags:['Finacle','PL/SQL','JavaScript','Batch operations']},
];
export const skills = [
 {title:'Banking & application support',items:['Finacle','TCS core banking','Payments & lending','Incident investigation','E2E testing','Production validation']},
 {title:'Systems & business analysis',items:['Requirements gathering','Process mapping','Gap analysis','User stories','BRS / SRS','SOW / SOP']},
 {title:'SQL & databases',items:['SQL','PL/SQL','PL/pgSQL','Oracle','PostgreSQL','SQL Server','MySQL']},
 {title:'Data & dashboards',items:['Power BI','Python','Pandas','NumPy','Matplotlib','Plotly']},
 {title:'Development & integration',items:['Java','Spring Boot','JavaScript','REST','SOAP','Postman']},
 {title:'Delivery & collaboration',items:['Jira','Confluence','Microsoft SCSM','Git','GitHub','AWS']},
];
