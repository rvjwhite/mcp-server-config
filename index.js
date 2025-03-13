// Simple script to start the MCP server
import { createServer } from '@modelcontextprotocol/server-filesystem';

try {
  console.log('Starting MCP server...');
  const server = createServer();
  console.log('MCP server started successfully!');
} catch (error) {
  console.error('Error starting MCP server:', error);
}