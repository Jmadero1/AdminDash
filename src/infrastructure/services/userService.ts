import type { User } from "@domain/entities/User"

export const userService = {
  async fetchAll(): Promise<User[]> {
    return [
      { id: '1', name: 'Jesus', email: 'jesus@email.com', role: 'admin', active: true },

    ]
  }
}