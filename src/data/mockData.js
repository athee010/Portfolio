export const mockData = {
  hero: {
    name: "Athena Anil",
    title: "Data Engineer",
    tagline: "Building reliable, cloud-native data pipelines across AWS & Azure",
    summary: "Data Engineer with 4 years of experience in building cloud-based ETL pipelines across Azure and AWS. Skilled in data ingestion, transformation, and ML-ready optimization. Strong in stakeholder collaboration and governance alignment.",
    profileImage: "https://customer-assets.emergentagent.com/job_tech-portfolio-148/artifacts/bclitwg4_8c285c76-3af6-438b-b1e5-660470c0497a.jpg",
    resumeUrl: "file:///C:/Users/athen/Downloads/New%20folder%20(7)/AAnil%20Resume.pdf",
    email: "athena.anil@yahoo.com"
  },
  
  experiences: [
    {
      id: 1,
      company: "Tech Mahindra",
      role: "Data Engineer",
      duration: "May 2024 - Present",
      client: "GE Vernova",
      achievements: [
        "Preprocessed and standardized 1M+ RM&D and Controller tags, improving turbine analytics data usability by 80%",
        "Orchestrated ingestion pipelines using AWS S3, Lambda, and MongoDB; implemented PostgreSQL audit logging ensuring 99%+ traceability",
        "Collaborated with stakeholders and data scientists to identify data capture requirements and deliver UAT-ready datasets for ML correlation tools",
        "Resolved inconsistencies in historical vs new equipment data, contributing to 80% mapping accuracy",
        "Developed data catalogues and aligned pipelines with enterprise data governance frameworks"
      ]
    },
    {
      id: 2,
      company: "Tech Mahindra",
      role: "Data Engineer",
      duration: "Jan 2023 - May 2024",
      client: "BMW",
      achievements: [
        "Built Databricks (PySpark) pipelines to transform data from ADLS Gen2 and load into Synapse SQL DB, ensuring efficient ETL aligned with target schemas",
        "Automated data ingestion using Azure Data Factory, reducing manual workflows by 90%",
        "Conducted T-SQL data validation to ensure accuracy of downstream analysis"
      ]
    },
    {
      id: 3,
      company: "Tech Mahindra",
      role: "BI Developer",
      duration: "Feb 2022 - Jan 2023",
      client: "Navistar",
      achievements: [
        "Built and enhanced Power BI dashboards for 139K+ VINs across 400+ datapoints; improved reporting speed by ~40%",
        "Enabled real-time self-service insights through slicers, drill-throughs, and dynamic filters"
      ]
    },
    {
      id: 4,
      company: "Tech Mahindra",
      role: "Software Engineer",
      duration: "Sep 2021 - Feb 2022",
      client: "H3G UK",
      achievements: [
        "Monitored Hadoop ecosystem (Spark, Kafka, HBase), executed queries for data retrieval and managed Spark jobs using Linux to help maintain 98%+ system uptime"
      ]
    }
  ],

  skills: {
    cloudPlatforms: ["Azure Data Factory", "Azure Databricks", "Azure Data Lake", "Azure Synapse SQL", "AWS S3", "AWS Lambda", "AWS RDS", "AWS SageMaker"],
    programming: ["Python", "PySpark", "SQL", "T-SQL"],
    dataEngineering: ["ETL Pipelines", "Data Ingestion", "Data Modeling", "Data Validation", "Data Catalogues"],
    aiAutomation: ["n8n Agents", "Automated Data Analysis", "AI-Driven ETL"],
    databases: ["PostgreSQL", "MongoDB", "Synapse SQL"],
    tools: ["Git", "Power BI", "Linux", "Agile"]
  },

  projects: [
    {
      id: 1,
      title: "n8n Data Analysis Workflow",
      description: "Automated data analysis workflow using n8n for streamlined data processing and insights generation.",
      technologies: ["n8n", "Data Analysis", "Automation"],
      githubUrl: "https://github.com/athee010/n8n-data-analysis-workflow",
      featured: true
    },
    {
      id: 2,
      title: "AI Data Engineering Integration",
      description: "Integration of AI capabilities with data engineering pipelines for enhanced data processing and analytics.",
      technologies: ["Python", "AI/ML", "Data Engineering"],
      githubUrl: "https://github.com/athee010/AI_Data-Engineering_integeration",
      featured: true
    },
    {
      id: 3,
      title: "Real-time Data Streaming Pipeline",
      description: "Built using Kafka, AWS S3, Glue, and Athena for real-time data processing and analytics.",
      technologies: ["Kafka", "AWS S3", "AWS Glue", "AWS Athena"],
      githubUrl: "https://github.com/athee010/Real-time-data-streaming-pipeline-using-Kafka-AWS-S3-Glue-and-Athena",
      featured: true
    },
    {
      id: 4,
      title: "Event-Driven ETL Pipeline",
      description: "Serverless ETL pipeline triggered by events for efficient data processing and transformation.",
      technologies: ["Python", "AWS Lambda", "Event-Driven"],
      githubUrl: "https://github.com/athee010/event-driven-etl-pipeline",
      featured: true
    },
    {
      id: 5,
      title: "Data Extraction and Processing",
      description: "Comprehensive data extraction and processing pipeline for various data sources and formats.",
      technologies: ["Python", "Data Processing", "ETL"],
      githubUrl: "https://github.com/athee010/Data-extraction-and-processing",
      featured: true
    },
    {
      id: 6,
      title: "DevOps CI/CD Pipelines on AWS",
      description: "Automated CI/CD pipelines implementation on AWS for streamlined deployment processes.",
      technologies: ["AWS", "CI/CD", "DevOps"],
      githubUrl: "https://github.com/athee010/Devops-CI-CD-Pipelines-on-AWS"
    },
    {
      id: 7,
      title: "Static Website on S3 with Terraform",
      description: "Infrastructure as Code implementation for hosting static websites on AWS S3 using Terraform.",
      technologies: ["Terraform", "AWS S3", "IaC"],
      githubUrl: "https://github.com/athee010/Static-Website-on-S3-with-Terraform"
    }
  ],

  education: {
    degree: "B.Tech (Electronics and Communication Engineering)",
    institution: "Sree Narayana Guru College of Engineering and Technology",
    duration: "Aug 2016 – Oct 2020",
    cgpa: "7.37/10",
    certifications: [
      {
        name: "Microsoft Certified: Azure Data Engineer Associate",
        url: "https://learn.microsoft.com/api/credentials/share/en-us/ATHENAANIL-2391/A6E63B5E2504394?sharingId=6337D86A94EF3F28",
        badge: "azure-data-engineer"
      },
      {
        name: "Microsoft Certified: Azure Fundamentals",
        url: "https://learn.microsoft.com/api/credentials/share/en-us/ATHENAANIL-2391/2EDDFAC01A5944F2?sharingId=6337D86A94EF3F28",
        badge: "azure-fundamentals"
      }
    ]
  },

  volunteer: {
    organization: "JCI (Junior Chamber International)",
    role: "Vice President - PR and Marketing",
    year: "2022",
    description: "Orchestrated JCI zone leader elections, driving event promotion, registrations, and community engagement."
  },

  achievements: [
    "Received Kudos badge at Tech Mahindra for excellence in GE Vernova data engineering project",
    "District finalist – Federal Bank Speak for India (2019)"
  ],

  languages: ["Hindi (Fluent)", "Malayalam (Fluent)", "Arabic (Read, Write)"],

  contact: {
    email: "athena.anil@yahoo.com",
    phone: "+91 8547610569",
    linkedin: "https://linkedin.com/in/athena-anil",
    github: "https://github.com/athee010"
  }
};