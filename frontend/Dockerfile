FROM node

# set working directory
WORKDIR /app/webserver

# copy build angular app
COPY dist /app/dist

COPY webserver /app/webserver

RUN npm install

#expose express port
EXPOSE 4201

# start the server
CMD ["npm", "start"]
