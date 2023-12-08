import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

let copyMessageTimer = 5000;

const CopyButton = ({ onHandleCopyToClipBoard, linkValue }) => {
  const [copied, setCopied] = useState(false);
  let tempCopied = useMemo(() => copied, [copied]);

  const handleCopyToolTip = () => {
    setCopied(true);
    if (!tempCopied) {
      console.log('first');
      setTimeout(() => {
        setCopied(false);
      }, copyMessageTimer);
    }
  };

  return (
    <button
      className="copy"
      onClick={() => {
        onHandleCopyToClipBoard(linkValue);
        handleCopyToolTip();
      }}
    >
      Copy
      {copied && <span>COPIED</span>}
    </button>
  );
};

CopyButton.propTypes = {
  onHandleCopyToClipBoard: PropTypes.func,
  linkValue: PropTypes.string,
};

export default CopyButton;
