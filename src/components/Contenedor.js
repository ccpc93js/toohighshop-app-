import React from 'react'
import  DrawerCajon  from './DrawerCajon';
import Navbar from './Navbar';

const Contenedor = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return (
        <div>
        <Navbar className="Navbar" handleDrawerOpen={handleDrawerOpen} open={open}></Navbar>
        <DrawerCajon handleDrawerClose={handleDrawerClose} open={open}></DrawerCajon>
        </div>
    )
}

export default Contenedor
