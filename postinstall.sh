#!/bin/bash

bindir="$(dirname "$(readlink -fm "$0")")"


# This is a WORKAROUND for https://github.com/strapi/gatsby-source-strapi/pull/118/
echo "Running workaround for https://github.com/strapi/gatsby-source-strapi/pull/118/"

cd "${bindir}"
cd './plugins/gatsby-source-strapi'
npm install
cd "${bindir}"
