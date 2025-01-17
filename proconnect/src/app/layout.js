import '@/app/globals.css';
import { ThemeProvider } from "./components/Theme-provider";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ProConnect - Conectando Profissionais a Clientes',
  description: 'Encontre profissionais qualificados ou ofereça seus serviços de forma simples e direta',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}