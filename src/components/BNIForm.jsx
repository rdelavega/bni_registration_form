import React, { useState } from "react";
import Spinner from "./Spinner";
import BugReportModal from "./BugReportModal";

export default function BNIYucatanRegistro({ registerType }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    giro: "",
    capitulo: "",
    periodo: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.phone ||
      !formData.giro ||
      !formData.capitulo ||
      !formData.periodo
    ) {
      alert("Por favor completa todos los campos requeridos");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      if (registerType === "invitado") {
        const response = await fetch(
          "http://localhost:3001/api/bni/v1/invitado",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          },
        );
        if (!response.ok) {
          setError("Algo salió mal en el servidor");
        }
        const data = await response.json();
        console.log(data);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } else {
        const response = await fetch(
          "http://localhost:3001/api/bni/v1/renovacion",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          },
        );
        if (!response.ok) {
          setError("Algo salió mal en el servidor");
        }
        const data = await response.json();
        console.log(data);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (err) {
      setError(
        "No se pudo enviar el formulario: Intenta de nuevo",
        err.message,
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className=" font-bni flex min-h-screen w-full flex-col lg:flex-row bg-slate-50">
      {/* Left Side - Hero Section */}
      <div
        className="relative hidden w-full items-center justify-center bg-cover bg-center lg:flex lg:w-1/2"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAyBNxKV4Kd561nK9idfnAEv800wgdDMbTPOVHXdmTWH8P9TLwrp3oeMZa3b17K2k68pdjf4gJvvZbzZtyWPsPAKKBwNtimuEC-IydmYOxphIQiFLqNHCiSITf-kTHw0SXwNAL0kbXpH3j4_eXS0iEegeRIZoaYrzRJeQpzkmGEvKAYRRyjfxYeswVveB8l_1nSMPLdL0dKmDkIjyyU2_WlvPmnbIUJhACaFllp4XMPGgTDOGhJysR-_d1XstaVDhNkrayqWRDZYrU")',
        }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/88 to-red-600/40"></div>
        <div className="relative z-10 flex flex-col gap-8 px-12 py-20 text-white max-w-xl">
          <div className="flex items-center gap-6">
            <img
              alt="BNI Logo"
              className="h-16 w-auto"
              src="/bni-logo-transparent.png"
            />
            <div className="h-12 w-[2px] bg-white/40"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter leading-none">
                YUCATÁN
              </span>
              <span className="text-[10px] tracking-[0.2em] font-bold opacity-80 uppercase mt-1">
                Región Sureste
              </span>
            </div>
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight lg:text-6xl mt-4">
            {registerType == "invitado"
              ? "Bienvenido a"
              : "Bienvenido de nuevo a"}{" "}
            BNI Yucatán
          </h1>
          <p className="text-lg font-light leading-relaxed opacity-90">
            Tu camino hacia el éxito profesional{" "}
            {registerType == "invitado"
              ? "comienza aquí. Únete a la red de networking más grande del mundo y empieza a transformar "
              : "sigue aquí. Continúa en la red de networking más grande del mundo y sigue transformando "}
            la forma en que el mundo hace negocios.
          </p>
          <div className="mt-4 flex flex-col gap-5">
            {[
              "Onboarding personalizado",
              "Acceso a red global de contactos",
              "Capacitación continua de alto nivel",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600/20 backdrop-blur-sm">
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-base font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-12 z-10 text-xs text-white/60">
          © 2025 BNI Global LLC. All Rights Reserved. All company names, product
          names logos included here may be registered trademarks or service
          marks of their respective owners.
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="flex w-full flex-col bg-white lg:w-1/2">
        {/* Mobile Header */}
        <header className="flex items-center justify-between border-b border-slate-100 px-6 py-4 lg:hidden">
          <div className="flex items-center gap-3">
            <img
              alt="BNI Logo"
              className="h-8 w-auto"
              src="/bni-logo-transparent.png"
            />
            <div className="h-6 w-[1px] bg-slate-200"></div>
            <h2 className="text-lg font-bold text-slate-900">Yucatán</h2>
          </div>
        </header>

        {/* Form Content */}
        <div className="flex flex-1 flex-col justify-center px-8 py-12 sm:px-16 lg:px-24">
          <div className="mb-10 flex flex-col gap-4">
            <div className="hidden lg:block mb-6">
              <img
                alt="BNI Logo"
                className="h-18 w-auto"
                src="/bni-logo-transparent.png"
              />
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
              Registro{" "}
              {registerType == "invitado" ? "de invitados" : "de renovaciones"}
            </h2>
            <p className="text-slate-500">
              Por favor, completa los campos a continuación{" "}
              {registerType == "invitado"
                ? "para registrarte como invitado"
                : "para continuar con tu renovación"}
              .
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Nombre y apellido */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">
                  Nombre
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
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    placeholder="Ej. Juan"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">
                  Apellido
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
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    placeholder="Ej. Peréz García"
                  />
                </div>
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">
                  Correo Electrónico
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
                    placeholder="juan.perez@bni.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">
                  Teléfono
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    placeholder="+52 999 000 0000"
                  />
                </div>
              </div>
            </div>

            {/* Giro y Capitulo */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">
                  Giro
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
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <input
                    type="text"
                    name="giro"
                    value={formData.giro}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    placeholder="Ej. Dentista"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">
                  Capitulo
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <select
                    name="capitulo"
                    value={formData.capitulo}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  >
                    <option value="">Selecciona el Capitulo</option>
                    <option value="KUKULKAN">KUKULKAN</option>
                    <option value="MAYAB">MAYAB</option>
                    <option value="BALAMKU">BALAMKU</option>
                    <option value="KINICH">KINICH</option>
                    <option value="PAAJTAL">PAAJTAL</option>
                    <option value="SAYAB">SAYAB</option>
                    <option value="SAASIL">SAASIL</option>
                    <option value="YA'ABKUN">YA'ABKUN</option>
                    <option value="YA'AXCHE">YA'AXCHE</option>
                    <option value="YUM KAAX">YUM KAAX</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Select period of membership */}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">
                  Por cuanto tiempo te gustaría que{" "}
                  {registerType == "invitado" ? "dure" : "continúe"} tu
                  experiencia?
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <select
                    name="periodo"
                    value={formData.periodo}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  >
                    <option value="">Por cuanto tiempo?</option>
                    <option value="1 año">1 año</option>
                    <option value="2 años">2 años</option>
                    <option value="5 años">5 años</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            {/* <div className="flex items-start gap-3 pt-2">
              <div className="flex h-5 items-center">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-slate-300 text-red-600 focus:ring-red-600"
                  id="terms"
                />
              </div>
              <label
                className="text-xs leading-normal text-slate-500"
                htmlFor="terms"
              >
                Acepto el{" "}
                <a
                  className="text-red-600 font-medium hover:underline"
                  href="#"
                >
                  Aviso de Privacidad
                </a>{" "}
                y los términos de uso corporativos para el manejo de mi
                información laboral.
              </label>
            </div> */}

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                disabled={loading}
                onClick={handleSubmit}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-4 px-6 text-base font-bold text-white shadow-lg shadow-red-600/25 transition-all hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-xl focus:ring-4 focus:ring-red-600/30 disabled:opacity-50"
              >
                {loading && <Spinner />}
                {loading
                  ? "Enviando…"
                  : registerType === "invitado"
                    ? "Completar Registro"
                    : "Solicitud de Renovación"}
              </button>
            </div>
            {/* Desktop Bug Report */}
            {/* <div className="mt-4 hidden lg:flex justify-end">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="text-sm text-slate-400 hover:text-red-600 transition-colors underline-offset-4 hover:underline"
              >
                ¿Encontraste un problema?
              </button>
            </div> */}
            {/* Spinner */}
            {showToast && (
              <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl bg-green-600 px-5 py-3 text-white shadow-lg animate-fade-in">
                <svg
                  className="h-6 w-6"
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
                <span>Formulario enviado</span>
              </div>
            )}
            {error && (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01M12 5a7 7 0 110 14a7 7 0 010-14z"
                  />
                </svg>
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Footer */}
        <footer className="mt-auto border-t border-slate-100 p-6 lg:hidden">
          {/* Report Bug Mobile Button */}
          {/* <div className="m-5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 hover:-translate-y-0.5 transition-all"
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
          </div> */}

          <p className="text-center text-xs text-slate-400">
            © 2025 BNI Global LLC. All Rights Reserved. All company names,
            product names logos included here may be registered trademarks or
            service marks of their respective owners.
          </p>
        </footer>
        <BugReportModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}
