<template>
    <li>
        <h1>{{name}} {{isFavorite ? "(favorite friend)" : ""}} </h1>
        <button @click="toggleFavorite">Show Favorite</button>
        <button @click="toggleDetails">Show Details</button>

        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ phoneNumber }} </li>
            <li><strong>Email:</strong>{{ emailAddress }} </li>
        </ul>

        <button @click="$emit('delete', id)">Delete Friends</button>
    </li>
</template>


<script>
    export default {
        

        props: {
            id:{type: String, required: true},
            name: {type: String, required: true},
            phoneNumber: {String, required: true},
            emailAddress: {String, required: true},
            isFavorite: {
                type:Boolean, 
                required: true, 
                default: false,
                // validator: function(value) {
                //     return value === "1" || value === "0";
                // }
                }
        },
        emits: ['toggle-favorite', 'delete'],
      data() {
          
          return {
              detailsAreVisible: false,
              
        }
      }, 

        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible
            },
            toggleFavorite() {
               this.$emit("toggle-favorite", this.id)
            },
        },
    };
</script>