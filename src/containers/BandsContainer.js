import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput.js'
import Bands from '../components/Bands.js'


class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}



const mapStateToProps =({bands}) =>({bands})

const mapDispatchToProps = dispatch =>{
  return {
    addBand: band =>{
      dispatch({type: "ADD_BAND", band})
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer)
