#!/bin/bash

read -p "Digite a primeira palavra: " word1
read -p "Digite a segunda palavra: " word2

for file in ./*
do
  if [[ "$file" == *"$word1"* ]] && [[ "$file" == *"$word2"* ]]; then
    echo "$file"
    mv "$file" /Users/yvan.freitas/Documents/personal-projects/vr-test/public/assets/models/props
  fi
done