FROM node:18-alpine AS builder
RUN npm i --global pnpm@7.20.0 && \
    apk --no-cache upgrade && \
    apk add --no-cache chromium

WORKDIR /build

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser

# Copy workspace's package.json and install dependencies
COPY package.json ./
COPY pnpm-*.yaml ./
RUN pnpm install

# Copy rest of the application source code
COPY . .

# Build the app
RUN pnpm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /build/build/* ./
