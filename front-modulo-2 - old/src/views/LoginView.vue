<template>
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        v-model="email"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a>
      </div>

      <v-text-field
      v-model="contrasenia"
        :append-inner-icon="visibleLogin ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visibleLogin ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visibleLogin = !visibleLogin"
      ></v-text-field>

      <v-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
        </v-card-text>
      </v-card>

      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
        @click="loginFirebase()"
      >
        Ingresar con Firebase
      </v-btn>
      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
        @click="loginGoogle()"
      >
        Ingresar con Google
      </v-btn>
      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
        @click="loginGithub()"
      >
        Ingresar con Github
      </v-btn>
      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
      {{ email }}<br>
      {{ contrasenia }}
    </v-card>
</template>
<script setup>
import {ref} from 'vue';
import  {getAuth, signInWithEmailAndPassword,GoogleAuthProvider,GithubAuthProvider,signInWithPopup} from 'firebase/auth';
import {useRouter} from 'vue-router';
const router = useRouter();
const googleProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();
const visibleLogin = ref(false);

let email = ref("");
let contrasenia = ref("");
const auth = getAuth();

const loginFirebase = ()=>{
    
    signInWithEmailAndPassword(auth,email.value,contrasenia.value).then(
        (r)=>{
            let token = r._tokenResponse.idToken;
     
            if(token){
                
                router.push({name:"inicio"});
            }else{
                alert("no hay token");
            }
        }
    ).catch((e)=>{
        alert("Error en la autenticacion");
    })
    
}

const loginGoogle = () =>{

  signInWithPopup(auth,googleProvider).then(
        (result) =>{
            const credencial = GoogleAuthProvider.credentialFromResult(result);
            console.log(credencial);
            const token = credencial?.accessToken;
            console.log(token);
            router.push({name:"inicio"});
            //alert("Success");
            
        }
    ).catch(
        (error)=>{
            alert(error)
        }
    );
}
const loginGithub = () =>{
  signInWithPopup(auth,githubAuthProvider).then(
        (result)=>{
            const credencial = GithubAuthProvider.credentialFromResult(result);
            console.log(credencial);
            const token = credencial?.accessToken;
            console.log(token);
            router.push({name:"inicio"});
        }
    ).catch(
        (error)=>{
            console.log(error)
        }
    );
}

</script>