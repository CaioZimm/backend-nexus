FROM node:22.14

RUN apt-get update

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]