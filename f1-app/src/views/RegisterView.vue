<template>
    <section>
        <h1>REGISTER</h1>
        <form @submit.prevent="registerUser" action="">
            <div>
                <label for="">Email:</label>
                <input v-model="email" placeholder="Introduce tu mail.." type="email" >
            </div>
            <div>
                <label for="">Password:</label>
                <input v-model="password" placeholder="Introduce tu contraseña.." type="password" >
            </div>
            <button type="submit" >Registrate</button>
        </form>
        <span>Ya tienes cuenta? <router-link :to="{name: 'login'}">Inicia sesion</router-link></span>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { useToast } from "vue-toastification";
export default {
    name: 'RegisterView',
    data(){
        return{
            email: '',
            password: '',
            toast: useToast()
        }
    },
    methods:{
        ...mapActions(['register']),
        registerUser(){
            this.register({email:this.email, password:this.password})
            setTimeout(() => {
                if(this.loginState){
                    this.toast.success('Te has registrado correctamente. 🥳')
                    setTimeout(() => {
                        this.$router.push('perfil')
                    }, 1000);
                }else{
                    this.toast.error('Error al registrar usuario. ❌');
                }
            }, 1000);
        }
    },
    computed:{
        ...mapState(['loginState'])
    }
}
</script>