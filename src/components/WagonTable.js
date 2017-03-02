import WagonTablePresentation from "./WagonTablePresentation";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        wagons: state.wagons,
        addLoaded: state.status.addLoaded,
        mainLoaded: state.status.mainLoaded

    }
};


const WagonTable = connect(mapStateToProps)(WagonTablePresentation);

export default WagonTable;