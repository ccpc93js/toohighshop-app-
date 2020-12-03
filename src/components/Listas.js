import React, { Component } from 'react'
import {List,ListItem,ListItemText,Divider,Link} from '@material-ui/core'



export default class Lista extends Component {
    
    render() {
     

        return (
            <div>
                <List component="nav">
                <Link href="/" underline="none">
                    <ListItem button>
                         <ListItemText className="listas">
                            inicio
                         </ListItemText>
                    </ListItem>
                    </Link>
                    <Link href="/coleccion" underline="none">
                    <ListItem button>
                      <ListItemText className="listas">
                            coleccion
                        </ListItemText>
                           
                    </ListItem>
                    </Link>
                    
                    <Divider/>
                </List>
            </div>
        )
    }
}