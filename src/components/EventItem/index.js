import './index.css'

// Write your code here
const EventItem = props => {
  const {eventsDetails, eventRegistration} = props
  const {imageUrl, name, location, id} = eventsDetails
  const onClickEvent = () => {
    eventRegistration(id)
  }
  return (
    <li className="event-item">
      <button className="button" type="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}
export default EventItem
