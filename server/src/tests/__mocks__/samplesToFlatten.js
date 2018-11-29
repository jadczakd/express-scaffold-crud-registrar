export const flatLevel1 = {
  a: 'terrific',
  b: 'test'
}
export const flatLevel2 = {
  a: 'terrific',
  b: 'test',
  c: {
    d: 'amazing',
    e: 'testable'
  }
}
export const flatLevel3 = {
  a: 'terrific',
  b: 'test',
  c: {
    d: 'amazing',
    e: 'testable',
    f: {
      g: 'bazinga',
      h: 'tor'
    }
  }
}

export const flatLevel1Expected = {
  a: 'terrific',
  b: 'test'
}
export const flatLevel2Expected = {
  a: 'terrific',
  b: 'test',
  'c.d': 'amazing',
  'c.e': 'testable'
}
export const flatLevel3Expected = {
  a: 'terrific',
  b: 'test',
  'c.d': 'amazing',
  'c.e': 'testable',
  'c.f.g': 'bazinga',
  'c.f.h': 'tor'
}
export const flateArrayOfObjects = {
  a: 'terrific',
  b: 'test',
  aa: [{
    bb: 'confusing',
    cc: 'confucius'
  },
  {
    dd: 'confuses',
    ee: 'confused',
    ff: 'confucionists'
  },
  'turtles',
  'are great'
  ],
  c: {
    d: 'amazing',
    e: 'testable',
    cc: [{
      bb: 'confusing',
      cc: 'confucius'
    },
    {
      dd: 'confuses',
      ee: 'confused',
      ff: 'confucionists'
    },
    'turtles',
    'are great'],
    f: {
      g: 'bazinga',
      h: 'tor',
      ff: [{
        bb: 'confusing',
        cc: 'confucius'
      },
      {
        dd: 'confuses',
        ee: 'confused',
        ff: 'confucionists'
      }]
    }
  }
}
export const flateArrayOfObjectsExpected = {
  a: 'terrific',
  b: 'test',
  'aa.0.bb': 'confusing',
  'aa.0.cc': 'confucius',
  'aa.1.dd': 'confuses',
  'aa.1.ee': 'confused',
  'aa.1.ff': 'confucionists',
  'aa.2': 'turtles',
  'aa.3': 'are great',
  'c.d': 'amazing',
  'c.e': 'testable',
  'c.cc.0.bb': 'confusing',
  'c.cc.0.cc': 'confucius',
  'c.cc.1.dd': 'confuses',
  'c.cc.1.ee': 'confused',
  'c.cc.1.ff': 'confucionists',
  'c.cc.2': 'turtles',
  'c.cc.3': 'are great',
  'c.f.g': 'bazinga',
  'c.f.h': 'tor',
  'c.f.ff.0.bb': 'confusing',
  'c.f.ff.0.cc': 'confucius',
  'c.f.ff.1.dd': 'confuses',
  'c.f.ff.1.ee': 'confused',
  'c.f.ff.1.ff': 'confucionists'
}
