FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install
RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY f5wkoc9q7mah2ks
ENV PM2_SECRET_KEY 2tv672rb58rifm8

COPY . .

EXPOSE 5000

CMD ["pm2-runtime", "main.js"]