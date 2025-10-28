export default function Die({value, isHeld}) {
    
  return (
    <section>
       <button style={isHeld ? { backgroundColor: "green" } : {}}>
    {value}
  </button>
    </section>
  )
}
