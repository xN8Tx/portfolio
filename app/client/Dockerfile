FROM node:18
WORKDIR /app/client

COPY ./package.json .
RUN npm install

COPY . . 
RUN npm run build

CMD ["npm", "run", "start"]
