import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
  pb: 3,
}

const btnShadow =
  'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'

const NoteDetailsModal = ({ note, bgColor, open, setOpen }) => {
  const handleClose = () => setOpen(false)

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, bgcolor: bgColor, boxShadow: btnShadow }}>
        <Typography variant="h5" component="div">
          {note.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {note.content}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            mt: 1,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ef4444',
              borderRadius: 20,
              mr: 1,
              boxShadow: btnShadow,
              '&:hover': { backgroundColor: '#dc2626' },
            }}
            disableElevation
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default NoteDetailsModal
