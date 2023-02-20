FROM node:12

WORKDIR /app

COPY ./package.json .
RUN npm cache clean --force
RUN npm install
RUN npm install -g supervisor
COPY . .

EXPOSE 3000

CMD [ "supervisor", "-e", "js,ts,html", "src/app.js" ]