import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CopyButton from './CopyButton';

const ShortenerOutput = ({ output }) => {
  const handleCopyToClipBoard = (value) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <>
      (
      {output &&
        output.length > 0 &&
        output.map((out) => {
          return (
            <article className="url-output" key={out.id}>
              <div className="links">
                <Link to={out.origUrl} target="_blank">
                  {out.origUrl}
                </Link>
                <Link to={out.shortUrl} target="_blank">
                  {out.shortUrl}
                </Link>
              </div>

              <CopyButton
                onHandleCopyToClipBoard={handleCopyToClipBoard}
                linkValue={out.shortUrl}
              />
            </article>
          );
        })}
      )
    </>
  );
};

ShortenerOutput.propTypes = {
  output: PropTypes.array,
};

export default ShortenerOutput;
