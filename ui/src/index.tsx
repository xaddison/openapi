import './style.css';
import React, { Component } from 'react'

const SwaggerUI = require('swagger-ui');
const swagger = require('../../swagger.yaml');

type AugmentingLayoutP = {
  getComponent(comp: string, nose: boolean): any
}

class AugmentingLayout extends Component<AugmentingLayoutP, {}> {
  render() {
    const { getComponent } = this.props;
    const BaseLayout = getComponent("BaseLayout", true)

    return (
      <div>
        <div className="custom-header">
          <h1>ZEIT OpenAPI Spec</h1>
        </div>
        <BaseLayout />
      </div>
    );
  }
}

const AugmentingLayoutPlugin = () => {
  return {
    components: {
      AugmentingLayout: AugmentingLayout
    }
  }
}

SwaggerUI({
  deepLinking: true,
  displayOperationId: true,
  dom_id: '#container',
  layout: "AugmentingLayout",
  plugins: [AugmentingLayoutPlugin],
  spec: swagger,
})
