import React from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, ActivityIndicator, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import { reduxForm, Field, formValueSelector  } from 'redux-form';
import MainLayout from '../../../components/Layout/MainLayout';
import {styleEspaceAnnonceur} from '../../../assets/Style/Screen/StyleEspaceAnnonceur';
import {styleForm} from '../../../assets/Style/Components/StyleForm';
import { ButtonCTA, ButtonSquare } from '../../../components/button';
import { Icon } from 'react-native-elements';
import { AddPhoto } from '../../../components/Popup/AddPhoto';
import { AddAnnonce } from '../../../components/Popup/AddAnnonce';
import HeaderEspaceAnnonceur from '../../../components/Layout/HeaderEspaceAnnonceur';
import { fetchModifierAnnonce, modifyAnnonce } from '../../../actions/EspaceAnnonceur/modifierAnnonces';
import NavigationService from '../../NavigationService';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {iconColor} from '../../../assets/Style/variables';
import moment from 'moment';

// const recurrence = [
//     {
//       id: 0,
//       name : 'Pas de récurrence',
//       value : 'none'
//     },
//     {
//       id: 1,
//       name : 'Toutes les semaines',
//       value :  'Toutes les semaines'
//     },
//     {
//       id: 2, 
//       name : 'Tous les mois',
//       value : 'Tous les mois'
//     },
//     {
//       id: 3, 
//       name : 'Tous les ans',
//       value :  'Tous les ans'
//     }   
//   ]

  const inputText = props => {
    const { input, ...inputProps } = props;
    return (
      <View>
        <TextInput
          placeholder={input.placeholder}
          placeholderTextColor={"#b3bac6"}
          defaultValue={input.defaultValue}
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
          defaultValue={input.defaultValue}
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
      date: '',
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
      console.log(date)
    };
  
    _setDate = (value) => {
      this.setState({ date: value })
    }
  
    render() {
      const { input, ...inputProps } = this.props;
      if (this.state.date == '' &&  input.value !== '') {
        this._setDate(input.value);
      }
      return (
        <View style={styleForm.dateRow}>
          <TextInput
            placeholder={inputProps.placeholder}
            onFocus={this._showDateTimePicker }
            {...inputProps}
            onChangeText={input.onChange(this.state.date)}
            defaultValue={moment(this.state.date).format('DD / MM / YYYY HH:mm')}
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
      const valid = dispatch(modifyAnnonce());
      if (valid != false){
        NavigationService.navigate("EspaceAnnonceur");
      }
    }
  }

class ModifierScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };  

  constructor(props) {
    super(props);

    this.state = {

      textTitle: '',
      textDescription: '',
      url: '',
      prixReal: '',
      prixPromo: '',

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

  componentDidMount() {
    this.props.dispatch(fetchModifierAnnonce(id));
  }

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
    const annonce = this.props.initialValues;
    
    if ( annonce == null ) {
      return ( 
        <MainLayout>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator size="large" color="#55bad4" />
          </View>
        </MainLayout>
      )
    } 
    if(annonce.image1 != null && this.state.updateImage1 == false){
      this.state.image1.uri = global.baseImg + annonce.image1;
      this.state.image1.data = "%stop%";
    }
    if(annonce.image2 != null && this.state.updateImage2 == false){
      this.state.image2.uri = global.baseImg + annonce.image2;
      this.state.image2.data = "%stop%";
    }
    if(annonce.image3 != null && this.state.updateImage3 == false){
      this.state.image3.uri = global.baseImg + annonce.image3;
      this.state.image3.data = "%stop%";
    } 
      return (
        <MainLayout page_single title="Modifier" navigation={this.props.navigation}>
          <View style={styleEspaceAnnonceur.content}>
            <HeaderEspaceAnnonceur nomAnnonceur='Nom Annonceur' title='Modifier' />  

            <View>
              <View style={styleForm.content}> 
                <View style={styleForm.titleForm}>
                  <Text style={styleForm.titleFormText}>1. Informations Générales</Text>
                </View>
                <View style={styleForm.contentForm}>

                  <View>
                    <Text style={styleForm.label}>Titre de {annonce.event == 0 ? "la promotion" : "l'événement"} *</Text>
                    <View style={styleForm.inputRow}>
                    <View style={{ width: '80%', marginRight: 10 }}>
                        <Field
                            name={'name'}
                            placeholder={'Titre de la promotion'}
                            component={inputText}
                            defaultValue={annonce.name}
                          />  
                          <View style={{display: 'none'}}>
                            <Field
                              name={'id'}
                              component={inputText}
                              defaultValue={annonce.id.toString()}
                            />
                          </View>
                          <View style={{display: 'none'}}>
                            <Field
                              name={'event'}
                              component={inputText}
                              defaultValue={annonce.event}
                            />  
                          </View>
                          
                      </View>
                      {/* INFOBULLE EXPLICATION CHAMP FORMULAIRE*/ }
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
                        <TouchableOpacity
                        onPress={() => { this.setModalVisible1() }}>
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
                    <Text style={styleForm.label}>Description de {annonce.event == 0 ? "la promotion" : "l'événement"}  *</Text>
                    <View style={styleForm.inputRow}>
                      <View style={{ width: '80%', marginRight: 10 }}>
                        <Field
                            name={'text'}
                            placeholder={'Description de la promotion'}
                            component={inputText}
                            textRow
                            multiline = {true}
                            defaultValue={annonce.text}
                          />  
                        </View>
                      {/* <TextInput
                        placeholder={"Description de la promotion"}
                        placeholderTextColor={"#b3bac6"}
                        onChangeText={(textDescription) => this.setState({textDescription})}
                        underlineColorAndroid='transparent'
                        style={[styleForm.input, { height: 80, textAlignVertical: 'top' }]}
                        returnKeyType="next"
                        defaultValue={annonce.text}
                        multiline = {true}
                      /> */}
                      {/* INFOBULLE EXPLICATION CHAMP FORMULAIRE*/ }
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
                    <Text style={styleForm.label}>Lien URL (si {annonce.event == 0 ? "promotion" : "événement"} externe)</Text>
                    <View style={styleForm.inputRow}>
                      <View style={{ width: '80%', marginRight: 10 }}>
                        <Field
                            name={'external_link'}
                            placeholder={'Lien URL'}
                            component={inputText}
                            defaultValue={annonce.external_link}
                          />  
                      </View>
                      {/* <TextInput
                        placeholder={"Lien URL"}
                        placeholderTextColor={"#b3bac6"}
                        defaultValue={annonce.external_link}
                        onChangeText={(url) => this.setState({url})}
                        underlineColorAndroid='transparent'
                        style={styleForm.input}
                        returnKeyType={"next"}
                      /> */}
                      {/* INFOBULLE EXPLICATION CHAMP FORMULAIRE*/ }
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
                                color={iconColor}
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
                                color={iconColor}
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
                                color={iconColor}
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
                    <Text style={styleForm.label}>Date de début de {annonce.event == 0 ? "la promotion" : "l'événement"} *</Text>
                    <View>
                      <Field
                      name="date_start"
                      component={DateInput}
                      defaultValue={annonce.date_start}
                      />       
                    </View>
                    
                  </View>   

                  <View>
                    <Text style={styleForm.label}>Date de fin de {annonce.event == 0 ? "la promotion" : "l'événement"} *</Text>
                    <View>
                      <Field
                      name="date_end"
                      component={DateInput}
                      defaultValue={annonce.date_end}
                      />
                    </View>
                  </View>    

                  {/* <View>
                    <Text style={styleForm.label}>Récurrence</Text>
                        <PickerIOS form data={recurrence} />
                  </View> */}

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
                        defaultValue={annonce.real_price.toString()}
                        />  
                    </View>
                    {/* <TextInput
                      placeholder={"Prix reel"}
                      placeholderTextColor={"#b3bac6"}
                      defaultValue={annonce.real_price.toString()}
                      onChangeText={(prixReal) => this.setState({prixReal})}
                      underlineColorAndroid='transparent'
                      style={styleForm.input}
                      keyboardType='numeric'
                    /> */}
                  </View>   

                  <View>
                    <Text style={styleForm.label}>Prix après réduction *</Text>
                    <View style={{ width: '80%', marginRight: 10 }}>
                      <Field
                          name={'promo_price'}
                          placeholder={'Prix promotion'}
                          component={inputText}
                          defaultValue={annonce.promo_price}
                        />  
                    </View>
                    {/* <TextInput
                      placeholder={"Prix promotion"}
                      placeholderTextColor={"#b3bac6"}
                      defaultValue={annonce.promo_price.toString()}
                      onChangeText={(prixPromo) => this.setState({prixPromo})}
                      underlineColorAndroid='transparent'
                      style={styleForm.input}
                      keyboardType='numeric'
                    /> */}
                  </View>  

                </View>
              </View>

              <TouchableOpacity  onPress={ this.props.handleSubmit( _onSubmitForm(this.props) ) } >
                <AddAnnonce type="submit" text="Modifier"/> 
              </TouchableOpacity>
            </View>
        </View>
        </MainLayout> 
      );
  };
};

const mapStateToProps = (state) => {
  return {
    initialValues: state.AnnonceModifierReducer
  }
}

export default (connect(mapStateToProps)(reduxForm({
  form: 'ModifierAnnonce',
  enableReinitialize: true
})(ModifierScreen)))