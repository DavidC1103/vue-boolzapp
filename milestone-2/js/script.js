const {createApp} = Vue;
import contacts from './dbContacts.js'


createApp({
    data(){
        return{
            contacts,
            counter : 0,

        }
    },


    methods:{
        profileView(index){
            this.counter = index
        }
    }
}).mount('#app')