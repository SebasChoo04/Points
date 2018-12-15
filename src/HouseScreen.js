import React, {Component} from 'react'
import {View, Text, Dimensions, SafeAreaView, FlatList, TouchableOpacity, YellowBox} from 'react-native'
import Svg, {
  Path,
  Rect,
  LinearGradient,
  Stop
} from "react-native-svg";
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import {connect} from 'react-redux'
import {changeEmail, changeLoginStatus, changeName, resetAll} from './actions'
import {NavigationActions, StackActions} from "react-navigation";

YellowBox.ignoreWarnings(['source.uri'])

class HouseScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      color: 'white',
      imageLink: ""
    }
  }

  componentDidMount() {
    this.houseData()
    Dimensions.addEventListener('change', (e) => {
      const {width, height} = e.window;
      this.setState({width, height});
    })
  }

  houseData() {
    switch (this.props.userDetailsReducer.house) {
      case 'Red':
        this.setState({color: 'red'});
        this.setState({imageLink: 'https://firebasestorage.googleapis.com/v0/b/sst-house-point.appspot.com/o/red.png?alt=media&token=3a2098b4-c535-469e-b4ad-2213693c7e07'});
        break
      case 'Black':
        this.setState({color: 'black'});
        this.setState({imageLink: 'https://firebasestorage.googleapis.com/v0/b/sst-house-point.appspot.com/o/black.png?alt=media&token=0a0c181b-f779-4969-ab93-7a91eb897f5b'});
        break
      case 'Green':
        this.setState({color: 'green'});
        this.setState({imageLink: 'https://firebasestorage.googleapis.com/v0/b/sst-house-point.appspot.com/o/green.png?alt=media&token=d8db5dab-12ec-4312-82f9-97d27e91a4db'});
        break
      case 'Yellow':
        this.setState({color: 'yellow'});
        this.setState({imageLink: 'https://firebasestorage.googleapis.com/v0/b/sst-house-point.appspot.com/o/yellow.png?alt=media&token=501b708d-8d29-4dd2-a66a-58fa6da77efb'});
        break
      case 'Blue':
        this.setState({color: 'blue'});
        this.setState({imageLink: 'https://firebasestorage.googleapis.com/v0/b/sst-house-point.appspot.com/o/blue.png?alt=media&token=1ce4e87f-de93-4871-92d4-2264f06fff9f'})
        break
    }
  }

  render() {
    return (
        <View style={{
          backgroundColor: '#white',
          flex: 1
        }}>
          <Svg style={{
            position: 'absolute',
            height: this.state.height,
            width: this.state.width
          }}>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="blue">
              <Stop stopColor="#6ABAD5" stopOpacity="1" offset="0%"/>
              <Stop stopColor="#1E9FD6" stopOpacity="1" offset="100%"/>
            </LinearGradient>
            <Path d={`
              M0 0
              L${this.state.width} 0
              L0 ${this.state.height / 3}
              M${this.state.width} ${this.state.height / 3}
              L${this.state.width} 0
              L0 ${this.state.height / 3}
            `} fill='url(#blue)'/>
            <Path d={`
              M0 ${this.state.height / 3}
              C${this.state.width / 3} ${this.state.height / 4} ${this.state.width / 2} ${this.state.height / 2.5} ${this.state.width} ${this.state.height / 3}
            `} fill={'white'}/>
            <Path d={`
              M${this.state.width} ${this.state.height / 3}
              S${this.state.width / 100 * 80} ${this.state.height / 2.6} ${this.state.width / 2.05} ${this.state.height / 3}
            `} fill='#1E9FD6'/>
          </Svg>
          <SafeAreaView style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
            <Image
                indicator={ProgressBar}
                style={{
                  width: '100%',
                  height: '60%',
                }}
                resizeMode={'contain'}
                source={{
                  uri: this.state.imageLink,
                }}
            />
            <Text style={{
              fontFamily: 'Avenir Next',
              fontSize: 30,
              fontWeight: '600',
              color: 'white'
            }}>
              {this.props.userDetailsReducer.house} House
            </Text>
          </SafeAreaView>
          <View style={{
            flex: 2
          }}>
            <FlatList
                data={
                  [
                    {
                      key: 'Captain',
                      data: 'Ian Izree'
                    },
                    {
                      key: 'Vice Captain',
                      data: 'Khushi Bhagwat'
                    },
                    {
                      key: 'Master',
                      data: 'Mr Dennis Lam'
                    },
                    {
                      key: 'Meeting Location',
                      data: 'Auditorium'
                    },
                    {
                      key: 'Motto',
                      data: 'Brilliant and Brave',
                    }
                  ]
                } style={{
              flex: 1,
              marginTop: 32
            }} renderItem={({item}) => {
              return (
                  <View style={{
                    width: this.state.width - 32,
                    height: 75,
                    marginLeft: 16,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                    <View style={{
                      flex: 1,
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      marginRight: 20
                    }}>
                      <Text style={{
                        fontFamily: 'Avenir Next',
                        fontSize: 30
                      }}>
                        {item.key}
                      </Text>
                    </View>
                    <View style={{
                      flex: 1.5,
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      marginLeft: 8
                    }}>
                      <Text style={{
                        fontFamily: 'Avenir Next',
                        fontSize: 20,
                      }}>
                        {item.data}
                      </Text>
                    </View>
                  </View>
              )
            }}/>
          </View>
        </View>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => ({
  changeEmail: email => dispatch(changeEmail(email)),
  changeName: name => dispatch(changeName(name)),
  changeLoginStatus: loginStatus => dispatch(changeLoginStatus(loginStatus)),
  resetAll: () => dispatch(resetAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(HouseScreen)