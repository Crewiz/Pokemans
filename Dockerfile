# Use Node.js image as base image
FROM node:16

# Set working directory in Docker container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy all other source code files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port 5173 (the port your app runs on)
EXPOSE 5173

# Start the React app
CMD ["npm", "run", "dev"]
