import Form from "./Form"

export default function Contact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-20">
        <h1 className="font-title text-5xl md:text-7xl font-bold py-8 text-center">
          Let&apos;s chat
        </h1>
      </div>
      <div className="relative z-10 p-2 md:p-8 max-w-6xl mx-auto">
        <hr />
        <br />
        <p className="font-light text-center text-xl">Get in touch today!</p>
        <Form />
      </div>
    </section>
  )
}
