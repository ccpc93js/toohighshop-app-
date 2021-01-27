import React from 'react'
import SearchBar from './SearchBar'
import SearchIcon from '@material-ui/icons/Search';


export default function ModalSearch() {
    return (
      
          <div class="">
              <button class="btn btn-search" data-toggle="modal" data-target="#contenedor-modal">
              <SearchIcon/>
              </button>

              <div class="modal fade" id="contenedor-modal" tabindex="-1" aria-labelledby="EpicModalLabel">
                  <div class="modal-dialog-scrollable">
                      <div class="modal-content">
                          <div class="modal-header">
                              
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                              </button>
                          </div>
                          
                          <div class="modal-body">
                          <SearchBar/>
                          </div>

                          
                          
                      </div>
                  </div>
              </div>
          </div>
     
  
    )
}

