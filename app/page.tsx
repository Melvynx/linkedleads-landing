import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Star } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { Creator } from "@/components/Creator"

export default function IndexPage() {
  return (
    <div>
      <section className="container flex h-full items-center gap-6 pb-8 pt-6 max-lg:flex-col md:py-10">
        <div className="flex flex-1 flex-col items-start gap-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl ">
            Get{" "}
            <span className="inline-block bg-foreground px-1 py-2 text-background">
              infinite
            </span>{" "}
            leads from your <u>LinkedIn connections</u>!
          </h1>
          <div className="flex items-center gap-4 max-lg:flex-col lg:gap-8">
            <div className="flex">
              {Array.from({ length: 8 }).map((_, i) => (
                <Avatar key={i} className="-mr-4">
                  <AvatarFallback>{i + 1}</AvatarFallback>
                  <AvatarImage src={`/images/review/${(i % 4) + 1}.png`} />
                </Avatar>
              ))}
            </div>
            <div className="flex flex-col gap-0.5 text-yellow-500 dark:text-yellow-400">
              <p className="whitespace-nowrap font-extrabold">
                +500 LinkedIn user trust us
              </p>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <div
            className="dot-pattern absolute inset-0 -translate-x-4 translate-y-4"
            style={
              {
                "--dot-background": "hsl(var(--background))",
                "--dot-color": "hsl(var(--primary))",
              } as any
            }
          />
          <Image
            src="/images/linked-leads2.gif"
            width={500}
            height={300}
            className="relative h-auto w-full max-w-full"
            alt="presentation-gif"
          />
        </div>
      </section>
      <section className="container flex h-full gap-6 pb-8 pt-6 max-lg:flex-col md:py-10">
        <Card className="h-full flex-1">
          <CardHeader>
            <CardTitle>1. Install the extensions</CardTitle>
            <CardDescription>Easy install in one click, free.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-full flex-1">
          <CardHeader>
            <CardTitle>2. Open LinkedIn</CardTitle>
            <CardDescription>
              You will see that the extensions will be activated.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="h-full flex-1">
          <CardHeader>
            <CardTitle>3. Write your leads message</CardTitle>
            <CardDescription>
              A welcome message with a Call To Action or a question is the best
              way to start a conversation.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-full flex-1">
          <CardHeader>
            <CardTitle>4. See the magic happen</CardTitle>
            <CardDescription>
              Let the extensions running while you are doing other things. The
              extensions will accept the connection and send a message for you.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
      <section className="container flex h-full max-w-2xl flex-col items-center gap-4 pb-8 pt-6 text-center md:py-10">
        <Typography variant="h3">
          Every week, I get +100 connections...
        </Typography>
        <Image
          src="/images/linkedin-friend-count.png"
          alt="LinkedIn friend count"
          width={500}
          height={300}
          className="max-w-full lg:max-w-xl"
        />
        <Typography variant="h3">
          But I don't have the time to accept and send a message to everyone.
        </Typography>

        <Typography variant="large">
          1. Because the LinkedIn UI is awful
        </Typography>
        <Typography variant="large">
          2. Because it takes too much time
        </Typography>

        <Typography variant="h3">
          But the connection is a real opportunity to get new leads!
        </Typography>

        <Typography variant="h3">
          If you send a message with your lead magnet or a question, you will
          increase your chance to get a new customer!
        </Typography>
        <Image
          src="/images/leads-demo.png"
          alt="LinkedIn friend count"
          width={500}
          height={300}
          className="max-w-full lg:max-w-xl"
        />
        <Typography variant="small" className="italic text-muted-foreground">
          My email list is growing every time I run the extensions.
        </Typography>

        <Typography variant="h3">
          This automation makes me save <b>4 hours</b> per week and get new
          leads that get me <b>+$1000 per month</b>.
        </Typography>
      </section>
      <section
        id="pricing"
        className="container flex h-full flex-col items-center gap-6 pb-8 pt-6 md:py-10"
      >
        <Typography variant="h1" as="h2">
          Fair pricing.
        </Typography>
        <Card className="h-full flex-1">
          <CardHeader>
            <CardTitle>$50 - one-time</CardTitle>
            <CardDescription>
              Get access to the extensions for life and get all the updates.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Typography className="font-bold underline">
              Free trial of 1 day
            </Typography>
            <div className="flex flex-col gap-1">
              <p className="inline-flex items-center gap-1">
                <CheckCircle className="text-green-500" size={20} />
                <span>Infinite connection requests</span>
              </p>
              <p className="inline-flex items-center gap-1">
                <CheckCircle className="text-green-500" size={20} />
                <span>All future updates</span>
              </p>
              <p className="inline-flex items-center gap-1">
                <CheckCircle className="text-green-500" size={20} />
                <span>Custom invite message</span>
              </p>
              <p className="inline-flex items-center gap-1">
                <CheckCircle className="text-green-500" size={20} />
                <span>7 days guarantee</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
      <section
        id="pricing"
        className="container flex h-full flex-col items-center gap-6 pb-8 pt-6 md:py-10"
      >
        <Typography variant="h1" as="h2">
          Try for free. Now.
        </Typography>
        <Link
          href="https://chromewebstore.google.com/detail/linkedleads/nafbodbndkefmeklhkefodebhpgllegd"
          className={cn(
            buttonVariants({ size: "lg" }),
            "px-8 py-6 text-xl font-bold text-foreground"
          )}
        >
          Install extensions
        </Link>
      </section>
      <footer className="container flex items-center justify-center py-20">
        <Creator />
      </footer>
    </div>
  )
}
