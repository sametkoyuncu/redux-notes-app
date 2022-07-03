//mui
import Box from '@mui/material/Box'

// notesapp components
import Navbar from './components/Navbar/Navbar'
import Notes from './components/Notes/Notes'

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '95vh',
      }}
    >
      <Box>
        <Navbar />
        <Notes />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'items',
        }}
      >
        <a
          href="https://github.com/sametkoyuncu"
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: 'Roboto',
            textDecoration: 'none',
            color: '#1f2937',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
          Samet Koyuncu
        </a>
      </Box>
    </Box>
  )
}

export default App
