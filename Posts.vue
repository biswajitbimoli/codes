<template>
    <div class="mb-2">
        <div class="container card border border-warning rounded" style="width: 18rem;">
            
                <div class="card-body">
                    <div class="media">
                        <img src="../assets/diana.jpg" class="mr-3 profile-img" alt="diana">
                            <div class="media-body">
                                <h5 class="mt-0">Diana</h5>
                                <p class="card-text">Nature is Beautiful</p>  
                            </div>
                        </div>
                        
                    
                </div>
                <img src="../assets/love.png" class="card-img-top" alt="Love Bird">
                <div class="container-flex text-center btn-group">
                    <button @click="likeClicked('red')" 
                    class="btn btn-primary float-left mb-1 mr-1">
                        <svg refs="like" xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" viewBox="0 0 24 24" 
                        :fill="fillColor" 
                        stroke="currentColor" stroke-width="2" 
                        stroke-linecap="round" stroke-linejoin="round" 
                        class="feather feather-thumbs-up"><path 
                        d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                    </button>
                    <button class="btn btn-primary mb-1 mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" stroke-width="2" 
                        stroke-linecap="round" stroke-linejoin="round" 
                        class="feather feather-message-square">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </button>
                

                    <button class="btn btn-primary float-right mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" stroke-width="2" 
                        stroke-linecap="round" stroke-linejoin="round" 
                        class="feather feather-share-2">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                    </button>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Posts',
    data() {
        
        return {
            fillColor: 'none'
            }
    },
    methods: {
        likeClicked(color) {
            if (this.fillColor === color) {
                this.fillColor = 'none';
            } else {
                this.fillColor = color;
            }
        }
    }
}
</script>

<style scoped>
.profile-img {
    width: 40px;
    height: 40px;
}


</style>
