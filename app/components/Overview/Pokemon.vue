/,<script setup lang="ts">
const data = [
    {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
},
{
    id: 2,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
},
{
    id: 3,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
},
] as {
    id: number,
    name: string,
    status: string,
    species: string
}[]

provide('characters' , data)
const characters = ref([]); // Reactive variable to store the list

// Fetch data from API
const fetchCharacters = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20");
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    characters.value = data; 
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
};

// Fetch data when the component is mounted
onMounted(fetchCharacters);

console.log('characters' , characters);

</script>

<template>
    <List name="pokemon" :data="data"/>
</template>
