import React from 'react'
import {useRouter} from 'next/router'

// /notes/1/2/3/4/4
const Page = ()=> {
    const router = useRouter()
    const { params } = router.query;
    console.log(params)
    return(
        <h1>Note : {params} </h1>
    )
}
export default Page