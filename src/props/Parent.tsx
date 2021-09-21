import { Child } from "./Child";

const Parent = () => {
  return <Child color="red"  onClick={() => console.log('Hi there')} />
}

export default Parent