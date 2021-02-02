import React from 'react'
import SearchBar from './SearchBar'
import SearchIcon from '@material-ui/icons/Search';
import './ModalSearch.css'


import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { IconButton } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalSearch:{
    position: 'absolute',
    width: 400,

      
  }
}));

export default function ModalSearch() {


  const classes = useStyles();
//   getModalStyle is not a pure function, we roll the style only on the first render

  const [openModal, setModalSearchOpen] = React.useState(false);

  const [modalStyle] = React.useState(getModalStyle);

  const ModalSearchOpen = () => {
    setModalSearchOpen(true);
  };
  const ModalSearchClose = () => {
    setModalSearchOpen(false);
  };
//   const accionModalSearch =()=>{
//     setModalSearchOpen(!openModal)
//   }

  const body = (
    <div className='modalSearch'>
    

    
                <SearchBar/>
              
    </div>
  );

  return (
    <div>
        <IconButton 
            aria-label="menu " 
            color="inherit"
            className={openModal}
            onClick={ModalSearchOpen}
            
            >
            <SearchIcon/>
        </IconButton>
      <Modal
        open={openModal}
        onClose={ModalSearchClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
