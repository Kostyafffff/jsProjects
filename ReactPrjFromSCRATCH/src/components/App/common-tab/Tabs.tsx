import React from "react";
import { ITabsProps } from "./types";

export const Tab = ( { tabs }: ITabsProps ): JSX.Element => {
   return(
        <div>
            { tabs }
        </div>
   )
}