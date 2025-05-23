FROM nginx:1.25-alpine

COPY ./apps/shop/dist /usr/share/nginx/html/shop
COPY ./apps/admin/dist /usr/share/nginx/html/admin