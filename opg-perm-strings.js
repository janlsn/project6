"use strict";

function perms(ips)
{
  let arr = [];
  let s = '';
  let c = 4, c2 = 4, c3 = 4, x = 0, y = 1;

  for (let i = 0; i < 16; i++)
  {
    for (let j = 0; j < 4; j++)
    {
	  if (c === j)
	  {
	    s += ips.charAt(y);
	  }
	  else if (c === j || j === c2 || c3 === j)
	  {
	    s += ips.charAt(y);
	  }
	  else
	  {
	    s += ips.charAt(x);
      }
    }
    arr.push(s);
    s = '';
    c--;
    if (c === 0)
    {
      c = 3;
	  c2 = 3;
    }
    c2--;
    if (c2 === 0)
    {
	  c2 = 1;
	  c = 3;
    }
    if (i === 6 || i === 14)
    {
      c3 = 2;
    }
    if (i === 7)
    {
      x = 1;
	  y = 0;
	  c = 4;
	  c2 = 4;
	  c3 = 4;
    }
  }
  arr.sort();
  return arr;
}

let str = 'ab';
console.log(perms(str));
