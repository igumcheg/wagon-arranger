import WagonTablePresentation from "../components/WagonTablePresentation";
import {connect} from "react-redux";
import {selectWagons} from "../actions/actions";

const mapStateToProps = (state) => {
    return {
        wagons: state.wagons,
        mainLoaded: state.status.mainLoaded,
        showFileNameInput: state.status.showFileNameInput,
        selected: state.wagons.length != 0
        && state.wagons.reduce((sum, wagon)=> (sum || wagon.selected), false)
    }
};

const mapDispatchToProps = (dispatch) => ({
    onRowSelect: (keys) => dispatch(selectWagons(keys))
});


const WagonTable = connect(mapStateToProps, mapDispatchToProps)(WagonTablePresentation);

export default WagonTable;