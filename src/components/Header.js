import HeaderPresentation from "./HeaderPresentation";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    mainLoaded: state.status.mainLoaded,
    addLoaded: state.status.addLoaded,
    mainFilename: state.status.mainFilename,
    addFilename: state.status.addFilename
});

const Header = connect(mapStateToProps)(HeaderPresentation);

export default Header;
