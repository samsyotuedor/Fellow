<template>
    <div class="container-fluid container-top container-wide bg-dark">
        <div class="container">
            <div class="row">
                <div class="col-md-12 font-weight-bold text-primary">Log In</div>
                <div class="d-flex flex-wrap col-md-12">
                    <div class="col-md-6">
                        <input
                            type="email"
                            v-model="email"
                            class="input"
                            placeholder="Email"
                            required
                            />
                    </div>
                    <div class="col-md-6">
                        <input
                            class="input"
                            v-model="password"
                            type="password"
                            placeholder="Password"
                            required
                            />
                    </div>
                </div>
                <div class="">
                    <button class="btn btn-primary font-weight-bold" @click="Login">Login</button>
                </div>
                <div>
                    <h5>Basic</h5>
                    <Tree :value="nodes"></Tree>
                </div>
                
            
            </div>
        </div>
    </div>
</template>


<script>
import axios from "@/gateway/backendapi";
import {ref } from "vue";
import router from "../../../router/index";
import Tree from 'primevue/tree';
export default {
    components: {
        Tree
    },
    setup() {
        const showNav = ref(false);
        const nodes = ref({
    "root": [
        {"key":"0","label":"Documents","data":"Documents Folder","icon":"pi pi-fw pi-inbox","children": [{"key": "0-0","label": "Work","data": "Work Folder","icon": "pi pi-fw pi-cog","children": [{ "key": "0-0-0", "label": "Expenses.doc", "icon": "pi pi-fw pi-file", "data": "Expenses Document" }, { "key": "0-0-1", "label": "Resume.doc", "icon": "pi pi-fw pi-file", "data": "Resume Document" }]},{"key": "0-1","label": "Home","data": "Home Folder","icon": "pi pi-fw pi-home","children": [{ "key": "0-1-0", "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month" }]}]},
        {"key":"1","label":"Events","data":"Events Folder","icon":"pi pi-fw pi-calendar","children": [{ "key": "1-0", "label": "Meeting", "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting" },{ "key": "1-1", "label": "Product Launch", "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch" },{ "key": "1-2", "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review" }]},
        {"key":"2","label":"Movies","data":"Movies Folder","icon":"pi pi-fw pi-star-fill","children": [{"key": "2-0","icon": "pi pi-fw pi-star-fill","label": "Al Pacino","data": "Pacino Movies","children": [{ "key": "2-0-0", "label": "Scarface", "icon": "pi pi-fw pi-video", "data": "Scarface Movie" }, { "key": "2-0-1", "label": "Serpico", "icon": "pi pi-fw pi-video", "data": "Serpico Movie" }]},{"key": "2-1","label": "Robert De Niro","icon": "pi pi-fw pi-star-fill","data": "De Niro Movies","children": [{ "key": "2-1-0", "label": "Goodfellas", "icon": "pi pi-fw pi-video", "data": "Goodfellas Movie" }, { "key": "2-1-1", "label": "Untouchables", "icon": "pi pi-fw pi-video", "data": "Untouchables Movie" }]}]}
    ]
})


        const toggleNav = () =>{
            showNav.value = !showNav.value; 
            // menuShouldShow.value = !menuShouldShow.value
        } 

        const Login = () =>{
            let body = {
            email: 'jones_indie@mailinator.com',
            password: 'password123'
            }
            axios.post("/Login",body)
            .then((res)=>{
                console.log(res)
                localStorage.setItem("token", res.data.token);
                router.push('/driverlist')

            })
            .catch((err) =>{
                console.log(err)
            })
        }

        return{
            Login,
            showNav,
            toggleNav,
            nodes
        }
    },
}
</script>

<style scoped>

 
</style>