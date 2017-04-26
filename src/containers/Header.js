import HeaderPresentation from "../components/HeaderPresentation";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    mainLoaded: state.status.mainLoaded,
    loaded: state.status.loaded,
    mainFilename: state.status.mainFilename,
    addFilename: state.status.addFilename,
    value: state.filtering.value,
    parameter: state.filtering.parameter
});

const Header = connect(mapStateToProps)(HeaderPresentation);

export default Header;
