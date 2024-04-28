import React from 'react'
import PermanentDrawerLeft from '../../../modals/Drawer/Drawer';
import ResponsiveGrid from './molecules/issueBox';
import DialogModal from '../../../modals/dialog/DialogModal';
import Create from './molecules/create';
import {dashboardSideBar , iconArray , IconArray} from "../../../modals/Drawer/index"

function Issues() {
  return (
    <div>
        <PermanentDrawerLeft TopiconArray={iconArray} SecIconArray={IconArray} SideBarContent={dashboardSideBar} heading={"ISSUES"} screen={<><ResponsiveGrid /></>} />   
        <DialogModal sign={"New Issue"} route={<Create />} />   
    </div>
  )
}

export default Issues;
