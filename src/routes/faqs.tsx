import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'

export default function FaqsPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="FAQ's">
          <p>FAQ content here.</p>
          <details
            className="mt-4 block rounded-sm border px-4 open:border-primary-400 hover:border-primary-300"
            open
          >
            
          </details>
        </ArticleContent>

        <ArticleMedia>
          <img
            alt="Lorem Picsum"
            className="mx-auto lg:aspect-[5/7] lg:w-full"
            width="420"
            height="640"
            src="https://picsum.photos/420/640?grayscale"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
