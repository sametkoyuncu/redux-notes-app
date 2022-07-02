import { useState } from 'react'

// mui
import Box from '@mui/material/Box'
import Backdrop from '@mui/material/Backdrop'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'

// noteapp components
import AddNoteForm from '../Forms/AddNoteForm'
import EditNoteForm from '../Forms/EditNoteForm'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '80%', sm: 400 },
  bgcolor: 'background.paper',
  border: '1px solid #e4e4e4',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  pb: 2,
}

const btnShadow =
  'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'

const EditNoteModal = ({ type, button, id }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button sx={button.styles} onClick={handleOpen}>
        {button.text}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={{ ...style }}>
            <Typography id="transition-modal-title" variant="h4" component="h2">
              {type === 'add' ? 'Add note' : 'Edit note'}
            </Typography>
            {type === 'add' && (
              <AddNoteForm setShowModal={setOpen} btnShadow={btnShadow} />
            )}
            {type === 'edit' && (
              <EditNoteForm
                setShowModal={setOpen}
                btnShadow={btnShadow}
                id={id}
              />
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default EditNoteModal
