import React from 'react';
import PermanentDrawerLeft from '../../../modals/Drawer/Drawer';
import {dashboardSideBar , iconArray , IconArray} from "../../../modals/Drawer/index"

function Reviews() {
  return (
    <div>
      <PermanentDrawerLeft
        TopiconArray={iconArray} SecIconArray={IconArray}
        SideBarContent={dashboardSideBar}
        heading={"REVIEWS"}
        screen={""}
      />
    </div>
  )
}

export default Reviews
