
type Props = {
    title: string
}

export default function({ title }: Props) {
    return (
        <p className="text-4xl relative after:absolute after:-bottom-1 after:left-0 after:w-24 after:h-[1px] after:bg-color5">
            {title}
        </p>
    )
}