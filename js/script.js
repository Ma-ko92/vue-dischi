var app = new Vue({

    el: "#root",

    data: {
        // Array of discs
        discs: [],
        

    },

    // Function
    methods: {

    },
    mounted() {
        axios
            // Boolean Api link
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                const objArray = response.data;
                this.discs = objArray.response
                console.log(this.discs)
            });
    }
})