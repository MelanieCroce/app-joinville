import React from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, Keyboard, } from 'react-native';
import { reduxForm, Field  } from 'redux-form';
import {connect} from 'react-redux';
import MainLayout from '../../../components/Layout/MainLayout';
import HeaderEspaceAnnonceur from '../../../components/Layout/HeaderEspaceAnnonceur';
import {styleEspaceAnnonceur} from '../../../assets/Style/Screen/StyleEspaceAnnonceur';
import {styleForm} from '../../../assets/Style/Components/StyleForm';
import { ButtonSquare } from '../../../components/button';
import { Icon } from 'react-native-elements';
import { AddPhoto } from '../../../components/Popup/AddPhoto';
import { AddAnnonce } from '../../../components/Popup/AddAnnonce';
import NavigationService from '../../NavigationService';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {iconColor} from '../../../assets/Style/variables';
import moment from 'moment';
import { addAnnonce } from '../../../actions/EspaceAnnonceur/ajouterAnnonces';


const inputText = props => {
  const { input, ...inputProps } = props;
  return (
    <View>
      <TextInput
        placeholder={input.placeholder}
        placeholderTextColor={"#b3bac6"}
        defaultValue={inputProps.defaultValue}
        selectTextOnFocus
        onChangeText={input.onChange}
        underlineColorAndroid='transparent'
        style={[styleForm.input, (inputProps.textRow && {height: 80, textAlignVertical: 'top'})]}
        returnKeyType="next"
        {...inputProps}
      />
    </View>
  )
}

const inputFile = props => {
  const { input, ...inputProps } = props;
  return (
    <View>
      <TextInput
        placeholder={input.placeholder}
        placeholderTextColor={"#b3bac6"}
        defaultValue={inputProps.defaultValue}
        selectTextOnFocus
        onChangeText={input.onChange(inputProps.data)}
        underlineColorAndroid='transparent'
        style={[styleForm.input, (inputProps.textRow && {height: 80, textAlignVertical: 'top'})]}
        returnKeyType="next"
        {...inputProps}
      /> 
    </View>
  )
}

class DateInput extends React.Component{

  state = {
    date: null,
    isDateTimePickerVisible: false
  }
  _showDateTimePicker = () => {
     Keyboard.dismiss();
     this.setState({ isDateTimePickerVisible: true });
  }

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
    this.setState({ date })
  };

  _setDate = (value) => {
    this.setState({ date: value })
  }

  render() {
    const { input, ...inputProps } = this.props;
    return (
      <View style={styleForm.dateRow}>
        <TextInput
          placeholder={inputProps.placeholder}
          onFocus={this._showDateTimePicker }
          {...inputProps}
          onChangeText={input.onChange(this.state.date)}
          defaultValue={this.state.date != null ? moment(this.state.date).format('DD / MM / YYYY HH:mm') : ''}
          style={styleForm.inputDate}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode={'datetime'}
        />
        <TouchableOpacity  onPress={this._showDateTimePicker}>
          <View>
            <ButtonSquare icon="calendar" color="white" />
          </View>
        </TouchableOpacity> 
      </View>
    )
  }
}

function _onSubmitForm() {
  return function( values, dispatch ) {
    const valid = dispatch(addAnnonce());
    if (valid != false){
      NavigationService.navigate("EspaceAnnonceur");
    }
  }
}


class AjoutAnnonceScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };  

  constructor(props) {
    super(props);
    this.state = {
      modalVisible1: 'none',
      modalVisible2: 'none',
      modalVisible3: 'none',
      image1: {uri : '', data : ''},
      updateImage1 : false,
      image2: {uri : '', data : ''},
      updateImage2 : false,
      image3: {uri : '', data : ''},
      updateImage3 : false,
    }
  }
  

  // INFOBULLE EXPLICATION CHAMP FORMULAIRE 
  setModalVisible1() {
    (this.state.modalVisible1 == 'none' ? (
      this.setState({modalVisible1: 'visible'}) 
      ) : (
      this.setState({modalVisible1: 'none'}) 
    ))
  }
  setModalVisible2() {
    (this.state.modalVisible2 == 'none' ? (
      this.setState({modalVisible2: 'visible'}) 
      ) : (
      this.setState({modalVisible2: 'none'}) 
    ))
  }
  setModalVisible3() {
    (this.state.modalVisible3 == 'none' ? (
      this.setState({modalVisible3: 'visible'}) 
      ) : (
      this.setState({modalVisible3: 'none'}) 
    ))
  }

  addImage = (source) => {
    this.setState({ updateImage1: true })
    if(source == null){
      source = {uri : '', data : ''};
    } 
    this.setState({ image1: source });
  }

  addImage2 = (source) => {
    this.setState({ updateImage2: true })
    if(source == null){
      source = {uri : '', data : ''};
    } 
    this.setState({ image2: source });
  }
  addImage3 = (source) => {
    this.setState({ updateImage3: true })
    if(source == null){
      source = {uri : '', data : ''};
    } 
    this.setState({ image3: source });
  }


  render() {
      return (
        <MainLayout page_single title="Ajouter" navigation={this.props.navigation}>
          <View style={styleEspaceAnnonceur.content}>
            <HeaderEspaceAnnonceur nomAnnonceur='Nom Annonceur' title='Ajouter une annonce' />          
            <View>
              <View style={styleForm.content}> 
                <View style={styleForm.titleForm}>
                  <Text style={styleForm.titleFormText}>1. Informations Générales</Text>
                </View>
                <View style={styleForm.contentForm}>
                  <View style={{display: 'none'}}>
                    <Field
                      name={'event'}
                      component={inputText}
                      defaultValue={event.toString()}
                    />  
                  </View>
                  <View>
                    <Text style={styleForm.label}>Titre de {event == 0 ? "la promotion" : "l'événement"} *</Text>
                    <View style={styleForm.inputRow}>
                      <View style={{ width: '80%', marginRight: 10 }}>
                        <Field
                          name={'name'}
                          placeholder={event == 0 ? "Titre de la promotion" : "Titre de l'événement"}
                          component={inputText}
                          defaultValue=""
                        />  
                      </View>
                      {this.state.modalVisible1 == 'visible'  && (
                        <TouchableOpacity
                        onPress={() => { this.setModalVisible1() }}
                        style={styleForm.infobulle}>
                          <View style={styleForm.triangle}></View>
                          <View>
                            <Text>Explication du champ</Text>
                          </View>
                        </TouchableOpacity>
                      ) }

                      <View style={{ justifyContent: 'center', marginTop: -5 }}>
                        <TouchableOpacity onPress={() => { this.setModalVisible1() }}>
                          <Icon
                          name='question-circle'
                          type='font-awesome'
                          size={20}
                          color={iconColor}
                          /> 
                        </TouchableOpacity>
                      </View>

                    </View>
                  </View>

                  <View>
                    <Text style={styleForm.label}>Description de {event == 0 ? "la promotion" : "l'événement"}  *</Text>
                    <View style={styleForm.inputRow}>
                      <View style={{ width: '80%', marginRight: 10 }}>
                        <Field
                          name={'text'}
                          placeholder={event == 0 ? "Titre de la promotion" : "Titre de l'événement"}
                          component={inputText}
                          defaultValue=""
                          textRow
                          multiline = {true}
                        />  
                      </View>
                      {this.state.modalVisible2 == 'visible'  && (
                        <TouchableOpacity
                        onPress={() => { this.setModalVisible2() }}
                        style={[styleForm.infobulle, { top: 90 }]}>
                          <View style={styleForm.triangle}></View>
                          <View>
                            <Text>Explication du champ</Text>
                          </View>
                        </TouchableOpacity>
                      ) }
                      <View style={{ justifyContent: 'center', marginTop: -5 }}>
                        <TouchableOpacity
                          onPress={() => { this.setModalVisible2() }}>
                            <Icon
                              name='question-circle'
                              type='font-awesome'
                              size={20}
                              color={iconColor}
                              /> 
                        </TouchableOpacity>
                      </View>                      
                    </View>                    
                  </View>

                  <View>
                    <Text style={styleForm.label}>Lien URL (si {event == 0 ? "promotion" : "événement"} externe)</Text>
                    <View style={styleForm.inputRow}>
                      <View style={{ width: '80%', marginRight: 10 }}>
                        <Field
                          name={'external_link'}
                          placeholder={'Lien URL'}
                          component={inputText}
                          defaultValue=""
                        />  
                      </View>
                      {this.state.modalVisible3 == 'visible'  && (
                        <TouchableOpacity
                        onPress={() => { this.setModalVisible3() }}
                        style={styleForm.infobulle}>
                          <View style={styleForm.triangle}></View>
                          <View>
                            <Text>Explication du champ</Text>
                          </View>
                        </TouchableOpacity>
                      ) }
                      <View style={{ justifyContent: 'center', marginTop: -5 }}>
                        <TouchableOpacity
                          onPress={() => { this.setModalVisible3() }}>
                            <Icon
                              name='question-circle'
                              type='font-awesome'
                              size={20}
                              color={iconColor}
                              /> 
                        </TouchableOpacity>
                      </View>
                    </View>                       
                  </View>

                  <View>
                    <Text style={styleForm.label}>Photos 1</Text>
                    <View style={styleForm.uploadRow}>
                    {this.state.image1.uri !== '' && (
                      <View>
                        <ImageBackground source={{uri: this.state.image1.uri}} style={styleForm.imageUpload}>
                          <TouchableOpacity onPress={ () => this.addImage(null)} style={{ position: "absolute", top: -10, right: -10, zIndex: 100 }} hitSlop={{top: 2, left: 2, bottom: 2, right: 2}}>
                            <View>
                              <Icon
                                name='cancel'
                                size={20}
                                color='#128ed4'
                              /> 
                            </View>
                          </TouchableOpacity>
                        </ImageBackground> 
                      </View>
                      )}
                      <View style={{display: 'none'}}>
                        <Field
                          name={'data1'}
                          component={inputFile}
                          defaultValue="%stop%"
                          data={this.state.image1}
                        />
                      </View>
                      {/* {this.state.image1 !== '' && ( */}
                      <AddPhoto imageSource={this.addImage} />
                      {/* )} */}
                    </View>
                  </View> 

                  <View>
                    <Text style={styleForm.label}>Photos 2</Text>
                    <View style={styleForm.uploadRow}>
                    {this.state.image2.uri !== '' && (
                      <View>
                        <ImageBackground source={{uri: this.state.image2.uri}} style={styleForm.imageUpload}>
                          <TouchableOpacity onPress={ () => this.addImage2(null)} style={{ position: "absolute", top: -10, right: -10, zIndex: 100 }} hitSlop={{top: 2, left: 2, bottom: 2, right: 2}}>
                            <View>
                              <Icon
                                name='cancel'
                                size={20}
                                color='#128ed4'
                              /> 
                            </View>
                          </TouchableOpacity>
                        </ImageBackground> 
                      </View>
                      )}
                      <View style={{display: 'none'}}>
                        <Field
                          name={'data2'}
                          component={inputFile}
                          defaultValue="%stop%"
                          data={this.state.image2}
                        />
                      </View>
                      {/* {this.state.image1 !== '' && ( */}
                      <AddPhoto imageSource={this.addImage2} />
                      {/* )} */}
                    </View>
                  </View>  

                  <View>
                    <Text style={styleForm.label}>Photos 3</Text>
                    <View style={styleForm.uploadRow}>
                    {this.state.image3.uri !== '' && (
                      <View>
                        <ImageBackground source={{uri: this.state.image3.uri}} style={styleForm.imageUpload} >
                          <TouchableOpacity onPress={ () => this.addImage3(null)} style={{ position: "absolute", top: -10, right: -10, zIndex: 100 }} hitSlop={{top: 2, left: 2, bottom: 2, right: 2}}>
                            <View>
                              <Icon
                                name='cancel'
                                size={20}
                                color='#128ed4'
                              /> 
                            </View>
                          </TouchableOpacity>
                        </ImageBackground> 
                      </View>
                      )}
                      <View style={{display: 'none'}}>
                        <Field
                          name={'data3'}
                          component={inputFile}
                          defaultValue="%stop%"
                          data={this.state.image3}
                        />
                      </View>
                      {/* {this.state.image1 !== '' && ( */}
                      <AddPhoto imageSource={this.addImage3} />
                      {/* )} */}
                    </View>
                  </View>    

                </View>

              </View>

             <View style={styleForm.content}> 
                <View style={styleForm.titleForm}>
                  <Text style={styleForm.titleFormText}>2. Dates</Text>
                </View>
                <View style={styleForm.contentForm}>
                  <View>
                    <Text style={styleForm.label}>Date de début de {event == 0 ? "la promotion" : "l'événement"} *</Text>
                    <View>
                      <Field
                      name="date_start"
                      component={DateInput}
                      placeholder="Date de début"
                      />       
                    </View>
                    
                  </View>   

                  <View>
                    <Text style={styleForm.label}>Date de fin de {event == 0 ? "la promotion" : "l'événement"} *</Text>
                    <View>
                      <Field
                      name="date_end"
                      component={DateInput}
                      placeholder="Date de début"
                      />
                    </View>
                  </View> 
                </View>   
              </View>

              <View style={styleForm.content}> 
                <View style={styleForm.titleForm}>
                  <Text style={styleForm.titleFormText}>2. Prix</Text>
                </View>
                <View style={styleForm.contentForm}>
                  <View>
                    <Text style={styleForm.label}>Prix avant réduction (prix barre)</Text>
                    <View style={{ width: '80%', marginRight: 10 }}>
                      <Field
                        name={'real_price'}
                        placeholder={'Prix réel'}
                        component={inputText}
                        defaultValue=""
                        />  
                    </View>
                  </View>   

                  <View>
                    <Text style={styleForm.label}>Prix après réduction *</Text>
                    <View style={{ width: '80%', marginRight: 10 }}>
                      <Field
                          name={'promo_price'}
                          placeholder={'Prix promotion'}
                          component={inputText}
                          defaultValue=""
                        />  
                    </View>
                  </View>  

                </View>
              </View>

              <TouchableOpacity  onPress={ this.props.handleSubmit( _onSubmitForm(this.props) ) } >
                <AddAnnonce type="submit" text="Ajouter"/> 
              </TouchableOpacity>
              
            </View>
        </View>
        </MainLayout> 
      );
  };
};
const mapStateToProps = (state) => {
  return {
    initialValues: {
      event : event
    }
  }
}
export default (connect(mapStateToProps)(reduxForm({
  form: 'AddAnnonce',
  enableReinitialize: true 
})(AjoutAnnonceScreen)));