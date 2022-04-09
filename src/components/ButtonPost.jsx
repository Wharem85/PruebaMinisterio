import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FormPost from '../components/FormPost'
import '../assets/styles/ButtonPost.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const button = {
	color: 'white',
	fontWeight: 'bold',
	fontSize: '16px',
}

const ButtonPost = () => {
	const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


	return (
		<div className="container">
			<div className="container-button">
				<Button sx={button} className="button" onClick={handleOpen}>Create</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<FormPost />
					</Box>
				</Modal>
			</div>
		</div>
	);
};

export default ButtonPost;