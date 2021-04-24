import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'lightcyan'
        
    },
    image: {
        width: 300,
        height: 300,
        alignSelf: 'center'    },
    controls: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: '5%',
        backgroundColor: "black",
        marginTop: 32,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button:{
        width: '20%'
    }
    

  });

  export default styles;