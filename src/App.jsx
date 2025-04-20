import React from 'react'
import Gallery from './Describing the UI/Gallery'
import Render from './Importing and Exporting Components/RenderGallery'
import Car from './Class Components/Car'
import { RedCar, Model } from './Class Components/Car'
import RenderClock from './Importing and Exporting Components/RenderClock'
import CheckBox from './Importing and Exporting Components/CheckBox'
import ConditionalRender from './Conditional Rendering/ConditionalRender'
import Lists, { Poem } from './Rendering Lists/Lists'
import { Recipes } from './Rendering Lists/Lists'
import "./App.css"
import RespondingToEvents from './Adding Interactivity/RespondingToEvents'
import EventPropagation, { ChangeColor } from './Adding Interactivity/EventPropagation'
import StateInteractivity from './Adding Interactivity/StateInteractivity'
import UseState from './State/UseState'
import SeriesOfState from './State/SeriesOfState'
import MovingDot from './State/Updating Objects/MovingDot'
import Canvas from './State/Updating Objects/Canvas'
import Arrays from './State/Updating Arrays/Arrays'
import RemovingFromArray from './State/Updating Arrays/RemovingFromArray'
import ShapeEditor from './State/Updating Arrays/TransformingArrays'
import List from './State/Updating Arrays/Inserting'
import ListB from './State/Updating Arrays/OtherChanges'
import BucketList from './State/Updating Arrays/UpdatingObjectsInsideArrays'
import Challenges from './State/Updating Arrays/Challenges'
import Form from './State/Managing State/Form'
import FormB from './State/Managing State/StateStructure'
import Accordion from './State/Managing State/StateBetweenComponents'

function Card({ children }) {
  return (
    <div className='card'>
      {children}
    </div>
  )
}

function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  )
}

function Avatar({ person, size }) {
  return (
    <img
      className='avatar'
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

const App = () => {
  const takeShot = (g, e) => {
    alert(e.type)
  }
  return (
    <div>
      {/* <Gallery />
      <Render />
      <Car />
      <RedCar color="black" />
      <Model model="Mercedes" /> */}
      {/* <Card>
        <Avatar
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2"
          }}
        />
      </Card>
      <RenderClock />
      <button onClick={(e) => takeShot("Siuuu", e)}>Take a shot</button> */}
      {/* <CheckBox name={"my checkbox"} /> */}
      {/* <ConditionalRender /> */}
      {/* <Lists /> */}
      {/* <Recipes /> */}
      {/* <Poem /> */}
      {/* <RespondingToEvents /> */}
      {/* <EventPropagation /> */}
      {/* <ChangeColor /> */}
      {/* <StateInteractivity /> */}
      {/* <StateInteractivity /> */}
      {/* <UseState /> */}
      {/* <SeriesOfState /> */}
      {/* <MovingDot /> */}
      {/* <Canvas /> */}
      {/* <Arrays /> */}
      {/* <RemovingFromArray /> */}
      {/* <ShapeEditor /> */}
      {/* <List /> */}
      {/* <ListB /> */}
      {/* <BucketList /> */}
      {/* <Challenges /> */}
      {/* <Form /> */}
      {/* <FormB /> */}
      <Accordion />
    </div>
  )
}

export default App