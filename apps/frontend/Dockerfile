# Use an official Node runtime as a parent image
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy the application code
COPY frontend ./

# Enable corepack to manage package managers
RUN corepack enable

# Install dependencies using pnpm
RUN pnpm install

# Build the application
RUN pnpm build

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["pnpm", "start"]
