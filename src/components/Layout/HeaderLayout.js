import React from 'react';
import { View } from 'react-native';
import Filter from '../Filter';
import Login from '../Login';
import HeaderHome from '../HeaderHome';

export default class HeaderLayout extends React.Component {

    render() {
        return (
            <View>
                {(() => {
                    switch (this.props.type) {
                    case "Home":   return (
                        <HeaderHome /> 
                    );
                    case "Page": return (
                        <Filter />
                    );
                    case "Connexion": return (
                        <Login />
                    );                    
                    }
                })()}

            </View>
        );
    };
};
