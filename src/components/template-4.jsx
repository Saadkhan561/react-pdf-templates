import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import List, { Item }  from './list';

// Create styles
const styles = StyleSheet.create({
    document: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        zIndex: 10,
        // border: "1px solid black",
      },
      page: {
        display: "flex",
        justifyContent: "center",
        height: "100%",
      },
      template: {
        // margin: 5,
        // padding: 5,
        width: "70%",
        border: "1px solid black",
        borderRadius:'10px'
      },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
});

// Create Document Component
const TestTemplate4 = () => (
  <Document style={styles.document}>
    <Page size="A4" style={styles.page}>
      <View style={styles.template}>
        {/* Personal info */}
        <View style={{   display: "flex",
        flexDirection:'column',
            justifyContent: "center",
            alignItems:'center',marginTop:"10px",
            marginBottom:'10px',
            gap: "5px",}}>
              <Text style={{fontSize:"20px", fontWeight:'bold'}}>HUSSAIN KAZMI</Text>
              <Text>Address | Mail | Website</Text>
              <Text style={{fontSize:"17px", fontWeight:'bold'}}>Software Engineer</Text>
        </View>
        {/* work experience */}
        <View style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
        }}>
            <View style={{width:'auto' ,backgroundColor:'#D2E4E2',height:'25px', }}>
                <Text style={{marginLeft:'18px'}}>
                        Work Experience
                </Text>
            </View>
        </View>
        <View style={{display:'flex',flexDirection:'column', justifyContent:"space-between", width:'60%', marginBottom:'5px'}}>  
         <View style={{   display: "flex",
            marginTop:'7px',
            justifyContent: "space-between",
            marginLeft:"20px",
            // alignItems:'center',
            gap: "2px",}}>
                <Text>
                        Techlabs
                </Text>
                <Text>
                        2022
                </Text>
        </View>
        <View style={{   display: "flex",
        flexDirection:'column',
            justifyContent: "center",
            marginLeft:"45px",
            // alignItems:'center',
            gap: "2px", marginTop:'5px'}}>
              <List>
                <Item>Junior software Engineer</Item>
              </List>
              {/* <List>
                <Item>gnjghjg</Item>
              </List>
              <List>
                <Item>gnjghjg</Item>
              </List> */}
        </View></View>
        <View style={{display:'flex',flexDirection:'column', justifyContent:"space-between", width:'60%', marginBottom:'5px'}}>  
         <View style={{   display: "flex",
           
            justifyContent: "space-between",
            marginLeft:"20px",
            // alignItems:'center',
            gap: "2px",}}>
                <Text>
                        Work Experience
                </Text>
                <Text>
                        2020
                </Text>
        </View>
        <View style={{   display: "flex",
        flexDirection:'column',
            justifyContent: "center",
            marginLeft:"45px",
            // alignItems:'center',
            gap: "2px", marginTop:'5px'}}>
              <List>
                <Item>gnjghjg</Item>
              </List>
              {/* <List>
                <Item>gnjghjg</Item>
              </List>
              <List>
                <Item>gnjghjg</Item>
              </List> */}
        </View></View>
        {/* Education */}
        <View style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
        }}>
            <View style={{width:'auto' ,backgroundColor:'#D2E4E2',height:'25px'}}>
                <Text style={{marginLeft:'18px'}}>
                        Education
                </Text>
            </View>
        </View>
        <View style={{display:'flex',flexDirection:'column', justifyContent:"space-between", width:'60%', marginBottom:'5px'}}>  
         <View style={{   display: "flex",
            marginTop:'7px',
            justifyContent: "space-between",
            marginLeft:"20px",
            // alignItems:'center',
            gap: "2px",}}>
                <Text>
                        Work Experience
                </Text>
                <Text>
                        2020
                </Text>
        </View>
        <View style={{   display: "flex",
        flexDirection:'column',
            justifyContent: "center",
            marginLeft:"45px",
            // alignItems:'center',
            gap: "2px", marginTop:'5px'}}>
              <List>
                <Item>gnjghjg</Item>
              </List>
              {/* <List>
                <Item>gnjghjg</Item>
              </List>
              <List>
                <Item>gnjghjg</Item>
              </List> */}
        </View></View>
        <View style={{display:'flex',flexDirection:'column', justifyContent:"space-between", width:'60%', marginBottom:'5px'}}>  
         <View style={{   display: "flex",
            
            justifyContent: "space-between",
            marginLeft:"20px",
            // alignItems:'center',
            gap: "2px",}}>
                <Text>
                        Work Experience
                </Text>
                <Text>
                        2020
                </Text>
        </View>
        <View style={{   display: "flex",
        flexDirection:'column',
            justifyContent: "center",
            marginLeft:"45px",
            // alignItems:'center',
            gap: "2px", marginTop:'5px'}}>
              <List>
                <Item>gnjghjg</Item>
              </List>
              {/* <List>
                <Item>gnjghjg</Item>
              </List>
              <List>
                <Item>gnjghjg</Item>
              </List> */}
        </View></View>
        {/* Projects */}
        <View style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
        }}>
            <View style={{width:'auto' ,backgroundColor:'#D2E4E2',height:'25px'}}>
                <Text style={{marginLeft:'18px'}}>
                        Projects
                </Text>
            </View>
        </View>
        <View style={{display:'flex',flexDirection:'column', justifyContent:"space-between", width:'60%', marginBottom:'5px'}}>  
         <View style={{   display: "flex",
            marginTop:'7px',
            justifyContent: "space-between",
            marginLeft:"20px",
            // alignItems:'center',
            gap: "2px",}}>
                <Text>
                Netflix Clone
                </Text>
                <Text>
                        2020
                </Text>
        </View>
        <View style={{   display: "flex",
        flexDirection:'column',
            justifyContent: "center",
            marginLeft:"45px",
            // alignItems:'center',
            gap: "2px", marginTop:'5px'}}>
              <List>
                <Item>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Item>
              </List>
              <List>
                <Item>Tempore unde optio facere praesentium molestiae cumque enim</Item>
              </List>
              {/* <List>
                <Item>gnjghjg</Item>
              </List> */}
        </View></View>
        <View style={{display:'flex',flexDirection:'column', justifyContent:"space-between", width:'60%', marginBottom:'5px'}}>  
         <View style={{   display: "flex",
            
            justifyContent: "space-between",
            marginLeft:"20px",
            // alignItems:'center',
            gap: "2px",}}>
                <Text>
                        Work Experience
                </Text>
                <Text>
                        2020
                </Text>
        </View>
        <View style={{   display: "flex",
        flexDirection:'column',
            justifyContent: "center",
            marginLeft:"45px",
            // alignItems:'center',
            gap: "2px", marginTop:'5px'}}>
              <List>
                <Item>gnjghjg</Item>
              </List>
              <List>
                <Item>gnjghjg</Item>
              </List>
              {/* <List>
                <Item>gnjghjg</Item>
              </List> */}
        </View></View>
        {/* Skills */}
  <View style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px",
}}>
<View style={{width:'auto' ,backgroundColor:'#D2E4E2',height:'25px', }}>
<Text style={{marginLeft:'18px'}}>
Skills
</Text>
</View>
</View>
<View style={{display:'flex',flexDirection:'row', justifyContent:"space-between", width:'60%', marginBottom:'10px'}}>  
<View style={{   display: "flex",
flexDirection:'column',
justifyContent: "center",
marginLeft:"45px",
// alignItems:'center',
gap: "2px",}}>
<List>
<Item>gnjghjg</Item>
</List>
<List>
<Item>gnjghjg</Item>
</List>
<List>
<Item>gnjghjg</Item>
</List>
</View>
<View style={{   display: "flex",
flexDirection:'column',
justifyContent: "center",
marginLeft:"7px",
// alignItems:'center',
gap: "5px",}}>
<List>
<Item>gnjghjg</Item>
</List>
<List>
<Item>gnjghjg</Item>
</List>
<List>
<Item>gnjghjg</Item>
</List>
</View></View>
      </View>
   
    </Page>
  </Document>
);
export default TestTemplate4;










  