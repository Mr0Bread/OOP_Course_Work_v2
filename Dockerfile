FROM node:14.15.4 as app
WORKDIR /usr/src/app
COPY /src/app/package*.json ./
RUN npm install
COPY /src/app .
CMD ["npm", "run", "start"]
