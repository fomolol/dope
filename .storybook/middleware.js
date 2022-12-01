/**
 * @file middleware.js
 * @see https://github.com/zeit/next.js/issues/1788
 */

const express = require('express')
const path = require('path')

// Add paths that are auto
module.exports = (router) => {
  // router.use('/public', express.static(path.join(__dirname, '../public')))
  // router.use('/img', express.static(path.join(__dirname, '../public/img')))
  // router.use('/video', express.static(path.join(__dirname, '../public/video')));
  // router.use('/fonts', express.static(path.join(__dirname, '../public/fonts')))
  // router.use('/share', express.static(path.join(__dirname, '../public/share')));
}
