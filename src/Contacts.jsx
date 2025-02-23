import { useState } from "react";
import { Link } from "react-router-dom";

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Имя обязательно";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email обязателен";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Некорректный email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Сообщение обязательно";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Отправленные данные:", formData);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="min-h-screen text-white py-10 flex flex-col items-center">
      <div className="bg-gray-800 rounded-lg shadow p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Контакты</h1>

        {submitted && (
          <div className="bg-green-500 text-white p-3 rounded mb-4 text-center">
            Ваше сообщение отправлено!
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Имя:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-1">
              Сообщение:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors"
          >
            Отправить
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="mb-2">Следите за мной в социальных сетях:</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/about" className="text-green-400 hover:underline">
            Назад
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
