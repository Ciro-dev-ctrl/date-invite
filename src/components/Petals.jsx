export default function Petals() {

  const petals = Array.from({

    length: 20,

  });

  return (

    <>

      {petals.map((_, i) => (

        <span

          key={i}

          className="petal"

          style={{

            left:

              Math.random() * 100 +

              "%",

            animationDelay:

              Math.random() * 10 +

              "s",

            animationDuration:

              8 +

              Math.random() * 10 +

              "s",

          }}

        >

          🌸

        </span>

      ))}

    </>

  );

}