# Pull Node.js image
FROM node:18

# Setup directory inside container
WORKDIR /usr/src/app

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy files inside container
COPY . .

# Launch the app on port 3030
EXPOSE 3030
CMD ["npm", "run", "dev"]
#   ["node", "app.js"]
