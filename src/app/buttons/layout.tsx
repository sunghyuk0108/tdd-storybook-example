import React from 'react';
// import ActionButtonPage from '@/app/buttons/@action/page';
// import FieldTextButtonPage from '@/app/buttons/@fieldTextButton/page';

function ButtonLayout({
  children,
  action,
  fieldTextButton,
}: {
  children: React.ReactNode;
  action: React.ReactNode;
  fieldTextButton: React.ReactNode;
}) {
  return (
    <>
      <header>헤더 영역임</header>
      <main>{children}</main>
      <section>{action}</section>
      <section>{fieldTextButton}</section>
    </>
  );
}

export default ButtonLayout;
