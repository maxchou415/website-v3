<template lang="pug">
  .bg-white.pb-6(class='sm:pb-8 lg:pb-12')
    .max-w-screen-2xl.px-4.mx-auto(class='md:px-8')
      navbar
      hero
</template>

<script>
import navbar from '@/components/Index/navbar'
import hero from '@/components/Index/hero'

export default {
  components: {
    navbar,
    hero
  }
}
</script>
