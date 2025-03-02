FROM node:18-alpine as build

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json .npmrc fix-ajv.js ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Fix ajv issues manually if needed
RUN node fix-ajv.js

# Build the app
RUN npm run build

# Production stage
FROM nginx:stable-alpine

# Copy built files from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Default nginx port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
