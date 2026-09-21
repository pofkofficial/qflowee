import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Q-Flow API Documentation',
      version: '1.0.0',
      description: 'REST API documentation for Q-Flow Queue Management System',
    },
    servers: [
      {
        url: process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}/api/v1`
          : 'http://localhost:5000/api/v1',
        description: process.env.VERCEL_URL ? 'Production Server' : 'Development Server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  // Include both .ts and .js files using process.cwd()
  apis: [
    path.join(process.cwd(), 'src/routes/**/*.ts'),
    path.join(process.cwd(), 'src/routes/**/*.js'),
    path.join(process.cwd(), 'dist/routes/**/*.js'),
    path.join(process.cwd(), 'routes/**/*.ts'),
    path.join(process.cwd(), 'routes/**/*.js'),
  ],
};

export const swaggerSpec = swaggerJSDoc(options);