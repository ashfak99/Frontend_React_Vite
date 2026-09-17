import React, { useState } from 'react';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'; // FaTwitter hata diya

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

const [loading, setLoading] = useState(false);
const [sent, setSent] = useState(false);

  // Yaha apni details daalo
  const myEmail = "ashfakalam8423@gmail.com";
  const myWhatsApp = "919934648423"; // Country code ke sath, bina '+' ke

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const { name, email, message } = formData;

  try {
    const response = await fetch("https://formspree.io/f/xbgljqrz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    });

    if (response.ok) {
      setFormData({ name: "", email: "", message: "" });
      setSent(true);

      // 3 second baad button wapas normal
      setTimeout(() => setSent(false), 3000);
    } else {
      alert("Something happend wrong");
    }
  } catch (error) {
    alert("Network error!");
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="contact" className="bg-[#0B1120] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-blue-400 font-semibold mb-3 bg-blue-900/30 border border-blue-800/50 px-3 py-1 rounded-full text-xs">
            Let's Work Together
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Have a Project in <span className="text-blue-500">Mind?</span>
          </h2>
          <p className="text-gray-400 text-sm">
            I'm always open to new opportunities, collaborations and interesting ideas.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* LEFT SIDE: Contact Info */}
          <div className="md:w-1/3 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#112240] border border-[#233554] rounded-full text-blue-500">
                <FaEnvelope size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium">{myEmail}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#112240] border border-[#233554] rounded-full text-blue-500">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="text-sm font-medium">Kolkata, West Bengal, India</p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-xs text-gray-500 mb-3">Follow Me</p>
              <div className="flex gap-3">
                {/* GitHub */}
                <a 
                  href="https://github.com/ashfak99" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-[#112240] border border-[#233554] rounded-full text-gray-400 hover:text-blue-500 hover:border-blue-500 transition"
                >
                  <FaGithub size={16} />
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/feed/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-[#112240] border border-[#233554] rounded-full text-gray-400 hover:text-blue-500 hover:border-blue-500 transition"
                >
                  <FaLinkedin size={16} />
                </a>
                
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/919934648423" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-[#112240] border border-[#233554] rounded-full text-gray-400 hover:text-blue-500 hover:border-blue-500 transition"
                >
                  <FaPaperPlane size={16} />
                </a>
                
                {/* Email */}
                <a 
                  href="mailto:ashfakalam8423@gmail.com" 
                  className="p-2 bg-[#112240] border border-[#233554] rounded-full text-gray-400 hover:text-blue-500 hover:border-blue-500 transition"
                >
                  <FaEnvelope size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="md:w-2/3 bg-[#112240] border border-[#233554] p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="John Doe"
                    className="w-full bg-[#0B1120] border border-[#233554] p-3 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="john@example.com"
                    className="w-full bg-[#0B1120] border border-[#233554] p-3 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-xs text-gray-400 mb-2">Your Message</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows="5" 
                  placeholder="Hello Ashfak, I would like to discuss..."
                  className="w-full bg-[#0B1120] border border-[#233554] p-3 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 transition resize-none"
                ></textarea>
              </div>
              
             <button
  type="submit"
  disabled={loading || sent}
  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
>
  {loading ? (
    "Sending..."
  ) : sent ? (
    "Message Sent ✅"
  ) : (
    <>
      Send Message <FaPaperPlane size={14} />
    </>
  )}
</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;