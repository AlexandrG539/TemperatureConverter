FROM node:17.5.0-alpine

EXPOSE 7070

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./public ./public

CMD ["npm", "run", "start"]
