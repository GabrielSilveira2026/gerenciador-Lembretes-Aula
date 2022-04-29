import {useState} from 'react';

import { 
  Button,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

{/*
  Observações:
  felxDirection: Row ou Colum
  justifyContent opera no eixo principal
  alingItems = secundario/outro eixo  
  
  <ScrollView> <- não recicla os componentes
        Lista de lembretes

        {
          lembretes.map((x) => (
            <View key={x} style={styles.itemNaLista}>
              <Text>{x}</Text>
            </View>
          ))
        }

  </ScrollView>

*/}

export default function App() {
  const [lembrete, setLembrete] = useState('')
  const [lembretes, setLembretes] = useState([])
  const [contadorLembretes, setContadorLembrete] = useState(0)

  const capturarLembrete = (LembreteDigitado) => {
    setLembrete(LembreteDigitado)
  }

  const adicionarLembrete = () =>{
    setLembretes(lembretes => {
      setContadorLembrete(contadorLembretes + 1)
      return [{key: contadorLembretes.toString(), value: lembrete}, ...lembretes]
    })

  }



  return (
    <View style={styles.telaPrincipalView}>
      
      <View>
      {/*Usuario insere lembrete aqui*/}
        <TextInput
        onChangeText={capturarLembrete}
          placeholder='Lembrar...'
          style={{borderBottomColor: 'Black', borderBottomWidth: 1, marginBottom: 8, padding: 12}}

        />
        <Button 
          title="Adicionar Lembrete"
          onPress={adicionarLembrete}
        />
      </View>

      <FlatList
        data={lembretes}
        renderItem={
          l =>(
            <View style={styles.itemNaLista}>
              <Text>{l.item.value}</Text>
            </View>
          )
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 15
  },
  itemNaLista:{
    padding: 10,
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    backgroundColor: '#CCC'
    
  }
});
