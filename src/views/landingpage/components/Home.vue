<template>
    <div class="container-fluid">
        <div class="container-fluid bg-primary my-con">
            <div class="row">
                <div class="col-md-6">
                    <div class="text-white display-4 font-weight-bold  ">Fellow</div>
                </div>
                <div class="col-md-6 justify-content-between  d-flex flex-wrap mt-3">
                    <div class=""><button class="btn bg-primary text-white font-weight-bold">Sign in or Create account</button></div>
                    <div class=""><button class="btn bg-primary text-white font-weight-bold">About us</button></div>
                    <div class=""><button class="btn bg-primary text-white font-weight-bold">Fellowship</button></div>
                    <div class=""><button class="btn bg-primary text-white font-weight-bold"><i class="pi pi-search"></i> Search</button></div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12 d-flex justify-content-center">
                    <div class=" col-md-5 display-1 text-white font-weight-bolder">Become a Fellow</div>
                </div>
                <div class="col-md-12 d-flex justify-content-center my-3">
                    <div class="col-md-5 text-white font-weight-bold">Join a committed cohort of leaders intent who intend to build a gender-inclusive society, balanced and sustainable world</div>
                </div>
                <div class="col-md-12 d-flex justify-content-center">
                    <div class="col-md-5 text-white ">
                        <Dropdown v-model="selectFellow" class="w-100 bg-primary  font-weight-bold" :options="fellowList"  optionLabel="name" placeholder="Become a Fellow"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import Dropdown from "primevue/dropdown";
export default {
    components: {
        Dropdown
    },

    setup() {

        const selectFellow = ref('')
        const fellowList = ref(
            [
                {name: "Become a fellow"},
                {name: "Leadership"},
                {name: "Fellowship"}
            ]
        )

        return {
            fellowList,
            selectFellow
        }
    },
}
</script>

<style scoped>
.my-con{
    background-image: url('../../../assets/fellow.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
}
</style>