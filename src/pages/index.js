import React from 'react';
import Header from  '../components/Header';
import TabComponent from '../components/Tab';
import Footer from '../components/Footer';
class Main extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <TabComponent/>
                <Footer/>
            </>
        );
    }

}

export default Main;