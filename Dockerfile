FROM nginx:alpine

COPY . /usr/share/nginx/html
COPY home.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]