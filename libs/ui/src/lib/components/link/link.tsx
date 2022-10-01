import Link from "next/link"

export interface UiLinkProps {
    href: string,
    text: string
  }

function UiLink({href, text}:UiLinkProps) {
    return (
     
        <Link href={href}>
            {text}
        </Link>
    )
  }
  
  export default UiLink