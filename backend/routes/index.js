import express from 'express';
import Url from '../models/url.js';
const router = express.Router();

router.get('/:urldID', async (req, res) => {
  try {
    const _url = await Url.findOne({ urlId: req.params.urldID });
    if (_url) {
      await Url.updateOne(
        {
          urlId: req.params.urldId,
        },
        { $inc: { clicks: 1 } }
      );

      return res.redirect(_url.origUrl);
    } else {
      res.status(404).json('Not found');
    }
  } catch (err) {
    res.status(500).json('Server Error');
  }
});

export default router;
