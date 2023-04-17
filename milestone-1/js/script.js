const {createApp} = Vue;
import contacts from './dbContacts.js'


createApp({
    data(){
        return{
            contacts,
            

        }
    }
}).mount('#app')