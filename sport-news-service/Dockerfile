# Long term support version
FROM node:latest

LABEL Name="sport_news_service" Version=0.1.0

# Create directory inside image to hold our app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Copy source files to destination
COPY . .

CMD ["npm", "start"]

EXPOSE 3003


