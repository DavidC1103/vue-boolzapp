const {createApp} = Vue;

console.log(contacts);
const abc = createApp({
    data(){
        return{
            contacts: contacts,
            counter : 0,
            myText : ''
        }
    },

    methods:{
        profileView(index){
            this.counter = index
        },
    
    }
}).mount('#app')