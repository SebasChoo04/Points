import React, {Component} from 'react'
import {View, Text} from 'react-native'
import ChooseHouse from "../components/ChooseHouse";
import {changeEmail, changeHouse, changeLoginStatus, changeName, resetAll} from "../actions";
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => ({
  changeEmail: email => dispatch(changeEmail(email)),
  changeName: name => dispatch(changeName(name)),
  changeLoginStatus: loginStatus => dispatch(changeLoginStatus(loginStatus)),
  resetAll: () => dispatch(resetAll()),
  changeHouse: house => dispatch(changeHouse(house))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseHouse)
