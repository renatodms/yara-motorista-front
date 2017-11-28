FROM node:8
COPY . /src
WORKDIR /src
RUN npm install
CMD ["node", "server.js"]