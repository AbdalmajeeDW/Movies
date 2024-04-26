<template lang="">
  <div class="trends">
      <NuxtLink class="tabs" :to="{ name: 'moviesTrends-trends' }">
        Trending
      </NuxtLink>
      <NuxtLink class="tabs" :to="{ name: 'bestMoviesRated-topRated' }">
        Top Rated
      </NuxtLink>
    </div>
</template>
<script>
export default {

}
</script>