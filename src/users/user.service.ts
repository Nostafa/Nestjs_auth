import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { v4 as uuidv4 } from 'uuid';
import { User } from './schemas/user.schema';
import { UserUpdateDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.userRepository.findOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.findAll({});
  }

  async createUser(name: string, phone: number, email: string): Promise<User> {
    return this.userRepository.create({ userId: uuidv4(), name, email, phone });
  }

  async updateUser(userId: string, userUpdates: UserUpdateDto): Promise<User> {
    return this.userRepository.findOneAndUpdate({ userId }, userUpdates);
  }

  async deleteUser(id: string): Promise<User> {
    return this.userRepository.deleteOne(id);
  }
}
