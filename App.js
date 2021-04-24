import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import styles from './Styles'

export default App = () => {
  let [src, setSrc] = useState(0);
  let [interval, setInt] = useState(null);

  //let interval;
  let sources = [
    "https://images.unsplash.com/photo-1611656993299-9f9d73232b9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1611505700922-57892ff55bbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80",
    "https://images.unsplash.com/photo-1607183420110-1eda752919cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=657&q=80",
    "https://images.unsplash.com/photo-1610916147297-50ee9bd838e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  ]
  return (
    <View style={styles.container}>
      <Image 
      style = {styles.image}
      source = {{uri: sources[src]}}></Image>
      <StatusBar style="auto" />

      <View style={styles.controls}>
          <View style ={ styles.button}>

          <Button
          
          title="<<"
          color="darkcyan"
          onPress={() => {
            if(src === 0) {
              setSrc(sources.length-1);
            }
            else {
              setSrc(--src);
            }
          }}
          
        />
        </View>

        <View style ={ styles.button}>

<Button

title="Start"
color="darkcyan"
onPress={() => {

  setInt( setInterval(()=>
  {
    let step = ++src;
    step = step % sources.length;
    setSrc(step);
  },1000));
}}

/>
</View>

<View style ={ styles.button}>

<Button

title="Stop"
color="darkcyan"
onPress={()=>{
  clearInterval(interval);}
}

/>
</View>

<View style ={ styles.button}>

<Button

title=">>"
color="darkcyan"
onPress={() => {
  if(src === sources.length-1) {
    setSrc(0);
  }
  else {
    setSrc(++src);
  }
}}

/>
</View>
          
      </View>
    </View>
  );
}


