import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, ScrollView, Text } from "react-native";
import {
  Header,
  UserCard,
  FamilyDetails,
  RequestAmountCard,
  PersonalDetails,
} from "../../Component";
import { StatusBar } from "expo-status-bar";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Api from "../../utils/Api";
import getHeader from "../../utils/getHeader";

const { width, height } = Dimensions.get("screen");

const ApplicationVerification = () => {
  const [applicationdetailsList, setapplicationdetailsList] = useState({});
  const [StatusReportsList, setStatusReportsList] = useState({});
  const [loading, setloading] = useState(false);
  const [index, setIndex] = useState(0);
  const renderScene = ({ route }) => {
    switch (route.key) {
      case "applicationdetails":
        return (
          <>
            <ScrollView>
              {applicationdetailsList &&
              Object.keys(applicationdetailsList).length > 0 &&
              !loading ? (
                <>
                  <PersonalDetails
                    persionaldetails={
                      applicationdetailsList?.member_personal_details
                    }
                  />
                  <FamilyDetails
                    familydetail={
                      applicationdetailsList?.member_personal_details?.family
                    }
                  />
                  <RequestAmountCard />
                </>
              ) : (
                <View
                  style={{
                    width: width,
                    height: 300,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {loading ? (
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      data is loading ...
                    </Text>
                  ) : (
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      No record fount
                    </Text>
                  )}
                </View>
              )}

              <View style={{ paddingTop: 100 }} />
            </ScrollView>
          </>
        );

      case "Status":
        return (
          <>
            <ScrollView>
              {StatusReportsList &&
              Object.keys(StatusReportsList).length > 0 &&
              !loading ? (
                <View>
                  <Text>Status component will render here.</Text>
                </View>
              ) : (
                <View
                  style={{
                    width: width,
                    height: 300,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {loading ? (
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      data is loading ...
                    </Text>
                  ) : (
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      No record fount
                    </Text>
                  )}
                </View>
              )}
            </ScrollView>
          </>
        );
      default:
        return null;
    }
  };

  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{
          backgroundColor: "#05a45f",
          height: 3,
          borderRadius: 50,
        }}
        style={{
          backgroundColor: "#f3f3f3",
        }}
        activeColor={{
          color: "#05a45f",
        }}
        inactiveColor={{
          color: "#000000",
        }}
      />
    );
  };

  const [routes] = useState([
    { key: "applicationdetails", title: "Application Details" },
    { key: "Status", title: "Status" },
  ]);

  const fetchApplicationDetail = async () => {
    setloading(true);
    try {
      const header = getHeader();
      const { data } = await Api.get(`member_details?id=223`, header);
      setloading(false);
      if (data?.status_code === 200) {
        setapplicationdetailsList(data?.data);
      }
    } catch (error) {
      setloading(false);
      console.log("catch error:", error);
    }
  };

  useEffect(() => {
    fetchApplicationDetail();
  }, []);

  return (
    <View style={{ ...styles.container }}>
      <StatusBar style="dark" translucent={false} backgroundColor="#f3f3f3" />
      <Header />
      <UserCard
        fullName={`${
          applicationdetailsList?.member_personal_details?.first_name || ""
        } ${applicationdetailsList?.member_personal_details?.last_name || ""}`}
        CNICNumber={applicationdetailsList?.member_personal_details?.cnic}
        profileImage={`data:image/jpg;base64,${applicationdetailsList?.member_personal_details?.profile_pic}`}
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={width}
        style={{ marginBottom: 10 }}
      />
    </View>
  );
};

export default ApplicationVerification;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: "#ffffff",
  },
});
