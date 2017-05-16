var input_raw = "Allegoric Alaskans;Blithering Badgers;win\n"+
"Devastating Donkeys;Courageous Californians;draw\n"+
"Devastating Donkeys;Allegoric Alaskans;win\n"+
"Courageous Californians;Blithering Badgers;loss\n"+
"Blithering Badgers;Devastating Donkeys;loss\n"+
"Allegoric Alaskans;Courageous Californians;win";

var inputs = input_raw.split('\n');
var S = {
  win: 3,
  loss: 0,
  draw: 1,
};
var S2 = {
  win: 0,
  loss: 3,
  draw: 1,
};

var status_to_index = {
  win: 1,
  loss: 3,
  draw: 2,
};
var table = {};
for (var i in inputs) {
  var A = inputs[i].split(';')[0];
  var B = inputs[i].split(';')[1];
  var status = inputs[i].split(';')[2];
  if (!table[A])
    table[A] = [0, 0, 0, 0, 0];
  if (!table[B])
    table[B] = [0, 0, 0, 0, 0];

  table[A][0] ++;
  table[B][0] ++;

  table[A][status_to_index[status]]++;
  table[B][status_to_index[status]]++;

  table[A][4] += S[status];
  table[B][4] += S2[status];
}
