const {createApp} = Vue;


createApp({
    data(){
        return{
            contacts: contacts,
            counter : 0,
            myText : '',
            findUser : ''
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
                    status : 'sent',
                    date: '12:05'
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
                    date: '12.05'
                }
                this.contacts[this.counter].messages.push(risp)
            },1000)
        },
        
        findContacts(){
            this.contacts.forEach((contact) => {
             contact.visible = contact.name.toLowerCase().includes(this.findUser.toLowerCase())
              console.log(this.findContacts);
            })
        }
    }
}).mount('#app')