# AI Agents with CrewAI — Practical Multi-Agent Systems

A hands-on collection of autonomous agent workflows built with [CrewAI](https://crewai.com). This repository documents my progression from single-crew notebooks to multi-agent flows, production scaffolding, and real-world integrations. It is organized as a learning portfolio and reference implementation for anyone exploring agent orchestration, retrieval-augmented research, and business automation.

## 🧠 Core Competencies

### 🤖 Multi-Agent Orchestration
- **Crew Definition**: Build agent teams with distinct roles, goals, and backstories using YAML-driven configuration.
- **Task Delegation**: Design sequential and hierarchical task pipelines where agents share context and refine each other's outputs.
- **Crew Memory & Knowledge**: Leverage short-term memory, entity memory, and knowledge sources to maintain context across runs.

### 🌊 Flow-Based Workflows
- **Event-Driven Flows**: Compose agent crews into larger flows with `@start`, `@listen`, `@router`, and `and_`/`or_` trigger patterns.
- **Conditional Routing**: Route flow execution based on intermediate outputs (e.g., lead scoring thresholds) using router methods.
- **Flow Visualization**: Generate interactive flow diagrams (HTML) to document and debug agent dependencies.

### 🔍 Research & RAG Applications
- **Deep Research Crew**: Automated multi-step research with source scraping, synthesis, and structured report generation.
- **Web Search & Scraping**: Integrate SerperDev, ScrapeWebsite, and WebsiteSearch tools for real-time data retrieval.
- **Guardrails & Validation**: Apply output guardrails and structured Pydantic outputs to ensure response quality.

### 📊 Data-Driven Automation
- **Agentic Sales Pipeline**: Lead qualification, scoring, filtering, and routing using reusable YAML agents and tasks.
- **Support Data Insight Analysis**: Classify support tickets, generate actionable suggestions, and produce charts and reports.
- **Automated Project Planning**: Crew-based planning, estimation, and resource allocation workflows.

### 🚀 Production & Deployment
- **CLI Scaffolding**: Use `crewai create crew` and `crewai create flow` to generate production-ready project structures.
- **Environment Management**: Separate API keys, dependencies, and runtime configs with `.env` and virtual environments.
- **Extensible Tooling**: Add custom Python tools and integrate external APIs (Trello, Salesforce, etc.) into agent workflows.

## 🛠 Technical Stack

- **Core Framework**: CrewAI, crewAI-tools
- **Language Models**: OpenAI GPT-4o / GPT-4o-mini, Groq (Llama 3.3 70B)
- **Configuration**: YAML (agents, tasks), JSONC (CLI-based crews)
- **Data & Visualization**: Pandas, Matplotlib, Seaborn
- **Search & Retrieval**: SerperDev, ScrapeWebsite, WebsiteSearch, ChromaDB
- **Environment**: Python 3.13, JupyterLab, `uv`/pip
- **Deployment**: CrewAI CLI, GitHub

## 📁 Repository Structure

```
agents/
├── CrewAI_01/                          # First iteration: core crew patterns
│   ├── config/                         # Basic agents.yaml and tasks.yaml
│   ├── Automatic_Deep_Research/        # End-to-end research crew project
│   ├── deep_research_flow/             # Full flow-based research project
│   ├── deep_research.ipynb             # Introductory research notebook
│   ├── deep_research3_tools.ipynb      # Research with custom tools
│   ├── deep_research_improved.ipynb    # Iterative research improvements
│   ├── content_creation.ipynb          # Content generation crew
│   ├── code_review.ipynb               # Agentic code review experiments
│   ├── unittests.py                    # Unit tests for agent outputs
│   └── utils.py                        # Shared helper utilities
│
├── CrewAI_02/                          # Second iteration: advanced & production
│   ├── config/                         # Basic agents/tasks
│   ├── config2/                        # Variant configurations
│   ├── config3/                        # Lead qualification & email engagement
│   ├── config4/                        # Support ticket insight agents
│   ├── config5/                        # Content creation at scale agents
│   ├── Agentic_Sales_Pipeline.ipynb    # Flow-driven sales pipeline
│   ├── Automated_Project.ipynb         # Planning & estimation crew
│   ├── Content_Creation.ipynb          # Multi-LLM content generation
│   ├── External_integrations.ipynb     # Third-party API integrations
│   ├── Production.ipynb                # Production scaffolding with CLI
│   ├── Support_Data_Insight_Analysis.ipynb # Support analytics & reporting
│   ├── crewai_flow*.html               # Visual flow diagrams
│   ├── support_tickets_data.csv        # Sample support dataset
│   ├── sample_agent_code.py            # Reference charting code
│   └── helper.py                       # Environment loader
│
├── agents_venv/                        # Python virtual environment
├── .env                                # API keys (not tracked)
└── .gitignore
```

## 📈 Key Projects

| Project | Location | What It Demonstrates |
|--------|----------|----------------------|
| **Agentic Sales Pipeline** | `CrewAI_02/Agentic_Sales_Pipeline.ipynb` | Flow-based lead fetch, scoring, filtering, routing, and follow-up actions with conditional branching. |
| **Support Data Insight Analysis** | `CrewAI_02/Support_Data_Insight_Analysis.ipynb` | Reading CSV data, generating suggestions, building tables/charts, and assembling a final markdown report. |
| **Content Creation at Scale** | `CrewAI_02/Content_Creation.ipynb` | Multi-agent financial news monitoring, data analysis, blog/social content creation, and QA with Pydantic outputs. |
| **Automated Project Planning** | `CrewAI_02/Automated_Project.ipynb` | Crew-driven project planning, estimation, and allocation. |
| **Deep Research Flow** | `CrewAI_01/deep_research_flow/` | A complete flow project with multiple crews, tools, guardrails, and structured outputs. |
| **Automatic Deep Research** | `CrewAI_01/Automatic_Deep_Research/` | Standalone research crew with knowledge sources and reusable configuration. |
| **Production Scaffolding** | `CrewAI_02/Production.ipynb` | Using `crewai create crew` / `crewai create flow` and CLI-based project structure. |

## 🚀 Getting Started

### Prerequisites
- Python 3.10–3.13
- Jupyter Notebook or JupyterLab
- API keys for OpenAI and/or Groq, plus SerperDev if using web tools

### Installation

1. Clone the repository:
```bash
git clone https://github.com/holaholu/AI_Agents.git
cd AI_Agents/agents
```

2. Create and activate the virtual environment:
```bash
python -m venv agents_venv
source agents_venv/bin/activate  # On Windows: agents_venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r CrewAI_02/requirements.txt
```

4. Configure environment variables:
```bash
cp .env.example .env
# Edit .env to add your OPENAI_API_KEY, SERPER_API_KEY, etc.
```

5. Launch JupyterLab:
```bash
jupyter lab
```

## 📚 Learning Path

1. **Foundations** — Start with `CrewAI_01/config/agents.yaml` and `tasks.yaml` to understand role/task definitions.
2. **Single Crews** — Run `CrewAI_01/content_creation.ipynb` and `deep_research.ipynb` to see basic crew execution.
3. **Flows** — Explore `CrewAI_02/Agentic_Sales_Pipeline.ipynb` and the generated `crewai_flow*.html` diagrams for event-driven orchestration.
4. **Data & Reporting** — Work through `CrewAI_02/Support_Data_Insight_Analysis.ipynb` for data-driven agent outputs.
5. **Production** — Review `CrewAI_02/Production.ipynb` and the CLI-generated project structure for deployment readiness.

## 🤝 Contributing

This repository is a personal learning portfolio. Suggestions, corrections, and improvements are welcome through issues or pull requests, especially around:
- Updating notebooks to the latest CrewAI API
- Adding regression tests for flow outputs
- Improving documentation and visual diagrams

## 📄 License

This project is provided for educational and portfolio purposes. Please refer to individual project licenses for specific usage terms.

---

This repository demonstrates practical agent engineering with CrewAI — from prototyping in notebooks to structuring crews and flows for production.
