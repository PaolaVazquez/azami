import { useEffect, useState } from 'react'

export const ConsumiendoApis = () => {
     const [isCreated, setIsCreated] = useState(false)

    useEffect(()=>{
        const createPost = fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", 
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                title: "esta es una prueba del front", 
                userId: 2,
                body: "acá estamos probando el verbo post desde react"
            })
        })
        createPost.then((res)=> setIsCreated(true))
    }, [])
  return (
    <div>ConsumiendoApis</div>
  )
}
