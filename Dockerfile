FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080
ENV MONGO_URI=mongodb+srv://hikio010217:hikio010217@project.b4wyhrv.mongodb.net/?retryWrites=true&w=majority
ENV JWT_SECRET_KEY=eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4Nj

EXPOSE 5000

CMD ["npm", "start"]