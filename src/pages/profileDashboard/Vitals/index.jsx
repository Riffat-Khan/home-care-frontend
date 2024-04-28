import React from "react";
import PermanentDrawerLeft from "../../../modals/Drawer/Drawer";
import RowAndColumnSpacing from "./molecules/vitalsBox";
import {dashboardSideBar , iconArray , IconArray} from "../../../modals/Drawer/index"

function Vitals() {
  return (
    <div>
      <PermanentDrawerLeft
        TopiconArray={iconArray} SecIconArray={IconArray}
        SideBarContent={dashboardSideBar}
        heading={"OVERVIEW"}
        screen={
          <>
            <RowAndColumnSpacing />
          </>
        }
      />
    </div>
  );
}

export default Vitals;
