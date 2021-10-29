FROM node:15.5-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
RUN yarn build
EXPOSE 4000
CMD ["yarn", "start"]