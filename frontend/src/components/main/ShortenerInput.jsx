import { useEffect, useRef, useState } from 'react';
import ShortenerOutput from './ShortenerOutput';
import useLocalStorage from '../../hooks/useLocalStorage';
import { createLinks } from '../../functions/linkHandler';

const ShortenerInput = () => {
  const [hasError, setHasError] = useState({
    message: '',
    error: false,
  });
  const [output, setOutput] = useState([]);

  const input = useRef('');

  const [localStorage, setLocalStorage] = useLocalStorage('links', []);

  useEffect(() => {
    setOutput(localStorage);
  }, [localStorage]);

  const handleLink = async (e) => {
    e.preventDefault();
    setHasError({
      message: '',
      error: false,
    });

    // check if empty
    if (!input.current.value || input.current.value === '') {
      setHasError({
        message: 'Please add a link',
        error: true,
      });
      return;
    }

    const hasSuccess = await createLinks(
      input.current.value,
      setOutput,
      setLocalStorage,
      localStorage
    );

    if (!hasSuccess) {
      setHasError({
        message: 'Invalid URL',
        error: true,
      });
    }
  };

  return (
    <section className="shortener">
      <article>
        <form onSubmit={handleLink}>
          <label htmlFor="link"></label>
          <input
            type="text"
            placeholder="Shorten a link here..."
            name="link"
            id="link"
            ref={input}
            className={`${hasError.error && 'error'}`}
          />
          {hasError.error && <p>{hasError.message}</p>}

          <button>Shorten It!</button>
        </form>
      </article>
      <ShortenerOutput output={output} />

      <article>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </article>
    </section>
  );
};

export default ShortenerInput;
