export default function Die({value, isHeld, hold}) {
  const styles = {
    backgroundColor: isHeld ? "green" : "white"
  }
    
  return (
    <section>
      <button 
      style={styles}
      onClick = {hold}
    >{value}
  </button>
    </section>
  )
}
