import React from 'react';
import Header from '#/src/components/Header';



export async function generateStaticParams() {
  const posts = [
    '3841e3cbc45d52c47bc2f1b7b0ad4eb9',
    'e04feafe1a5bd54c7a155d7a3fb1b938',
    '85bcfe3432d61a79acd18debb0070542',
    '0893a8a5f66d61fa58efdb2e4323169b',
    '2e77c0d8abe9109e539699a5d085c8fd',
    'cf5f47834076c26a598c70b91fd37e39',
    'e04feafe1a5bd54c7a155d7a3fb1b938',
    '0893a8a5f66d61fa58efdb2e4323169b',
    'bf3ef67aced3229056ab4562763518a8',
  ];

  return posts.map((post) => ({
    id: post,
  }));
}

export default function ElementLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  console.log(params);
  return (
    <>
      <Header title={params.id} details={params.id} />
      <div>{children}</div>
    </>
  );
}
