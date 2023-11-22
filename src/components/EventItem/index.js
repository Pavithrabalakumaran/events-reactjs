import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, name, location, imageUrl} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEventButton = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button
        type="button"
        className="button-event"
        onClick={onClickEventButton}
      >
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
