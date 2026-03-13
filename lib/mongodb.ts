import mongoose, { type ConnectOptions } from "mongoose";

/**
 * Cached Mongoose connection across hot-reloads in development.
 * This prevents creating a new connection on every request.
 */
type MongooseConnection = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var _mongoose: MongooseConnection | undefined;
}

// Use a global cache in development to avoid exhausting connections.
const cached: MongooseConnection = global._mongoose ?? {
  conn: null,
  promise: null,
};

if (!global._mongoose) {
  global._mongoose = cached;
}

const MONGODB_URI = process.env.MONGODB_URI;

/**
 * Establishes (or reuses) a single Mongoose connection.
 * Call this in API routes, server components, or route handlers
 * before performing any database operations.
 */
export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    if (!MONGODB_URI) {
      // Fail fast at startup if the database URI is missing.
      throw new Error(
        "MONGODB_URI is not set. Please define it in your environment variables.",
      );
    }
    const options: ConnectOptions = {
      bufferCommands: false,
      maxPoolSize: 10, // Reasonable default pool size for production workloads.
    };

    cached.promise = mongoose.connect(MONGODB_URI!, options);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
