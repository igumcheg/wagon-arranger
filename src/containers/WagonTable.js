import WagonTablePresentation from "../components/WagonTablePresentation";
import {connect} from "react-redux";
import {selectWagons} from "../actions/actions";
import {sortColumns} from "../actions/actions";
import {filterWagons} from "../actions/actions";

const mapStateToProps = (state) => {
    let sortParameter = state.sorting.parameter;
    let sortedWagons = state.wagons.slice().sort((a, b) => {
        let aParameter = a[sortParameter];
        let bParameter = b[sortParameter];
        if (!isNaN(aParameter) && !isNaN(bParameter)) {
            return Number(aParameter) - Number(bParameter);
        }
        return aParameter.localeCompare(bParameter);
    });

    let filters = state.filtering;
    let filteredWagons = sortedWagons;
    filters.forEach((filter)=>{
        console.log(JSON.stringify(filter));
        let filteredParameterName = filter.parameter;
        let filteredParameterValue = filter.value;
        filteredWagons = filteredWagons.filter((wagon)=> {
        return wagon[filteredParameterName] === filteredParameterValue;
        });
        console.log(JSON.stringify(filteredWagons));
    });


    return {
        wagons: filteredWagons,
        mainLoaded: state.status.mainLoaded,
        loaded: state.status.loaded,
        showFileNameInput: state.status.showFileNameInput,
        selected: state.wagons.length != 0
        && state.wagons.reduce((sum, wagon)=> (sum || wagon.selected), false),
        getPossibleValues: (wagons, parameter) =>
            Array.from(new Set(wagons.map((wagon)=>wagon[parameter])))
    }
};

const mapDispatchToProps = (dispatch) => ({
    onRowSelect: (keys) => dispatch(selectWagons(keys)),
    onHeaderClick:(parameter) => dispatch(sortColumns(parameter)),
    onFilterSelect:(value, parameter) =>dispatch(filterWagons(value,parameter))
});

const WagonTable = connect(mapStateToProps, mapDispatchToProps)(WagonTablePresentation);

export default WagonTable;