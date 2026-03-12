import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

/* React 18 부터 도입된 메서드로, React Application을 관리할
Root 요소를 생성한다. 

`getElementById` 메서드를 사용하여 Root 요소를 찾고,
`render` 메서드를 이용하여 Root 요소에 React Application을 렌더링한다.
*/
createRoot(document.getElementById('root')).render(
  <StrictMode> // StrictMode React 애플리케이션의 잠재적 버그나 비효율성을 미리 감지하는데 사용되는 도구이다.
    <BrowserRouter> // BrowserRouter는 react-router-dom 라이브러리에서 제공하는 라우팅 컴포넌트이다.
      <App/> 
    </BrowserRouter>
  </StrictMode>,
)
