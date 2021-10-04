import React from "react";

import ComponentsDetailView from "./ComponentsDetailView";
import requiredAuthentication from "../BlogPage/requiredAuthentication";

function ComponentsView() {
    return <ComponentsDetailView />;
}

export default requiredAuthentication(ComponentsView);
