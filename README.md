# AI Agents Portfolio — Multi-Framework Agent Engineering

A hands-on collection of autonomous agent workflows built across multiple frameworks and platforms. This repository documents my progression from single-crew notebooks to multi-agent flows, code agents, knowledge graphs, evaluation pipelines, and real-world integrations. It is organized as a learning portfolio and reference implementation for anyone exploring agent orchestration, retrieval-augmented research, business automation, and agent governance.

## 🧠 Core Competencies

### 🤖 Multi-Agent Orchestration

- **CrewAI**: Build agent teams with distinct roles, goals, and backstories using YAML-driven configuration and event-driven flows.
- **LangGraph**: Compose stateful agent graphs with persistence, streaming, and human-in-the-loop patterns.
- **AutoGen**: Microsoft AutoGen multi-agent conversations, planning, coding, and tool-use patterns.
- **NVIDIA NeMo Agent Toolkit**: Build tool-wielding agents, multi-agent math workflows, and deploy with the NeMo UI.

### 🔧 Code Agents & Tool Use

- **Smolagents (Code_Agents)**: Code-acting agents with secure local execution, sandboxed E2B runners, monitoring with Phoenix, and deep research.
- **Coding Agents**: Data analyst, full-stack, and web-builder coding agents.
- **Agentic AI**: Reflection-based SQL agents, email assistants, customer service pipelines, and market research teams.

### � Knowledge Graphs & Memory

- **Knowledge Graphs for AI Agents**: Graph construction, entity extraction, and business process integration.
- **Agentic KnowledgeGraph**: Google ADK with Neo4j-backed knowledge graphs, schema proposals, and user intent modeling.
- **Semantic Caching**: Cache agent responses by semantic similarity to improve latency and cost.

### 🌐 Web, Browser & Document Agents

- **Browser Agents**: Autonomous web navigation, Agent-Q style browsing, and web-agent notebooks.
- **Document AI**: OCR (Tesseract, Paddle), layout understanding, and RAG over documents with Landing AI.

### 📊 Data, Evaluation & Governance

- **Building & Evaluating Data Agents**: Data-aware agent construction, performance observation, and multi-agent data workflows.
- **Evaluate Agents**: Structured evaluation, tracing, trajectory evaluation, and agent benchmarking.
- **Databricks Agent Governance**: Governance, deployment, and observability for Databricks-hosted agents.
- **Database Agent with LangChain**: SQL/CSV/Azure OpenAI function-calling agents.

### 🎙 Voice & Media Agents

- **Voice Agents**: Voice agent components and latency optimization with Google ADK.

## 🛠 Technical Stack

- **Agent Frameworks**: CrewAI, LangGraph, AutoGen, Smolagents, Google ADK, NVIDIA NeMo Agent Toolkit
- **Language Models**: OpenAI GPT-4o / GPT-4o-mini, Qwen/Qwen3.5-9B, Groq, Anthropic Claude
- **Orchestration**: YAML/JSONC configs, state graphs, reflection loops, flows
- **Data & Visualization**: Pandas, NumPy, Matplotlib, Plotly, GeoPandas, Shapely
- **Search & Retrieval**: Tavily, SerperDev, DuckDuckGo, requests, markdownify, ChromaDB
- **Knowledge & Memory**: Neo4j, RDF/TTL, semantic caching, SQLite
- **Observability**: Phoenix (Arize), OpenInference, OpenTelemetry
- **Security**: Local Python executor, E2B sandbox, `.env` management
- **Environment**: Python 3.11–3.13, JupyterLab, `uv`/pip

## 📁 Repository Structure

```
agents/
├── Agentic_AI/                         # Reflection-based SQL, email, customer service, market research
├── Agentic_KnowledgeGraph/             # Google ADK + Neo4j knowledge graphs
├── AutoGen/                            # Microsoft AutoGen notebooks and workflows
├── Browser_Agents/                     # Autonomous web agents and Agent-Q clone
├── Building&Evaluating_DataAgents/     # Data agent construction and evaluation
├── Code_Agents/                        # Smolagents: intro, secure execution, monitoring, deep research
├── Coding_Agents/                      # Coding agents: data analyst, full-stack, web builder
├── CrewAI/                             # CrewAI courses and projects
│   ├── CrewAI_01/                      # Core crew patterns and deep research
│   └── CrewAI_02/                      # Advanced flows and production scaffolding
├── Database_Agent_Langchain/           # LangChain SQL/CSV/Azure OpenAI agents
├── databricks-agent-governance/        # Databricks agent governance and deployment
├── devin/                              # Devin-style experiments (snake-game)
├── Document_AI/                        # OCR, layout understanding, and document RAG
├── Evaluate_Agents/                    # Agent evaluation, tracing, trajectory eval
├── KnowledgeGraph_For_AI_agents/       # Business process and AP knowledge graphs
├── LangGraph/                          # LangGraph stateful agent graphs
├── Nvidia_Nemo_Agent_Toolkit/          # NVIDIA NeMo agent toolkit and UI
├── Semantic_Caching/                   # Semantic cache for faster agent responses
├── Voice_Agents/                       # Voice agents with Google ADK
├── agents_venv/                        # Python virtual environment
├── .env                                # API keys (not tracked)
└── .gitignore
```

