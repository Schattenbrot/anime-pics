import Head from 'next/head';
import { useEffect, useState } from 'react';

import { useFetch } from '../hooks/useFetch';

export default function Home() {
  const [url, setUrl] = useState('');
  const [source, setSource] = useState('');

  useEffect(async () => {
    newImageHandler();
  }, []);

  const newImageHandler = async () => {
    const result = await useFetch((data) => {
      return { url: data.url, source: data.source_url };
    });

    setUrl(result.url);
    setSource(result.source);
  };

  const forwardToSourceHandler = () => {
    window.location.assign(source);
  };

  return (
    <div>
      <Head>
        <title>Nekos Best App</title>
        <meta
          name='description'
          content='Nekos Best App based on nekos.best API'
        />
      </Head>

      <main>
        <div>
          <img src={url} alt='' onClick={forwardToSourceHandler} />
        </div>
        <div>
          <button onClick={newImageHandler}>New Image</button>
        </div>
      </main>
    </div>
  );
}
