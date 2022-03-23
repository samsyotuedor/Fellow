<template>
    <div class="container-fluid">
        <div class="container-fluid bg-primary my-con">
            <div class="row">
                <div class="col-md-6">
                    <div class="text-white display-4 font-weight-bold  ">Fellow</div>
                </div>
                <div class="col-md-6 d-flex flex-wrap mt-3">
                    <div class=""><button class="default-btn bg-primary text-white font-weight-bold">Sign in or Create account</button></div>
                    <div class=" "><button class="default-btn bg-primary text-white font-weight-bold">Support us</button></div>
                    <div class=""><button class="default-btn bg-primary text-white font-weight-bold"><i class="pi pi-search"></i> Search</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
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