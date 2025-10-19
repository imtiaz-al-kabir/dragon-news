const jobOpenings = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "We’re looking for a skilled React developer to join our growing frontend team.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    location: "Remote",
    type: "Full-time",
    description:
      "Help design scalable backend systems using Node.js and Express.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Dhaka, Bangladesh",
    type: "Contract",
    description:
      "Work closely with product teams to design intuitive, delightful user experiences.",
  },
];

const Career = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Build Your Career With Us
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Join a passionate team driving innovation, creativity, and growth.
        </p>
      </section>

      {/* WHY JOIN US */}
      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Why Join Our Team?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Growth & Learning</h3>
            <p>
              We invest in your skills with workshops, mentorship, and projects
              that challenge you.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">
              Collaborative Culture
            </h3>
            <p>
              Work in a team that values openness, respect, and shared success.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
            <p>
              Flexible schedules, hybrid options, and an environment that
              respects your time.
            </p>
          </div>
        </div>
      </section>

      {/* JOB OPENINGS */}
      <section className="py-16 px-6 bg-base-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Current Openings
        </h2>
        <div className="max-w-4xl mx-auto grid gap-8">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {job.location} • {job.type}
              </p>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <button className="btn btn-primary">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">How to Apply</h2>
        <p className="text-gray-700 mb-6">
          Interested in joining our team? Send your resume and portfolio to:
        </p>
        <p className="font-semibold text-primary text-lg">
          careers@yourcompany.com
        </p>
      </section>
    </div>
  );
};

export default Career;
