const teamMembers = [
  {
    id: 1,
    name: "Imtiaz Kabir",
    role: "Founder & CEO",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    name: "Laila Rahman",
    role: "Chief Technology Officer",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 3,
    name: "Omar Faruk",
    role: "Lead Designer",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We are a passionate team dedicated to building meaningful digital
          experiences that make a real impact.
        </p>
      </section>

      {/* COMPANY STORY */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in 2020, our company started with a small group of innovators
          who believed in the power of technology to transform businesses. Over
          the years, we’ve grown into a trusted brand serving clients globally,
          yet we remain driven by creativity, collaboration, and care.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 px-6 bg-base-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="p-8 bg-white shadow rounded-2xl">
            <h3 className="text-2xl font-semibold mb-3 text-primary">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To empower individuals and businesses with cutting-edge digital
              tools that drive innovation, growth, and positive change.
            </p>
          </div>
          <div className="p-8 bg-white shadow rounded-2xl">
            <h3 className="text-2xl font-semibold mb-3 text-secondary">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To be a global leader in technology solutions — where creativity
              meets reliability, and innovation meets human touch.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
