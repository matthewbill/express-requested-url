describe('exports', () => {
  test('exports work correctly', () => {

      const { requestedUrl } = require('../src/requested-url.js');
      expect(requestedUrl).toBeDefined();
      
  });
});
