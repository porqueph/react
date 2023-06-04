// react
import { useState } from 'react'

// component
import FirstComponent from './components/FirstComponents'

import './App.css'
import TemplateExpressions from './components/templateExpression'
import MyComponent from './components/MyComponent'
import Events from './components/Events'
import Challenge from './components/Challenge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Fundamentos</h1>
     <FirstComponent/>
     <TemplateExpressions></TemplateExpressions>
     <MyComponent/>
     <Events></Events>
     <Challenge></Challenge>
    </>
  )
}

export default App
