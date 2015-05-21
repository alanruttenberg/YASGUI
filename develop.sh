#!/bin/sh
export PATH=/usr/local/bin:$PATH
cd ..YASR
gulp dev &
cd ../YASQE
gulp dev &
cd ../YASGUI
gulp serve &

