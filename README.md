# CloudProjectM2

Step to deploy this project on kubernetes

1) minikube start #start kubernetes in minikube container on docker
2) kubectl apply -f database.yml #deploy the mysql database its service and its volumes
3) kubectl run -it --rm --image=mysql:5.6 --restart=Never mysql-client -- mysql -h mysql -ppass #connect to database with fake client
4) create database quichta420 #create the database on mysql instance
4) kubectl apply -f backend.yml #deploy the backend and its service
5) kubectl apply -f frontend.yml #deploy the frontend and its service
6) minikube service frontend --url #allow to access frontend on localhost and access backend on localhost/api


- Database : Mysql
- Backend : Nodejs Typescript Fastify
- Frontend : React Nginx with proxy to redirect /api to Backend
