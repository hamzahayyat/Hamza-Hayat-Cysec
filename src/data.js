export const personalInfo = {
  name: "Hamza Hayat",
  title: "Penetration Tester | SOC & Threat Intelligence Analyst | Cybersecurity Researcher",
  location: "Islamabad, Pakistan",
  email: "mmhhmalik@gmail.com",
  altEmail: "hamza.cysec@gmail.com",
  phone: "+92-321-7718572",
  linkedin: "https://www.linkedin.com/in/malik-muhammad-hamza-hayat-073b75263/",
  github: "https://github.com/hamzahayyat",
  summary: "Results-driven Cybersecurity Analyst and Researcher (MS Cybersecurity, FAST-NUCES) with hands-on expertise in penetration testing, vulnerability assessment, SIEM deployment, threat intelligence, and network security. Specializing in Machine Learning-based Intrusion Detection Systems (IDS) for IoT and MQTT networks. Skilled across the full offensive-defensive spectrum - from APT group analysis and STIX-based CTI to FortiGate firewall configuration and Wazuh SIEM deployment. Committed to community impact through active volunteer work with Pakistan Foundation Fighting Blindness (PFFB). Passionate about bridging rigorous academic research with real-world security operations."
};

export const skills = [
  {
    category: "Offensive Security",
    items: "Penetration Testing, Vulnerability Assessment, Web App Security (OWASP Top 10), Network Exploitation, Ethical Hacking, Threat Hunting, Burp Suite, Metasploit, Nmap, Wireshark, Kali Linux, TCP/IP Attack Simulation"
  },
  {
    category: "Defensive Security",
    items: "SIEM (Wazuh), IDS/IPS, FortiGate NGFW, Log Analysis, Incident Response, Digital Forensics, Threat Modeling (STRIDE/DREAD), Cyber Threat Intelligence (CTI), APT Group Profiling, STIX/TAXII, MISP, SOC Operations, Security Hardening"
  },
  {
    category: "ML / AI Security",
    items: "ML-based IDS, Deep Learning (LSTM, CNN/AlexNet/Mini-VGGNet), Random Forest, SVM, XGBoost, Feature Engineering, NSL-KDD, CICIDS2018, MQTT-IoT-IDS2020, Python (Scikit-learn, TensorFlow, Keras)"
  },
  {
    category: "Development & Tools",
    items: "Python, C/C++, Bash, React.js, Node.js, HTML/CSS, SQL, REST APIs, Wazuh, FortiGate, Kali Linux, Windows Server, Active Directory, Docker, VMware, ESP32/IoT, Git, CI/CD"
  },
  {
    category: "Frameworks & Standards",
    items: "OWASP, NIST, MITRE ATT&CK, DevSecOps, SAST/DAST/SCA, Secure SDLC, Zero Trust"
  }
];

export const experience = [
  {
    company: "Tech Console",
    role: "Cybersecurity Analyst Intern",
    date: "Sep 2025 – Nov 2025",
    location: "Remote",
    highlights: [
      "Executed 10+ vulnerability assessments and penetration tests on web applications and internal systems, identifying and documenting critical CVEs with severity-rated remediation reports.",
      "Monitored real-time network traffic and system logs using SIEM tools, successfully detecting and triaging multiple threat events and anomalous behaviors.",
      "Applied OWASP Top 10 and MITRE ATT&CK framework to threat modeling exercises, mapping attack vectors to TTPs.",
      "Authored detailed penetration testing reports with risk ratings, proof-of-concept documentation, and actionable remediation recommendations."
    ]
  },
  {
    company: "ZAF Technologies Pvt. Ltd.",
    role: "Web Development Intern (React.js & Node.js)",
    date: "Aug 2025 – Nov 2025",
    location: "Islamabad, Pakistan",
    highlights: [
      "Developed and optimized full-stack web applications using React.js and Node.js, applying Secure SDLC and secure coding best practices.",
      "Built 5+ reusable React components and RESTful API integrations deployed to production, reducing development time.",
      "Collaborated in an Agile team environment using Git version control and CI/CD pipelines, maintaining code quality through peer reviews and automated testing."
    ]
  },
  {
    company: "Pakistan Foundation Fighting Blindness (PFFB)",
    role: "Volunteer - Event Coordinator & Team Member",
    date: "2023 – Present",
    location: "Islamabad, Pakistan",
    highlights: [
      "Completed a 3-month dedicated full-time volunteer engagement with PFFB, serving visually impaired persons (VIPs) across Pakistan.",
      "Active ongoing member of the event management team, coordinating and attending community events including outdoor activities.",
      "Contributed to raising awareness for PFFB's programs including Audio World and assistive technology training workshops."
    ]
  }
];

