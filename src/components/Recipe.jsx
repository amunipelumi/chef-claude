import Markdown from "react-markdown"

export default function (props) {
  return (
    <section>
      <h2>Suggested recipe:</h2>
      <Markdown>{props.recipe}</Markdown>
    </section>
  )
}
