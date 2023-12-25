FROM node:21.4-bullseye

# Environment Variables
ENV NODE_ENV=dev

# Install yarn and vite
RUN yarn global add yarn@latest
RUN yarn global add ts-node@latest
RUN yarn global add nodemon
RUN yarn global add vite@latest

# Define workdir
WORKDIR /app

# Add entrypoint
ADD ./docker/web/script/docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT [ "/docker-entrypoint.sh" ]

# Set user
USER node

# Run Script
CMD ["yarn", "dev"]

EXPOSE 5173