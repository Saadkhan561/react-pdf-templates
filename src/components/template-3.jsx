import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  document: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    zIndex: 10,
    border: "1px solid black",
  },
  page: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },
  template: {
    margin: 5,
    padding: 5,
    width: "80%",
  },
});

// Create Document Component
const TestTemplate3 = () => (
  <Document style={styles.document}>
    <Page size="A3" style={styles.page}>
      <View style={styles.template}>
        {/* PERSONAL INFO DIV */}
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "5px",
            borderBottom: "4px solid #666666",
            paddingBottom: "30px",
            backgroundColor: "#F3F3F3",
            padding: "15px",
          }}
        >
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text
              style={{
                fontSize: "50px",
                borderBottom: "2px solid #666666",
                color: "#666666",
              }}
            >
              Saad Khan
            </Text>
            <Text
              style={{ fontSize: "17px", color: "#666666", marginTop: "10px" }}
            >
              Frontend Developer
            </Text>
          </View>
          <View
            style={{
              width: "250px",
              color: "#848484",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <View>03237092577</View>
              <View>
                <img src="/images/phone.png" alt="" height={25} width={25} />
              </View>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <View>saad@gmail.com</View>
              <View>
                <img src="/images/email.png" alt="" height={25} width={25} />
              </View>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <View>Karachi, Pakistan</View>
              <View>
                <img src="/images/location.png" alt="" height={25} width={25} />
              </View>
            </View>
          </View>
        </View>
        <View style={{ padding: "5px" }}>
          {/* SUMMARY DIV */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              paddingTop: "30px",
            }}
          >
            <View
              style={{
                fontSize: "20px",
                color: "#666666",
                borderBottom: "2px solid #666666",
                paddingBottom: "5px",
                width: "60%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Summary
            </View>
            <View
              style={{ alignItems: "center", width: "80%", color: "#848484" }}
            >
              As a frontend developer, I bring a solid foundation in HTML, CSS,
              and JavaScript, coupled with expertise in frameworks such as React
              and Angular. With a keen eye for design and a focus on user
              experience, I excel in crafting visually appealing and intuitive
              interfaces. I am adept at ensuring cross-browser compatibility and
              implementing responsive design principles to optimize the user
              experience across various devices.
            </View>
          </View>
          <View
            style={{
              marginTop: "20px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* DIV 1 */}
            <View
              style={{
                width: "100%",
                padding: "5px",
              }}
            >
              {/* EDUCATION DIV */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <View
                  style={{
                    fontSize: "20px",
                    color: "#666666",
                    borderBottom: "2px solid #666666",
                    paddingBottom: "5px",
                    width: "70%",
                  }}
                >
                  Education
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px",
                  }}
                >
                  <Text style={{ fontSize: "16px", color: "#737373" }}>
                    Ned university
                  </Text>
                  <Text style={{ color: "#666666" }}>Undergraduate in CIS</Text>
                  <Text style={{ color: "#666666" }}>2020 - 2024</Text>
                </View>
              </View>
              {/* SKILLS DIV */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "50px",
                }}
              >
                <View
                  style={{
                    fontSize: "20px",
                    color: "#666666",
                    borderBottom: "2px solid #666666",
                    paddingBottom: "5px",
                    width: "70%",
                  }}
                >
                  Skills
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "16px",
                      gap: "7px",
                    }}
                  >
                    <Text>-</Text>
                    <Text>Skill</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "16px",
                      gap: "7px",
                    }}
                  >
                    <Text>-</Text>
                    <Text>Skill</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "16px",
                      gap: "7px",
                    }}
                  >
                    <Text>-</Text>
                    <Text>Skill</Text>
                  </View>
                </View>
              </View>
            </View>
            {/* DIV 2 */}
            <View
              style={{
                width: "100%",
                padding: "5px",
                color: "#666666",
              }}
            >
              {/* WORK EXPERIENCE DIV */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <View
                  style={{
                    fontSize: "20px",
                    borderBottom: "2px solid #666666",
                    paddingBottom: "5px",
                    width: "70%",
                  }}
                >
                  Work Experience
                </View>
                <View>
                  <View
                    style={{
                      fontSize: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "3px",
                    }}
                  >
                    <Text style={{ fontWeight: "550" }}>Folio 3</Text>
                    <Text>Frontend Developer | 2020 - present</Text>
                  </View>
                  <View>
                    <View
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "16px",
                        gap: "7px",
                      }}
                    >
                      <Text>-</Text>
                      <Text>Description</Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "16px",
                        gap: "7px",
                      }}
                    >
                      <Text>-</Text>
                      <Text>Description</Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "16px",
                        gap: "7px",
                      }}
                    >
                      <Text>-</Text>
                      <Text>Description</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default TestTemplate3;
