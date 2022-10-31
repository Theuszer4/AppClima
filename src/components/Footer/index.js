import react from "react";
import {View, Text, StyleSheet,} from 'react-native';


export default function Footer (){
    return (
        <View style={styles.footer}>
          <Text style={styles.texto}>Desenvolvido por TechNinjas Corporation © 2022</Text>  
        </View>
        
    )
}

const styles = StyleSheet.create({
    footer:{
        display: "flex",
        alignItems: "center",
        borderTopColor: 'white',
        borderTopWidth: 1,
        padding: 15,
    },

    texto:{
        color: "white",
    }

})