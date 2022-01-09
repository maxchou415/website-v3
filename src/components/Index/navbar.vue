<template lang="pug">
  header.flex.justify-between.items-center.border-b.py-4.mb-8(class='md:mb-12 xl:mb-16')
    a.inline-flex.items-center.text-gray-800.text-2xl.font-bold.tracking-wide(href='/' class='md:text-3xl gap-2.5' aria-label='logo')
      | {{ $t('COMMON.NAME') }}

    a.block.px-4.py-2.text-md.leading-5.text-gray-700.transition.duration-150.ease-in-out.cursor-pointer.rounded-md(
      v-for="locale in availableLocales"
      :key="locale"
      class='hover:bg-gray-100 focus:outline-none focus:bg-gray-100'
      role='menuitem'
      @click.prevent.stop="setLocale(locale)"
    ) {{ localeToHumanWord(locale) }}

</template>

<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.availableLocales.filter(i => i !== this.$i18n.locale)
    }
  },
  methods: {
    setLocale (locale) {
      this.$i18n.locale = locale
    },
    localeToHumanWord (locale) {
      const mapping = {
        en: 'English',
        'zh-TW': '正體中文'
      }
      return mapping[locale]
    }
  }
}
</script>
