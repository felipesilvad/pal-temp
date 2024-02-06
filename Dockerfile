# frontend/Dockerfile
FROM node:18.17.1-alpine AS prod

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

# RUN npm run build

# FROM nginx:alpine

# WORKDIR /usr/local/bin

# COPY --from=prod /app/build /usr/share/nginx/html

# COPY generate-config.sh .

# COPY custom-nginx.template /etc/nginx/conf.d/

# RUN chmod +x generate-config.sh

EXPOSE 3000
CMD ["npm", "start"]
# CMD ["nginx", "-g", "daemon off"]
# ENTRYPOINT [ "/bin/sh", "generate-config.sh"]
