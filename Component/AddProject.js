import { SafeAreaView, View, TextInput,Text, StyleSheet, Button} from "react-native";
import React , {useState} from 'react';
import { getDatabase, push, ref, onValue } from 'firebase/database';
import { getAuth } from "firebase/auth";
export default function AddProject() {

    const [projectName , setProjectName] = useState("");
    const [PData , setpData] = useState([]);

    const saveProjectToServer = () => {

        if(projectName === ""){
            alert(" Project name shpuld not be Empty!!")
        }else {
        const db = getDatabase();
        console.log(" Data is stored in Database.")
        push(ref(db, 'projects/'), {          
            name: projectName,
            addedBy: getAuth().currentUser?.email
        }).then(() => {
            // Data saved successfully!
            alert( projectName + ' added to database!'); 
            setProjectName("");   
        })  
        .catch((error) => {
                // The write failed...
                alert(error);
            });
        }
    }

     return( 
        <SafeAreaView>
        <View style={{ alignItems: 'center', justifyContent: 'center' , marginTop:100 }}>
              <View >
                  <Text style = {styles.text}> Enter a Project Name to add a new project</Text>
              <TextInput style = {styles.textBoxes}
            // style={styles.textBoxes}
            placeholder=" Project Name..."
            value={projectName}
            onChangeText={ (v) => setProjectName(v)}
            />
            <Button style = {styles.submit} title= "Add" onPress={()=> saveProjectToServer()}>
            </Button>
            
            </View>
            </View>
            </SafeAreaView>
    );
    
    }
    
    
    const styles = StyleSheet.create({
        container: {  
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
        textBoxes: {
        width: 300, 
        fontSize: 18,
        padding: 12,
        borderColor: 'gray', 
        borderWidth: 0.5,
        borderRadius: 10,
        marginBottom:10,
        marginLeft:10,
        
        },
        text:{
          width: 320,
          
          fontSize:20,
          fontWeight:'bold',
          marginTop: -20,
          marginBottom: 20,
          textAlign:'center',
        },
        textToset:{
          height:50,
          width:300,
          color:'red',
          marginBottom:-45,
          paddingTop:20,
          textAlign:'right',
          
        },
        submitText:{
          color:'white',
          textAlign:'center',
          fontSize:15,
          fontWeight:'600'
        },
        dateText:{
          width:500,
         
          color:'red',
          textAlign:'right',
         
        },
        
        dateBox:{
          width:'75%',
          backgroundColor:'yellow',
          flex:1,
          flexDirection:'row-reverse',
          
    
        },
        dateBox1:{
          width:'75%',
          backgroundColor:'yellow',
          flex:1,
          flexDirection:'row-reverse',
          marginTop:60,
    
        },
        DateTextInput:{
            width:200,
            height:50,
            borderWidth: 0.5,
            borderRadius: 10,
            fontSize: 18,
            padding: 12,
            borderColor: 'gray',
            marginLeft:100,
          },
          DateTextshow:{
            width:100,
            height:50,
            borderWidth: 0.5,
            borderRadius: 10,
            textAlign:'center',
            fontSize: 16,
            padding: 15,
            borderColor: 'gray',
            marginLeft:5,
            fontWeight:'500',
          },
          submit:{
            marginTop:60,
            borderRadius:10,
            borderWidth:0.5,
            height:40,
            width:150,
            fontSize:20,
            textAlign:'center',
            paddingTop:7,
            fontWeight:'600',
          },
        });