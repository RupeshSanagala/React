// function FuncComp(){
//     return  <h2>This is Function component</h2>
// }
const FuncComp = (props) =>{
    return (
        <>
            <h2>This is Function component</h2>
            <p>My name is <strong>{props.fname}</strong>, I am: <strong>{props.post}</strong></p>
        </>
    )
}
export default FuncComp;
  