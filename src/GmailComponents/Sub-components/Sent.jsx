
function Sent(){
 

  let promise_example = () =>{
    let countVelue=new Promise(function(resolve,reject){
      resolve("promise resolve")
      // reject("promise resolve")
    });
    // console.log("example==>",countVelue)
  }


    return(
<>
<h1>Sent mail</h1>
<button onClick={()=>promise_example()}>Click me</button>
</>
    );
}
export default Sent;