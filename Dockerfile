# Schritt 1: Definieren des Basis-Images mit Node.js 20
FROM node:20.10.0

# Arbeitsverzeichnis im Container festlegen
WORKDIR azureappservice.nicofilips/my-react-ts-app

RUN ls -la
# Kopieren der package.json und package-lock.json (oder yarn.lock)
COPY package*.json ./


# Installieren von Abhängigkeiten
RUN npm install

COPY . .

# TypeScript-Compiler ausführen, um das Projekt zu bauen
RUN npm run build
# Für Yarn: RUN yarn build

EXPOSE 3000

# Starten der Anwendung
CMD ["npm", "start"]
# Für Yarn: CMD ["yarn", "start"]
