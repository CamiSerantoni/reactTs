import { Component, ComponentPropsWithoutRef } from "react";

type ButtonProps = {
    el: "button"
} & ComponentPropsWithoutRef<'button'>; 

type AnchorProps = {
    el: "anchor"
} & ComponentPropsWithoutRef<'a'>;

export default function Button(props: ButtonProps | AnchorProps) {
    // const { el,...otherProps } = props;

    if(props.el === "anchor"){
        return <a className="button" {...props}>Click me</a>;
    }
    
    return <button className="button" {...props}>Click me</button>;
}
