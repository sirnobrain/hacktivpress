'use strict'

module.exports = (status, msg, payload, err) => {
  return {
    status: status,
    msg: status === 200 ? msg = `Success: ${msg}` : `Error: ${msg}`,
    payload: payload,
    err: err
  }
}