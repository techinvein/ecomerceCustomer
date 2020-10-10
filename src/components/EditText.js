import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image,Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { Icon } from 'react-native-elements';


const EditText = ({
  type,
  value,
  onChange,
  multiline,
  placeholder,
  disabled,
  style,
  inputStyle,
  icon,
  rightAction,
  onFocus,
  rightText,
  checkNowClick,
  notavailable,
  avalable,
  maxLength
}) => {
  const [secure, setSecure] = useState(false);
  const [keyboardType, setKeyboardType] = useState('default');
  const [autoCompleteType, setAutoCompleteType] = useState('off');

  useEffect(() => {
    switch (type) {
      case 'name':
        setKeyboardType('default');
        setAutoCompleteType('name');
        break;
      case 'email':
        setKeyboardType('email-address');
        setAutoCompleteType('email');
        break;
      case 'password':
        setKeyboardType('default');
        setAutoCompleteType('off');
        setSecure(true);
        break;
      case 'tel':
        setKeyboardType('phone-pad');
        setAutoCompleteType('tel');
        break;
      case 'number':
        setKeyboardType('number-pad');
        setAutoCompleteType('off');
        break;
      case 'address':
        setKeyboardType('default');
        setAutoCompleteType('street-address');
        break;
      case 'postal-code':
        setKeyboardType('number-pad');
        setAutoCompleteType('postal-code');
        break;
      default:
        setKeyboardType('default');
        setAutoCompleteType('off');
        break;
    }
  }, [type]);

  const togglePassword = () => {
    if (type === 'password') {
      setSecure(!secure);
    }
  };

  return (
    <View style={[styles.container, style]}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
        editable={!disabled}
        value={value}
        onChangeText={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCompleteType={autoCompleteType}
        secureTextEntry={secure}
        autoCapitalize="none"
        multiline={multiline}
        selectionColor={Colors.primary}
        style={[styles.textInput, inputStyle]}
        maxLength ={maxLength}
      />
      {type === 'password' && (
        <TouchableOpacity
          style={[styles.actionButton]}
          onPress={togglePassword}>
          {secure ?
            <Icon
            name='eye-outline'
            type="ionicon"
            size={20} />
           :
           <Icon
            name='eye-off-outline'
            type="ionicon" 
            size={20} />
           }
        </TouchableOpacity>
      )}
      {/* {rightAction} */}

      {rightText === true? 
        <TouchableOpacity
          style={[styles.actionButton]}
          onPress={checkNowClick}>
          <Text style={{color:Colors.primary,fontWeight:'700',letterSpacing:0.5}}>CHECK</Text>
        </TouchableOpacity>:null
      }

      {notavailable === true? 
        <TouchableOpacity
          style={[styles.actionButton]}
          >
        <Text style={{color:Colors.danger}}>Not Available</Text>
        </TouchableOpacity>:null
      }

      {avalable === true? 
        <TouchableOpacity
          style={[styles.actionButton]}
          >
          {/* <SuccessIcon1 width={20} height={20}  show={!secure} /> */}
          
        </TouchableOpacity>:null
      }
    
    </View>
  );
};

EditText.defaultProps = {
  type: '',
  value: null,
  disabled: false,
  multiline: false,
  onChange: null,
  placeholder: '',
  icon: null,
  rightAction: null,
  onFocus: null,
};

EditText.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  editable: PropTypes.bool,
  multiline: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  rightAction: PropTypes.node,
};

export default EditText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light,
    borderRadius: 4,
    // borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border,
    borderWidth:1,
    backgroundColor:Colors.background_1

  },
  icon: {
    paddingLeft: 16,
    paddingRight: 8,
    borderRightWidth: 1,
    borderRightColor: Colors.border,
  },
  textInput: {
    flexGrow: 1,
    // fontFamily: Fonts.fontFamily.helvetica.normal,
    // fontSize: Fonts.sizes.md,
    color: Colors.dark,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  actionButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  
});
