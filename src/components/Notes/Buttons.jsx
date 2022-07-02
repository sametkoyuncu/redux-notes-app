import { useState } from 'react'
import { useDispatch } from 'react-redux'

// mui
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'

import EditNoteModal from '../Modals/EditNoteModal'
import { deleteNote } from '../../redux/notes/notesSlice'
import Pencil from '../assets/icons/Pencil'
import Trash from '../assets/icons/Trash'

const Buttons = ({ id }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const handleClose = () => {
    setOpen(false)
  }

  const handleOk = () => {
    dispatch(deleteNote(id))
    setOpen(false)
  }

  const handleDelete = () => {
    setOpen(true)
  }

  const buttonStyles = {
    backgroundColor: 'transparent',
    color: '#374151',
    border: 'none',
    cursor: 'pointer',
  }
  const btnShadow =
    'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
  return (
    <>
      <EditNoteModal
        id={id}
        buttonIcon={<Pencil />}
        buttonStyles={buttonStyles}
      />
      <button type="button" style={buttonStyles} onClick={handleDelete}>
        <Trash />
      </button>

      {/* delete confirm */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          p: 4,
        }}
      >
        <DialogTitle id="alert-dialog-title" sx={{ p: 4, pb: 0 }}>
          {'Are you sure delete this note?'}
        </DialogTitle>
        <DialogActions sx={{ p: 2, pt: 0, pr: 3 }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ mt: 2 }}
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
              No
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#22c55e',
                borderRadius: 20,
                boxShadow: btnShadow,
                '&:hover': { backgroundColor: '#16a34a' },
              }}
              disableElevation
              onClick={handleOk}
            >
              Yes
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Buttons
