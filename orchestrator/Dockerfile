FROM node:16.3.0-alpine

WORKDIR  /var/www/demo-express-docker

# RUN apk add --no-cache tini

COPY package.json package-lock.json* yarn.lock* ./

# RUN chown -R node:node .

# USER node

RUN npm install && npm cache clean --force

COPY . .

# ENTRYPOINT [ "/sbin/tini", "--" ]

CMD ["npm", "start"]