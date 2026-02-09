import LogoIcon from "./icons/logo";

export function Logo() {
    return (
        <div className="bg-primary p-1 rounded-full mr-2">
            <LogoIcon width={30} height={30} fill="white" />
        </div>
    )
}