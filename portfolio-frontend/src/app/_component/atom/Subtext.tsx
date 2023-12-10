import { ComponentProps } from "react";

type Props = {

} & ComponentProps<"p">;

export default function({ children, ...props }: Props) {
    return (
        <p className="text-xs text-color2">{children}</p>
    )
}