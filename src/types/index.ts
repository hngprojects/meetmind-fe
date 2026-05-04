/**
 * Global TypeScript types and interfaces.
 *
 * Keep this file for truly shared types only.
 * Feature-specific types should be co-located with their feature under `src/features/`.
 */

/** Standard API response envelope */
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

/** Standard paginated response */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/** Auth token payload */
export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
}
