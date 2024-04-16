<template lang="">
  <div class="trends">
      <NuxtLink class="button " :to="{ name: 'moviesTrends-trends' }">
        Trending
      </NuxtLink>
      <NuxtLink class="button " :to="{ name: 'bestMoviesRated-topRated' }">
        Top Rated
      </NuxtLink>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.trends {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 30px !important;
  // margin-left: 50px;
}
</style>