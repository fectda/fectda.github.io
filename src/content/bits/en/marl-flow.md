---
date: 2026-02-05
description: Interactive fluency trainer powered by AI that simulates real contexts
  and adapts to the user's level.
draft: false
progress: 3
repository_url: https://gitlab.com/eduardo-dev/text-practice
stack:
- Vue.js
- Flask
- Docker
- Ollama
- Python
status: wip
title: Marl Flow (AI Language Trainer)
type: AI_AGENT
---

## The Problem  
Although I maintain consistent streaks on apps like Duolingo and have taken traditional classes, it is still very difficult for me to articulate complex ideas in English. There is a gap between knowing English and feeling comfortable translating abstract or technical thoughts from Spanish to English in real time.

## The Solution  
To close that gap, I built a fluency trainer that combines AI and iterative design. The process began with a Python/Gradio prototype that showed me how I could integrate the local model, but the UI turned out *horribly* rigid: a Gradio grid that didn't adapt to the styles I wanted and ended up with a visually unpleasing experience. Still, the business logic worked, so I decided to use the original architecture of Python + Flask + Docker, but moved to a Vue.js frontend because I was already familiar with that framework and wanted a more flexible UI. I used Google Stitch to generate a base design and, after Antigrafity attempted to adjust the layout unsuccessfully, I ended up rewriting the front‑end in Vue, keeping the same backend logic and the Ollama model that is not part of this project.

## Mechanics (Core Loop)  
1. **Context Selection:** The system offers 3 scenarios (Professional, Casual, Technical) generated on the fly by AI.  
2. **Challenge:** A phrase or idea in Spanish adapted to the current level is presented.  
3. **Input:** The user writes the translation or interpretation in English.  
4. **Immediate Feedback:** The system analyzes the response, corrects errors, and assigns a score.  
5. **Dynamic Progression:**  
   - 10‑round sessions.  
   - At the end of the session, if performance is high, difficulty increases; if low, it decreases.

## Architecture and Specifications  
- **Frontend:** Vue.js + Vite, SPA rendering, state management with Vuex, connection to the Flask API.  
- **Backend:** Flask exposing endpoints and manages state logic and calls the Ollama model.  
- **Infrastructure:** Docker Compose with separate containers for Front and Back.  
- **Hardware:** Raspberry Pi 4 (chosen for low power) runs the front‑end and the API; the local IA (Ollama) runs on a desktop because the model does not fit the Pi.  
- **AI Engine:** Ollama, local translation model (e.g., `gpt-oss:20b`).  
- **Meta‑Prompting:** Specific prompts were designed for contexts, difficulty, and evaluation; these prompts were created with a Gem in Gemini acting as the “Product Director”.

## Results  
The project is still **wip** and is not intended for public release; it operates in a private environment where only trusted users test the rounds. The main achievements are:

- A fluid and customizable user interface that replaced the rigid Gradio grid.  
- An immediate feedback system that allows difficulty adjustment after each round.  
- A complete development flow that demonstrated that the product vision can be orchestrated using local LLMs without relying on external APIs.

The limitations are clear:

- Ollama does not run on the Raspberry Pi, so the IA requires an external server.  
- The prompt‑generation process still depends on the Gem and is not automated.  
- No quantitative metrics; validation is based on feedback from test users.

In conclusion, *Marl Flow* is a proof of concept that shows real‑time translation can be practical with local IA, but it requires a more robust hardware team and a stronger prompt flow to move from a private prototype to a public tool.