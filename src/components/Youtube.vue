<template>
  <div>
      Youtube{{$route.params.vidioId}}
      {{youtubeLink}}
      <iframe
      width="560"
      height="315"
      :src="youtubeLink"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      llowfullscreen>
      </iframe>
  </div>
</template>

<script>
export default {
    computed:{
        youtubeLink(){
            return 'https://www.youtube.com/embed/'+this.$route.params.videoId
        }
    }
}
</script>

<style>

</style>