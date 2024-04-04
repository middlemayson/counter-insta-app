import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      color: '#3b3b3d',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      width: '100%',
      height: '100%',
    },
    title: {
      textAlign: 'left',
      marginBottom: 16,
    },
    section: {
      alignItems: 'center',
    },
    sectionText: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        gap: 8,
    },
    alignCenter: {
      textAlign: 'center',
    },
    textField: {
        height: 250,
        minWidth: '100%',
        borderColor: '#d1d1d1',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 8,
        padding: 16,
        verticalAlign: 'top',
    },
    textLine: {
        marginBottom: 5,
        width: '100%',
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#d1d1d1',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    bold: {
      fontWeight: 'bold',
    },
    greenArea: {
      color: '#388E3C',
      backgroundColor: '#E8F5E9',
      borderColor: '#C8E6C9',
    },
    redArea: {
      color: '#E53935',
      backgroundColor: '#FFEBEE',
      borderColor: '#FFCDD2',
    },
    copyButton: {
      width: '100%',
      borderRadius: 8,
      padding: 16,
      backgroundColor: '#25aaff',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#0a93ec',
      borderStyle: 'solid',
      borderWidth: 1,
      shadowColor: '#0a93ec',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.9,
      shadowRadius: 5,
      elevation: 5,
    },
    btnText: {
      color: '#fff',
      textTransform: 'uppercase',
    },
    picker: {
        width: '100%',
        marginVertical: 16,
        borderColor: '#d1d1d1',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
    },
    pickerText: {
        paddingHorizontal: 16,
        paddingTop: 8,
    },
  });
  
  export default styles;