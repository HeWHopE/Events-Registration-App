## Link 

[Link](https://events-registration-app-1-80tl.onrender.com/)

## Installation

1. Install [nvm](https://github.com/nvm-sh/nvm) or [LTS Node.js](https://nodejs.org) directly from official website.
2. Install [Docker](https://www.docker.com) to run project in containers for dev and prod environment.
3. Activate corepack (`corepack enable`) to enable pnpm or install it manually: `npm i pnpm@latest -g`.
4. Clone this repository - `git clone https://github.com/Radency/internship-2024-doctoo`.
5. Install all project dependencies - `pnpm i -r`.
6. Install `Prisma` extension, extension id in extensions store: `Prisma.prisma`.
7. Install `ESLint` extension, extension id in extensions store: `dbaeumer.vscode-eslint` &
   `rvest.vs-code-prettier-eslint`.
8. Install `Prettier` extension, extension id in extensions store: `esbenp.prettier-vscode`.

### Backend

1. First of all, you need to generate types for Prisma.
2. Move to `apps/backend` folder and run this commands:

- `pnpm prisma format` - Format prisma schema if models updated.
- `pnpm prisma migrate dev` - Generate new migration for new changes.
- `pnpm prisma generate` - Generate types for Prisma.

## Docker

### Development Mode

1. Create a new file `.env.dev` and paste the contents from the `.env.dev.example` file into it.
2. In `apps/backend` folder create a new file `.env` and paste the contents from the `.env.example` file.
3. Run `docker compose -f docker-compose.dev.yaml --env-file=.env.dev up -d`.
4. Done. When running locally, the backend should have a connection to the database.


> To stop **dev** containers, you need run `docker compose -f docker-compose.[dev].yaml down`.

## Conventional Commits

Commits, PR names, and anything else related to Git management must be named according to the
[CC standart](https://www.conventionalcommits.org/en/v1.0.0/).
