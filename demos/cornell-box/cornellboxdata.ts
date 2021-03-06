
// http://www.graphics.cornell.edu/online/box/data.html

export let vertices = new Float32Array([
    // room
    -1.000000, -1.000000, -1.000000, -1.000000, -1.000000, +1.000000,
    -1.000000, +1.000000, -1.000000, -1.000000, +1.000000, +1.000000,
    +0.988489, -1.000000, -1.000000, +0.976978, -1.000000, +1.000000,
    +1.000000, +1.000000, -1.000000, +1.000000, +1.000000, +1.000000,
    // short block
    +0.043165, -1.000000, -0.592275, +0.043165, -0.398688, -0.592275,
    -0.136691, -1.000000, -0.027182, -0.136691, -0.398688, -0.027182,
    -0.705036, -1.000000, -0.195279, -0.705036, -0.398688, -0.195279,
    -0.532374, -1.000000, -0.767525, -0.532374, -0.398688, -0.767525,
    // tall block
    +0.521583, -1.000000, -0.116595, +0.521583, +0.202624, -0.116595,
    +0.697842, -1.000000, +0.452074, +0.697842, +0.202624, +0.452074,
    +0.129496, -1.000000, +0.630901, +0.129496, +0.202624, +0.630901,
    -0.046763, -1.000000, +0.058655, -0.046763, +0.202624, +0.058655,
]);


/**
 * Indices per line: [ v0, v1, v2, color ]
 */
export let indices = new Uint8Array([
    // room ceiling
    6, 7, 3, 1,
    6, 3, 2, 1,
    // room floor
    4, 0, 1, 1,
    4, 1, 5, 1,
    // room front wall
    // 6, 2, 0, 1,
    // 6, 0, 4, 1,
    // room back wall
    5, 1, 3, 1,
    5, 3, 7, 1,
    // room right wall
    1, 0, 2, 3,
    1, 2, 3, 3,
    // room left wall
    4, 5, 7, 2,
    4, 7, 6, 2,
    // short block
    15, 13, 11, 1,
    15, 11, 9, 1,
    8, 9, 11, 1,
    8, 11, 10, 1,
    14, 15, 9, 1,
    14, 9, 8, 1,
    12, 13, 15, 1,
    12, 15, 14, 1,
    10, 11, 13, 1,
    10, 13, 12, 1,
    // tall block
    23, 21, 19, 1,
    23, 19, 17, 1,
    16, 17, 19, 1,
    16, 19, 18, 1,
    22, 23, 17, 1,
    22, 17, 16, 1,
    20, 21, 23, 1,
    20, 23, 22, 1,
    18, 19, 21, 1,
    18, 21, 20, 1,
]);


export let colors = new Float32Array([
    0.0000, 0.0000, 0.0000,  // 0 black
    0.7295, 0.7355, 0.7290,  // 1 white
    0.6110, 0.0555, 0.0620,  // 2 red
    0.1170, 0.4125, 0.1150,  // 3 green
    0.0620, 0.0555, 0.6110,  // 4 blue
]);
