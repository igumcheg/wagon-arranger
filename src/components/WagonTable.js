import WagonTablePresentation from "./WagonTablePresentation";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        wagons: state.wagons
    }
};


const WagonTable = connect(mapStateToProps)(WagonTablePresentation);

export default WagonTable;