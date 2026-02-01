export default function SelectRegisterType({ onSelect }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <img
              alt="BNI Logo"
              className="h-18 w-auto"
              src="/src/assets/bni-logo-transparent.png"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            ¿Cómo deseas registrarte?
          </h1>
          <p className="text-lg text-slate-600">
            Selecciona la opción que mejor se adapte a tu situación
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Invitado Card */}
          <button
            onClick={() => onSelect("invitado")}
            className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-10 text-left transition-all hover:border-red-600 hover:shadow-2xl hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-red-600/30"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-600/5 to-transparent rounded-bl-full transition-all group-hover:scale-150 group-hover:from-red-600/10"></div>

            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 group-hover:bg-red-100 transition-all group-hover:scale-110">
                <svg
                  className="w-9 h-9 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                Soy Invitado
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Primera vez en BNI? Regístrate como invitado para conocer
                nuestra red y comenzar tu camino.
              </p>

              <div className="flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Comenzar registro</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </button>

          {/* Renovación Card */}
          <button
            disabled
            onClick={() => onSelect("renovacion")}
            className="group relative overflow-hidden rounded-2xl disabled:bg-gray-200 border-2 border-slate-200 bg-white p-10 text-left transition-all hover:border-red-600 hover:shadow-2xl hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-red-600/30"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-600/5 to-transparent rounded-bl-full transition-all group-hover:scale-150 group-hover:from-red-600/10"></div>

            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 group-hover:bg-red-100 transition-all group-hover:scale-110">
                <svg
                  className="w-9 h-9 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                Soy Networker
              </h3>

              <p>
                <strong>(Seccion de renovaciones aún en desarrollo.)</strong>
              </p>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Ya eres parte de BNI. Renueva tu membresía y continúa creciendo
                con nosotros.
              </p>

              <div className="flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Renovar ahora</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* Help Text */}
        {/* <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            ¿Necesitas ayuda?{" "}
            <a href="#" className="text-red-600 font-medium hover:underline">
              Contacta con soporte
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
}
