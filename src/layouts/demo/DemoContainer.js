import Demo from './Demo'
import { drizzleConnect } from 'drizzle-react'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    
  }
}

const DemoContainer = drizzleConnect(Demo, mapStateToProps);

export default DemoContainer
