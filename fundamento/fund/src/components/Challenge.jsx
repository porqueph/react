const Challenge = () => {

    
const handleSomar =() => {
    console.log(value1 + value2)
}
var value1 = 1;
var value2 = 2;
return (
    <>
    <h2>Challenge</h2>
    <p>{value1}</p>
    <p>{value2}</p>
    <button onClick={handleSomar}>Somar</button>
    </>
)

}

export default Challenge

