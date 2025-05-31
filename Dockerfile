FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy npm config before install to avoid cert issues
COPY .npmrc .npmrc

# Copy rest of the app
COPY . .

# Install dependencies
RUN npm install

# Expose the app port
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
