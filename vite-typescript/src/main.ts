import { forEach } from "lodash";
import isBooleanFn from "is-boolean-object";
export const isBoolean = (value: any): value is Boolean => isBooleanFn(value);

const arr = [];
forEach(arr, (ele) => {
  console.log("ele", ele);
});

console.log("boolean", isBoolean(2));
