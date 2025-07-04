// src/app/layout.tsx
import '@/styles/globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Next Portfolio',
  description: 'Renewed project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-black dark:text-white">
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
