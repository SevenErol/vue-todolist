
const { createApp } = Vue;

createApp({
    data() {
        return {
            
            tasks: [
                {
                    text: "Learn HTML",
                    done: false
                },

                {
                    text: "Learn CSS",
                    done: false
                },

                {
                    text: "Learn JavaScript",
                    done: false
                },

                {
                    text: "Learn Vue JS",
                    done: false
                },
            ],

            underline: "small",

            messageStatus: false,

            message: "Congratulazioni! hai completato le tue tasks",

            text: "",

            inputStatus: true
        }
    },

    methods: {
        remover(index) {

            this.tasks.splice(index, 1)

            if(this.tasks.length === 0) {

                this.messageStatus = true
            }

        },

        addTask () {

            if (this.text.length < 5) {

                this.inputStatus = false

                this.text = ""
            } else {

                this.tasks.push({
                    text: this.text,
                    done: false
                }) 
                
                this.text = ""
            }

        }
    }
}).mount('#app')