<template>
    <section>
        <h1>LOGIN</h1>
        <form @submit.prevent="loginUser" action="">
            <div>
                <label for="">Email:</label>
                <input v-model="email" placeholder="Introduce tu mail.." type="email" name="" id="">
            </div>
            <div>
                <label for="">Password:</label>
                <input v-model="password" placeholder="Introduce tu contraseña.." type="password" name="" id="">
            </div>
            <button type="submit" >Inicion Sesiada</button>
        </form>
        <span>Aun no tienes cuenta? <router-link :to="{name: 'register'}">Registrate</router-link></span>
    </section>
</template>

<script>
import { useToast } from "vue-toastification";
import { mapState, mapActions } from 'vuex';
export default {
    name: 'LoginView',
    data(){
        return{
            email: '',
            password: '',
            toast: useToast()
        }
    },
    computed:{
        ...mapState(['loginState'])
    },
    methods:{
        ...mapActions(['login']),
        loginUser(){
            this.login({email:this.email, password:this.password})
            setTimeout(() => {
                if(this.loginState){
                    this.toast.success('Inicion sesiada correctamente. 🥳')
                    setTimeout(() => {
                        this.$router.push('perfil')
                    }, 1000);
                }else{
                    this.toast.error('Error al iniciar sesion. ❌')
                }
            }, 1000);
        }
    }
}
</script>