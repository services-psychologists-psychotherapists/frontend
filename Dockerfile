FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@10.1.0
COPY . ./
RUN npm run build
CMD cp -r build result_build
