import WagonTablePresentation from "../components/WagonTablePresentation";
import {connect} from "react-redux";
import {selectWagons} from "../actions/actions";

const mapStateToProps = (state) => {
    return {
        wagons: state.wagons,
        loaded: state.status.loaded,
        mainLoaded: state.status.mainLoaded,
        showFileNameInput: state.status.showFileNameInput
    }
};

const mapDispatchToProps = (dispatch) => ({
    onRowSelect: (keys) => dispatch(selectWagons(keys))
});


const WagonTable = connect(mapStateToProps, mapDispatchToProps)(WagonTablePresentation);

export default WagonTable;