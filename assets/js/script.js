
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
                    done: true
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

            underline: "small"
        }
    }
}).mount('#app')