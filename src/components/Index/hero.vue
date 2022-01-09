<template lang="pug">
  section.flex.flex-col.justify-between.gap-6(class='lg:flex-row sm:gap-10 md:gap-16')
    .h-96.bg-gray-100.overflow-hidden.shadow-lg.rounded-lg(
      class='xl:w-5/12 lg:h-auto lg:order-1'
    )
      img.w-full.h-full.object-cover.object-center(
        src='@/assets/images/profile-photo-2022-q1.jpg'
        loading='lazy'
        alt='Profile Photo'
      )
    .flex.flex-col.justify-between(class='xl:w-5/12')
      div
      div(class='sm:text-center lg:text-left lg:py-12 xl:py-24')
        p.text-indigo-500.font-semibold.mb-4(
          class='md:text-lg xl:text-xl md:mb-6'
        ) {{ $t('HERO.SMALL_INTRO') }}
        h1.text-gray-800.text-4xl.font-bold.mb-8(
          class='sm:text-5xl md:text-6xl md:mb-12'
        ) {{ $t('HERO.HEY') }}
          br
          .mt-3 {{ $t('HERO.INTRO') }}
        h2.text-gray-500.text-xl.mb-6
          | {{ $t('HERO.LONG_INTRO') }}
        .flex.flex-col(class='sm:flex-row sm:justify-center lg:justify-start gap-2.5')
          a.inline-block.bg-indigo-500.ring-indigo-300.text-white.text-sm.font-semibold.text-center.rounded-lg.outline-none.transition.duration-100.px-8.py-3(
            href='#'
            class='hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring md:text-base'
          ) {{ $t('HERO.GET_IN_TOUCH') }}
          a.inline-block.bg-gray-200.ring-indigo-300.text-gray-500.text-sm.font-semibold.text-center.rounded-lg.outline-none.transition.duration-100.px-8.py-3(
            href='https://cakeresume.com/maxchou'
            target="_blank"
            class='hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base'
          ) {{ $t('HERO.FULL_RESUME') }}

</template>
