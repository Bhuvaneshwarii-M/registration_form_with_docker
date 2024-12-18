# Use official Node.js image as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend files
COPY . .

# Expose the port your server will run on
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
