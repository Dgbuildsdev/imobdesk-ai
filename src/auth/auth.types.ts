export interface JwtPayload {
  sub: string;
  organizationId: string;
  role: string;
  email: string;
}

export interface AuthUser {
  id: string;
  organizationId: string;
  role: string;
  email: string;
}
