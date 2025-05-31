# Build & Run Commands
cd user-service
docker build -t user-service .
docker run -d -p 3001:3001 user-service


# Access URLs
curl localhost:3001


