<template>
<v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>SISTEMA</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn variant="text" icon="mdi mdi-logout" @click="go('login')"></v-btn>
  </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
    
        
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi mdi-home-alert-outline" title="Inicio" value="home"  @click="go('inicio')" ></v-list-item>
          <v-list-item prepend-icon="mdi mdi-account-star-outline" title="Personas" value="account" @click="go('persona')"></v-list-item>
          <v-list-item prepend-icon="mdi mdi-guitar-acoustic" title="Guitarra" value="users" @click="go('guitarra')"></v-list-item>
        </v-list>
      </v-navigation-drawer>

</template>

<!--<script>
  export default {
    data () {
      return {
        drawer: true,
        
      }
    },
    methods:{
      go(url){
        this.$router.push(url)
      }
    }
  }
</script>-->

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
const router = useRouter();

const drawer = ref(false);
const go=(nameUrl) =>{
  router.push({name:nameUrl});
}

</script>
