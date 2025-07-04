"use client";
import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensaje enviado (simulado)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-4 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        aria-label="Formulario de contacto"
      >
        <label className="flex flex-col text-left">
          <span className="mb-1 font-medium">Nombre</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded border dark:bg-gray-800 dark:border-gray-600"
          />
        </label>

        <label className="flex flex-col text-left">
          <span className="mb-1 font-medium">Correo</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded border dark:bg-gray-800 dark:border-gray-600"
          />
        </label>

        <label className="flex flex-col text-left">
          <span className="mb-1 font-medium">Mensaje</span>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded border dark:bg-gray-800 dark:border-gray-600"
          />
        </label>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}
