import { formatDistanceToNow } from 'date-fns';
import { camelCase } from "lodash";


const date = '1996-09-13 10:00:00';
document.body.textContent = `${formatDistanceToNow(new Date(date))} ago`;

console.log(camelCase('hello world'));