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

        newMess(){
            if(this.myText.length > 0){
                const nuovoMessaggio = {
                    message : this.myText,
                    status : 'sent'
                }
                this.contacts[this.counter].messages.push(nuovoMessaggio)
                this.myText = ''
                this.answer()
            }
        },
        answer(){
            setTimeout(()=>{
                const risp = {
                    message : 'Ok',
                    status: 'received',
                }
                this.contacts[this.counter].messages.push(risp)
            },1000)
        }
    }
}).mount('#app')