<template>
  <UContainer class="bg-purple-200 text-black w-5/6 p-8 flex justify-center items-center flex-col rounded-lg my-16">
    <h1 class="text-xl mb-8">Please select a page</h1>
    <div class="flex flex-row justify-between">
      <NuxtLink to="rickandmorty">
        <UButton color="pink" variant="solid" class="py-4 px-8 mr-4">Rick And Morty Page</UButton>
      </NuxtLink>
      <NuxtLink to="pokemon">
        <UButton color="pink" variant="solid" class="py-4 px-8 mr-4">Pokemon Page</UButton>
      </NuxtLink>
    </div>
  </UContainer>
</template>