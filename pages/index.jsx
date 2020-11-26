/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
//console.log(process.env.ENV)

export default ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
<h1 sx={{fontSize: 8, my: 0}}> { content.title } </h1>
    </div>
  </div> 
)

export async function getStaticProps() {
    return {
      props: {
        content: {
          title: 'This is a nice Application'
        }
      }
    }
}

/*  Old----------------

import react from "react";
import React from 'react'
import Link from 'next/link'
//import '../src/styles.css'    ------ it makes error
import '../src/styles.module.css'


const Page = ()=> (
    <div>
        <h1> Index Page </h1> 
        <Link href="/notes">
            <a>
                Notes
            </a>
        </Link>
    </div>
)
export default Page


*/