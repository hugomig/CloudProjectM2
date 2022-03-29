FROM node:alpine as builder

WORKDIR /app
COPY package.json .

RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .

RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

ENTRYPOINT ["nginx", "-g", "daemon off;"]