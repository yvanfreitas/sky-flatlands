#!/bin/bash

for file in ./*
do
  if [ "${file##*.}" = "obj" ]; then
    obj2gltf -i "$file" -o "${file%.*}.gltf"
  fi
done