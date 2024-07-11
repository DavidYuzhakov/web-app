export function CreditNum ({ number }: { number: string}) {
  return (
    <div className="credit-num">
      {number.split('').map((char, i) => (
        <div key={i} className="credit__num-container">
          <div className="credit-number">{char}</div>
          <div className="credit-shadow">{char}</div>
        </div>
      ))}
    </div>
  )
}