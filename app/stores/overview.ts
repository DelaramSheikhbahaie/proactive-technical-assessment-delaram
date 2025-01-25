export const useOverviewStore = defineStore('overview' , ()=>{
    const displayType = ref('list')

    const changeDisplay = (view:string) => {
        displayType.value = view;
    }
    
    return {displayType , changeDisplay}
})