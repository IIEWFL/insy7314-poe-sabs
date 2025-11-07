// Test setup file
import mongoose from 'mongoose';

// Increase timeout for database operations
(jest as any).setTimeout(30000);

// Setup test database connection
beforeAll(async () => {
  // Use test database
  const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
  await mongoose.connect(mongoUri);
});

// Clean up after all tests
afterAll(async () => {
  try {
    if (mongoose.connection.readyState === 1 && mongoose.connection.db) {
      await mongoose.connection.db.dropDatabase();
    }
  } catch (error) {
    console.warn('Failed to drop test database:', error);
  }
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.warn('Failed to disconnect from MongoDB:', error);
  }
});

// Clean up after each test
afterEach(async () => {
  // Clear all collections
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
});
