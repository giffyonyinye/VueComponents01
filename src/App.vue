<template >
<section>
   <h1>{{ title + 12}}</h1>
   <p>something else</p>
   <p v-text="count"></p>

   <h1>Dc Heros</h1>
   <ul>
     <li  v-for="(hero,index) in dcHeros" v-bind:key="index">{{index}}: {{hero.name}} </li>
   </ul>
  <form @submit.prevent="dcHeros.push({name:newHero})">
   <input v-model="newHero"/>
   <button type="submit" v-bind:disabled="isDisabled">Add Hero</button>
   </form>

  <div>
    <header><h1>My Friends</h1></header>

    <ul>
     <contact 
      v-for="friend in friends" 
      :id="friend.id"
      :key="friend.id" 
      :name="friend.name" 
      :phone-number="friend.phone" 
      :email-address="friend.email" 
      :is-favorite="friend.isFavorite"
      @toggle-favorite="toggleFavoriteStatus"
      @delete="deleteContact">
     </contact>
    </ul>
  </div>


  <new-friend @add-contact="addContact"></new-friend>

  </section>

</template>

<script>
import NewFriend from './components/NewFriend.vue';

  export default {
  components: { NewFriend },
    data() {
      return {
      
        title: 12,
        message: "<h1>this is vue tutorial</h1>",
        isShowing: false,
        count: 0,
        newHero: "Aquaman",
        isDisabled:false,
        dcHeros :[
          {name:"supergirl"},
          {name: "batman"}, 
          {name:"superman"} 
        ],


        friends:[
          {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 58",
          email: "manuellorens@gmail.com",
          isFavorite: false,
        },

        {
          id: "Laura",
          name: "Laura Lorenz",
          phone: "0123 45678 58",
          email: "laurallorens@gmail.com",
          isFavorite: true,
          
        },

        {
          id: "max",
          name: "max Lorenz",
          phone: "0123 45678 58",
          email: "manuellorens@gmail.com",
          isFavorite: false,

        },
        ]
      }
    },

    methods: {
      addContact (name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false
      };

      this.friends.push(newFriendContact);
    },

    deleteContact(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId)
    },


      toggleFavoriteStatus(friendId) {
      const identifiedFriends =  this.friends.find((friend) =>friend.id === friendId);
      identifiedFriends.isFavorite = !identifiedFriends.isFavorite;
      }
    },

    
    

    mounted() {
      setInterval(() => {
        this.count++
      }, 1000)
    }
  }
</script>


// There are no styles on this components. This component is for practice basis.