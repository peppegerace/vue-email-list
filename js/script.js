// 1. Creo la struttura html, aggiungendo un bottone.

// 2. Creo un array vuoto dove pushare l' email generate in maniera random.

// 3. Creo una funzione per generare email random.

// 4. Pusho l'email generate nell'array vuoto.

// 5. Aggiungo un evento al click del bottone, ovvero richiamo la funzione per stampare l'email in pagina. Quindi stampo l'email random in pagina

// 6. Svuoto l'array, così quando ripremo il bottone mi genera altre dieci email random.

const { createApp } = Vue;

createApp({
  
  data() {
    return{
      // 2. Creo un array vuoto dove pushare l' email generate in maniera random.
      listEmail: [],
      newEmail: ''
  }
  },

  methods: {

  },

  mounted() {

  }

}).mount('#app')