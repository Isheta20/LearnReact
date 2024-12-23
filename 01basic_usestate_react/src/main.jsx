import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'


function MyApp(){//this whole syntax parsed
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}


//RENDER expecting a function or something like that so object like this can't be used directly even though at the end converted to something like this

//Also doesn't work bec. the keys are not right, the render must be expecting it's OWN KEYS as like we created the customRender with it's own definition
// const ReactElement = {
  //   type: 'a', 
  //   props: {
    //       href: 'https://google.com',
    //       target: '_blank',
    //   },
    //   children: 'Click me to visit google'
    // }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "Variable injection at the end while react element creation"

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'  },
  'click me to visit google',
  anotherUser
  //type key references prop
)
 
ReactDom.createRoot(document.getElementById('root')).render(

    // ReactElement
    <App />


    // anotherElement
    // <MyApp /> - app.jsx is just a function 
    // MyApp() - this also works but NEVER use it 
)
