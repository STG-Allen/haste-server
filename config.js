{

  "host": "0.0.0.0",
  "port": 80,

  "keyLength": 7,

  "maxLength": 40000000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "rateLimits": {
    "categories": {
      "normal": {
        "totalRequests": 100,
        "every": 120000
      }
    }
  },

  "storage": {
    "type": "file"
  },

  "documents": {
    "about": "./about.md"
  }
}
