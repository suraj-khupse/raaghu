#stage 1
FROM node:latest as stage
ENV NODE_ENV=development
ENV NODE_OPTIONS=--max_old_space_size=4096
WORKDIR /app
COPY . .
# RUN npm install -g @angular/cli

WORKDIR /app/raaghu-elements
RUN npm install

WORKDIR /app/raaghu-mfe
RUN npm install 
RUN npm run patch-dev-server
RUN npm run sync-elements
RUN npm run build-all

# WORKDIR /app
#stage 2
# FROM node:latest
# COPY --from=node /app /app
# EXPOSE 8081:80
# RUN chown -R node /app
# WORKDIR /app/raaghu-mfe
# USER node
# CMD ["npm", "start"]

#Server nginx
# Use official nginx image as the base image
FROM nginx:latest
ENV NODE_ENV=production
# Copy the build output to replace the default nginx contents.
COPY --from=stage /app/raaghu-mfe/dist /usr/share/nginx/html
# WORKDIR /usr/share/nginx/html
# COPY host/. .
EXPOSE 8080:80
