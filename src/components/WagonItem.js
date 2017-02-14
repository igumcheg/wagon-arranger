import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import WagonRow from "./WagonRow";

const WagonItem = ({
    old,
    updated
}) =>(
    <div>
      <WagonRow {...old} />
      <WagonRow {...updated} />
    </div>
    );




export default WagonItem;