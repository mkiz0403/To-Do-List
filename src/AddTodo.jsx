export default function addTodo(){

  function count1(){
    console.log(2)
  }

  return(
    <>
    <div>
      <input className="inputText" type="text" />
      <button className="addTodo" onClick={count1}> + Add Todo </button>
    </div>
    </>
  )
}