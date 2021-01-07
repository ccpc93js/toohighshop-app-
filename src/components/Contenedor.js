import React from 'react'
import  DrawerCajon  from './DrawerCajon';
import DrawerRight from './DrawerRight';
import Navbar from './Navbar';


const Contenedor = () => {
    const [open, setOpen] = React.useState(false);
    const [openRight, setOpenRight] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const handleDrawerOpenRight = () => {
      setOpen(true);
    };
    const handleDrawerCloseRight = () => {
      setOpenRight(false);
    };
    return (
        <div>
        <Navbar className="Navbar" handleDrawerOpen={handleDrawerOpen} handleDrawerOpenRight={handleDrawerOpenRight} open={open}></Navbar>
        <DrawerCajon handleDrawerClose={handleDrawerClose} open={open}></DrawerCajon>

        <DrawerRight  handleDrawerClose={handleDrawerCloseRight} open={openRight}/>

        </div>
    )
}

export default Contenedor
