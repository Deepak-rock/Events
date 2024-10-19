// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {eventActiveStatus} = props
  console.log('eventActiveStatus: ', eventActiveStatus)
  switch (eventActiveStatus) {
    case 'INITIAL':
      return (
        <div className="initial-active-event-container">
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
            className="registered-image"
          />
          <h3 className="description">
            You have already registered for the event
          </h3>
        </div>
      )
    case 'YET_TO_REGISTER':
      return (
        <div className="active-event-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="not-registered-image"
          />
          <p className="description-yet-to-register">
            A live performance brings so much to your relationship with dance.
            Seeing dance live cab often make you fall totally in love with this
            beautiful art from.
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
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="registrations-closed-image"
          />
          <h3 className="sub-heading">Registrations Are Closed Now!</h3>
          <p className="description">
            Stay tuned. We will reopen the registrations soon
          </p>
        </div>
      )
    default:
      return null
  }
}
export default ActiveEventRegistrationDetails
