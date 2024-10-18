// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {eventActiveStatus} = props
  console.log('eventActiveStatus: ', eventActiveStatus)
  switch (eventActiveStatus) {
    case 'INITIAL':
      return (
        <div className="active-event-container">
          <p className="description">
            Click on an event, to view its registration details
          </p>
        </div>
      )
    case 'REGISTERED':
      return (
        <div className="active-event-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="registered-icon"
          />
          <p className="description">
            You have already registered for the event
          </p>
        </div>
      )
    case 'YET_TO_REGISTER':
      return (
        <div className="active-event-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="not-registered-image"
          />
          <p className="description">
            A live performance brings so much to your relationship with dance.
            Seeing dance live cab often make you fall totally in love with this
            beautiful art from
          </p>
          <button className="register-btn" type="button">
            Register Here
          </button>
        </div>
      )
    case 'REGISTRATIONS_CLOSED':
      return (
        <div className="active-event-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="registered-icon"
          />
          <p className="description">
            You have already registered for the event
          </p>
        </div>
      )
    default:
      return null
  }
}
export default ActiveEventRegistrationDetails
