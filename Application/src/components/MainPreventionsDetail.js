import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import datas from "../data/data_preventions";
import PreventionsDetail from "./PreventionsDetail";

export class MainPreventionsDetail extends Component {
  state = {
    datas: datas,
  };
  getPreventionsDetailData() {
    return this.state.datas.map((data) => {
      return <PreventionsDetail detail={data} key={data.id} />;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} style={styles.container}>
          {this.getPreventionsDetailData()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MainPreventionsDetail;
