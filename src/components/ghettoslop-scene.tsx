type SceneProps = { hoodSrc: string; gangSrc: string };

export function GhettoslopScene({ hoodSrc, gangSrc }: SceneProps) {
  return (
    <main className="slop-scene">
      <img className="slop-street" src={hoodSrc} alt="A brick-lined neighborhood street" />
      <div className="slop-shade" aria-hidden="true" />
      <header className="slop-heading">
        <h1 data-text="GHETTOSLOP">GHETTOSLOP</h1>
      </header>
      <div className="slop-gang-stage">
        <img className="slop-gang" src={gangSrc} alt="The five members of GHETTOSLOP" />
      </div>
      <footer className="slop-contact">
        <a href="mailto:ghettoslop@xtinct.sbs">email us at <span>ghettoslop@xtinct.sbs</span></a>
      </footer>
    </main>
  );
}