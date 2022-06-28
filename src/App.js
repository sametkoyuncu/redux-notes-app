import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Notes from './components/Notes'

function App() {
  return (
    <>
      <div className="flex flex-row justify-center items-center mb-10">
        <div className="flex flex-col gap-4 items-center">
          <div>
            <Navbar />
          </div>
          <div className="mt-40 sm:mt-20">
            <Notes />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
