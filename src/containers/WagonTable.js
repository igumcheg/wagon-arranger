import WagonTablePresentation from "../components/WagonTablePresentation";
import {connect} from "react-redux";
import {selectWagons} from "../actions/actions";
import {sortColumns} from "../actions/actions";
import wagons from "../reducers/wagons";

const mapStateToProps = (state) => {
    let parameter = state.sorting.parameter;
    return {
        wagons: state.wagons.slice().sort((a, b) => {
          let aParameter = a[parameter];
          let bParameter = b[parameter];
            if (!isNaN(aParameter) && !isNaN(bParameter)) {
              return Number(aParameter) - Number(bParameter);
            }
          return aParameter.localeCompare(bParameter);
          }),
        mainLoaded: state.status.mainLoaded,
        loaded: state.status.loaded,
        showFileNameInput: state.status.showFileNameInput,
        selected: state.wagons.length != 0
        && state.wagons.reduce((sum, wagon)=> (sum || wagon.selected), false)
    }
};

const mapDispatchToProps = (dispatch) => ({
    onRowSelect: (keys) => dispatch(selectWagons(keys)),
    onHeaderClick:(parameter) => dispatch(sortColumns(parameter))
});

const WagonTable = connect(mapStateToProps, mapDispatchToProps)(WagonTablePresentation);

export default WagonTable;