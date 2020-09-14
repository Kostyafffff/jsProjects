import React from "react";
import { ITabsProps } from "./types";

export const Tab = ({ tabName } : ITabsProps) => {
   return(
        <div>
            { tabName }
        </div>
   )
}