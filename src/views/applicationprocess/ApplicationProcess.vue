<template>
    <div class="container-fluid container-top">
        <div class="container-fluid">
            <div class="row ">
                <div class="col-md-6 border myimage ">
                    <!-- <div class=""> <img src="../../assets/apply.jpg" alt=""> </div> -->
                </div>
                <div class="col-md-6 border ">
                    <div class="col-md-12 font-weight-bold display-4  "> Gender-Inclusive Practice and LGBTIQ </div>
                    <div class="col-md-12 font-weight-bold my-2 text-danger text-size "> Fellowship</div>
                    <div class="col-md-12 bg-secondary p-3  ">
                        <div class="font-weight-bold  text-size2 ">Application Open</div>
                        <div class="mt-2" style="font-size: 1.4rem;  ">Applications are open! Join a community of bold and generous leaders committed to bridging divides in Africa</div>
                        <div class="my-3 d-flex justify-content-center"><button class="btn bg-primary text-white default-btn  font-weight-bold">Apply Now</button></div>
                    </div>
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
.text-size {
    font-size: 3rem;
}
.text-size2 {
    font-size: 2rem;
}
.myimage{
    background-image: url('../../assets/apply.jpg');
    height: 100vh;
}

img{
    height: 80vh;
    width: 635px;
}
</style>