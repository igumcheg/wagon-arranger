import React from 'react';
import {connect} from 'react-redux';
import LoadingScreen from "../components/LoadingScreen";

const mapStateToProps = (state) => ({
    showFileNameInput: state.status.showFileNameInput
});


const LoadingScreenContainer = connect(mapStateToProps)(LoadingScreen);
export default LoadingScreenContainer;
