# 🚀 Angular SingleSpa MFE

Una demo semplice di  **Microfrontends** con **Angular 19.2.7** e **Single-SPA**.

## 🎯 Cos'è questo progetto?

Questo progetto mostra come dividere un'applicazione web in **piccoli pezzi indipendenti** chiamati **Microfrontends (MFE)**.

### Vantaggi
- ✅ Ogni team lavora su un pezzo separato
- ✅ Si può aggiornare un pezzo senza toccare gli altri  
- ✅ Più facile da mantenere

## 🏗️ Come funziona

```
Root App (porta 9000) ← Coordina tutto, fungendo da shell
├── Navbar (porta 4300) ← Menu di navigazione
└── Dashboard (porta 4200) ← Pagina con grafici
```

## 🔧 Cosa serve per iniziare

1. **Node.js** (versione 22 LTS)
2. **Angular CLI**

```bash
# Controlla se li hai già
node --version
ng version

# Se non hai Angular CLI, installalo
npm install -g @angular/cli
```

## 📦 Installazione

### Scarica il progetto
```bash
git clone angular-singlespa-mfe
```

## 🚀 Installa e avvia tutto

### Modo manuale (3 terminali separati)

**Terminal 1 - App principale:**
```bash
cd root-config
npm install 
npm start
```

**Terminal 2 - Navbar:**
```bash
cd navbar
npm install 
ng serve
```

**Terminal 3 - Dashboard:**
```bash
cd dashboard
npm install
ng serve
```

## 🌐 Apri l'app

Vai su: **http://localhost:9000**

## 📁 Struttura del progetto

```
angular-mfe-demo/
├── root-config/      # App principale che coordina tutto
├── navbar/           # Menu di navigazione (Angular)
├── dashboard/        # Dashboard con grafici (Angular)
```

## 🔧 Come aggiungere un nuovo MFE

1. **Copia un MFE esistente:**
```bash
# Copia la cartella di un MFE esistente
cp -r dashboard mio-nuovo-mfe
cd mio-nuovo-mfe
```

2. **Modifica i file di configurazione:**
```bash
# Cambia il nome nel package.json
# Cambia la porta in angular.json (es. 4500)
# Modifica il contenuto dei componenti
```

3. **Aggiungi al file root-config/src/index.ejs:**
```javascript
"@angular-mfe/mio-nuovo-mfe": "//localhost:4500/main.js",
"@angular-mfe/mio-nuovo-mfe/": "//localhost:4500/",
```

4. **Aggiungi la rotta nel layout**

## 🐛 Problemi comuni

### ❌ "Porta già in uso"
```bash
# Trova cosa usa la porta
lsof -i :4200
# Chiudi il processo o usa un'altra porta
ng serve --port 4201
```

### ❌ "Cannot find module"
```bash
# Reinstalla le dipendenze
rm -rf node_modules
npm install
```

Se hai problemi:
1. Controlla che Node.js (versione 22 LTS) e Angular CLI siano installati
2. Verifica che le porte 9000, 4200, 4300 siano libere
3. Riavvia tutti i server

---