export const research = [
  {
    institution: "FAST-NUCES Islamabad",
    title: "MS Cybersecurity Research: ML-Based Intrusion Detection Systems for IoT Networks",
    date: "Jan 2026 – Present",
    highlights: [
      "Conducting graduate research on ML-based IDS architectures for IoT and MQTT networks, benchmarking classifiers (Random Forest, SVM, XGBoost, LSTM, AlexNet, Mini-VGGNet) on NSL-KDD, CSE-CIC-IDS2018, and MQTT-IoT-IDS2020 datasets.",
      "Co-authored an academic paper on IDS for MQTT/IoT networks; currently under preparation for journal submission.",
      "Compiled a verified literature database of 35+ peer-reviewed papers on ML-based IDS for IoT."
    ]
  }
];

export const projects = [
  {
    title: "SIEM Deployment - Wazuh (Mac M1 + Docker + VMware)",
    category: "Security Operations / Threat Detection",
    date: "2026",
    highlights: [
      "Deployed a production-grade Wazuh SIEM environment on Mac M1 using both Docker and VMware Fusion, configuring agents across multiple endpoints.",
      "Built end-to-end SOC pipeline: log collection, normalization, rule-based alerting, incident triage; conducted SYN flood simulations.",
      "Configured custom dashboards for threat event visualization and vulnerability data."
    ]
  },
  {
    title: "FortiGate NGFW Configuration & Perimeter Security",
    category: "Network Security / Firewall Engineering",
    date: "2026",
    highlights: [
      "Configured FortiGate Next-Generation Firewall policies including ACLs, NAT rules, IPS profiles, and SSL/TLS inspection.",
      "Integrated FortiGate agent logging with centralized monitoring systems, enabling real-time threat visibility.",
      "Validated rulesets against common attack scenarios (port scanning, brute force, lateral movement), demonstrating Zero Trust principles."
    ]
  },
  {
    title: "Cyber Threat Intelligence - APT Analysis & STIX/TAXII",
    category: "Threat Intelligence / CTI Research",
    date: "2026",
    highlights: [
      "Profiled multiple Advanced Persistent Threat (APT) groups by analyzing their TTPs against the MITRE ATT&CK framework.",
      "Produced and consumed CTI reports in STIX format, enabling machine-readable sharing of IOCs.",
      "Applied TAXII protocol for CTI dissemination and explored MISP for IOC aggregation and correlation."
    ]
  },
  {
    title: "NanoDB - Custom Relational Database Engine",
    category: "Applied Programming / Systems Engineering",
    date: "2026",
    highlights: [
      "Designed and built a lightweight relational database engine from scratch in Python, implementing core DBMS internals: B-tree indexing, SQL query parsing, page-based persistent storage.",
      "Engineered a custom SQL parser supporting SELECT, INSERT, UPDATE, DELETE with WHERE clause filtering.",
      "Applied modular architecture, unit testing, and Git version control."
    ]
  },
  {
    title: "Multi-UAV Mesh Communication System",
    category: "Embedded Systems / BS Final Year Project",
    date: "Sep 2024 – Jun 2025",
    highlights: [
      "Architected a resilient drone-based mesh communication network using ESP32 modules and ESP-NOW protocol to support rescue operations.",
      "Implemented OLSRv2 self-healing routing protocol and configured a ground station as an internet gateway.",
      "Project recognized as a complete end-to-end embedded systems solution integrating hardware design, wireless protocol configuration, and real-time data transmission."
    ]
  }
];

export const education = [
  {
    institution: "FAST National University of Computing and Emerging Sciences",
    degree: "Master of Science - Cybersecurity",
    date: "Jan 2026 – 2028 (Expected)",
    details: "Research Focus: Machine Learning-based Intrusion Detection Systems for IoT/MQTT Networks. Coursework: IoT Security, Advanced Network Security, Applied Programming, Research Methodology."
  },
  {
    institution: "Capital University of Science and Technology (CUST)",
    degree: "Bachelor of Science - Computer Science",
    date: "Aug 2021 – Jun 2025 (Graduated)",
    details: "Notable Projects: Multi-UAV Disaster Communication System (FYP) Oric Funded and got 2nd position, Wi-Fi Vulnerability Analysis using NodeMCU. Developed strong foundations in networks, operating systems, algorithms, and software engineering."
  }
];

export const certifications = [
  "Cisco Ethical Hacker - Cisco Networking Academy (2025)",
  "Cybersecurity Fundamentals - IBM (2025)",
  "Android Bug Bounty Hunting - EC-Council (2025)",
  "Certified in Cybersecurity (CC) (Candidate) - ISC2 (2026)",
  "API Security Fundamentals - APIsec University (2025)",
  "Cybersecurity Certificate (CEH)- PFTP (2025)"
];
