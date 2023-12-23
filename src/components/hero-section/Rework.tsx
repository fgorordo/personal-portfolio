import backgroundStyles from "./background.module.css"

export const Rework = () => {
  return (
    <section className={`px-24 pt-24 pb-8 ${backgroundStyles.background}`}>
        <h1 className="text-5xl text-headings"><span className="text-6xl">Hola,</span><br /> mi nombre es <span className="font-bold text-primary">Fernando</span></h1>
    </section>
  )
}
