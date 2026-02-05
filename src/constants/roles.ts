export const Roles = {
  USER: "USER",
  ADMIN: "ADMIN",
  PROVIDER: "PROVIDER",
} as const;

export type Role = typeof Roles[keyof typeof Roles];

