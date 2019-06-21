const SwaggerUI = require('swagger-ui')

SwaggerUI({
  dom_id: '#container',
  url: '/swagger.yaml',
  displayOperationId: true,
  deepLinking: true
})
