// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="text-sm text-center py-6 border-t border-gray-200 dark:border-gray-700">
      <p className="mb-2">
        © {new Date().getFullYear()} <strong>Fabio Hernández</strong> — All rights reserved.
      </p>
      <div className="flex justify-center gap-4 text-blue-600 dark:text-blue-400">
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:tuemail@correo.com">Email</a>
      </div>
    </footer>
  );
}
