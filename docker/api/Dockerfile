FROM node:21.4-bullseye
# LABEL maintainer="DevOps"

# Environment Variables
ENV NODE_ENV=dev
ENV API_PORT=3001

# Install yarn and vite
RUN yarn global add yarn@latest
RUN yarn global add ts-node@latest
RUN yarn global add nodemon
RUN yarn global add vite@latest

# Add Packages and Install
ADD ./src/api/package.json .
RUN yarn install
ADD ./src/api .

# Define workdir and permissions
WORKDIR /app
RUN chown node:node /app
USER node

# Run Script
CMD ["yarn", "dev"]

EXPOSE 3001