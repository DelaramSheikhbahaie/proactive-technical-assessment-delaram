<template>
  <main class="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
    <ApplicationHeader />
    <UContainer class="bg-purple-200 text-black w-5/6 p-8 flex justify-start flex-col rounded-lg my-16 gap-8 max-sm:w-full">
        <slot />
    </UContainer>
    <ApplicationFooter />
  </main>
</template>
