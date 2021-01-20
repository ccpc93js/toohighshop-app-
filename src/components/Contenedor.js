import React from 'react'
import  DrawerCajon  from './DrawerCajon';
import DrawerRight from './DrawerRight';
import ModalSearch from './ModalSearch';
import Navbar from './Navbar';


const Contenedor = () => {
    const [open, setOpen] = React.useState(false);
    const [openRight, setOpenRight] = React.useState(false);
    const [openModal, setModalSearchOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const accionOpen =()=>{
      setOpen(!open)
    }

    const handleDrawerOpenRight = () => {
      setOpenRight(true);
    };
    const handleDrawerCloseRight = () => {
      setOpenRight(false);
    };
    const accionOpenRight =()=>{
      setOpenRight(!openRight)
    }

    const ModalSearchOpen = () => {
      setModalSearchOpen(true);
    };
    const ModalSearchClose = () => {
      setModalSearchOpen(false);
    };
    const accionModalSearch =()=>{
      setModalSearchOpen(!openModal)
    }
    return (
        <div>
        <Navbar className="Navbar" handleDrawerOpen={handleDrawerOpen} handleDrawerOpenRight={handleDrawerOpenRight} openRight={openRight} open={open}ModalSearchOpen={ModalSearchOpen} openModal={openModal}></Navbar>
        <DrawerCajon handleDrawerClose={handleDrawerClose} open={open}  onClose={accionOpen}></DrawerCajon>

        <DrawerRight  handleDrawerCloseRight={handleDrawerCloseRight} openRight={openRight} onCloseRight={accionOpenRight}/>
        <ModalSearch ModalSearchOpen={ModalSearchOpen} ModalSearchClose={ModalSearchClose} onClosetModalSearch={accionModalSearch} />
        </div>
    )
}

export default Contenedor
