import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  NMPERSONALTRAINER
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  "Resultados reales, planes reales. Todo pensado para vos."
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="bg-white text-blue-700 font-medium px-6 py-3 rounded-md hover:bg-blue-50 transition">
                  Ver Planes
                </button>
                <button className="border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white/20 transition">
                  Contacto
                </button>
              </div>
            </div>
            <div className="mx-auto lg:mr-0">
              <img
                alt="Personal Trainer"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                src="/placeholder.svg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="about">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sobre Mí
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Soy Ignacio Martinez, Personal Trainer especializado en
                transformaciones físicas y preparación para competidores. Con
                más de 10 años de experiencia, he ayudado a cientos de personas
                a alcanzar sus objetivos de forma saludable y sostenible.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              alt="Ignacio Martinez"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              src="/placeholder.svg"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Formación Profesional</h3>
                    <p className="text-gray-500">
                      Licenciado en Educación Física, especializado en
                      entrenamiento de fuerza y nutrición deportiva.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Experiencia</h3>
                    <p className="text-gray-500">
                      Más de 10 años trabajando con atletas de todos los
                      niveles, desde principiantes hasta competidores
                      profesionales.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Metodología</h3>
                    <p className="text-gray-500">
                      Planes personalizados basados en evidencia científica,
                      adaptados a tus objetivos y necesidades específicas.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Listo para transformar tu físico?
              </h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comienza hoy mismo tu camino hacia un cuerpo más fuerte,
                saludable y estético.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-md hover:bg-blue-50 transition">
                Contactar
              </button>
              <button className="border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white/20 transition">
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
