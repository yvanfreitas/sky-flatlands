#!/bin/bash

model_controllers_dir="../../modelControllers/props"
props_dir="/Users/yvan.freitas/Documents/personal-projects/vr-test/public/domain/game/elements/props"

for file in $model_controllers_dir/*.js
do
  class_name=$(basename "$file" .js)
  props_class_file="$props_dir/$class_name.js"

  echo "import Element from '../element.js';" > "$props_class_file"
  echo "import { ${class_name}Controller } from '$model_controllers_dir/$class_name.js';" >> "$props_class_file"
  echo "import Kinds from '../enuns/kinds.js';" >> "$props_class_file"
  echo "" >> "$props_class_file"
  echo "export default class $class_name extends Element {" >> "$props_class_file"
  echo "  constructor() {" >> "$props_class_file"
  echo "    super();" >> "$props_class_file"
  echo "    this.kind = Kinds.Prop;" >> "$props_class_file"
  echo "    this.modelController = new ${class_name}Controller(this);" >> "$props_class_file"
  echo "    this.patchBlocker = false;" >> "$props_class_file"
  echo "  }" >> "$props_class_file"
  echo "}" >> "$props_class_file"
done