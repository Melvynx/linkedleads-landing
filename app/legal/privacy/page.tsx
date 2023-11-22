import { MDXRemote } from "next-mdx-remote/rsc"

import { Typography } from "@/components/ui/typography"
import { Layout, LayoutContent } from "@/components/layout"

const markdown = `Privacy Markdown`

export default function page() {
  return (
    <div>
      <div className="flex w-full items-center justify-center bg-card p-8 lg:p-12">
        <Typography variant="h1">Privacy</Typography>
      </div>
      <Layout>
        <LayoutContent className="prose dark:prose-invert mb-8">
          <MDXRemote source={markdown} />
        </LayoutContent>
      </Layout>
    </div>
  )
}
