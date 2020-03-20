import React from 'react';
import { TextInput,View } from 'react-native';
import {StyleHeader} from '../assets/Style/Components/StyleHeader';
import { reduxForm, Field } from 'redux-form';
import NavigationService from '../containers/NavigationService';

const Search = props => {
  const { input, ...inputProps } = props;
  return (
    <View>
      <TextInput
        placeholder={inputProps.placeholder}
        placeholderTextColor={'#bdc2cb'}
        style={StyleHeader.inputSearch}
        value={input.value}
        underlineColorAndroid='rgba(0,0,0,0)'
        onChangeText={input.onChange}
        selectTextOnFocus
        blurOnSubmit={true}
        onSubmitEditing={() => { NavigationService.navigate("Annonceurs", search =  input.value) }}
        {...inputProps}
        hitSlop={{top: 50, left: 50, right: 50, bottom: 50} }
      />
    </View>
  )
}


function MyForm(props) {

  return (
    <View keyboardShouldPersistTaps={'handled'} style={{ position:'absolute', top: 40, width: '80%'  }}>
      <Field
        name={'search'}
        placeholder={'Search'}
        component={Search}
      />
    </View>
  );
}

export default reduxForm({ form: 'signIn' })(MyForm);