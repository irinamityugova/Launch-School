hash = {
  car: {
    type:	'sedan',
    color: 'blue',
    year: '2003',
  },

truck: {
    type:	'truck',
    color: 'red',
    year: '1998',
  },

}

p arr = hash.map { |car, details| details.map { |key, value| [key, value]} }