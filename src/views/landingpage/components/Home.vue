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
        <div class="container-fluid bg-white">
            <div class="row mb-3 ">
                <div class="col-md-12 mt-3 d-flex justify-content-start">
                    <div class=" col-md-12 text-center display-4  font-weight-bolder">What Makes a Fellow</div>
                </div>
                <div class="col-md-12 d-flex justify-content-center py-3 ">
                    <div class=" col-md-5  font-weight-600">Our fellows are extraordinary leaders
                        who are committed to embracing the difficult journey of social change. 
                        Here’s what we want from you-and what you can expect from your fellowship cohort.
                    </div>
                </div>
                <div class="col-md-12 mt-3 d-flex ">
                    <div class=" col-md-4  font-weight-bold">
                        <div class="border text-white bg-primary py-2 text-center">Locally Rooted</div>
                        <div class="bg-secondary font-weight-600 p-2 ">
                            These leaders are unrelenting, have a history of impact, and are committed to making concrete progress in their respective societies and communities
                        </div>
                    </div>
                    <div class=" col-md-4  ">
                        <div class="border text-white bg-primary font-weight-bold  text-center py-2 ">Diverse Perspective</div>
                        <div class="bg-secondary font-weight-600  p-2">
                            From social inclusiveness to builders reimagining boundaries, our cohorts are curated across all sectors and backgrounds. 
                        </div>
                    </div>
                    <div class=" col-md-4   font-weight-bold">
                        <div class="border text-white bg-primary text-center py-2 ">Dedicated to gender inclusiveness, health, poverty and injustice</div>
                        <div class=" bg-secondary font-weight-600 p-2 ">
                            Fellows are social innovators willing to undergo an intensive leadership journey—practicing the skills of moral imagination to tackle gender disparity poverty, health and injustice.
                        </div>
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