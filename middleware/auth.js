export default defineNuxtRouteMiddleware(()=>{
     const Auth = useAuth();
    return Auth.value.isAuthenticated;
})