// TODO : S'inspirer du floater de v0.dev pour faire celui-ci

import Image from "next/image"
import Link from "next/link"

export const FloatingLegalFooter = () => {
  return (
    <div className="absolute bottom-2 right-2 flex items-center gap-2">
      <Link
        className="text-xs text-muted-foreground hover:underline"
        href="/legal/privacy"
      >
        Privacy
      </Link>
      <Link
        className="text-xs text-muted-foreground hover:underline"
        href="/legal/terms"
      >
        Terms
      </Link>
      <Image src={"/images/logo.png"} width={12} height={12} alt="app icon" />
    </div>
  )
}