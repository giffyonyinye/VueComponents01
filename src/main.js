import { createApp } from 'vue';
import App from './App.vue';
import FriendsContact from './components/FriendsContact.vue';
import  Newfriend from './components/NewFriend.vue';

const app = createApp(App);

app.component('contact', FriendsContact);
app.component("new-friend", Newfriend)

app.mount('#app');


