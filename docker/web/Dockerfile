FROM node:21.4-bullseye
# LABEL maintainer="DevOps"

# Environment Variables
ENV NODE_ENV=dev

# Add Packages and Install
ADD ./src/web/package.json .
RUN yarn install
ADD ./src/web .

# Install vite
RUN yarn global add vite

# Define workdir and permissions
WORKDIR /app
RUN chown node:node /app
USER node

# Run Script
CMD ["yarn", "dev"]

EXPOSE 5173