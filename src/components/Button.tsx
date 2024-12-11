
type ButtonProps = {
    el: "button"
} 

type AnchorProps = {
    el: "anchor"
}

export default function Button(props: ButtonProps | AnchorProps) {
    return <a>Click me</a>;

    return <button>Click me</button>;
}
