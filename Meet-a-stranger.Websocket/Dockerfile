FROM node:12-slim

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . /app

CMD ["npm", "run", "debug"]