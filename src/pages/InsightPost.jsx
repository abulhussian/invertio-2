"use client"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Calendar, User, Clock, ArrowLeft, Bookmark, Twitter, Linkedin, Facebook } from "lucide-react"
import Section from "../components/Section"
import MotionWrapper from "../components/MotionWrapper"
import posts from "../data/posts.json"

const InsightPost = () => {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h1>
          <Link to="/insights" className="text-blue-600 hover:text-blue-700">
            ← Back to Insights
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = posts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((tag) => post.tags.includes(tag))))
    .slice(0, 3)

  const shareUrl = window.location.href
  const shareTitle = post.title

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Back Navigation */}
      <Section className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto">
          <MotionWrapper initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
          </MotionWrapper>
        </div>
      </Section>

      {/* Article Header */}
      <Section className="pb-8">
        <div className="max-w-4xl mx-auto">
          <MotionWrapper initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 pb-8 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 font-medium">Share:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    window.open(
                      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
                      "_blank",
                    )
                  }
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
                      "_blank",
                    )
                  }
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
                      "_blank",
                    )
                  }
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Featured Image */}
      <Section className="pb-12">
        <div className="max-w-5xl mx-auto">
          <MotionWrapper
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Article Content */}
      <Section className="pb-16">
        <div className="max-w-4xl mx-auto">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
                <p>
                  In today's rapidly evolving technological landscape, businesses are constantly seeking innovative
                  solutions to stay competitive and drive growth. This comprehensive analysis explores the latest
                  trends, challenges, and opportunities that are shaping the future of enterprise technology.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                  The Digital Transformation Imperative
                </h2>

                <p>
                  Digital transformation is no longer a luxury—it's a necessity for survival in the modern business
                  environment. Organizations that fail to adapt to digital-first approaches risk being left behind by
                  more agile competitors who leverage technology to enhance customer experiences, streamline operations,
                  and unlock new revenue streams.
                </p>

                <blockquote className="border-l-4 border-blue-500 pl-6 italic text-xl text-gray-600 dark:text-gray-400 my-8">
                  "The companies that will thrive in the next decade are those that view technology not as a cost
                  center, but as a strategic enabler of business transformation."
                </blockquote>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                  Key Technology Trends to Watch
                </h2>

                <p>
                  Several emerging technologies are converging to create unprecedented opportunities for innovation:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Artificial Intelligence and Machine Learning:</strong> Automating complex decision-making
                    processes and enabling predictive analytics
                  </li>
                  <li>
                    <strong>Cloud-Native Architecture:</strong> Providing scalability, flexibility, and
                    cost-effectiveness for modern applications
                  </li>
                  <li>
                    <strong>Edge Computing:</strong> Bringing processing power closer to data sources for reduced
                    latency and improved performance
                  </li>
                  <li>
                    <strong>Internet of Things (IoT):</strong> Connecting physical devices to create intelligent,
                    responsive environments
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                  Implementation Strategies for Success
                </h2>

                <p>
                  Successful technology adoption requires a strategic approach that considers both technical and
                  organizational factors. Companies must invest in change management, employee training, and robust
                  security measures to ensure smooth transitions and maximize return on investment.
                </p>

                <p>
                  The future belongs to organizations that can effectively balance innovation with stability, embracing
                  new technologies while maintaining operational excellence. By staying informed about emerging trends
                  and investing in the right solutions, businesses can position themselves for long-term success in an
                  increasingly digital world.
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Tags */}
      <Section className="pb-12">
        <div className="max-w-4xl mx-auto">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section className="pb-16 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Related Articles</h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <Link to={`/insights/${relatedPost.slug}`} className="group block">
                      <article className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                        <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                          <img
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        <div className="p-6">
                          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{relatedPost.category}</div>

                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>

                          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </Section>
      )}
    </div>
  )
}

export default InsightPost
