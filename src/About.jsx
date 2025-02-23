import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6" data-aos="fade-down">
        Обо мне
      </h1>

      <section
        className="w-full max-w-3xl bg-gray-800 rounded-lg p-6 mb-8 shadow"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold mb-4">Кто я?</h2>
        <p className="text-gray-300 leading-relaxed">
          Привет! Я Ердаулет, мобильный разработчик и немного фронтенд. Мне
          нравится создавать удобные и красивые приложения, разбираться в новых
          технологиях и помогать людям с помощью кода.
        </p>
      </section>

      <section
        className="w-full max-w-3xl bg-gray-800 rounded-lg p-6 mb-8 shadow"
        data-aos="fade-left"
      >
        <h2 className="text-2xl font-semibold mb-4">Навыки</h2>
        <ul className="list-disc ml-6 text-gray-300 space-y-2">
          <li>Django</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Git</li>
          <li>SQL</li>
        </ul>
      </section>

      <section
        className="w-full max-w-3xl bg-gray-800 rounded-lg p-6 mb-8 shadow"
        data-aos="fade-right"
      >
        <h2 className="text-2xl font-semibold mb-4">Образование</h2>
        <div className="text-gray-300 space-y-4">
          <div>
            <h3 className="text-xl font-bold">
              Инновационный, технический колледж г. Алматы
            </h3>
            <p className="text-sm text-gray-400">2023 - 2025</p>
            <p>Второй курс. Разработчик Программного Обеспечения</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Академия ШАГ</h3>
            <p className="text-sm text-gray-400">2022 - настоящее время</p>
            <p>RPO 232.2</p>
          </div>
        </div>
      </section>

      <div className="mt-4 flex flex-col sm:flex-row gap-4">
        <a
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-center"
        >
          На главную
        </a>
        <Link
          to="/contact"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-center"
        >
          Контакты
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
