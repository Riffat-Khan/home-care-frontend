import React from 'react';
import PermanentDrawerLeft from "../../../modals/Drawer/Drawer"
import { AutoGrid, ResponsiveGrid } from "./molecules/overview"
import {userSideBar , iconArray , IconArray} from "../../../modals/Drawer/index"

function Overview() {
  return (
    <div>
        <PermanentDrawerLeft TopiconArray={iconArray} SecIconArray={IconArray} SideBarContent={userSideBar} heading={"OVERVIEW"} screen={<><ResponsiveGrid /><AutoGrid /></>} />      
    </div>
  )
}

export default Overview;
