/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export const Creator = () => {
  return (
    <div className="flex w-fit items-center gap-2 rounded-full border bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-3 py-2  font-bold transition-all hover:brightness-110">
      <img
        className="h-12 w-12 rounded-full border border-gray-500/50"
        src="https://melvynx.com/images/me/twitter-en.jpg"
        alt="my face"
      />
      <div className="flex flex-col gap-0">
        <p className="text-lg">
          Made by{" "}
          <Link
            className="font-extrabold text-blue-500 hover:underline"
            href="https://melvynx.com"
          >
            Melvynx
          </Link>
        </p>
        <Link
          href="https://twitter.com/melvyn_me"
          className="text-xs text-muted-foreground transition-colors hover:text-foreground hover:underline"
        >
          Follow me on Twitter
        </Link>
      </div>
    </div>
  )
}
