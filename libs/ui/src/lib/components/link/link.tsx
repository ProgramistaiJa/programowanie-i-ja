import Link from "next/link"

export interface UiLinkProps {
    href: string,
    text: string
  }

function UiLink({href, text}:UiLinkProps) {
    return (
     
        <Link href={href}>
            <a>{text}</a>
        </Link>
    )
  }
  
  export default UiLink