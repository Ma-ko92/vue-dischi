var app = new Vue({

    el: "#root",

    data: {
        // Array of discs
        discs: [],
        // Array of genres
        genres: [],
        // Value of select
        selectedGenre:'',

    },

    // Function
    methods: {

    },
    mounted() {
        axios
            // Boolean Api link.
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                const objArray = response.data;
                this.discs = objArray.response;

                // this function sorts dates from lowest to highest.
                this.discs.sort((a, b) => {
                    return a.year - b.year;
                });

                // Cicle for push only single genre in a array.
                this.discs.forEach((disc) => {
                    if(this.genres.includes(disc.genre) == false) {
                        this.genres.push(disc.genre);
                    }
                });
            });
    }
})