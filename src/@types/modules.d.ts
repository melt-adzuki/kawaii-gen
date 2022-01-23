declare module "rgt" {
    interface Props {
        dir: "left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top"
        from: string
        to: string
        children: React.ReactNode
    }

    const Gradient: React.VFC<Props>

    export default Gradient
}
