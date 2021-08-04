import React from "react";
import { View, Text, StyleSheet, Alert, Dimensions, TouchableOpacity, Image } from "react-native";
const { width, height } = Dimensions.get('screen');
const data = [{
  title: "Tranfer Cash",
  description: "Add and withdraw cash",
  image: require('../../assets/images/Transfer.png')

},
{
  title: "Save for something new",
  description: "Save & invest towards something in the future",
  image: require('../../assets/images/Save.png')

},
{
  title: "Invite Cameron",
  description: "Give Cameron access to login to their account",
  image: require('../../assets/images/Invest.png')

},
{
  title: "Share profile link",
  description: "Others can signup and contribute to this account",
  image: require('../../assets/images/Share.png')

},
{
  title: "Setting and Account Documents",
  description: "View and changes setting. Access monthly statements, trade confirms and tax docs.",
  image: require('../../assets/images/Share.png')
},
{
  title: "Delete Account",
  description: "Remove an account the is not in use",
  image: require('../../assets/images/Delete.png')

}]


const CardView = ({ navigation }) => {
  return (
    <View vertical style={styles.scroll}>
      {data.map((v, index) => {
        return (

          <View
            key={index}
            style={styles.card}
          >

            <Image source={v.image} ></Image>
            <View style={styles.TextView}>
              <TouchableOpacity onPress={() => Alert.alert(
                'You need to...'
              )} >
                <Text style={styles.Title}>{v.title}</Text>
                <Text >{v.description}</Text>
              </TouchableOpacity>
            </View>

          </View>

        );
      })}
    </View>
  );

}

const styles = StyleSheet.create({
  scroll: {
    height: height / 2,
    marginVertical: 10,
    backgroundColor: '#f8f6f9',
    marginHorizontal: 10
  },
  card: {

    flex: 1,
    width: width,
    shadowOffset: {
      width: 3,
      height: 3
    },

    flexDirection: 'row',
    shadowOpacity: 0.9,
    backgroundColor: "#f8f6f9",
    marginVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOpacity: 0.9
  },
  TextView: {
    flexDirection: 'column',
    width: width / 1.2,
    fontSize: 16,
    paddingLeft: 20,
    flexWrap: 'wrap'
  },
  Title: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default CardView;