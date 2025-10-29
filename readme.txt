Pic Tools Backend (Deta Micro) - README
--------------------------------------

What is inside:
- index.js             <-- Deta-compatible entry (exports app)
- routes/tools.js      <-- All endpoints for tools
- package.json
- .env.example
- readme.txt (this file)

Quick start (local):
1. npm install
2. cp .env.example .env   # edit if you have keys
3. npm start
4. Test locally (example):
   curl -F "image=@/path/to/img.jpg" http://localhost:3000/api/tools/remove-bg -o out.png

Deploy to Deta:
1. Install Deta CLI:
   macOS/Linux:
     curl -fsSL https://get.deta.dev/cli.sh | sh
   Windows (Powershell):
     iwr https://get.deta.dev/cli.ps1 -useb | iex

2. Login:
   deta login

3. Initialize micro (run in project root):
   deta new --name pic-tools

4. Deploy:
   deta deploy

5. (Optional) Set secrets (after deploy):
   deta secrets set OPENAI_API_KEY="sk_xxx" REMOVE_BG_KEY="xxx" REPLICATE_API_KEY="xxx" DETA_PROJECT_KEY="project_xxx"

Notes:
- The code includes placeholder integrations for advanced AI (OpenAI/Remove.bg/Replicate).
- Without keys, the routes will use fallback methods (sharp) which are basic.
- For production, add authentication, rate-limits, and input validation.
