import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSomeData } from './action';

class Home extends React.Component {
    constructor(props) {
        super(props);
        /* 
            //Only use if you want to render the component with SSR
            loadHomeData();
        */
    }
    
    
    componentDidMount(){
        
    }

    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    someData: state.homeReducer.someData,
})

const mapDispatchToProps = (dispatch) => ({
    getSomeData: bindActionCreators(getSomeData, dispatch),
})

function loadHomeData({ store }) {
    return Promise.all([store.dispatch(getSomeData()), /* store.dispatch(getWhatWeDoList()) */])
}

export { loadHomeData };

export default connect(mapStateToProps, mapDispatchToProps)(Home);