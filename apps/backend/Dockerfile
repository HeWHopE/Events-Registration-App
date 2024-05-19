FROM node:18

WORKDIR /app

COPY package*.json ./

RUN corepack enable

# Install dependencies using pnpm
RUN pnpm install

# Build the application
RUN pnpm build

# Run the application
CMD ["pnpm", "start"]