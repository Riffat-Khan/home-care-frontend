import React from 'react';
import PermanentDrawerLeft from "../../../modals/Drawer/Drawer"
import { AutoGrid, ResponsiveGrid } from "./molecules/overview"
import { providerIcon , IconArray, providerSideBar} from "../../../modals/Drawer/index"

function Overview() {
  return (
    <div>
        <PermanentDrawerLeft TopiconArray={providerIcon } SecIconArray={IconArray} SideBarContent={providerSideBar} heading={"OVERVIEW"} screen={<><ResponsiveGrid /><AutoGrid /></>} />      
    </div>
  )
}

export default Overview;