## 📈 Key Projects

| Project                           | Location                                                         | What It Demonstrates                                                                |
| --------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Smolagents Intro**              | `Code_Agents/intro.ipynb`                                        | Building code-acting agents with `smolagents`, custom tools, and secure execution.  |
| **Secure Code Execution**         | `Code_Agents/secure_code.ipynb`                                  | Local Python executor restrictions, forbidden imports, and E2B sandbox execution.   |
| **Monitoring & Evaluation**       | `Code_Agents/monitoring_evaluation.ipynb`                        | Phoenix/OpenTelemetry tracing for agent runs and tool-call evaluation.              |
| **Deep Research Agent**           | `Code_Agents/deep_research.ipynb`                                | Multi-agent research with Tavily search, webpage visits, and Plotly map generation. |
| **Agentic Sales Pipeline**        | `CrewAI/CrewAI_02/Agentic_Sales_Pipeline.ipynb`                  | Flow-based lead fetch, scoring, filtering, routing, and follow-up actions.          |
| **Support Data Insight Analysis** | `CrewAI/CrewAI_02/Support_Data_Insight_Analysis.ipynb`           | Reading CSV data, generating suggestions, building tables/charts, and reports.      |
| **LangGraph Essay Writer**        | `LangGraph/essay_writer.ipynb`                                   | State-graph agent for essay writing with persistence.                               |
| **AutoGen Tool Use & Chess**      | `AutoGen/Tool_Use_and_Conversational_Chess.ipynb`                | Multi-agent tool use and conversational chess.                                      |
| **SQL Agent with Reflection**     | `Agentic_AI/reflection_sql_generation.ipynb`                     | Reflection pattern for iterative SQL query improvement.                             |
| **Email Management Agent**        | `Agentic_AI/Email_assistant/`                                    | ReAct-style email agent with FastAPI backend and tool calls.                        |
| **Knowledge Graph Construction**  | `KnowledgeGraph_For_AI_agents/knowledge_graph_contruction.ipynb` | Building knowledge graphs from business data.                                       |
| **NeMo Multi-Agent Math**         | `Nvidia_Nemo_Agent_Toolkit/multi_agent_math.ipynb`               | Multi-agent mathematical reasoning with NVIDIA NeMo.                                |
| **Browser Web Agent**             | `Browser_Agents/web_agent.ipynb`                                 | Autonomous web browsing and scraping.                                               |
| **Semantic Caching**              | `Semantic_Caching/semantic_cache.ipynb`                          | Speeding up agents with semantic response caching.                                  |
| **Databricks Governance**         | `databricks-agent-governance/`                                   | Agent governance and deployment on Databricks.                                      |

## 🚀 Getting Started

### Prerequisites

- Python 3.11–3.13
- Jupyter Notebook or JupyterLab
- API keys for OpenAI, Groq, Anthropic, Tavily, Hugging Face, etc. (as needed by each project)

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

3. Install dependencies for the project you want to run:

```bash
# Example for CrewAI
pip install -r CrewAI/CrewAI_02/requirements.txt
# Example for Code_Agents
pip install -r Code_Agents/requirements.txt
```

4. Configure environment variables:

```bash
cp .env.example .env
# Edit .env to add your API keys
```

5. Launch JupyterLab:

```bash
jupyter lab
```

## 📚 Learning Path

1. **Foundations** — Start with `CrewAI/CrewAI_01/` notebooks and `Code_Agents/intro.ipynb` to understand crew and code-agent basics.
2. **Single Crews / Agents** — Run `CrewAI/CrewAI_01/content_creation.ipynb` and `Code_Agents/monitoring_evaluation.ipynb` for basic execution and tracing.
3. **Flows & Graphs** — Explore `CrewAI/CrewAI_02/Agentic_Sales_Pipeline.ipynb` and `LangGraph/essay_writer.ipynb` for stateful orchestration.
4. **Data & Research** — Work through `Code_Agents/deep_research.ipynb`, `Building&Evaluating_DataAgents/`, and `Agentic_AI/reflection_sql_generation.ipynb`.
5. **Knowledge & Memory** — Review `KnowledgeGraph_For_AI_agents/` and `Agentic_KnowledgeGraph/` for graph-based agent memory.
6. **Evaluation & Governance** — Study `Evaluate_Agents/` and `databricks-agent-governance/` for production readiness.
7. **Specialized Agents** — Dive into `Voice_Agents/`, `Browser_Agents/`, `Document_AI/`, and `Nvidia_Nemo_Agent_Toolkit/`.

## 🤝 Contributing

This repository is a personal learning portfolio. Suggestions, corrections, and improvements are welcome through issues or pull requests, especially around:

- Updating notebooks to the latest library APIs
- Adding regression tests for agent outputs
- Improving documentation and visual diagrams
- Expanding evaluation and governance coverage

## 📄 License

This project is provided for educational and portfolio purposes. Please refer to individual project licenses for specific usage terms.

---

This repository demonstrates practical agent engineering across frameworks — from prototyping in notebooks to structuring crews, graphs, and production-ready agent systems.
