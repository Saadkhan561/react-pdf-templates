import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  document: {
    width: "100%",
  },

  page: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    fontFamily: 'sans-serif'
  },
  template: {
    margin: 10,
    padding: 10,
    width: "80%",
  },
});

// Create Document Component
const TestTemplate5 = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.template}>
        {/* PERSONAL INFO DIV */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "5px",
            paddingBottom: "60px",
            margin: "5px",
            borderBottom: "1px solid black",
          }}
        >
          <View style={{ display: "flex", justifyContent: "space-between" }}>
            <View
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <Text style={{ fontSize: "50px", fontWeight: "550" }}>
                Saad Khan
              </Text>
              <Text style={{ fontSize: "20px" }}>Frontend Developer</Text>
            </View>
            <View>
              <View
                style={{ display: "flex", gap: "7px", alignItems: "center" }}
              >
                <img src="/images/phone-2.png" alt="" height={25} width={25} />
                <Text>03237092577</Text>
              </View>
              <View
                style={{ display: "flex", gap: "7px", alignItems: "center" }}
              >
                <img src="/images/email-2.png" alt="" height={25} width={25} />
                <Text>saad@gmail.com</Text>
              </View>
              <View
                style={{ display: "flex", gap: "7px", alignItems: "center" }}
              >
                <img
                  src="/images/location-2.png"
                  alt=""
                  height={25}
                  width={25}
                />
                <Text>Karachi, Pakistan</Text>
              </View>
            </View>
          </View>
          <View style={{ color: "#3F3F3F" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            magnam dolor ratione, ab consequatur similique ea rerum recusandae
            quibusdam deserunt odit reiciendis quis distinctio excepturi?
            Aliquam eaque error corrupti tempora?
          </View>
        </View>
        {/* EDUCATION AND SKILLS DIV */}
        <View
          style={{
            display: "flex",
            gap: "10px",
            padding: "5px",
            margin: "5px",
            paddingBottom: "60px",
            borderBottom: "1px solid black",
          }}
        >
          {/* EDUCATION DIV */}
          <View
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Text style={{ fontSize: "40px" }}>Education</Text>
            <View
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text>2020 - 2024</Text>
                <Text style={{ fontWeight: "550" }}>Ned University</Text>
                <Text>Undergraduate in CIS</Text>
              </View>
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text>2017 - 2019</Text>
                <Text style={{ fontWeight: "550" }}>
                  Govt. Degree College Malir Cantt.
                </Text>
                <Text>Intermediate</Text>
              </View>
            </View>
          </View>
          {/* SKILLS DIV */}
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Text style={{ fontSize: "40px" }}>Skills</Text>
            <View>
              <View
                style={{ display: "flex", gap: "7px", alignItems: "center" }}
              >
                <Text>-</Text>
                <Text>Description</Text>
              </View>
              <View
                style={{ display: "flex", gap: "7px", alignItems: "center" }}
              >
                <Text>-</Text>
                <Text>Description</Text>
              </View>
            </View>
          </View>
        </View>
        {/* WORK EXPERIENCE AND PROJECTS DIV */}
        <View
          style={{
            display: "flex",
            gap: "10px",
            padding: "5px",
            margin: "5px",
          }}
        >
          {/* WORK EXPERIENCE DIV */}
          <View
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Text style={{ fontSize: "40px" }}>Work Experience</Text>
            <View
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ fontWeight: "550" }}>Frontend Developer</Text>
                <Text>Folio 3 | 2020 - 2022</Text>
                <Text style={{ marginTop: "7px" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore unde optio facere praesentium molestiae cumque enim
                  accusamus animi minima deserunt.
                </Text>
              </View>
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ fontWeight: "550" }}>QA Engineer</Text>
                <Text>Ten Pearls | 2017 - 2019</Text>
                <Text style={{ marginTop: "7px" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore unde optio facere praesentium molestiae cumque enim
                  accusamus animi minima deserunt.
                </Text>
              </View>
            </View>
          </View>
          {/* PROJECTS DIV */}
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Text style={{ fontSize: "40px" }}>Projects</Text>
            <View style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ fontWeight: "550" }}>Restaurant Management System | 2019</Text>
                <Text style={{ marginTop: "5px" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore unde optio facere praesentium molestiae cumque enim
                  accusamus animi minima deserunt.
                </Text>
              </View>
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ fontWeight: "550" }}>Netflix Clone | 2016</Text>
                <Text style={{ marginTop: "5px" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore unde optio facere praesentium molestiae cumque enim
                  accusamus animi minima deserunt.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default TestTemplate5;
