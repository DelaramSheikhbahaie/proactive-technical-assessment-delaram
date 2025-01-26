<template>
    <h1 class="text-xl mb-8">Please select a page</h1>
    <div class="flex flex-row justify-start">
      <NuxtLink to="rickandmorty">
        <UButton color="pink" variant="solid" class="py-4 px-8 mr-4">Rick And Morty Page</UButton>
      </NuxtLink>
      <NuxtLink to="pokemon">
        <UButton color="pink" variant="solid" class="py-4 px-8 mr-4">Pokemon Page</UButton>
      </NuxtLink>
    </div>
</template>