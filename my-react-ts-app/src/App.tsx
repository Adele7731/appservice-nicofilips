import { useState } from 'react'
import linkedinLogo from './assets/Icons/LinkedIn.png'
import GithubLogo from './assets/Icons/GithubInverted.png'
import './App.css'
import CircleImage from './components/me/CircleImage'
import TheParticles from './components/Background/TheParticles'
import Modal from './components/Modal/Modal'
import CvModal from './components/Modal/CV/CvModal'

function App() {
  const [count, setCount] = useState(0)
  const [showCvModal, setshowCvModal] = useState(false);
  const [showAboutMeModal, setShowAboutMeModal] = useState(false);
  const [showTechStackModal, setShowTechStackModal] = useState(false);

  return (
    <>
    <div>
      <CircleImage />
    </div>
      <div>
        <a href="https://GitHub.com/NicoFilips" target="_blank">
          <img src={GithubLogo} className="logo" alt="GitHub logo" />
        </a>
        <a href="https://www.linkedin.com/in/nicofilips/" target="_blank">
          <img src={linkedinLogo} className="logo" alt="LinkedIn logo" />
        </a>
      </div>
      <h1>Hey!</h1>
      <h1>💫 I'm Nico Filips, A Backend Developer from Augsburg, Germany.</h1>
      <div className="card">
        <p>
        <button onClick={() => setshowCvModal(true)}>CV</button>
        <Modal show={showCvModal} onClose={() => setShowAboutMeModal(false)}>
        <CvModal/>
      </Modal>
      <button onClick={() => setShowAboutMeModal(true)}>About me</button>
        <Modal show={showAboutMeModal} onClose={() => setShowAboutMeModal(false)}>
        <CvModal/>
      </Modal>
      <button onClick={() => setShowTechStackModal(true)}>Techstack</button>
        <Modal show={showTechStackModal} onClose={() => setShowTechStackModal(false)}>
        <CvModal/>
      </Modal>
        </p>
      </div>
      <TheParticles />
      <p className="read-the-docs">
        This Site is hosted as App Service on Azure.
      </p>
    </>
  )
}

export default App
