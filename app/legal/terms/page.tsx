import { Layout, LayoutContent } from '@/components/page/layout';
import { Typography } from '@/components/ui/typography';
import { MDXRemote } from 'next-mdx-remote/rsc';

const markdown = `Privacy Markdown`;

export default function page() {
  return (
    <div>
      <div className="w-full bg-card flex items-center justify-center p-8 lg:p-12">
        <Typography variant="h1">Terms</Typography>
      </div>
      <Layout>
        <LayoutContent className="prose dark:prose-invert mb-8">
          <MDXRemote source={markdown} />
        </LayoutContent>
      </Layout>
    </div>
  );
}
