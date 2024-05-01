import React from 'react'
import PermanentDrawerLeft from '../../../modals/Drawer/Drawer';
import ResponsiveGrid from './molecules/issueBox';
// import DialogModal from '../../../modals/dialog/DialogModal';
// import Create from './molecules/create'
import Table from './molecules/table'
import {providerSideBar , providerIcon , IconArray} from "../../../modals/Drawer/index"

function Problems() {
  return (
    <div>
        <PermanentDrawerLeft TopiconArray={providerIcon} SecIconArray={IconArray} SideBarContent={providerSideBar} heading={"ISSUES"} screen={<><ResponsiveGrid /><Table/></>} />   
        
    </div>
  )
}

export default Problems;
