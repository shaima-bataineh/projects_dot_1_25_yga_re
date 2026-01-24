import { createContext,useContext,useState } from "react";
export const AuthContext = createContext(null);

export function AuthProvider({children})
{ // null mean "not looged in"
  const[user,setUser] = useState(null);

  // facke looged in
  function login(name)
  {
    setUser({name});
  }
  //logout 
  function logout(){
    setUser(null);
  }

  return(
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
    const ctx =useContext(AuthContext);
    if (!ctx) {
        throw new Error("useAuth must be used inside <AuthProvider>.");
    }
    return ctx;
}

