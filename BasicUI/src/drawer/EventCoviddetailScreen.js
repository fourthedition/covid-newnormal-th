import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {CustomHeader} from '../index';
import Color from '../constants/colors';
import {IMAGE} from '../constants/image';


export class EventCoviddetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Color.primary}}>
        <CustomHeader
          title="เหตุการณ์ระบาด"
          navigation={this.props.navigation}
        />
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.boximage}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
                source={IMAGE.IMAGE_EVENT}
                //resizeMode="contain"
              />
            </View>
            <View style={styles.boxdetail}>
              <Text style={styles.headtext}>เหตุการณ์ระบาดเป็นวงกว้าง</Text>

              <Text style={styles.detail}>
                {'      '}
                เหตุการณ์ระบาดเป็นวงกว้างเกิดเมื่อคนหนึ่งคนแพร่เชื้อไวรัสไปสู่คนกลุ่มใหญ่ผิดปกติ
                {"\n"}{'      '}สถานการณ์ที่จะทวีความรุนแรงของการระบาด{"\n"}เป็นวงกว้างรวมถึง ดังนี้{"\n"}
                {"\n"}{'      '}1. การชุมนุมขนาดใหญ่{"\n"}
                {'      '}2. ประชาการผู้สูงอายุ{"\n"}
                {'      '}3. ประชาการไร้พื้นฐาน{"\n"}
                {'      '}4. การสัมผัสโรคจากต่างประเทศ{"\n"}
                {'      '}5. ความหนาแน่นของเขตเมือง{"\n"}
                {'      '}6. ระบบสาธารณสุขไม่เข็มแข็ง{"\n"}
                {'      '}7. รัฐบาลขาดความโปร่งใส{"\n"}
                {'      '}8. สื่อขาดเสรีภาพ{"\n"}
                
              </Text>
              
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flex: 1,
    backgroundColor: 'rgb(242,242,247)',
    width: '90%',
    height: '90%',
    margin: 10,
    borderRadius: 10,
    top: 10,
    alignItems: 'center',
  },

  boximage: {
    width: '100%',
    flex: 0.4,
    backgroundColor: 'skyblue',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  boxdetail: {
    width: '100%',
    flex: 0.6,
    //justifyContent: 'center',
    backgroundColor: Color.lightgray,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headtext: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Color.darkpurple,
    margin: 10,
    textAlign: 'center',
  },
  detail: {
    //textAlign: 'center',
    margin: 10,
    color: Color.gray,
    //fontWeight: 'bold',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
