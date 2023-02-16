function inArray( a, b, r = []) {

  a.forEach(e => {
    b.forEach(f => {
      if (f.includes(e) && !r.includes(e)) r.push(e); // no duplicates
    })
  })

  r.sort()
  return r

}