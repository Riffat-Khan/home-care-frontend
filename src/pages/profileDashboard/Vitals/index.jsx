import React from "react";
import PermanentDrawerLeft from "../../../modals/Drawer/Drawer";
import RowAndColumnSpacing from "./molecules/vitalsBox";
import {userSideBar , iconArray , IconArray} from "../../../modals/Drawer/index"

function Vitals() {
  return (
    <div>
      <PermanentDrawerLeft
        TopiconArray={iconArray} SecIconArray={IconArray}
        SideBarContent={userSideBar}
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
