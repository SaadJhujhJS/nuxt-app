export const UseCartState = ()=> useState(()=>[])
export const useAuth = ()=> useState(()=>({
    isAuthenticated: false,
}))

export const usePageVistCount = ()=> useState(()=> 0)