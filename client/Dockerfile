FROM node:alpine

ENV CI=true

# Set WORKDIR directory
WORKDIR /usr/app

# Install some dependencies
# Avoid to re-run npm install if package.json had not changed.
COPY ./package.json ./
RUN npm install

# Update at the end all other changes
COPY ./ ./

# Default command
CMD [ "npm", "start" ]
