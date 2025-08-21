"use client"
import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { ArrowLeft, MapPin, Clock, DollarSign, Users, Calendar, Send, CheckCircle } from "lucide-react"
import Section from "../components/Section"
import MotionWrapper from "../components/MotionWrapper"
import jobs from "../data/jobs.json"

const Job = () => {
  const { id } = useParams()
  const job = jobs.find((j) => j.id === Number.parseInt(id))
  const [isApplying, setIsApplying] = useState(false)
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
    portfolio: "",
  })

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Job not found</h1>
          <Link to="/careers" className="text-blue-600 hover:text-blue-700">
            ← Back to Careers
          </Link>
        </div>
      </div>
    )
  }

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setApplicationSubmitted(true)
      setIsApplying(false)
    }, 1000)
  }

  const relatedJobs = jobs
    .filter((j) => j.id !== job.id && (j.department === job.department || j.location === job.location))
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Back Navigation */}
      <Section className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto">
          <MotionWrapper initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Careers
            </Link>
          </MotionWrapper>
        </div>
      </Section>

      {/* Job Header */}
      <Section className="pb-12">
        <div className="max-w-4xl mx-auto">
          <MotionWrapper initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      {job.department}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        job.type === "Full-time"
                          ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                          : job.type === "Part-time"
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                            : "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                      }`}
                    >
                      {job.type}
                    </span>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{job.title}</h1>

                  <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>Posted {job.posted}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span>{job.applicants} applicants</span>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 dark:text-gray-400">{job.description}</p>
                </div>

                <div className="lg:ml-8">
                  {!applicationSubmitted ? (
                    <button
                      onClick={() => setIsApplying(true)}
                      className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Apply Now
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                      <CheckCircle className="w-5 h-5" />
                      Application Submitted
                    </div>
                  )}
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Details */}
          <div className="lg:col-span-2 space-y-8">
            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Job Description</h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    We are seeking a talented {job.title} to join our dynamic team. This role offers an exciting
                    opportunity to work on cutting-edge projects and contribute to innovative solutions that impact
                    millions of users worldwide.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Responsibilities</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                    <li>Design and develop scalable software solutions</li>
                    <li>Collaborate with cross-functional teams to deliver high-quality products</li>
                    <li>Participate in code reviews and maintain coding standards</li>
                    <li>Troubleshoot and debug applications to optimize performance</li>
                    <li>Stay updated with emerging technologies and industry trends</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Requirements</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                    <li>Bachelor's degree in Computer Science or related field</li>
                    <li>3+ years of experience in software development</li>
                    <li>Strong problem-solving and analytical skills</li>
                    <li>Excellent communication and teamwork abilities</li>
                    <li>Experience with agile development methodologies</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What We Offer</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                    <li>Competitive salary and equity package</li>
                    <li>Comprehensive health, dental, and vision insurance</li>
                    <li>Flexible work arrangements and remote options</li>
                    <li>Professional development opportunities</li>
                    <li>Collaborative and inclusive work environment</li>
                  </ul>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Required Skills */}
            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </MotionWrapper>

            {/* Job Info */}
            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Job Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Posted</div>
                      <div className="font-medium text-gray-900 dark:text-white">{job.posted}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Applicants</div>
                      <div className="font-medium text-gray-900 dark:text-white">{job.applicants}</div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {isApplying && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <MotionWrapper
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Apply for {job.title}</h2>
              <button
                onClick={() => setIsApplying(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Resume *</label>
                <input
                  type="file"
                  name="resume"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Portfolio URL</label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder="https://your-portfolio.com"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cover Letter</label>
                <textarea
                  name="coverLetter"
                  rows={4}
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  placeholder="Tell us why you're interested in this position..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setIsApplying(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Application
                </button>
              </div>
            </form>
          </MotionWrapper>
        </div>
      )}

      {/* Related Jobs */}
      {relatedJobs.length > 0 && (
        <Section className="pb-16 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Related Positions</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedJobs.map((relatedJob, index) => (
                  <Link key={relatedJob.id} to={`/careers/${relatedJob.id}`} className="group">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {relatedJob.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{relatedJob.department}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                        <span>{relatedJob.location}</span>
                        <span>{relatedJob.type}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </Section>
      )}
    </div>
  )
}

export default Job
