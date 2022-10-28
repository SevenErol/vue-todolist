
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

            message: "Congratulazioni! hai completato le tue tasks"
        }
    },

    methods: {
        remover(index) {

            this.tasks.splice(index, 1)

            if(this.tasks.length === 0) {

                this.messageStatus = true
            }

        }
    }
}).mount('#app')