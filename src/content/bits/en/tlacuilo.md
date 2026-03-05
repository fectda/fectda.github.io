---
date: 2026-02-12
description: Content orchestration project for portfolio
draft: false
progress: 5
repository_url: https://github.com/fectda/tlacuilo
stack:
- Python
- FastAPI
- Vue 3
- Docker
- NVIDIA GPU
- Ollama
- ComfyUI
status: done
tags:
- draft
title: tlacuilo
type: SOFTWARE
---

## The Challenge of Publishing 50 Projects

The idea of tlacuilo arose from the frustration of having an empty portfolio after finishing a project. I had to take photos, draft texts, generate drafts, and upload everything manually. That meant, for each project, going through an endless copy‑paste flow between the AI web interface, the code editor, and the file explorer. The result was:

- Each project required **hours** of work for text and images.
- AI‑generated images always had a **watermark** and were not suitable for publishing.
- With over 50 projects, the process became unmanageable and time multiplied.

The goal was a fully automated project documentation lifecycle, with direct publication to the portfolio, minimal manual interaction, and no watermarks.

## The Solution: Agents, Failures, and the Final Word

To achieve this, I tried using an ecosystem of agents: orchestrator, infra, backend, frontend, prompt‑engineer, architect, genesis, ComfyUI‑expert, and QA. Each agent had to assume a role, but the result was the following saga:

1. **Installing ComfyUI in Docker with NVIDIA GPU**: fast, thanks to my container experience.
2. **Agent testing**: the orchestrator and QA served only as annotations; agents did not communicate with each other. The data flow was lost and prompts were not accepted.
3. **Refactoring iterations**: I had to delete agent code, rewrite functions, and in many cases ended with hand‑written logic. Development time skyrocketed, from **a couple of days** to **over 14 hours per day for two weeks** without rest.
4. **LLM failures**: Ollama models behaved unexpectedly, results were poor and did not follow instructions; testing them one by one, the only stable solution was iterating until finding a stable combination of models and prompts.
5. **Logic persistence**: backend and frontend began mixing dependencies and touching each other’s files. The only time a service was functional was after a round of reviews and manual corrections.

The result: a functional application that allows creating a project, moving through various states (interview, draft generation, image generation, translation, publication), and publishes to the portfolio with a simple commit and push. However, the quality of results remains variable, the process is still **iterative in multiple steps**, and I must keep updating it as we document new projects.

## Architecture and Specifications

| Component | Technology | Comment |
| :--- | :--- | :--- |
| **Frontend** | Vue 3 + Vite + TailwindCSS | User interface for interview and project management. |
| **Backend** | FastAPI (Python) | Orchestration and content generation API. |
| **Infrastructure** | Docker, NVIDIA GPU | Containers for FastAPI, Vue; requires ComfyUI and Ollama services that are not managed by this project. |
| **LLM Models** | Ollama (local) | Uses gpt‑oss and qwen3‑vl models. |
| **Image Generation** | ComfyUI | Generates images from prompts and processes files. |
| **CI/CD** | GitHub Actions | Portfolio deployment: commit Markdown files and images, push to GitHub Pages. |
| **Persistence** | Git + Markdown | Each project is stored as a Markdown file in `src/content/...`. |
| **Data Validation** | LLM | An LLM validates the narrative structure of the Markdown without rigid rules. |
| **Localization** | LLM (or local model) | Translates content to English after generation in Spanish. |

## Results

- **Time per project**: less than 2 hours (text + images).  
- **Images**: 3 to 5 images per project, 1–2 min each; can iterate over them.  
- **Testing**: All unit tests were removed due to agent issues; service‑level, end‑to‑end, and prompt debugging mechanisms are maintained.  
- **Publication**: Achieved with a simple commit and push; no complex CI/CD pipeline, just GitHub Actions that deploy the page.  
- **Quality**: Functional but not perfect; still requires intervention and prompt correction whenever a new content generation problem arises.  
- **Lessons learned**:  
  - Agent orchestration without internal communication is infeasible.  
  - Full LLM automation is possible but not the goal of this project: **quality over quantity**.  
  - A workflow of many hours per project is unsustainable for more than 50 projects.  
  - Documentation and prompts must be clear and restrictive; without them, the agent behaves like a “Juanito” that does whatever you command without sense.  

**Next steps**: refine system prompts to reduce iterations and achieve more consistent content generation with fewer iterations. For the maintenance phase, automatic orchestration will be removed and manual orchestration will be used until a new orchestration architecture is found.