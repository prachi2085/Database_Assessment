
# COPY . /app
# WORKDIR /app
# RUN npm install
# RUN npm run build
# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app for production
RUN npm run build

# Serve the application using a simple HTTP server
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose port 3000 to the outside world
EXPOSE 3000


