# Stage 1: Build
FROM node:22-alpine AS build
WORKDIR /app

# Copiar solo archivos de dependencias primero (cache de capas)
COPY package.json pnpm-lock.yaml ./

# Instalar pnpm y dependencias
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# Copiar el resto del código fuente
COPY . .

# Build de producción
RUN pnpm run build

# Stage 2: Servir con Nginx
FROM nginx:1.27-alpine AS production

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar archivos estáticos del build
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer puerto
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
