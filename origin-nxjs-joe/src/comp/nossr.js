// https://blogs.perficient.com/2022/09/19/how-to-disable-server-side-rendering-in-next-js/ <- source, quick fix for static github pages deployment


import dynamic from 'next/dynamic'
import React from 'react' 
const NoSSRWrapper = props => ( 
    <React.Fragment>{props.children}</React.Fragment> 
) 
export default dynamic(() => Promise.resolve(NoSSRWrapper), { 
    ssr: false 
})