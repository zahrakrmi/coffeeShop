import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

export default function Submitmassage({ open, onClose, message }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth >
      <DialogTitle  color='success'>Success</DialogTitle>
      <DialogContent>
        <p className='text-xl' >{message}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>

  )
}