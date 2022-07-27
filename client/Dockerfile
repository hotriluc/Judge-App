FROM node:18-alpine3.15

ENV APP_PATH /opt/app/judge-client
WORKDIR $APP_PATH

COPY package.json $APP_PATH/package.json
COPY yarn.lock $APP_PATH/yarn.lock

RUN yarn install

COPY . $APP_PATH

EXPOSE $PORT

CMD ['yarn', 'start']