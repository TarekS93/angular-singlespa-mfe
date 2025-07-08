// Implementazione dell'EventBus in JavaScript puro con supporto per l'ultimo evento
const createEventBus = () => {
    const events = {};
    const lastEvents = {};
    const hasLastEventMap = {};
  
    return {
      /**
       * Registra un handler per un evento specifico
       * @param {string} eventName - Nome dell'evento
       * @param {function} handler - Funzione di callback da eseguire quando l'evento viene emesso
       * @param {boolean} receiveLastEvent - Se true, riceve immediatamente l'ultimo evento se disponibile
       * @returns {function} - Funzione per rimuovere l'handler
       */
      on: (eventName, handler, receiveLastEvent = false) => {
        if (!events[eventName]) {
          events[eventName] = [];
        }
  
        events[eventName].push(handler);
  
        // Se richiesto e disponibile, invia immediatamente l'ultimo evento
        if (receiveLastEvent && hasLastEventMap[eventName]) {
          // Usa setTimeout per evitare l'esecuzione sincrona
          setTimeout(() => {
            handler(lastEvents[eventName]);
          }, 0);
        }
  
        // Restituisce una funzione per rimuovere questo handler
        return () => {
          eventBus.off(eventName, handler);
        };
      },
  
      /**
       * Rimuove un handler specifico per un evento
       * @param {string} eventName - Nome dell'evento
       * @param {function} handler - Handler da rimuovere
       */
      off: (eventName, handler) => {
        if (!events[eventName]) {
          return;
        }
  
        events[eventName] = events[eventName].filter(
          (registeredHandler) => registeredHandler !== handler
        );
      },
  
      /**
       * Emette un evento con i dati specificati e salva come ultimo evento
       * @param {string} eventName - Nome dell'evento da emettere
       * @param {any} data - Dati da passare agli handler
       */
      emit: (eventName, data) => {
        // Salva l'ultimo evento
        lastEvents[eventName] = data;
        hasLastEventMap[eventName] = true;
  
        if (!events[eventName]) {
          return;
        }
  
        events[eventName].forEach((handler) => {
          handler(data);
        });
      },
  
      /**
       * Registra un handler che viene eseguito una sola volta
       * @param {string} eventName - Nome dell'evento
       * @param {function} handler - Funzione di callback da eseguire una volta sola
       * @param {boolean} receiveLastEvent - Se true, riceve immediatamente l'ultimo evento se disponibile
       * @returns {function} - Funzione per rimuovere l'handler
       */
      once: (eventName, handler, receiveLastEvent = false) => {
        const wrappedHandler = (data) => {
          // Rimuove l'handler prima di eseguirlo
          eventBus.off(eventName, wrappedHandler);
          // Esegue l'handler originale
          handler(data);
        };
  
        return eventBus.on(eventName, wrappedHandler, receiveLastEvent);
      },
  
      /**
       * Rimuove tutti gli handler per un evento specifico
       * @param {string} eventName - Nome dell'evento da cui rimuovere tutti gli handler (opzionale)
       */
      offAll: (eventName) => {
        if (eventName) {
          delete events[eventName];
          // Opzionalmente puoi anche cancellare l'ultimo evento
          // delete lastEvents[eventName];
          // delete hasLastEventMap[eventName];
        } else {
          Object.keys(events).forEach(key => delete events[key]);
          // Opzionalmente puoi anche cancellare tutti gli ultimi eventi
          // Object.keys(lastEvents).forEach(key => delete lastEvents[key]);
          // Object.keys(hasLastEventMap).forEach(key => delete hasLastEventMap[key]);
        }
      },
  
      /**
       * Verifica se esiste almeno un handler per un evento
       * @param {string} eventName - Nome dell'evento da verificare
       * @returns {boolean} - true se l'evento ha almeno un handler, altrimenti false
       */
      hasHandlers: (eventName) => {
        return !!(events[eventName] && events[eventName].length);
      },
  
      /**
       * Conta il numero di handler per un evento specifico
       * @param {string} eventName - Nome dell'evento
       * @returns {number} - Numero di handler registrati per l'evento
       */
      countHandlers: (eventName) => {
        if (!events[eventName]) {
          return 0;
        }
        return events[eventName].length;
      },
  
      /**
       * Restituisce tutti gli eventi attualmente registrati
       * @returns {Object} - Mappa di tutti gli eventi registrati
       */
      getEvents: () => {
        return { ...events };
      },
  
      /**
       * Restituisce l'ultimo evento emesso per un evento specifico
       * @param {string} eventName - Nome dell'evento
       * @returns {any} - L'ultimo dato emesso per l'evento, o undefined se non disponibile
       */
      getLastEvent: (eventName) => {
        return hasLastEventMap[eventName] ? lastEvents[eventName] : undefined;
      },
  
      /**
       * Cancella l'ultimo evento salvato per un evento specifico
       * @param {string} eventName - Nome dell'evento
       */
      clearLastEvent: (eventName) => {
        delete lastEvents[eventName];
        delete hasLastEventMap[eventName];
      },
  
      /**
       * Verifica se esiste un ultimo evento per un evento specifico
       * @param {string} eventName - Nome dell'evento da verificare
       * @returns {boolean} - true se esiste un ultimo evento, altrimenti false
       */
      hasLastEvent: (eventName) => {
        return hasLastEventMap[eventName] || false;
      }
    };
  };
  
  const eventBus = createEventBus();
  export default eventBus;
