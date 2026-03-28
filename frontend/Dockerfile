# Lightweight multi-stage Dockerfile for production
# Stage 1: build the app with Node
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package manifests first for better Docker layer caching
COPY package.json package-lock.json* ./

# Install dependencies (use npm ci when lockfile exists, fallback to npm install)
RUN if [ -f package-lock.json ]; then npm ci --silent; else npm install --silent; fi

# Copy sources and build
COPY . .
RUN npm run build

# Stage 2: serve with nginx (small, fast static server)
FROM nginx:stable-alpine

# Copy build artifacts
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config (use a static file instead of a heredoc to avoid parsing issues)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Basic healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget -qO- http://localhost:80/ || exit 1

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
