import { Helmet } from 'react-helmet'
import MyRoutes from './routes/routes'

function App() {

  return (
    <>
      <Helmet>
        <title>Create Next App</title>
        <meta name="description" content="This is an awesome website built with React." />
        <meta property="og:title" content="Create Next App" />
        <meta property="og:description" content="This is an awesome website built with React." />
        <meta property="og:image" content="https://mywebsite.com/preview-image.jpg" />
        <meta property="og:url" content="https://dentalook-project.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Awesome Website" />
        <meta name="twitter:description" content="This is an awesome website built with React." />
        <meta name="twitter:image" content="https://mywebsite.com/preview-image.jpg" />
      </Helmet>
      <MyRoutes />
    </>
  )
}

export default App
