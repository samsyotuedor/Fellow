<template>
    <div class="container-fluid container-top container-wide bg-dark">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-white">Driver List</div>
                
            </div>
        </div>
    </div>
</template>


<script>
import axios from "@/gateway/backendapi";
import {ref } from "vue";
export default {
    setup() {
        const showNav = ref(false);

        

        // const getAllDriver = () =>{
        //      axios.get("https://demoapi.remis.ng/Drivers/All")
        //     .then((res)=>{
        //         console.log(res, 'allDrivers')

        //     })
        //     .catch((err) =>{
        //         console.log(err)
        //     })
        // }
        // getAllDriver()

        const companyDetail = () =>{
            localStorage.getItem("token")
            axios.get('/Company/Details')
            .then((res)=>{
                console.log(res, 'companyDetail')

            })
            .catch((err) =>{
                console.log(err)
            })
        }
        companyDetail()

        return{
            showNav
        }
    },
}
</script>

<style scoped>

 
</style>