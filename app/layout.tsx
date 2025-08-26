import MainHeader from '@/components/MainHeader/MainHeader';
import './globals.css';

type RootLayoutProps = {
  children: React.ReactNode,
}

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
    
        <MainHeader />
        {children}
        
      </body>
    </html>
  );
}