import React from 'react'
import {Helmet} from "react-helmet-async"

const Title = ({
    title="Chat Web Application",
    description="This is the Chat app called Op"
}) => {
  return <Helmet>
    <title>{title}</title>
    < meta name='description' content={description}/>
    
  </Helmet>
}

export default Title
