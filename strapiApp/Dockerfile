FROM node:14.17.3-buster

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm install -g typescript

RUN npm link typescript

RUN npm run build

CMD ["npm", "run", "start"]
