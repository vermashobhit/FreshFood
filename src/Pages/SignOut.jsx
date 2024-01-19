import React, { useEffect, useState } from 'react'
import { getAuth  , onAuthStateChanged} from 'firebase/auth'
import { signOut } from 'firebase/auth';
import { app } from './Authentication';


const auth = getAuth(app);
export default function SignOut() {
    const [user , setUser] =useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(null);
            }
            else{
                setUser(null)
            }
        })
    })

  return (
    <>
        <button onClick={()=>signOut(auth)}>SignOut</button>
    </>
  )
}
