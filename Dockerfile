FROM node:7.2

# Workaround for npm install failing (See https://github.com/npm/npm/issues/9863)
RUN cd $(npm root -g)/npm \
    && npm install fs-extra \
    && sed -i -e s/graceful-fs/fs-extra/ -e s/fs.rename/fs.move/ ./lib/utils/rename.js

RUN mkdir -p /usr/src/
COPY src/ /usr/src/app/

WORKDIR /usr/src/app/
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]