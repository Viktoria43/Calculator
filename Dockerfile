FROM nginx:1.25.2-alpine-slim

COPY build /usr/share/nginx/html

WORKDIR /usr/share/nginx/html