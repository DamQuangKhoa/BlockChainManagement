import Base from './Base'
import { drizzleConnect } from 'drizzle-react'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
  
  }
}

const BaseContainer = drizzleConnect(Base, mapStateToProps);

export default BaseContainer
