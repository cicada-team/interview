var inputs = [
    {id: 1},
    {id: 2, before: 1},
    {id: 3, after: 1},
    {id: 5, first: true},
    {id: 6, last: true},
    {id: 7, after: 8},
    {id: 8},
    {id: 9},
]

var len = inputs.length;

function before(inputs, i, b) {
  //TODO
}
function after(inputs, i, b) {
  //TODO
}

function valid(inputs) {
  for (var i in inputs) {
    if (inputs[i].before) {
      if (!before(inputs, i, inputs[i].before)) {
        return false;
      }
    } else if (inputs[i].after) {
      if (!after(inputs, i, inputs[i].after)) {
        return false;
      }
    } else if (inputs[i].first) {
      if (i != 0) {
        return false;
      }
    } else if (inputs[i].last) {
      if (i != inputs.length - 1) {
        return false;
      }
    }
  }
  return true;
}

function search(in, cur_index, start_index) {
  if (start_index >= inputs.length) {
    if (valid(in)) {
      console.log(in);
    }
    return;
  }
  int s = [];
  for (var i in in) {
    s.push(in[i]);
  }
  s.push(inputs[start_index]);

  for (var i = 0; i < len; ++i) {
    search(s, cur_index + 1, i);
  }
}
