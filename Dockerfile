# Utiliser une image de base Node.js
FROM node:lts-alpine3.20 as BUILD_IMAGE

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install -y

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port sur lequel l'application va tourner
EXPOSE 3000

# Commande pour démarrer l'application en mode développement
CMD ["npm", "run", "dev"]


# for production
# FROM node:lts-alpine3.20 as PRODUCTION_IMAGE

#WORKDIR /app

#COPY --from=BUILD_IMAGE /app/dist /app/dist

#EXPOSE 8080

# COPY package.json ./
#COPY vite.config.js ./

#RUN npm install javascript

#EXPOSE 8080

#CMD ["npm", "run", "preview"]

# ds vite.config.js

# preview: {
#    host: true,
#    port: 8080
#}

# ds package.json scripts    "preview": "vite preview"

# docker build -t app:latest

# docker run -p 8080:8080 app:latest