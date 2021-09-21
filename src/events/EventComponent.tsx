const EventComponent: React.FC = () => {
  
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  const onDragstart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event)
  }

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragstart} >
fsdfsd
      </div>
    </div>
  )
}

export default EventComponent;