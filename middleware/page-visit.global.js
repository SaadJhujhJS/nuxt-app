export default defineNuxtRouteMiddleware(()=>{
    console.log("This is Global MiddleWare");
    const pageVistCount = usePageVistCount()
    pageVistCount.value++;
    console.log("Page Visited: ", pageVistCount.value)
})