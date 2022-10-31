import {View, Text, Link, Image, StyleSheet,FlatList,ActivityIndicator} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
           {/* <Image style={styles.nuvem} source={require('../../../assets/image.png')}></Image> */}
            <Text style={styles.texto}>ACME TECH</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        // flex: 1,
        paddingTop: 30,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 110,
        backgroundColor: '#1E202B',

    },
    nuvem:{
        width: 30,
        height: 30,
        left: 20,
    },
    texto: {
        fontWeight: 'bold',
        left: 30,
        color: '#fff',
        fontSize: 16,
    }
});