import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    document: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        zIndex: 10,
        border: '1px solid black'
    },
    page: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%'
    },
    template: {
        margin: 5,
        padding: 5,
        width: '80%'
    },
    personalInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

// Create Document Component
const TestTemplate2 = () => (
    <Document style={styles.document}>
        <Page size="A3" style={styles.page}>
            <View style={styles.template}>
                {/* PEROSNAL INFO DIV */}
                <View style={styles.personalInfo}>
                    <Text style={{ fontSize: '35px', fontWeight: '600' }}>Saad Khan</Text>
                    <Text style={{ fontSize: '18px', color: '#7E7E7E' }}>Frontend Developer</Text>
                    <View style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '600px' }}>
                        <Text style={{ fontSize: '18px', color: '#7E7E7E' }}>03237092577</Text>
                        <Text>-</Text>
                        <Text style={{ fontSize: '18px', color: '#7E7E7E' }}>saad@gmail.com</Text>
                        <Text>-</Text>
                        <Text style={{ fontSize: '18px', color: '#7E7E7E' }}>Saadkhan561</Text>
                        <Text>-</Text>
                        <Text style={{ fontSize: '18px', color: '#7E7E7E' }}>Karachi, Pakistan</Text>
                    </View>
                </View>
                {/* WORK EXPERIENCE DIV */}
                <View>
                    <View style={{ display: 'flex', justifyContent: 'center', marginTop: '25px', marginBottom: '5px', borderBottom: '1px solid black' }}>
                        <Text style={{ fontSize: '20px', fontWeight: '550' }}>Work Experience</Text>
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: '17px', fontWeight: '500', color: '#7E7E7E' }}>Folio 3</Text>
                        <Text style={{ fontSize: '17px', color: '#7E7E7E' }}>Karachi, Pakistan</Text>
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                        <Text style={{ fontSize: '17px' }}>Frontend Developer</Text>
                        <Text style={{ fontSize: '17px', color: '#7E7E7E' }}>2019-ongoing</Text>
                    </View>
                    <View>
                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: '20px' }}>-</Text>
                            <Text style={{ marginLeft: '10px' }}>Description</Text>
                        </View>
                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: '20px' }}>-</Text>
                            <Text style={{ marginLeft: '10px' }}>Description</Text>
                        </View>
                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: '20px' }}>-</Text>
                            <Text style={{ marginLeft: '10px' }}>Description</Text>
                        </View>
                    </View>
                </View>
                {/* EDUCATION DIV */}
                <View>
                    <View style={{ display: 'flex', justifyContent: 'center', marginTop: '25px', marginBottom: '5px', borderBottom: '1px solid black' }}>
                        <Text style={{ fontSize: '20px', fontWeight: '550' }}>Education</Text>
                    </View>
                    <View> 
                        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: '17px', fontWeight: '500', color: '#7E7E7E' }}>NED University</Text>
                            <Text style={{ fontSize: '17px', color: '#7E7E7E' }}>Karachi, Pakistan</Text>
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: '17px' }}>Undergraduate in CIS</Text>
                            <Text style={{ fontSize: '17px', color: '#7E7E7E' }}>2010-2024</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ display: 'flex', justifyContent: 'space-between' , marginTop : '30px'}}>
                            <Text style={{ fontSize: '17px', fontWeight: '500', color: '#7E7E7E' }}>Govt. Degree College Malir Cantt.</Text>
                            <Text style={{ fontSize: '17px', color: '#7E7E7E' }}>Karachi, Pakistan</Text>
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: '17px' }}>Undergraduate in CIS</Text>
                            <Text style={{ fontSize: '17px', color: '#7E7E7E' }}>2010-2024</Text>
                        </View>
                    </View>
                </View>
                {/* PROJECTS DIV */}
                <View>
                    <View style={{ display: 'flex', justifyContent: 'center', marginTop: '25px', marginBottom: '5px', borderBottom: '1px solid black' }}>
                        <Text style={{ fontSize: '20px', fontWeight: '550' }}>Projects</Text>
                    </View>
                    <View> 
                        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: '17px', fontWeight: '500', color: '#7E7E7E' }}>Netflix Clone</Text>
                            <Text style={{ fontSize: '17px', color: '#7E7E7E' }}>Fiver</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row' , alignItems: 'center'}}>
                            <Text style={{ fontSize: '20px' }}>-</Text>
                            <Text style={{marginLeft: '5px'}}>Description</Text>
                        </View>
                    </View>
                    <View> 
                        <View style={{ display: 'flex', justifyContent: 'space-between' , marginTop: '30px'}}>
                            <Text style={{ fontSize: '17px', fontWeight: '500', color: '#7E7E7E' }}>Banking System</Text>
                            <Text style={{ fontSize: '17px', color: '#7E7E7E' }}>University Project</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row' , alignItems: 'center'}}>
                            <Text style={{ fontSize: '20px' }}>-</Text>
                            <Text style={{marginLeft: '5px'}}>Description</Text>
                        </View>
                    </View>
                </View>
                {/* SKILLS DIV */}
                <View>
                    <View style={{ display: 'flex', justifyContent: 'center', marginTop: '25px', marginBottom: '5px', borderBottom: '1px solid black' }}>
                        <Text style={{ fontSize: '20px', fontWeight: '550' }}>Skills</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'column'}}>
                        <View>
                            <Text style={{color: '#7E7E7E', fontWeight: '500'}}>Technology:</Text>
                            <Text style={{marginLeft: '10px'}}>Python - Java - Javascript - MERN Stack - LLM</Text>
                        </View>
                        <View>
                            <Text style={{color: '#7E7E7E', fontWeight: '500'}}>Buiseness:</Text>
                            <Text style={{marginLeft: '10px'}}>Leadership - Time Management</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);

export default TestTemplate2