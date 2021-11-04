FROM node:16 as builder
RUN mkdir -p /usr/src/app
WORKDIR  /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY . .
#RUN yarn 
#RUN npm run build
#COPY  .  .
EXPOSE 3000
CMD ["npm","start"]
#--------------------------------------------------------------------------
#production mode
#FROM nginx:stable-alpine
#COPY --from=build /usr/src/app/build /usr/share/nginx/html
#COPY --from=build /usr/src/app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80
#CMD ["nginx","-g","daemon off;"]

