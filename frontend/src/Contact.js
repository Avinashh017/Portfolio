import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        form
      );
      alert(res.data.message);
    } catch (err) {
      console.log(err);
      alert("Error sending message");
    }
  };

  return (
    <div id="contact" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input
          className="p-2 w-64 text-black"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="p-2 w-64 text-black"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          className="p-2 w-64 text-black"
          placeholder="Message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button className="bg-blue-500 px-6 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;