import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'

export default function AboutPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="About">
          {/* prettier-ignore */}
          <p>
          Bitin are a startup for all crypto lovers
          </p>
          <p>
          We focuses on developing and implementing innovative technologies and solutions within the field of cryptocurrency.
          </p>
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
