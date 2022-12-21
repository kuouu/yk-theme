FROM node:14-alpine
ENV NODE_ENV=development

WORKDIR /var/www/html/wp-content/themes/react-tailwind-theme

COPY package.json /var/www/html/wp-content/themes/react-tailwind-theme

RUN yarn install && yarn cache clean

COPY . /var/www/html/wp-content/themes/react-tailwind-theme

CMD [ "yarn", "start" ]
