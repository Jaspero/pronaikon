import * as functions from 'firebase-functions';
import {unescape} from 'querystring';
import {SHARED_CONFIG} from 'definitions';

/**
 * Redirects the sender to the continueUrl
 * from the query param
 */
export const actionController = functions
  .region(SHARED_CONFIG.cloudRegion)
  .https
  .onRequest((req, res) => {
    res.redirect(
      unescape(req.query.continueUrl as string) +
      `?` + Object.entries(req.query)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')
    )
  });
