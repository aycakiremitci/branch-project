FROM node:14

WORKDIR /branch-be
COPY package.json .
RUN npm install
COPY . .
RUN apt-get update && apt-get install -y netcat
COPY wait-for-it.sh /usr/wait-for-it.sh
RUN chmod +x /usr/wait-for-it.sh
CMD /usr/wait-for-it.sh mysqldb:3306 -- /bin/sh -c 'node seeder/seed.js && npm start'
