import HeaderPresentation from "../components/HeaderPresentation";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    mainLoaded: state.status.mainLoaded,
    loaded: state.status.loaded,
    mainFilename: state.status.mainFilename,
    addFilename: state.status.addFilename
});

const Header = connect(mapStateToProps)(HeaderPresentation);

export default Header;
