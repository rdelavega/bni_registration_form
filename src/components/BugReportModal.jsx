import React, { useState } from "react";

export default function BugReportModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    tipo: "",
    prioridad: "",
    descripcion: "",
    pasos: "",
    navegador: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.tipo || !formData.descripcion) {
      alert("Por favor completa los campos requeridos");
      return;
    }
    console.log("Bug report submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        nombre: "",
        email: "",
        tipo: "",
        prioridad: "",
        descripcion: "",
        pasos: "",
        navegador: "",
      });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        className="
    relative
    w-full
    sm:max-w-3xl
    max-h-[90svh]
    bg-white
    overflow-hidden
    rounded-t-2xl sm:rounded-2xl
    animate-slideUp
  "
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-slate-900 to-red-600 px-5 py-5 sm:px-8 sm:py-8">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-1"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl sm:text-3xl font-bold text-white">
                Reportar un Problema
              </h2>
              <p className="text-white/80 mt-1">
                Ayúdanos a mejorar tu experiencia
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                ¡Reporte Enviado!
              </h3>
              <p className="text-slate-600">
                Gracias por ayudarnos a mejorar. Revisaremos tu reporte pronto.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {/* Info Banner */}
              <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
                <div className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-blue-800">
                    Por favor describe el problema con el mayor detalle posible.
                    Esto nos ayudará a resolverlo más rápido.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Nombre{" "}
                    <span className="text-slate-400 font-normal">
                      (Opcional)
                    </span>
                  </label>
                  <div className="relative">
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Correo Electrónico <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Bug Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Tipo de Problema <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    <select
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-10 text-sm outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    >
                      <option value="">Selecciona el tipo</option>
                      <option value="error">Error en la página</option>
                      <option value="visual">Problema visual</option>
                      <option value="funcionalidad">
                        Funcionalidad no trabaja
                      </option>
                      <option value="rendimiento">
                        Problema de rendimiento
                      </option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Prioridad{" "}
                    <span className="text-slate-400 font-normal">
                      (Opcional)
                    </span>
                  </label>
                  <div className="relative">
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <select
                      name="prioridad"
                      value={formData.prioridad}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-10 text-sm outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    >
                      <option value="">Selecciona la prioridad</option>
                      <option value="baja">Baja</option>
                      <option value="media">Media</option>
                      <option value="alta">Alta</option>
                      <option value="critica">Crítica</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Navegador */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">
                  Navegador{" "}
                  <span className="text-slate-400 font-normal">(Opcional)</span>
                </label>
                <div className="relative">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <input
                    type="text"
                    name="navegador"
                    value={formData.navegador}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    placeholder="Ej. Chrome 120, Safari 17, Firefox 121"
                  />
                </div>
              </div>

              {/* Descripción */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">
                  Descripción del Problema{" "}
                  <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600 resize-none"
                  placeholder="Describe el problema que encontraste..."
                />
              </div>

              {/* Pasos para Reproducir */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">
                  Pasos para Reproducir{" "}
                  <span className="text-slate-400 font-normal">(Opcional)</span>
                </label>
                <textarea
                  name="pasos"
                  value={formData.pasos}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3.5 px-4 text-sm outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600 resize-none"
                  placeholder="1. Fui a...&#10;2. Hice clic en...&#10;3. Entonces vi..."
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {!isSubmitted && (
          <div className="sticky bottom-0 border-t border-slate-200 bg-slate-50 px-5 py-4 sm:px-8 sm:py-6">
            <div className="flex gap-4 justify-end">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-lg border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-all focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-3 rounded-lg bg-red-600 text-white font-semibold shadow-lg shadow-red-600/25 hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-red-600/30"
              >
                Enviar Reporte
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

// Ejemplo de uso del modal
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          Sistema de Registro BNI
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 hover:-translate-y-0.5 transition-all"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          Reportar un Problema
        </button>
      </div>

      <BugReportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
