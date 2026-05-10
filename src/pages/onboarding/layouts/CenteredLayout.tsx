import type React from 'react';

const CenteredLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="flex flex-col items-center px-16 py-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default CenteredLayout;
