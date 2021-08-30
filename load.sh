#!/usr/bin/env bash

case "$(uname -s)" in
  # borrowed from https://stackoverflow.com/questions/3466166/how-to-check-if-running-in-cygwin-mac-or-linux#27776822
  Darwin)
    cp -R ~/Library/Application\ Support/Adventure\ Land/autosync5337696552091648/adventureland/* .
    ;;

  CYGWIN*|MINGW32*|MSYS*|MINGW*)
    cp -R /c/Users/Sonne/AppData/Roaming/Adventure\ Land/autosync5337696552091648/adventureland/* .
    ;;

esac
