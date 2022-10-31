import {View, Text, Link, Image, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Card(props){

    const [clima, setClima] = useState();
    const [maxima, setMax] = useState();
    const [minima, setMin] = useState();
    const [sensacao, setSencacao] = useState();
    const [umidade, setUmidade] = useState();
    const [condicao, setCondicao] = useState();
    const [uv, setUv] = useState();
    const [icon, setIcon] = useState();

    useEffect(()=> {
        async function lerCidade(){
            const resposta = await api.get(`forecast.json?key=e8a403fa630d442d8bf183832220209&q=${props.nome}&days=1&aqi=no&alerts=no`);

            const data = resposta.data;
            setClima(data.current.temp_c);
            setMax(data.forecast.forecastday[0].day.maxtemp_c);
            setMin(data.forecast.forecastday[0].day.mintemp_c);
            setSencacao(data.current.feelslike_c);
            setUmidade(data.current.humidity);
            setCondicao(data.current.condition.text);
            setUv(data.current.uv);
            setIcon(data.current.condition.icon)
        };

        lerCidade();

    }, []);

    return(
        <View style={styles.card}>
            <View>
                <Text style={styles.textoPrincipal}>{props.nome}</Text>
                    {/* <Text>{Aqui entra o dia da semana em que o clima esta sendo mostrado}</Text>             */}
                    <View style={styles.asideCard}>
                        <Image source={{ uri:`https://${icon}` }} style={{width: 70, height: 70}} />
                        <Text style={styles.tempAtual}>{clima}º</Text>
                    </View>  
                <Text style={styles.termica}>Sesação térmica de: {sensacao}º</Text>
            </View>

            <View style={styles.textoTempo}> 
                <Text style={styles.texto}>{condicao}</Text> 
                <Text style={styles.texto}>{maxima} / {minima}</Text> 
                <Text style={styles.texto}>Índice uv: {uv}</Text> 
                <Text style={styles.texto}>Umidade: {umidade}%</Text>
            </View>
           
            {/* <Text>================================================</Text> */}

        </View>
        
    )
}

const styles = StyleSheet.create({
    card:{
        height: 250,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:'#2C2F3F',  
        borderRadius: 10,
        width: '80%',
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 7,
        },
    texto:{
        marginBottom: 10,
        color: '#fff',
        fontSize: 12,
    },
    tempAtual: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
    },
    termica:{
        fontSize: 12,
        color: '#169DFF'
    },
    asideCard: {
        paddingTop: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textoPrincipal: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    textoTempo:{
        marginLeft: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        fontWeight: 'bold',
    }
});
