"use client"
import { useState } from "react"
import { Link } from "react-router-dom"
import { MapPin, Clock, DollarSign, Users, Search, Filter, Briefcase } from "lucide-react"
import Section from "../components/Section"
import MotionWrapper from "../components/MotionWrapper"
import jobs from "../data/jobs.json"

const JobCard = ({ job, index }) => {
  return (
    <MotionWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/careers/${job.id}`}>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {job.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">{job.department}</p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
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
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{job.description}</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Posted {job.posted}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {job.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
              >
                {skill}
              </span>
            ))}
            {job.skills.length > 3 && (
              <span className="text-gray-500 dark:text-gray-400 text-xs">+{job.skills.length - 3} more</span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <Users className="w-4 h-4" />
              <span className="text-sm">{job.applicants} applicants</span>
            </div>
            <div className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">View Details →</div>
          </div>
        </div>
      </Link>
    </MotionWrapper>
  )
}

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [selectedType, setSelectedType] = useState("All")

  const departments = ["All", ...new Set(jobs.map((job) => job.department))]
  const types = ["All", ...new Set(jobs.map((job) => job.type))]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment
    const matchesType = selectedType === "All" || job.type === selectedType
    return matchesSearch && matchesDepartment && matchesType
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <MotionWrapper initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our <span className="text-blue-600">Team</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Build the future of technology with passionate innovators and industry leaders
            </p>
            <div className="flex items-center justify-center gap-8 text-gray-600 dark:text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{jobs.length}+</div>
                <div className="text-sm">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm">Countries</div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Search and Filters */}
      <Section className="pb-8">
        <div className="max-w-6xl mx-auto">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search jobs, skills, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                {/* Department Filter */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none min-w-[180px]"
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Type Filter */}
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none min-w-[150px]"
                  >
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredJobs.length} position{filteredJobs.length !== 1 ? "s" : ""}
                {searchTerm && ` for "${searchTerm}"`}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Section>

      {/* Job Listings */}
      <Section className="pb-16">
        <div className="max-w-6xl mx-auto">
          {filteredJobs.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </div>
          ) : (
            <MotionWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <div className="text-gray-500 dark:text-gray-400">
                <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">No positions found</h3>
                <p>Try adjusting your search terms or filters</p>
              </div>
            </MotionWrapper>
          )}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pb-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Don't see the right role?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in
              mind for future opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
          </MotionWrapper>
        </div>
      </Section>
    </div>
  )
}

export default Careers
